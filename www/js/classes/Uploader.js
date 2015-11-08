var Uploader,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  slice = [].slice;

Uploader = (function() {
  function Uploader(options) {
    this.queue = bind(this.queue, this);
    this.log = bind(this.log, this);
    this.event = bind(this.event, this);
    var default_options;
    default_options = {
      onEvent: function() {
        var args, name;
        name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      },
      onUploadProgress: function() {},
      onUploadComplete: function() {},
      onUploadFail: function() {},
      onUploadStart: function() {},
      debug: true,
      max_uploads: 5
    };
    this.options = angular.extend(default_options, options);
    this.is_syncing = false;
    this.uploading_count = 0;
    this.uploads = [];
  }

  Uploader.prototype.event = function() {
    var args, name;
    name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    this.log("event", name, args);
    this.options[name].apply(this, args);
    return this.options.onEvent(name, args);
  };

  Uploader.prototype.log = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (!this.options.debug) {
      return;
    }
    return console.log.apply(args);
  };

  Uploader.prototype.queue = function(item) {
    this.uploads.push(item);
    this.uploading_count++;
    item.status = 'uploading';
    event('onUploadStart', item);
    return $http.get('http://api.fast-cast.net', {
      params: {
        slug: item.slug,
        type: item.type
      }
    }).then(((function(_this) {
      return function(response) {
        var ft, upload_options, url;
        item.progress = 10;
        url = response.data;
        ft = new FileTransfer;
        ft.onprogress = function(pe) {
          item.progress = pe.loaded / pe.total * 90 + 10;
          event('onUploadProgress', item);
          if (item.progress >= 100) {
            return setTimeout((function() {
              item.status = 'success';
              event('onUploadComplete', item);
              _this.uploading_count--;
              if (_this.uploading_count === 0) {
                return _this.is_syncing = false;
              }
            }), 1000);
          }
        };
        upload_options = new FileUploadOptions;
        upload_options.fileName = item.src;
        upload_options.mimeType = item.mime;
        upload_options.chunkedMode = false;
        upload_options.httpMethod = 'PUT';
        upload_options.headers = {
          'Content-Type': item.mime
        };
        return ft.upload(item.src, url, (function() {}), (function() {
          item.status = 'fail';
          return event('onUploadFailed', item);
        }), upload_options);
      };
    })(this)), options.failure);
  };

  return Uploader;

})();
