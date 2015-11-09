var UploadWorker,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  slice = [].slice;

UploadWorker = (function() {
  function UploadWorker(item, options) {
    var default_options;
    this.item = item;
    if (options == null) {
      options = {};
    }
    this.start = bind(this.start, this);
    this.failed = bind(this.failed, this);
    this.finished = bind(this.finished, this);
    this.progress = bind(this.progress, this);
    this.started = bind(this.started, this);
    this.event = bind(this.event, this);
    this.log = bind(this.log, this);
    default_options = {
      onStart: function() {},
      onSuccess: function() {},
      onFailure: function(err) {},
      onProgress: function(progress) {},
      onEvent: function() {
        var args, name;
        name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      },
      debug: true
    };
    this.options = angular.extend(default_options, options);
    this.upload_count = 0;
    this.log("Upload Worker started", this.item);
    setTimeout(this.start, 0);
  }

  UploadWorker.prototype.log = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (!this.options.debug) {
      return;
    }
    return console.log.apply(this, args);
  };

  UploadWorker.prototype.event = function() {
    var args, name;
    name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    this.log("event", name, args);
    this.options[name].apply(this, args);
    return this.options.onEvent(name, args);
  };

  UploadWorker.prototype.started = function(cb) {
    this.options.onStart = cb;
    return this;
  };

  UploadWorker.prototype.progress = function(cb) {
    this.options.onProgress = cb;
    return this;
  };

  UploadWorker.prototype.finished = function(cb) {
    this.options.onSuccess = cb;
    return this;
  };

  UploadWorker.prototype.failed = function(cb) {
    this.options.onFailure = cb;
    return this;
  };

  UploadWorker.prototype.start = function() {
    var $http;
    this.event('onStart');
    this.progress = 0;
    $http = angular.injector(["ng"]).get("$http");
    return $http.get('http://api.fast-cast.net', {
      params: {
        slug: this.item.slug,
        type: this.item.type
      }
    }).then(((function(_this) {
      return function(response) {
        var ft, upload_options, url;
        _this.item.progress = 10;
        _this.event('onProgress', _this.item.progress);
        url = response.data;
        ft = new FileTransfer;
        ft.onprogress = function(pe) {
          _this.item.progress = pe.loaded / pe.total * 90 + 10;
          return _this.event('onProgress', _this.item.progress);
        };
        upload_options = new FileUploadOptions;
        upload_options.fileName = _this.item.src;
        upload_options.mimeType = _this.item.mime;
        upload_options.chunkedMode = false;
        upload_options.httpMethod = 'PUT';
        upload_options.headers = {
          'Content-Type': _this.item.mime
        };
        return ft.upload(_this.item.src, url, (function() {
          return _this.event('onSuccess');
        }), (function(err) {
          return _this.event('onFailure', err);
        }), upload_options);
      };
    })(this)), (function(_this) {
      return function(err) {
        return _this.event('onFailure', err);
      };
    })(this));
  };

  return UploadWorker;

})();
