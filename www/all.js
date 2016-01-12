(function() {
  window.app = angular.module('fastcast', ['ionic', 'ngCordova', 'ngIOS9UIWebViewPatch', 'jrCrop', 'monospaced.elastic']).config(function($interpolateProvider, $ionicConfigProvider) {
    $interpolateProvider.startSymbol('<%').endSymbol('%>');
    return $ionicConfigProvider.views.swipeBackEnabled(false);
  }).run(function($ionicPlatform) {
    return $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        return StatusBar.styleDefault();
      }
    });
  }).filter('numberFixedLen', function() {
    return function(n, len) {
      return sprintf('%0' + len + 'd', n);
    };
  }).filter('orderByMagic', function() {
    return function(episodes) {
      return orderByMagic(episodes);
    };
  }).config([
    'msdElasticConfig', function(msdElasticConfig) {
      return msdElasticConfig.append = '\n';
    }
  ]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController'
    }).state('episode', {
      cache: false,
      url: '/episode',
      template: '<ion-nav-view></ion-nav-view>',
      controller: 'EpisodeController',
      abstract: true
    }).state('episode.record', {
      url: '/record',
      templateUrl: 'episode/record.html',
      controller: 'RecordController',
      parent: 'episode'
    }).state('episode.finalize', {
      url: '/finalize',
      templateUrl: 'episode/finalize.html',
      controller: 'FinalizeController',
      parent: 'episode'
    }).state('episode.finish', {
      url: '/finish',
      templateUrl: 'episode/finish.html',
      controller: 'FinishController',
      parent: 'episode'
    }).state('settings', {
      url: '/settings',
      template: '<ion-nav-view></ion-nav-view>',
      controller: 'SettingsController',
      abstract: true
    }).state('settings.podcast', {
      url: '/podcast',
      templateUrl: 'settings/podcast.html',
      controller: 'PodcastSettingsController',
      parent: 'settings'
    });
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);


(function() {
  var boot_angular;

  boot_angular = function() {
    var domElement;
    domElement = document.getElementById('body');
    return angular.bootstrap(domElement, ['fastcast']);
  };

  document.addEventListener('deviceready', boot_angular, false);

}).call(this);


(function() {
  window.categories = {
    "Arts": ["Design", "Fashion & Beauty", "Food", "Literature", "Performing Arts", "Visual Arts"],
    "Business": ["Business News", "Careers", "Investing", "Management & Marketing", "Shopping"],
    "Comedy": [],
    "Education": ["Educational Technology", "Higher Education", "K-12", "Language Courses", "Training"],
    "Games & Hobbies": ["Automotive", "Aviation", "Hobbies", "Other Games", "Video Games"],
    "Government & Organizations": ["Local", "National", "Non-Profit", "Regional"],
    "Health": ["Alternative Health", "Fitness & Nutrition", "Self-Help", "Sexuality"],
    "Kids & Family": [],
    "Music": [],
    "News & Politics": [],
    "Religion & Spirituality": ["Buddhism", "Christianity", "Hinduism", "Islam", "Judaism", "Other", "Spirituality"],
    "Science & Medicine": ["Medicine", "Natural Sciences", "Social Sciences"],
    "Society & Culture": ["History", "Personal Journals", "Philosophy", "Places & Travel"],
    "Sports & Recreation": ["Amateur", "College & High School", "Outdoor", "Professional"],
    "Technology": ["Gadgets", "Tech News", "Podcasting", "Software How-To"],
    "TV & Film": []
  };

}).call(this);


(function() {
  String.prototype.slugify = function() {
    return this.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };

  Number.prototype.toHHMMSS = function() {
    var hours, minutes, ms, ms_num, seconds, show_ms, time;
    show_ms = arguments.length > 0 && arguments[0];
    ms_num = Math.floor(this);
    hours = Math.floor(ms_num / 3600000);
    minutes = Math.floor((ms_num - (hours * 3600000)) / 60000);
    seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000)) / 1000);
    ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds * 1000);
    time = sprintf('%02d:%02d:%02d', hours, minutes, seconds);
    if (show_ms) {
      time += sprintf('.%03d', ms);
    }
    return time;
  };

  Number.prototype.humanize = function() {
    var hours, minutes, ms, ms_num, seconds, time;
    ms_num = Math.floor(this);
    hours = Math.floor(ms_num / 3600000);
    minutes = Math.floor((ms_num - (hours * 3600000)) / 60000);
    seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000)) / 1000);
    ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds * 1000);
    time = '';
    if (hours) {
      time = sprintf('%dh', hours);
    }
    if (minutes) {
      time += sprintf('%dm', minutes);
    }
    time += sprintf('%ds', Math.ceil(seconds + ms / 1000.0));
    return time;
  };

  String.prototype.sprintf = function() {
    return sprintf.apply(this, this, arguments);
  };

  window.rfc2822 = function(date) {
    date = !date || date.name === 'datetime' ? moment() : date;
    return moment(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
  };

  window.orderByMagic = function(hash) {
    var array;
    array = [];
    Object.keys(hash).forEach(function(key) {
      array.push(hash[key]);
    });
    array.sort(function(a, b) {
      if (a.published_at && !b.published_at) {
        return 1;
      }
      if (!a.published_at && b.published_at) {
        return -1;
      }
      if (a.published_at && b.published_at) {
        if (a.published_at > b.published_at) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a.recorded_at > b.recorded_at) {
        return -1;
      } else {
        return 1;
      }
    });
    return array;
  };

}).call(this);


(function() {
  var Recorder,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    slice = [].slice;

  Recorder = (function() {
    function Recorder(fname, options) {
      var default_options;
      this.fname = fname;
      this.drop = bind(this.drop, this);
      this.stop = bind(this.stop, this);
      this.play = bind(this.play, this);
      this.seek = bind(this.seek, this);
      this.step = bind(this.step, this);
      this.record = bind(this.record, this);
      this.get_duration = bind(this.get_duration, this);
      this.new_media = bind(this.new_media, this);
      this.event = bind(this.event, this);
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
        debug: true
      };
      this.options = angular.extend(default_options, options);
      this.scrub_point_ms = 0;
      this.status = {};
      this.status[Media.MEDIA_NONE] = 'None';
      this.status[Media.MEDIA_STARTING] = 'Starting';
      this.status[Media.MEDIA_RUNNING] = 'Running';
      this.status[Media.MEDIA_PAUSED] = 'Paused';
      this.status[Media.MEDIA_STOPPED] = 'Stopped';
      this.drop_events = [];
      this.scheduled_drops = [];
      this.live_drops = [];
      this.stop();
      this.get_duration();
    }

    Recorder.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (!this.options.debug) {
        return;
      }
      return console.log.apply(this, args);
    };

    Recorder.prototype.event = function() {
      var args, name;
      name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      this.options[name].apply(this, args);
      return this.options.onEvent(name, args);
    };

    Recorder.prototype.new_media = function(ready_cb, status_cb, error_cb) {
      var media;
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
          _this.log("Media status", stat, _this.status[stat]);
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

    Recorder.prototype.record = function() {
      this.drop_events = [];
      this.scheduled_drops = [];
      this.live_drops = [];
      return this.main_track = this.new_media(((function(_this) {
        return function(media) {
          return media.startRecord();
        };
      })(this)), ((function(_this) {
        return function(media, status) {
          var update_record;
          if (status === Media.MEDIA_RUNNING) {
            _this.log('recording');
            _this.is_recording = true;
            _this.duration_ms = 0;
            _this.start_time_ms = (new Date).getTime();
            update_record = function() {
              var current_ms;
              if (!_this.is_recording) {
                _this.log('recording stop requested');
                media.stopRecord();
                _this.get_duration(function(ms) {
                  _this.scrub_point_ms = ms;
                  _this.event('onScrubUpdate', ms);
                  return _this.event('onRecordStop');
                });
                media.release();
                return;
              }
              current_ms = (new Date).getTime();
              _this.duration_ms = current_ms - _this.start_time_ms;
              _this.scrub_point_ms = _this.duration_ms;
              _this.event('onDurationUpdate', _this.duration_ms);
              _this.event('onScrubUpdate', _this.duration_ms);
              return setTimeout(update_record, 100);
            };
            update_record();
            _this.event('onRecordStart');
          }
          if (status === Media.MEDIA_STOPPED) {
            return media.release();
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
        return this.main_track.seekTo(this.scrub_point_ms);
      }
    };

    Recorder.prototype.play = function() {
      this.scheduled_drops = [];
      this.live_drops = [];
      if (this.scrub_point_ms >= this.duration_ms) {
        this.scrub_point_ms = 0;
        this.event('onScrubUpdate', this.scrub_point_ms);
      }
      return this.main_track = this.new_media(((function(_this) {
        return function(media) {
          media.play();
          return media.seekTo(_this.scrub_point_ms);
        };
      })(this)), ((function(_this) {
        return function(media, status) {
          var e, i, len, play_update, ref, scheduleDrop;
          if (status === Media.MEDIA_RUNNING) {
            _this.is_playing = true;
            scheduleDrop = function(e) {
              return _this.scheduled_drops.push(setTimeout((function() {
                var m;
                if (!_this.is_playing) {
                  return;
                }
                _this.log("Playing drop", e.drop, "at", e.ms);
                m = new Media('fx/' + e.drop + '.mp3', (function() {
                  return _this.log("Drop Successfully completed action ", 'fx/' + e.drop + '.mp3');
                }), (function(err) {
                  _this.log('Drop Audio Error: ' + err.code);
                  return _this.log(err);
                }), (function(stat) {
                  return _this.log("Drop Media status", stat, _this.status[stat]);
                }));
                _this.live_drops.push(m);
                return m.play();
              }), e.ms));
            };
            ref = _this.drop_events;
            for (i = 0, len = ref.length; i < len; i++) {
              e = ref[i];
              _this.log("Scheduling drop for", e.drop, e.ms);
              scheduleDrop(e);
            }
            play_update = function() {
              return media.getCurrentPosition(function(pos) {
                if (pos === -1) {
                  _this.scrub_point_ms = _this.duration_ms;
                } else {
                  _this.scrub_point_ms = pos * 1000;
                }
                _this.event('onScrubUpdate', _this.scrub_point_ms);
                if (!_this.is_playing) {
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
            return _this.stop();
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
      var d, i, id, j, len, len1, ref, ref1, ref2, ref3;
      this.is_playing = false;
      this.is_recording = false;
      ref = this.scheduled_drops;
      for (i = 0, len = ref.length; i < len; i++) {
        id = ref[i];
        clearTimeout(id);
      }
      ref1 = this.live_drops;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        d = ref1[j];
        d.stop();
        d.release();
      }
      this.scheduled_drops = [];
      this.live_drops = [];
      if ((ref2 = this.main_track) != null) {
        ref2.stop();
      }
      return (ref3 = this.main_track) != null ? ref3.release() : void 0;
    };

    Recorder.prototype.drop = function(id) {
      var current_ms, m, scrub_point_ms;
      if (!this.is_recording) {
        return;
      }
      this.log("Getting position");
      current_ms = (new Date).getTime();
      scrub_point_ms = current_ms - this.start_time_ms;
      this.drop_events.push({
        ms: scrub_point_ms,
        drop: id
      });
      m = new Media('fx/' + id + '.mp3', ((function(_this) {
        return function() {
          return _this.log("Drop Successfully completed action ", 'fx/' + id + '.mp3');
        };
      })(this)), ((function(_this) {
        return function(err) {
          _this.log('Drop Audio Error: ' + err.code);
          return _this.log(err);
        };
      })(this)), ((function(_this) {
        return function(stat) {
          return _this.log("Drop Media status", stat, _this.status[stat]);
        };
      })(this)));
      this.live_drops.push(m);
      m.play();
      return this.log("Playing error drop at", this.scrub_point_ms);
    };

    return Recorder;

  })();

  window.Recorder = Recorder;

}).call(this);


(function() {
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
          type: this.item.type,
          code: this.item.code
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
          console.log("Uploading", _this.item.src, url);
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

  window.UploadWorker = UploadWorker;

}).call(this);


(function() {
  app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state, $cordovaFileTransfer, $q, $ionicHistory, $ionicSideMenuDelegate, $ionicPopup) {
    var load_state, next_episode_number;
    console.log('AppController');
    $scope.settings = function() {
      return $state.go('settings.podcast');
    };
    $scope.toggleLeft = function() {
      return $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.home = function() {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      return $state.go('home');
    };
    load_state = function() {
      var e, error, k, results;
      $scope.podcast = null;
      try {
        $scope.podcast = JSON.parse(window.localStorage.getItem('podcast'));
      } catch (error) {
        e = error;
        console.log('Error loading state', e);
      }
      if (!$scope.podcast || !$scope.podcast.version) {
        $scope.podcast = {
          version: 1,
          episodes: {}
        };
        $scope.save_state();
      }
      $scope.podcast.itunes_url = 'https://itunes.apple.com/us/podcast/thats-a-good-idea/id1049409195';
      results = [];
      for (k in $scope.podcast.episodes) {
        $scope.podcast.episodes[k].guid = k;
        results.push($scope.podcast.episodes[k].is_syncing = false);
      }
      return results;
    };
    next_episode_number = function() {
      var episode, n, slug;
      n = 0;
      for (slug in $scope.podcast.episodes) {
        episode = $scope.podcast.episodes[slug];
        n = Math.max(n, episode.number);
      }
      return n + 1;
    };
    $scope.output_directory = 'cdvfile://localhost/persistent/';
    resolveLocalFileSystemURL($scope.output_directory, function(entry) {
      return $scope.native_output_directory = entry.toURL();
    });
    $scope.save_state = function() {
      var json;
      json = angular.toJson($scope.podcast);
      window.localStorage.setItem('podcast', angular.toJson($scope.podcast));
      return $cordovaFile.writeFile($scope.output_directory, 'data.json', json, true).then((function(result) {
        if (!$scope.podcast.code) {
          return;
        }
        return new UploadWorker({
          code: $scope.podcast.code,
          type: 'json',
          mime: 'application/json',
          src: $scope.output_directory + 'data.json'
        });
      }));
    };
    load_state();
    $scope["new"] = function() {
      var guid, t;
      t = (new Date).getTime();
      guid = sprintf('fc-%s-%d', $scope.podcast.code, t);
      $scope.episode = {
        guid: guid,
        number: next_episode_number()
      };
      return $state.go('episode.record');
    };
    return $scope.go = function(guid) {
      $scope.episode = angular.copy($scope.podcast.episodes[guid]);
      $scope.episode.is_published = $scope.episode.published_at != null;
      return $state.go('episode.record');
    };
  });

}).call(this);


(function() {
  app.controller('EpisodeController', function($scope, $ionicSideMenuDelegate, $ionicActionSheet) {
    var t;
    $scope.$on('$ionicView.enter', function() {
      return $ionicSideMenuDelegate.canDragContent(false);
    });
    $scope.$on('$ionicView.leave', function() {
      return $ionicSideMenuDelegate.canDragContent(true);
    });
    t = (new Date).getTime();
    $scope.has_recording = $scope.episode.recorded_at != null;
    $scope.is_uploading = false;
    $scope.is_playing = false;
    $scope.is_recording = false;
    $scope.duration_ms = $scope.episode.duration_ms || 0;
    $scope.scrub_point_ms = 0;
    $scope.has_changes = false;
    $scope.$watch('episode', (function(newObj, oldObj) {
      return $scope.has_changes = !angular.equals(oldObj, newObj);
    }), true);
    return $scope.cancel = function() {
      var hideSheet;
      return hideSheet = $ionicActionSheet.show({
        destructiveText: 'Discard Changes',
        titleText: 'Discard changes',
        cancelText: 'Cancel',
        destructiveButtonClicked: function() {
          return $scope.home();
        }
      });
    };
  });

}).call(this);


(function() {
  app.controller('FinalizeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicNavBarDelegate, $ionicHistory) {
    var upload, upload_audio, upload_html, upload_rss;
    $ionicNavBarDelegate.showBackButton(true);
    upload_rss = function() {
      var rss;
      rss = FastCast.templates.rss({
        podcast: $scope.podcast
      });
      return $cordovaFile.writeFile($scope.output_directory, $scope.podcast.code + '.rss', rss, true).then((function(result) {
        return upload({
          type: 'rss',
          mime: 'application/rss+xml',
          src: $scope.output_directory + $scope.podcast.code + '.rss'
        });
      }), function(err) {
        return console.log('file write error', err);
      });
    };
    upload_html = function() {
      var html;
      html = FastCast.templates.episode({
        podcast: $scope.podcast,
        episode: $scope.episode
      });
      return $cordovaFile.writeFile($scope.output_directory, 'index.html', html, true).then((function(result) {
        return upload({
          slug: $scope.episode.slug,
          type: 'html',
          mime: 'text/html',
          src: $scope.output_directory + 'index.html'
        });
      }), function(err) {
        return console.log('file write error', err);
      });
    };
    upload_audio = function() {
      return upload({
        slug: $scope.episode.slug,
        type: 'audio',
        mime: 'audio/mp4',
        src: $scope.output_directory + $scope.episode.guid + '.m4a'
      });
    };
    upload = function(item) {
      item.code = $scope.podcast.code;
      return (new UploadWorker(item)).started(function() {
        $scope.upload_count++;
        return $scope.uploads[item.type] = 0;
      }).finished(function() {
        return setTimeout((function() {
          delete $scope.uploads[item.type];
          $scope.upload_count--;
          if ($scope.upload_count === 0) {
            $scope.is_uploading_finished = true;
          }
          return $scope.$apply();
        }), 1000);
      }).progress(function(progress) {
        $scope.uploads[item.type] = progress;
        angular.element('#progress_' + item.type).val(progress);
        return $scope.$apply();
      });
    };
    $scope.is_uploading = false;
    $scope.uploads = {};
    $scope.back = function() {
      return $state.go('episode.record');
    };
    $scope.is_uploading_started = false;
    $scope.is_uploading_finished = false;
    $scope.publish = function() {
      if (!$scope.episode.number) {
        alert('Please supply an episode number.');
      }
      $scope.episode.published_at = null;
      if ($scope.episode.is_published) {
        if (!$scope.episode.title) {
          alert('Please supply an episode title.');
        }
        if (!$scope.episode.description) {
          alert('Please supply an episode description.');
        }
        if (!$scope.episode.published_at) {
          $scope.episode.published_at = (new Date).getTime();
        }
      } else {
        $scope.episode.published_at = null;
      }
      $scope.is_uploading_started = true;
      $scope.episode.slug = sprintf('%03d - %s', $scope.episode.number, $scope.episode.title).slugify();
      if (!$scope.episode.length_bytes) {
        window.resolveLocalFileSystemURL($scope.output_directory + $scope.episode.guid + '.m4a', (function(fileEntry) {
          return fileEntry.file(function(file) {
            console.log("got byte size", file);
            $scope.episode.length_bytes = file.size;
            $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode);
            if ($scope.episode.published_at) {
              upload_rss();
            }
            $scope.save_state();
            return console.log(file);
          });
        }), function(err) {
          return console.log('error getting file size');
        });
      } else {
        $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode);
        if ($scope.episode.published_at) {
          upload_rss();
        }
        $scope.save_state();
      }
      if ($scope.episode.published_at) {
        upload_html();
      }
      return upload_audio();
    };
    $scope.$watch('is_uploading_finished', function(v) {
      if (!v) {
        return;
      }
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      return $state.go('episode.finish');
    });
    return $scope.upload_count = 0;
  });

}).call(this);


(function() {
  app.controller('FinishController', function($scope, $ionicHistory) {});

}).call(this);


(function() {
  app.controller('HomeController', function($scope, $state, $ionicHistory, $ionicPopup) {
    var myPopup;
    if (!$scope.podcast.code) {
      return myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="podcast.code">',
        title: 'Enter Show Code',
        subTitle: 'In order to use this beta app, you must have a Show Code. Get one from Ben via Facebook.',
        scope: $scope,
        buttons: [
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.podcast.code) {
                e.preventDefault();
              }
              $scope.podcast.code = $scope.podcast.code.trim().toLowerCase();
              return $scope.save_state();
            }
          }
        ]
      }).then(function() {
        return $ionicPopup.alert({
          title: 'Input Show Info',
          template: 'Since this is your first time getting started, enter your show information next.'
        }).then((function(res) {
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          return $state.go('settings.podcast');
        }));
      });
    }
  });

}).call(this);


(function() {
  app.controller('PodcastSettingsController', function($scope, $ionicHistory, $ionicPopup, $ionicNavBarDelegate, $ionicActionSheet, $jrCrop, $cordovaImagePicker, $cordovaFile) {
    var cat, cats, getb64, j, k, len1, original, ref, subcat, subcats, v;
    cats = [];
    for (cat in categories) {
      subcats = categories[cat];
      if (subcats.length === 0) {
        cats.push({
          key: cat,
          name: cat
        });
      } else {
        for (j = 0, len1 = subcats.length; j < len1; j++) {
          subcat = subcats[j];
          cats.push({
            key: sprintf("%s|%s", cat, subcat),
            name: sprintf("%s - %s", cat, subcat)
          });
        }
      }
    }
    $scope.cats = cats;
    $scope.do_logo = function() {
      var options;
      options = {
        maximumImagesCount: 1
      };
      return $cordovaImagePicker.getPictures(options).then((function(results) {
        return $jrCrop.crop({
          url: results[0],
          title: 'Move and Scale',
          width: 300,
          height: 300
        }).then(function(canvas) {
          var _base64ToArrayBuffer, resize;
          _base64ToArrayBuffer = function(base64) {
            var binary_string, bytes, i, len;
            binary_string = window.atob(base64.replace(/\s/g, ''));
            len = binary_string.length;
            bytes = new Uint8Array(len);
            i = 0;
            while (i < len) {
              bytes[i] = binary_string.charCodeAt(i);
              i++;
            }
            return bytes.buffer;
          };
          resize = function(src_canvas, dst_name, d, cb) {
            if (cb == null) {
              cb = null;
            }
            return Caman(src_canvas, function() {
              this.resize({
                width: d,
                height: d
              });
              this.render((function(_this) {
                return function() {
                  var b64, data, data_url;
                  data_url = _this.toBase64('jpeg');
                  b64 = data_url.replace(/^data:.+?;base64,/, "");
                  console.log(data_url.substring(0, 50));
                  data = _base64ToArrayBuffer(b64);
                  return $cordovaFile.writeFile($scope.output_directory, dst_name, data, true).then(function() {
                    if (cb) {
                      return cb($scope.output_directory + dst_name, data_url);
                    }
                  });
                };
              })(this));
              return this.reset();
            });
          };
          resize(canvas, 'logo-thumb.jpg', 75, function(path, data_url) {
            $scope.show.logo_path = path;
            return $scope.logo_src = data_url;
          });
          return resize(canvas, 'logo.jpg', 1400, function(path, data_url) {
            return new UploadWorker({
              code: $scope.podcast.code,
              type: 'logo',
              mime: 'image/jpeg',
              src: path
            });
          });
        });
      }), function(error) {
        return console.log(error);
      });
    };
    getb64 = function(cdv_path, cb) {
      return resolveLocalFileSystemURL(cdv_path, function(entry) {
        var path;
        path = entry.toURL();
        return window.plugins.Base64.encodeFile(path, function(base64) {
          console.log(base64.substring(0, 50));
          return cb(base64);
        });
      });
    };
    $scope.show = {
      title: '',
      subtitle: '',
      author: '',
      description: '',
      primary_category: '',
      secondary_category: '',
      is_explicit: false,
      logo_path: null
    };
    ref = $scope.show;
    for (k in ref) {
      v = ref[k];
      if (($scope.podcast[k] != null)) {
        $scope.show[k] = $scope.podcast[k];
      }
    }
    if ($scope.show.logo_path) {
      getb64($scope.show.logo_path, function(b64) {
        return $scope.logo_src = b64;
      });
    }
    console.log($scope.show);
    original = angular.copy($scope.show);
    $scope.has_changes = false;
    $scope.$watch('show', (function(newValue, oldValue) {
      $scope.has_changes = !angular.equals(original, newValue);
      return $ionicNavBarDelegate.showBackButton(!$scope.has_changes);
    }), true);
    $scope.save = function() {
      var ref1, rss, validate;
      validate = {
        title: 'a title',
        logo_path: 'cover art',
        subtitle: 'a subtitle',
        author: 'an author',
        description: 'a description',
        primary_category: 'primary category',
        secondary_category: 'secondary category'
      };
      for (k in validate) {
        v = validate[k];
        if (!($scope.show[k] != null)) {
          $ionicPopup.alert({
            title: 'Required',
            template: "Please supply " + v + "."
          });
          return;
        }
        $scope.show[k] = $scope.show[k].trim();
      }
      ref1 = $scope.show;
      for (k in ref1) {
        v = ref1[k];
        $scope.podcast[k] = $scope.show[k];
      }
      $scope.save_state();
      if ($scope.has_changes) {
        rss = FastCast.templates.rss({
          podcast: $scope.podcast
        });
        $cordovaFile.writeFile($scope.output_directory, $scope.podcast.code + '.rss', rss, true).then((function(result) {
          return new UploadWorker({
            code: $scope.podcast.code,
            type: 'rss',
            mime: 'application/rss+xml',
            src: $scope.output_directory + $scope.podcast.code + '.rss'
          });
        }));
      }
      return $scope.home();
    };
    $scope.cancel = function() {
      var hideSheet;
      return hideSheet = $ionicActionSheet.show({
        destructiveText: 'Discard Changes',
        titleText: 'Discard changes',
        cancelText: 'Cancel',
        destructiveButtonClicked: function() {
          return $scope.home();
        }
      });
    };
    return $jrCrop.defaultOptions.template = $jrCrop.defaultOptions.template.replace(/{{/g, '<%').replace(/}}/g, '%>');
  });

}).call(this);


(function() {
  app.controller('RecordController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicHistory, $ionicPopup, $ionicNavBarDelegate) {
    var hold_promise, rec;
    $scope.$parent.$on('$ionicView.beforeLeave', function() {
      console.log('beforeLeave');
      return rec.stop();
    });
    rec = new Recorder($scope.output_directory + $scope.episode.guid + '.m4a', {
      onScrubUpdate: function(ms) {
        return $scope.scrub_point_ms = ms;
      },
      onDurationUpdate: function(ms) {
        $scope.duration_ms = ms;
        return $scope.episode.duration_ms = ms;
      },
      onAudioError: function() {
        return $ionicPopup.alert({
          title: 'Audio Error',
          template: 'The audio system has failed. Please report this.'
        }).then((function(res) {
          return $scope.home();
        }));
      },
      onPlayStart: function() {
        return $scope.is_playing = true;
      },
      onPlayStop: function() {
        return $scope.is_playing = false;
      },
      onRecordStart: function() {
        $scope.has_changes = true;
        $ionicNavBarDelegate.showBackButton(false);
        $ionicHistory.clearHistory();
        $scope.is_recording = true;
        $scope.has_recording = false;
        return $scope.episode.recorded_at = (new Date).getTime();
      },
      onRecordStop: function() {
        $scope.is_recording = false;
        return $scope.has_recording = true;
      },
      onEvent: function() {
        return $scope.$applyAsync();
      }
    });
    $scope.drop = function(id) {
      return rec.drop(id);
    };
    hold_promise = null;
    $scope.hold = function(ms) {
      if (!ms) {
        $interval.cancel(hold_promise);
        return;
      }
      return hold_promise = $interval((function() {
        return rec.step(ms);
      }), 100);
    };
    $scope.seek = function(ms) {
      console.log('seek', ms);
      return rec.seek(ms);
    };
    $scope.step = function(ms) {
      console.log('step', ms);
      return rec.step(ms);
    };
    $scope.play = function() {
      return rec.play();
    };
    $scope.stop_playing = function() {
      return rec.stop();
    };
    $scope.stop_recording = function() {
      return rec.stop();
    };
    return $scope.record = function() {
      var hideSheet;
      if ($scope.has_recording) {
        return hideSheet = $ionicActionSheet.show({
          destructiveText: 'Scrap and Re-Record',
          titleText: 'Re-record episode',
          cancelText: 'Cancel',
          destructiveButtonClicked: function() {
            hideSheet();
            return rec.record();
          }
        });
      } else {
        return rec.record();
      }
    };
  });

}).call(this);


(function() {
  app.controller('SettingsController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicNavBarDelegate, $ionicPopup) {});

}).call(this);


this["FastCast"] = this["FastCast"] || {};
this["FastCast"]["templates"] = this["FastCast"]["templates"] || {};
this["FastCast"]["templates"]["episode"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1, , user-scalable=no">\n    <meta property="fb:app_id"             content="937591452943803"/>\n    <meta property="og:url"                content="http://www.fast-cast.net/podcasts/' +
__e( podcast.code) +
'/episodes/' +
__e( episode.slug ) +
'/" />\n    <meta property="og:type"               content="fastcastapp:podcast" />\n    <meta property="og:title"              content="' +
__e( sprintf("%03d - %s", episode.number, episode.title) ) +
'" />\n    <meta property="og:description"        content="' +
__e( episode.description ) +
'" />\n    <meta property="og:image"              content="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/logo.jpg" />\n\n    <title>' +
__e( sprintf("%03d - %s", episode.number, episode.title) ) +
' | ' +
__e( podcast.title ) +
'</title>\n\n    <link rel="stylesheet" crossorigin="anonymous" integrity="sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw=" href="https://cdn.jsdelivr.net/bootstrap/3.3.6/css/bootstrap.min.css">\n    <link rel="stylesheet" crossorigin="anonymous" integrity="sha256-o8bM0Z5cFvrvvvQp0EJFi4LICvBA9FCx7iCNuojVsN8=" href="https://cdn.jsdelivr.net/bootstrap/3.3.6/css/bootstrap-theme.min.css">\n    <link rel="stylesheet" href="/assets/v1/css/episode.css">\n    <script crossorigin="anonymous" integrity="sha256-ImQvICV38LovIsvla2zykaCTdEh1Z801Y+DSop91wMU=" src="https://cdn.jsdelivr.net/jquery/2.1.4/jquery.min.js"></script>\n  </head>\n  <body>\n    <div id="fb-root"></div>\n    <script>(function(d, s, id) {\n      var js, fjs = d.getElementsByTagName(s)[0];\n      if (d.getElementById(id)) return;\n      js = d.createElement(s); js.id = id;\n      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1497159643900204";\n      fjs.parentNode.insertBefore(js, fjs);\n    }(document, \'script\', \'facebook-jssdk\'));</script>    \n    <nav class="navbar navbar-default navbar-fixed-top">\n      <div class="container-fluid">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class="navbar-header">\n          <a class="navbar-brand" href="#">' +
__e( podcast.title ) +
'</a>\n        </div>\n      </div><!-- /.container-fluid -->\n    </nav>    \n    <div class="container">\n      <div class="jumbotron">\n        <h1>' +
__e( sprintf("%03d - %s", episode.number, episode.title) ) +
'</h1>\n        <p><img src="../../logo.jpg"/>' +
__e( episode.description ) +
'</p>\n        <div class="clearfix"></div>\n      </div>\n      <div class="audio-header text-center">\n        ';
 if(podcast.itunes_url) { ;
__p += '\n          <div class="icon icon-itunes">\n            <a href="' +
__e( podcast.itunes_url.replace(/https?:/, 'itms:') ) +
'"><img src="/assets/v1/img/itunes-button.png"/></a>\n          </div>\n        ';
 } ;
__p += '\n        <div class="icon icon-rss">\n          <a href="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/feed.rss"><img src="/assets/v1/img/rss-button.png"/></a>\n        </div>\n        <div class="icon icon-twitter">\n          <a href="https://twitter.com/share" class="twitter-share-button"{count} data-text="' +
__e( sprintf("%03d - %s", episode.number, episode.title) ) +
'">Tweet</a>\n          <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script>       \n        </div>\n        <div class="icon icon-facebook">\n          <div class="fb-share-button" data-href="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/episodes/' +
__e( episode.slug ) +
'/" data-layout="button"></div>\n        </div>\n      </div>\n      <audio controls\n      \t<source src="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/episodes/' +
__e( episode.slug ) +
'/' +
__e( episode.slug ) +
'.m4a" type="audio/mpeg" />\n      </audio>\n      <div class="row show-info">\n        <div class="col-xs-4 text-left">\n          ' +
__e( podcast.author ) +
'\n        </div>\n        <div class="col-xs-8 text-right">\n          ' +
__e( rfc2822(episode.published_at) ) +
'\n        </div>\n      </div>\n      \n    </div>\n    <div class="fb-comments" data-href="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/episodes/' +
__e( episode.slug ) +
'/" data-numposts="10"></div>\n\n    <script id="episodesTmpl" type="text/x-jsrender">\n      <ul>\n        {{for episodes}}\n          <li><a href="{{:url}}"><img src="{{:image}}"/>{{:title}}</a></li>\n        {{/for}}\n      </ul>\n    </script>\n    <div class="container">\n      <div id=\'episodes\'>\n        <h3>More Episodes</h3>\n      </div>\n    </div>\n\n\n    <script crossorigin="anonymous" integrity="sha256-KXn5puMvxCw+dAYznun+drMdG1IFl3agK0p/pqT9KAo=" src="https://cdn.jsdelivr.net/bootstrap/3.3.6/js/bootstrap.min.js"></script>\n    <script crossorigin="anonymous" integrity="sha256-HmmD9koUCcfzc6y9gU2nyfYMY9XWIyYa1e4VPZFfHaI=" src="https://cdn.jsdelivr.net/jsrender/1.0pre62/jsrender.min.js"></script>\n    <script src="/assets/v1/js/app.js"></script>\n  </body>\n</html>\n';

}
return __p
};
this["FastCast"]["templates"]["rss"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<?xml version="1.0" encoding="UTF-8"?><rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">\n  <channel>\n    <atom:link href="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/feed.rss" rel="self" type="application/rss+xml"/>\n    <title>' +
__e( podcast.title ) +
'</title>\n    <link>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/index.html</link>\n    <pubDate>' +
__e( rfc2822() ) +
'</pubDate>\n    <lastBuildDate>' +
__e( rfc2822() ) +
'</lastBuildDate>\n    <ttl>60</ttl>\n    <language>en</language>\n    <copyright>All rights reserved</copyright>\n    <webMaster>' +
__e( podcast.code ) +
'@fast-cast.net (' +
__e( podcast.author ) +
')</webMaster>\n    <description>' +
__e( podcast.description ) +
'</description>\n    <itunes:new-feed-url>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/feed.rss</itunes:new-feed-url>\n    <itunes:subtitle>' +
__e( podcast.subtitle ) +
'</itunes:subtitle>\n    <itunes:owner>\n      <itunes:name>' +
__e( podcast.author ) +
'</itunes:name>\n      <itunes:email>' +
__e( podcast.code ) +
'@fast-cast.net</itunes:email>\n    </itunes:owner>\n    <itunes:author>' +
__e( podcast.author ) +
'</itunes:author>\n    <itunes:explicit>' +
__e( podcast.is_explicit ? 'yes' : 'no' ) +
'</itunes:explicit>\n    <itunes:image href="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/logo.jpg"/>\n    <image>\n      <url>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/logo.jpg</url>\n      <title>' +
__e( podcast.title ) +
'</title>\n      <link>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/index.html</link>\n    </image>\n    ';
 _.each(['primary_category', 'secondary_category'], function(k) { ;
__p += '\n      ';
 var parts = podcast[k].split(/\|/); ;
__p += '\n  \t\t<itunes:category text="' +
__e( parts[0] ) +
'">\n  \t\t\t';
 if(parts.length>1) { ;
__p += '\n  \t\t\t\t<itunes:category text="' +
__e( parts[1] ) +
'"/>\n  \t\t\t';
 } ;
__p += '\n  \t\t</itunes:category>\n    ';
 }) ;
__p += '\n\t\t';
 _.each(orderByMagic(podcast.episodes), function(episode) {
        if(!episode.published_at) return;
        ;
__p += '\n\t\t    <item>\n\t\t      <guid isPermaLink="false">' +
__e( episode.guid ) +
'</guid>\n\t\t      <title>' +
__e( sprintf("%03d", episode.number) ) +
' - ' +
__e( episode.title ) +
'</title>\n\t\t      <pubDate>' +
__e( rfc2822(episode.published_at) ) +
'</pubDate>\n\t\t      <link>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/episodes/' +
__e( episode.slug ) +
'/</link>\n\t\t      <itunes:duration>' +
__e( episode.duration_ms.toHHMMSS() ) +
'</itunes:duration>\n\t\t      <itunes:author>Ben Allfree</itunes:author>\n\t\t      <itunes:explicit>yes</itunes:explicit>\n\t\t      <itunes:summary>' +
__e( episode.description ) +
'</itunes:summary>\n\t\t      <itunes:subtitle>' +
__e( episode.description ) +
'</itunes:subtitle>\n\t\t      <description>' +
__e( episode.description ) +
'</description>\n\t\t      <enclosure type="audio/mp4" url="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/episodes/' +
__e( episode.slug ) +
'/' +
__e( episode.slug ) +
'.m4a" length="' +
__e( episode.length_bytes ) +
'"/>\n\t\t      <itunes:image href="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/logo.jpg"/>\n\t\t    </item>\n\t\t';
 }) ;
__p += '\n  </channel>\n</rss>';

}
return __p
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvY29udHJvbGxlcnMvU2V0dGluZ3NDb250cm9sbGVyLmNvZmZlZSIsImpzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLEdBQUcsQ0FBQyxVQUFKLENBQWUsb0JBQWYsRUFBcUMsU0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixTQUFoQixFQUEyQixZQUEzQixFQUF5QyxNQUF6QyxFQUFpRCxpQkFBakQsRUFBb0Usb0JBQXBFLEVBQTBGLFdBQTFGLEdBQUEsQ0FBckM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC5jb250cm9sbGVyICdTZXR0aW5nc0NvbnRyb2xsZXInLCAoJHNjb3BlLCAkaHR0cCwgJGludGVydmFsLCAkY29yZG92YUZpbGUsICRzdGF0ZSwgJGlvbmljQWN0aW9uU2hlZXQsICRpb25pY05hdkJhckRlbGVnYXRlLCAkaW9uaWNQb3B1cCkgLT5cbiIsInRoaXNbXCJGYXN0Q2FzdFwiXSA9IHRoaXNbXCJGYXN0Q2FzdFwiXSB8fCB7fTtcbnRoaXNbXCJGYXN0Q2FzdFwiXVtcInRlbXBsYXRlc1wiXSA9IHRoaXNbXCJGYXN0Q2FzdFwiXVtcInRlbXBsYXRlc1wiXSB8fCB7fTtcbnRoaXNbXCJGYXN0Q2FzdFwiXVtcInRlbXBsYXRlc1wiXVtcImVwaXNvZGVcIl0gPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJycsIF9fZSA9IF8uZXNjYXBlLCBfX2ogPSBBcnJheS5wcm90b3R5cGUuam9pbjtcbmZ1bmN0aW9uIHByaW50KCkgeyBfX3AgKz0gX19qLmNhbGwoYXJndW1lbnRzLCAnJykgfVxud2l0aCAob2JqKSB7XG5fX3AgKz0gJzwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XCJlblwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIj5cXG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCAsIHVzZXItc2NhbGFibGU9bm9cIj5cXG4gICAgPG1ldGEgcHJvcGVydHk9XCJmYjphcHBfaWRcIiAgICAgICAgICAgICBjb250ZW50PVwiOTM3NTkxNDUyOTQzODAzXCIvPlxcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSkgK1xuJy9lcGlzb2Rlcy8nICtcbl9fZSggZXBpc29kZS5zbHVnICkgK1xuJy9cIiAvPlxcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJmYXN0Y2FzdGFwcDpwb2RjYXN0XCIgLz5cXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiICAgICAgICAgICAgICBjb250ZW50PVwiJyArXG5fX2UoIHNwcmludGYoXCIlMDNkIC0gJXNcIiwgZXBpc29kZS5udW1iZXIsIGVwaXNvZGUudGl0bGUpICkgK1xuJ1wiIC8+XFxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiAgICAgICAgY29udGVudD1cIicgK1xuX19lKCBlcGlzb2RlLmRlc2NyaXB0aW9uICkgK1xuJ1wiIC8+XFxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiAgICAgICAgICAgICAgY29udGVudD1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9sb2dvLmpwZ1wiIC8+XFxuXFxuICAgIDx0aXRsZT4nICtcbl9fZSggc3ByaW50ZihcIiUwM2QgLSAlc1wiLCBlcGlzb2RlLm51bWJlciwgZXBpc29kZS50aXRsZSkgKSArXG4nIHwgJyArXG5fX2UoIHBvZGNhc3QudGl0bGUgKSArXG4nPC90aXRsZT5cXG5cXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgaW50ZWdyaXR5PVwic2hhMjU2LTdzNXVER1czQUhxdzZ4dEptTk50citPQlJKVWxna05KRW83OFA0YjB5Unc9XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ib290c3RyYXAvMy4zLjYvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI+XFxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIGludGVncml0eT1cInNoYTI1Ni1vOGJNMFo1Y0Z2cnZ2dlFwMEVKRmk0TElDdkJBOUZDeDdpQ051b2pWc044PVwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvYm9vdHN0cmFwLzMuMy42L2Nzcy9ib290c3RyYXAtdGhlbWUubWluLmNzc1wiPlxcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9hc3NldHMvdjEvY3NzL2VwaXNvZGUuY3NzXCI+XFxuICAgIDxzY3JpcHQgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiBpbnRlZ3JpdHk9XCJzaGEyNTYtSW1RdklDVjM4TG92SXN2bGEyenlrYUNUZEVoMVo4MDFZK0RTb3A5MXdNVT1cIiBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvanF1ZXJ5LzIuMS40L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cXG4gIDwvaGVhZD5cXG4gIDxib2R5PlxcbiAgICA8ZGl2IGlkPVwiZmItcm9vdFwiPjwvZGl2PlxcbiAgICA8c2NyaXB0PihmdW5jdGlvbihkLCBzLCBpZCkge1xcbiAgICAgIHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcXG4gICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcXG4gICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcXG4gICAgICBqcy5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzI3hmYm1sPTEmdmVyc2lvbj12Mi41JmFwcElkPTE0OTcxNTk2NDM5MDAyMDRcIjtcXG4gICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XFxuICAgIH0oZG9jdW1lbnQsIFxcJ3NjcmlwdFxcJywgXFwnZmFjZWJvb2stanNzZGtcXCcpKTs8L3NjcmlwdD4gICAgXFxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cXG4gICAgICAgIDwhLS0gQnJhbmQgYW5kIHRvZ2dsZSBnZXQgZ3JvdXBlZCBmb3IgYmV0dGVyIG1vYmlsZSBkaXNwbGF5IC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPicgK1xuX19lKCBwb2RjYXN0LnRpdGxlICkgK1xuJzwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PjwhLS0gLy5jb250YWluZXItZmx1aWQgLS0+XFxuICAgIDwvbmF2PiAgICBcXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIj5cXG4gICAgICAgIDxoMT4nICtcbl9fZSggc3ByaW50ZihcIiUwM2QgLSAlc1wiLCBlcGlzb2RlLm51bWJlciwgZXBpc29kZS50aXRsZSkgKSArXG4nPC9oMT5cXG4gICAgICAgIDxwPjxpbWcgc3JjPVwiLi4vLi4vbG9nby5qcGdcIi8+JyArXG5fX2UoIGVwaXNvZGUuZGVzY3JpcHRpb24gKSArXG4nPC9wPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cImF1ZGlvLWhlYWRlciB0ZXh0LWNlbnRlclwiPlxcbiAgICAgICAgJztcbiBpZihwb2RjYXN0Lml0dW5lc191cmwpIHsgO1xuX19wICs9ICdcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb24gaWNvbi1pdHVuZXNcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVwiJyArXG5fX2UoIHBvZGNhc3QuaXR1bmVzX3VybC5yZXBsYWNlKC9odHRwcz86LywgJ2l0bXM6JykgKSArXG4nXCI+PGltZyBzcmM9XCIvYXNzZXRzL3YxL2ltZy9pdHVuZXMtYnV0dG9uLnBuZ1wiLz48L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgJztcbiB9IDtcbl9fcCArPSAnXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbiBpY29uLXJzc1wiPlxcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2ZlZWQucnNzXCI+PGltZyBzcmM9XCIvYXNzZXRzL3YxL2ltZy9yc3MtYnV0dG9uLnBuZ1wiLz48L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIGljb24tdHdpdHRlclwiPlxcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZVwiIGNsYXNzPVwidHdpdHRlci1zaGFyZS1idXR0b25cIntjb3VudH0gZGF0YS10ZXh0PVwiJyArXG5fX2UoIHNwcmludGYoXCIlMDNkIC0gJXNcIiwgZXBpc29kZS5udW1iZXIsIGVwaXNvZGUudGl0bGUpICkgK1xuJ1wiPlR3ZWV0PC9hPlxcbiAgICAgICAgICA8c2NyaXB0PiFmdW5jdGlvbihkLHMsaWQpe3ZhciBqcyxmanM9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXSxwPS9eaHR0cDovLnRlc3QoZC5sb2NhdGlvbik/XFwnaHR0cFxcJzpcXCdodHRwc1xcJztpZighZC5nZXRFbGVtZW50QnlJZChpZCkpe2pzPWQuY3JlYXRlRWxlbWVudChzKTtqcy5pZD1pZDtqcy5zcmM9cCtcXCc6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXFwnO2Zqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcyxmanMpO319KGRvY3VtZW50LCBcXCdzY3JpcHRcXCcsIFxcJ3R3aXR0ZXItd2pzXFwnKTs8L3NjcmlwdD4gICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIGljb24tZmFjZWJvb2tcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZiLXNoYXJlLWJ1dHRvblwiIGRhdGEtaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9lcGlzb2Rlcy8nICtcbl9fZSggZXBpc29kZS5zbHVnICkgK1xuJy9cIiBkYXRhLWxheW91dD1cImJ1dHRvblwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGF1ZGlvIGNvbnRyb2xzXFxuICAgICAgXFx0PHNvdXJjZSBzcmM9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvZXBpc29kZXMvJyArXG5fX2UoIGVwaXNvZGUuc2x1ZyApICtcbicvJyArXG5fX2UoIGVwaXNvZGUuc2x1ZyApICtcbicubTRhXCIgdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxcbiAgICAgIDwvYXVkaW8+XFxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBzaG93LWluZm9cIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNCB0ZXh0LWxlZnRcIj5cXG4gICAgICAgICAgJyArXG5fX2UoIHBvZGNhc3QuYXV0aG9yICkgK1xuJ1xcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTggdGV4dC1yaWdodFwiPlxcbiAgICAgICAgICAnICtcbl9fZSggcmZjMjgyMihlcGlzb2RlLnB1Ymxpc2hlZF9hdCkgKSArXG4nXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICBcXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XCJmYi1jb21tZW50c1wiIGRhdGEtaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9lcGlzb2Rlcy8nICtcbl9fZSggZXBpc29kZS5zbHVnICkgK1xuJy9cIiBkYXRhLW51bXBvc3RzPVwiMTBcIj48L2Rpdj5cXG5cXG4gICAgPHNjcmlwdCBpZD1cImVwaXNvZGVzVG1wbFwiIHR5cGU9XCJ0ZXh0L3gtanNyZW5kZXJcIj5cXG4gICAgICA8dWw+XFxuICAgICAgICB7e2ZvciBlcGlzb2Rlc319XFxuICAgICAgICAgIDxsaT48YSBocmVmPVwie3s6dXJsfX1cIj48aW1nIHNyYz1cInt7OmltYWdlfX1cIi8+e3s6dGl0bGV9fTwvYT48L2xpPlxcbiAgICAgICAge3svZm9yfX1cXG4gICAgICA8L3VsPlxcbiAgICA8L3NjcmlwdD5cXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgIDxkaXYgaWQ9XFwnZXBpc29kZXNcXCc+XFxuICAgICAgICA8aDM+TW9yZSBFcGlzb2RlczwvaDM+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcblxcbiAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgaW50ZWdyaXR5PVwic2hhMjU2LUtYbjVwdU12eEN3K2RBWXpudW4rZHJNZEcxSUZsM2FnSzBwL3BxVDlLQW89XCIgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2Jvb3RzdHJhcC8zLjMuNi9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XFxuICAgIDxzY3JpcHQgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiBpbnRlZ3JpdHk9XCJzaGEyNTYtSG1tRDlrb1VDY2Z6YzZ5OWdVMm55ZllNWTlYV0l5WWExZTRWUFpGZkhhST1cIiBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvanNyZW5kZXIvMS4wcHJlNjIvanNyZW5kZXIubWluLmpzXCI+PC9zY3JpcHQ+XFxuICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy92MS9qcy9hcHAuanNcIj48L3NjcmlwdD5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuJztcblxufVxucmV0dXJuIF9fcFxufTtcbnRoaXNbXCJGYXN0Q2FzdFwiXVtcInRlbXBsYXRlc1wiXVtcInJzc1wiXSA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJywgX19lID0gXy5lc2NhcGUsIF9faiA9IEFycmF5LnByb3RvdHlwZS5qb2luO1xuZnVuY3Rpb24gcHJpbnQoKSB7IF9fcCArPSBfX2ouY2FsbChhcmd1bWVudHMsICcnKSB9XG53aXRoIChvYmopIHtcbl9fcCArPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHJzcyB4bWxuczphdG9tPVwiaHR0cDovL3d3dy53My5vcmcvMjAwNS9BdG9tXCIgeG1sbnM6aXR1bmVzPVwiaHR0cDovL3d3dy5pdHVuZXMuY29tL2R0ZHMvcG9kY2FzdC0xLjAuZHRkXCIgdmVyc2lvbj1cIjIuMFwiPlxcbiAgPGNoYW5uZWw+XFxuICAgIDxhdG9tOmxpbmsgaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9mZWVkLnJzc1wiIHJlbD1cInNlbGZcIiB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiLz5cXG4gICAgPHRpdGxlPicgK1xuX19lKCBwb2RjYXN0LnRpdGxlICkgK1xuJzwvdGl0bGU+XFxuICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9pbmRleC5odG1sPC9saW5rPlxcbiAgICA8cHViRGF0ZT4nICtcbl9fZSggcmZjMjgyMigpICkgK1xuJzwvcHViRGF0ZT5cXG4gICAgPGxhc3RCdWlsZERhdGU+JyArXG5fX2UoIHJmYzI4MjIoKSApICtcbic8L2xhc3RCdWlsZERhdGU+XFxuICAgIDx0dGw+NjA8L3R0bD5cXG4gICAgPGxhbmd1YWdlPmVuPC9sYW5ndWFnZT5cXG4gICAgPGNvcHlyaWdodD5BbGwgcmlnaHRzIHJlc2VydmVkPC9jb3B5cmlnaHQ+XFxuICAgIDx3ZWJNYXN0ZXI+JyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbidAZmFzdC1jYXN0Lm5ldCAoJyArXG5fX2UoIHBvZGNhc3QuYXV0aG9yICkgK1xuJyk8L3dlYk1hc3Rlcj5cXG4gICAgPGRlc2NyaXB0aW9uPicgK1xuX19lKCBwb2RjYXN0LmRlc2NyaXB0aW9uICkgK1xuJzwvZGVzY3JpcHRpb24+XFxuICAgIDxpdHVuZXM6bmV3LWZlZWQtdXJsPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9mZWVkLnJzczwvaXR1bmVzOm5ldy1mZWVkLXVybD5cXG4gICAgPGl0dW5lczpzdWJ0aXRsZT4nICtcbl9fZSggcG9kY2FzdC5zdWJ0aXRsZSApICtcbic8L2l0dW5lczpzdWJ0aXRsZT5cXG4gICAgPGl0dW5lczpvd25lcj5cXG4gICAgICA8aXR1bmVzOm5hbWU+JyArXG5fX2UoIHBvZGNhc3QuYXV0aG9yICkgK1xuJzwvaXR1bmVzOm5hbWU+XFxuICAgICAgPGl0dW5lczplbWFpbD4nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJ0BmYXN0LWNhc3QubmV0PC9pdHVuZXM6ZW1haWw+XFxuICAgIDwvaXR1bmVzOm93bmVyPlxcbiAgICA8aXR1bmVzOmF1dGhvcj4nICtcbl9fZSggcG9kY2FzdC5hdXRob3IgKSArXG4nPC9pdHVuZXM6YXV0aG9yPlxcbiAgICA8aXR1bmVzOmV4cGxpY2l0PicgK1xuX19lKCBwb2RjYXN0LmlzX2V4cGxpY2l0ID8gJ3llcycgOiAnbm8nICkgK1xuJzwvaXR1bmVzOmV4cGxpY2l0PlxcbiAgICA8aXR1bmVzOmltYWdlIGhyZWY9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvbG9nby5qcGdcIi8+XFxuICAgIDxpbWFnZT5cXG4gICAgICA8dXJsPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9sb2dvLmpwZzwvdXJsPlxcbiAgICAgIDx0aXRsZT4nICtcbl9fZSggcG9kY2FzdC50aXRsZSApICtcbic8L3RpdGxlPlxcbiAgICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9pbmRleC5odG1sPC9saW5rPlxcbiAgICA8L2ltYWdlPlxcbiAgICAnO1xuIF8uZWFjaChbJ3ByaW1hcnlfY2F0ZWdvcnknLCAnc2Vjb25kYXJ5X2NhdGVnb3J5J10sIGZ1bmN0aW9uKGspIHsgO1xuX19wICs9ICdcXG4gICAgICAnO1xuIHZhciBwYXJ0cyA9IHBvZGNhc3Rba10uc3BsaXQoL1xcfC8pOyA7XG5fX3AgKz0gJ1xcbiAgXFx0XFx0PGl0dW5lczpjYXRlZ29yeSB0ZXh0PVwiJyArXG5fX2UoIHBhcnRzWzBdICkgK1xuJ1wiPlxcbiAgXFx0XFx0XFx0JztcbiBpZihwYXJ0cy5sZW5ndGg+MSkgeyA7XG5fX3AgKz0gJ1xcbiAgXFx0XFx0XFx0XFx0PGl0dW5lczpjYXRlZ29yeSB0ZXh0PVwiJyArXG5fX2UoIHBhcnRzWzFdICkgK1xuJ1wiLz5cXG4gIFxcdFxcdFxcdCc7XG4gfSA7XG5fX3AgKz0gJ1xcbiAgXFx0XFx0PC9pdHVuZXM6Y2F0ZWdvcnk+XFxuICAgICc7XG4gfSkgO1xuX19wICs9ICdcXG5cXHRcXHQnO1xuIF8uZWFjaChvcmRlckJ5TWFnaWMocG9kY2FzdC5lcGlzb2RlcyksIGZ1bmN0aW9uKGVwaXNvZGUpIHtcbiAgICAgICAgaWYoIWVwaXNvZGUucHVibGlzaGVkX2F0KSByZXR1cm47XG4gICAgICAgIDtcbl9fcCArPSAnXFxuXFx0XFx0ICAgIDxpdGVtPlxcblxcdFxcdCAgICAgIDxndWlkIGlzUGVybWFMaW5rPVwiZmFsc2VcIj4nICtcbl9fZSggZXBpc29kZS5ndWlkICkgK1xuJzwvZ3VpZD5cXG5cXHRcXHQgICAgICA8dGl0bGU+JyArXG5fX2UoIHNwcmludGYoXCIlMDNkXCIsIGVwaXNvZGUubnVtYmVyKSApICtcbicgLSAnICtcbl9fZSggZXBpc29kZS50aXRsZSApICtcbic8L3RpdGxlPlxcblxcdFxcdCAgICAgIDxwdWJEYXRlPicgK1xuX19lKCByZmMyODIyKGVwaXNvZGUucHVibGlzaGVkX2F0KSApICtcbic8L3B1YkRhdGU+XFxuXFx0XFx0ICAgICAgPGxpbms+aHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2VwaXNvZGVzLycgK1xuX19lKCBlcGlzb2RlLnNsdWcgKSArXG4nLzwvbGluaz5cXG5cXHRcXHQgICAgICA8aXR1bmVzOmR1cmF0aW9uPicgK1xuX19lKCBlcGlzb2RlLmR1cmF0aW9uX21zLnRvSEhNTVNTKCkgKSArXG4nPC9pdHVuZXM6ZHVyYXRpb24+XFxuXFx0XFx0ICAgICAgPGl0dW5lczphdXRob3I+QmVuIEFsbGZyZWU8L2l0dW5lczphdXRob3I+XFxuXFx0XFx0ICAgICAgPGl0dW5lczpleHBsaWNpdD55ZXM8L2l0dW5lczpleHBsaWNpdD5cXG5cXHRcXHQgICAgICA8aXR1bmVzOnN1bW1hcnk+JyArXG5fX2UoIGVwaXNvZGUuZGVzY3JpcHRpb24gKSArXG4nPC9pdHVuZXM6c3VtbWFyeT5cXG5cXHRcXHQgICAgICA8aXR1bmVzOnN1YnRpdGxlPicgK1xuX19lKCBlcGlzb2RlLmRlc2NyaXB0aW9uICkgK1xuJzwvaXR1bmVzOnN1YnRpdGxlPlxcblxcdFxcdCAgICAgIDxkZXNjcmlwdGlvbj4nICtcbl9fZSggZXBpc29kZS5kZXNjcmlwdGlvbiApICtcbic8L2Rlc2NyaXB0aW9uPlxcblxcdFxcdCAgICAgIDxlbmNsb3N1cmUgdHlwZT1cImF1ZGlvL21wNFwiIHVybD1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9lcGlzb2Rlcy8nICtcbl9fZSggZXBpc29kZS5zbHVnICkgK1xuJy8nICtcbl9fZSggZXBpc29kZS5zbHVnICkgK1xuJy5tNGFcIiBsZW5ndGg9XCInICtcbl9fZSggZXBpc29kZS5sZW5ndGhfYnl0ZXMgKSArXG4nXCIvPlxcblxcdFxcdCAgICAgIDxpdHVuZXM6aW1hZ2UgaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9sb2dvLmpwZ1wiLz5cXG5cXHRcXHQgICAgPC9pdGVtPlxcblxcdFxcdCc7XG4gfSkgO1xuX19wICs9ICdcXG4gIDwvY2hhbm5lbD5cXG48L3Jzcz4nO1xuXG59XG5yZXR1cm4gX19wXG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
