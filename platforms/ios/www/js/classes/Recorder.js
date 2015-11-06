var Recorder,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  slice = [].slice;

Recorder = (function() {
  function Recorder(fname, options) {
    var default_options;
    this.fname = fname;
    this.stop = bind(this.stop, this);
    this.play = bind(this.play, this);
    this.seek = bind(this.seek, this);
    this.step = bind(this.step, this);
    this.record = bind(this.record, this);
    this.event = bind(this.event, this);
    this.get_duration = bind(this.get_duration, this);
    this.new_media = bind(this.new_media, this);
    this.log = bind(this.log, this);
    default_options = {
      onScrubUpdate: function(ms) {},
      onDurationUpdate: function(ms) {},
      onRecordStart: function() {},
      onRecordStop: function() {},
      onAudioError: function() {},
      onPlayStart: function() {},
      onPlayStop: function() {},
      onEvent: function() {
        var args, name;
        name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      },
      debug: false
    };
    this.options = angular.extend(default_options, options);
    this.duration_ms = 0;
    this.scrub_point_ms = 0;
    this.stop();
  }

  Recorder.prototype.log = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (!this.options.debug) {
      return;
    }
    return console.apply('log', args);
  };

  Recorder.prototype.new_media = function(ready_cb, status_cb, error_cb) {
    var media, status;
    status = {};
    status[Media.MEDIA_NONE] = 'None';
    status[Media.MEDIA_STARTING] = 'Starting';
    status[Media.MEDIA_RUNNING] = 'Running';
    status[Media.MEDIA_PAUSED] = 'Paused';
    status[Media.MEDIA_STOPPED] = 'Stopped';
    media = new Media(this.fname, ((function(_this) {
      return function() {
        return _this.log("Successfully completed action ", _this.fname);
      };
    })(this)), ((function(_this) {
      return function(err) {
        _this.log('Audio Error: ' + err.code);
        _this.log(err);
        return error_cb(media, err);
      };
    })(this)), ((function(_this) {
      return function(stat) {
        _this.log("Media status", stat, status[stat]);
        return status_cb(media, stat);
      };
    })(this)));
    ready_cb(media);
    return media;
  };

  Recorder.prototype.get_duration = function(cb) {
    return this.new_media(((function(_this) {
      return function(media) {
        media.setVolume(0);
        return media.play();
      };
    })(this)), ((function(_this) {
      return function(media, status) {
        if (status === Media.MEDIA_RUNNING) {
          media.stop();
          _this.duration_ms = media.getDuration() * 1000;
          _this.event('onDurationUpdate', _this.duration_ms);
          if (cb) {
            cb(_this.duration_ms);
          }
        }
        if (status === Media.MEDIA_STOPPED) {
          return media.release();
        }
      };
    })(this)), ((function(_this) {
      return function(media, error) {};
    })(this)));
  };

  Recorder.prototype.event = function() {
    var args, name;
    name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    this.log("event", name, args);
    this.options[name].apply(this, args);
    return this.options.onEvent(name, args);
  };

  Recorder.prototype.record = function() {
    return this.new_media(((function(_this) {
      return function(media) {
        return media.startRecord();
      };
    })(this)), ((function(_this) {
      return function(media, status) {
        var start_time_ms, update_record;
        if (status === Media.MEDIA_RUNNING) {
          _this.log('recording');
          _this.is_recording = true;
          _this.duration_ms = 0;
          start_time_ms = (new Date).getTime();
          update_record = function() {
            var current_ms;
            _this.log('recording check');
            if (!_this.is_recording) {
              media.stopRecord();
              return;
            }
            current_ms = (new Date).getTime();
            _this.duration_ms = current_ms - start_time_ms;
            _this.scrub_point_ms = _this.duration_ms;
            _this.event('onDurationUpdate', _this.duration_ms);
            _this.event('onScrubUpdate', _this.duration_ms);
            return setTimeout(update_record, 100);
          };
          update_record();
          _this.event('onRecordStart');
        }
        if (status === Media.MEDIA_STOPPED) {
          _this.is_recording = false;
          media.release();
          return _this.get_duration(function(ms) {
            _this.scrub_point_ms = ms;
            _this.event('onScrubUpdate', ms);
            return _this.event('onRecordStop');
          });
        }
      };
    })(this)), ((function(_this) {
      return function(media, err) {
        media.release();
        return _this.event('onAudioError');
      };
    })(this)));
  };

  Recorder.prototype.step = function(ms) {
    return this.seek(this.scrub_point_ms + ms);
  };

  Recorder.prototype.seek = function(ms) {
    if (ms === -1) {
      ms = Number.MAX_VALUE;
    }
    this.scrub_point_ms = Math.min(this.duration_ms, Math.max(0, ms));
    this.event('onScrubUpdate', this.scrub_point_ms);
    if (this.is_playing) {
      return this.media.seekTo(this.scrub_point_ms);
    }
  };

  Recorder.prototype.play = function() {
    if (this.scrub_point_ms >= this.duration_ms) {
      this.scrub_point_ms = 0;
      this.event('onScrubUpdate', this.scrub_point_ms);
    }
    return this.media = this.new_media(((function(_this) {
      return function(media) {
        media.seekTo(_this.scrub_point_ms / 1000.0);
        return media.play();
      };
    })(this)), ((function(_this) {
      return function(media, status) {
        var play_update;
        if (status === Media.MEDIA_RUNNING) {
          _this.is_playing = true;
          play_update = function() {
            return media.getCurrentPosition(function(pos) {
              if (pos === -1) {
                _this.scrub_point_ms = _this.duration_ms;
              } else {
                _this.scrub_point_ms = pos * 1000;
              }
              _this.event('onScrubUpdate', _this.scrub_point_ms);
              if (!_this.is_playing) {
                media.stop();
                media.release();
                _this.event('onPlayStop');
                return;
              }
              return setTimeout(play_update, 100);
            });
          };
          play_update();
          _this.event('onPlayStart');
        }
        if (status === Media.MEDIA_STOPPED) {
          return _this.is_playing = false;
        }
      };
    })(this)), ((function(_this) {
      return function(media, err) {
        media.release();
        return _this.event('onAudioError');
      };
    })(this)));
  };

  Recorder.prototype.stop = function() {
    this.is_playing = false;
    this.is_recording = false;
    return this.get_duration();
  };

  return Recorder;

})();
