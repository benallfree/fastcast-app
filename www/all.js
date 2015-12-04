(function() {
  window.is_app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;

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

  if (is_app) {
    document.addEventListener('deviceready', boot_angular, false);
  } else {
    $(function() {
      return boot_angular();
    });
  }

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
'/index.html" />\n    <meta property="og:type"               content="fastcastapp:podcast" />\n    <meta property="og:title"              content="' +
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
'/index.html" data-layout="button"></div>\n        </div>\n      </div>\n      <audio controls\n      \t<source src="http://www.fast-cast.net/podcasts/' +
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
'/index.html" data-numposts="10"></div>\n\n    <script crossorigin="anonymous" integrity="sha256-KXn5puMvxCw+dAYznun+drMdG1IFl3agK0p/pqT9KAo=" src="https://cdn.jsdelivr.net/bootstrap/3.3.6/js/bootstrap.min.js"></script>\n  </body>\n</html>\n';

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
'</link>\n\t\t      <itunes:duration>' +
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
      this.log("event", name, args);
      this.options[name].apply(this, args);
      return this.options.onEvent(name, args);
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
                _this.log('recording stop requested');
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
          media.play();
          return media.seekTo(_this.scrub_point_ms);
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
      return this.is_recording = false;
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvYXBwLmNvZmZlZSIsIi9zb3VyY2UvYm9vdHN0cmFwLmNvZmZlZSIsImpzdC5qcyIsIi9zb3VyY2Uvc3RhdGljX2NhdGVnb3JpZXMuY29mZmVlIiwiL3NvdXJjZS91dGlsLmNvZmZlZSIsIi9zb3VyY2UvY2xhc3Nlcy9jbGFzc2VzL1JlY29yZGVyLmNvZmZlZSIsIi9zb3VyY2UvY2xhc3Nlcy9jbGFzc2VzL1VwbG9hZFdvcmtlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9FcGlzb2RlQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0ZpbmFsaXplQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0ZpbmlzaENvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9Ib21lQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL1BvZGNhc3RTZXR0aW5nc0NvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9SZWNvcmRDb250cm9sbGVyLmNvZmZlZSIsIi9zb3VyY2UvY29udHJvbGxlcnMvY29udHJvbGxlcnMvU2V0dGluZ3NDb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBYixDQUFxQixTQUFyQixDQUFBLEtBQW1DLENBQUMsQ0FBcEMsSUFBMEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFiLENBQXFCLFVBQXJCLENBQUEsS0FBb0MsQ0FBQzs7RUFFL0YsTUFBTSxDQUFDLEdBQVAsR0FBYSxP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RyxDQUFDLE1BQUosQ0FBQTtVQUZ3QixDQUgxQjtTQURVLEVBRGQ7T0FBQSxNQUFBO2VBVUUsR0FBRyxDQUFDLE1BQUosQ0FBQSxFQVZGOztJQURjO0VBaEVpQixDQUFuQztBQUFBOzs7O0FDQUE7RUFBQSxHQUFHLENBQUMsVUFBSixDQUFlLG9CQUFmLEVBQXFDLFNBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsU0FBaEIsRUFBMkIsWUFBM0IsRUFBeUMsTUFBekMsRUFBaUQsaUJBQWpELEVBQW9FLG9CQUFwRSxFQUEwRixXQUExRixHQUFBLENBQXJDO0FBQUEiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmlzX2FwcCA9IGRvY3VtZW50LlVSTC5pbmRleE9mKCdodHRwOi8vJykgPT0gLTEgYW5kIGRvY3VtZW50LlVSTC5pbmRleE9mKCdodHRwczovLycpID09IC0xXG5cbndpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnZmFzdGNhc3QnLCBbXG4gICdpb25pYydcbiAgJ25nQ29yZG92YScsXG4gICduZ0lPUzlVSVdlYlZpZXdQYXRjaCcsXG4gICdqckNyb3AnLFxuICAnbW9ub3NwYWNlZC5lbGFzdGljJyxcbl0pXG5cbi5jb25maWcoKCRpbnRlcnBvbGF0ZVByb3ZpZGVyLCAkaW9uaWNDb25maWdQcm92aWRlcikgLT5cbiAgJGludGVycG9sYXRlUHJvdmlkZXIuc3RhcnRTeW1ib2woJzwlJykuZW5kU3ltYm9sICclPidcbiAgJGlvbmljQ29uZmlnUHJvdmlkZXIudmlld3Muc3dpcGVCYWNrRW5hYmxlZChmYWxzZSlcbilcblxuLnJ1bigoJGlvbmljUGxhdGZvcm0pIC0+XG4gICRpb25pY1BsYXRmb3JtLnJlYWR5IC0+XG4gICAgIyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgIyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgd2luZG93LmNvcmRvdmEgYW5kIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmRcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIgdHJ1ZVxuICAgIGlmIHdpbmRvdy5TdGF0dXNCYXJcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKVxuKVxuXG4uZmlsdGVyKCdudW1iZXJGaXhlZExlbicsIC0+XG4gIChuLCBsZW4pIC0+XG4gICAgc3ByaW50ZiAnJTAnICsgbGVuICsgJ2QnLCBuXG4pXG5cbi5maWx0ZXIoJ29yZGVyQnlNYWdpYycsIC0+IFxuICAoZXBpc29kZXMpIC0+XG4gICAgb3JkZXJCeU1hZ2ljKGVwaXNvZGVzKVxuKVxuXG4uY29uZmlnKFsnbXNkRWxhc3RpY0NvbmZpZycsIChtc2RFbGFzdGljQ29uZmlnKSAtPlxuICBtc2RFbGFzdGljQ29uZmlnLmFwcGVuZCA9ICdcXG4nXG5dKVxuXG4uY29uZmlnKCgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSAtPlxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsXG4gICAgdXJsOiAnLydcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCdcbiAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInKVxuICAuc3RhdGUoJ2VwaXNvZGUnLFxuICAgIGNhY2hlOiBmYWxzZVxuICAgIHVybDogJy9lcGlzb2RlJ1xuICAgIHRlbXBsYXRlOiAnPGlvbi1uYXYtdmlldz48L2lvbi1uYXYtdmlldz4nXG4gICAgY29udHJvbGxlcjogJ0VwaXNvZGVDb250cm9sbGVyJ1xuICAgIGFic3RyYWN0OiB0cnVlKVxuICAgIC5zdGF0ZSgnZXBpc29kZS5yZWNvcmQnLFxuICAgICAgdXJsOiAnL3JlY29yZCdcbiAgICAgIHRlbXBsYXRlVXJsOiAnZXBpc29kZS9yZWNvcmQuaHRtbCdcbiAgICAgIGNvbnRyb2xsZXI6ICdSZWNvcmRDb250cm9sbGVyJ1xuICAgICAgcGFyZW50OiAnZXBpc29kZScpXG4gICAgLnN0YXRlKCdlcGlzb2RlLmZpbmFsaXplJyxcbiAgICAgIHVybDogJy9maW5hbGl6ZSdcbiAgICAgIHRlbXBsYXRlVXJsOiAnZXBpc29kZS9maW5hbGl6ZS5odG1sJ1xuICAgICAgY29udHJvbGxlcjogJ0ZpbmFsaXplQ29udHJvbGxlcidcbiAgICAgIHBhcmVudDogJ2VwaXNvZGUnKVxuICAgIC5zdGF0ZSgnZXBpc29kZS5maW5pc2gnLFxuICAgICAgdXJsOiAnL2ZpbmlzaCdcbiAgICAgIHRlbXBsYXRlVXJsOiAnZXBpc29kZS9maW5pc2guaHRtbCdcbiAgICAgIGNvbnRyb2xsZXI6ICdGaW5pc2hDb250cm9sbGVyJ1xuICAgICAgcGFyZW50OiAnZXBpc29kZScpXG4gIC5zdGF0ZSgnc2V0dGluZ3MnLFxuICAgIHVybDogJy9zZXR0aW5ncydcbiAgICB0ZW1wbGF0ZTogJzxpb24tbmF2LXZpZXc+PC9pb24tbmF2LXZpZXc+J1xuICAgIGNvbnRyb2xsZXI6ICdTZXR0aW5nc0NvbnRyb2xsZXInXG4gICAgYWJzdHJhY3Q6IHRydWUpXG4gICAgLnN0YXRlKCdzZXR0aW5ncy5wb2RjYXN0JyxcbiAgICAgIHVybDogJy9wb2RjYXN0J1xuICAgICAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy9wb2RjYXN0Lmh0bWwnXG4gICAgICBjb250cm9sbGVyOiAnUG9kY2FzdFNldHRpbmdzQ29udHJvbGxlcidcbiAgICAgIHBhcmVudDogJ3NldHRpbmdzJylcbiAgICBcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSAnLydcbilcbiIsImJvb3RfYW5ndWxhciA9IC0+XG4gIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpXG4gIGFuZ3VsYXIuYm9vdHN0cmFwIGRvbUVsZW1lbnQsIFsgJ2Zhc3RjYXN0JyBdXG4gIFxuaWYgaXNfYXBwXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ2RldmljZXJlYWR5JywgYm9vdF9hbmd1bGFyLCBmYWxzZVxuZWxzZVxuICAkIC0+IGJvb3RfYW5ndWxhcigpXG4iLCJ0aGlzW1wiRmFzdENhc3RcIl0gPSB0aGlzW1wiRmFzdENhc3RcIl0gfHwge307XG50aGlzW1wiRmFzdENhc3RcIl1bXCJ0ZW1wbGF0ZXNcIl0gPSB0aGlzW1wiRmFzdENhc3RcIl1bXCJ0ZW1wbGF0ZXNcIl0gfHwge307XG50aGlzW1wiRmFzdENhc3RcIl1bXCJ0ZW1wbGF0ZXNcIl1bXCJlcGlzb2RlXCJdID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnLCBfX2UgPSBfLmVzY2FwZSwgX19qID0gQXJyYXkucHJvdG90eXBlLmpvaW47XG5mdW5jdGlvbiBwcmludCgpIHsgX19wICs9IF9fai5jYWxsKGFyZ3VtZW50cywgJycpIH1cbndpdGggKG9iaikge1xuX19wICs9ICc8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVwiZW5cIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCI+XFxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgLCB1c2VyLXNjYWxhYmxlPW5vXCI+XFxuICAgIDxtZXRhIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgICAgICAgICAgICAgY29udGVudD1cIjkzNzU5MTQ1Mjk0MzgwM1wiLz5cXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiAgICAgICAgICAgICAgICBjb250ZW50PVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUpICtcbicvZXBpc29kZXMvJyArXG5fX2UoIGVwaXNvZGUuc2x1ZyApICtcbicvaW5kZXguaHRtbFwiIC8+XFxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiICAgICAgICAgICAgICAgY29udGVudD1cImZhc3RjYXN0YXBwOnBvZGNhc3RcIiAvPlxcbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgICAgICAgICAgICAgIGNvbnRlbnQ9XCInICtcbl9fZSggc3ByaW50ZihcIiUwM2QgLSAlc1wiLCBlcGlzb2RlLm51bWJlciwgZXBpc29kZS50aXRsZSkgKSArXG4nXCIgLz5cXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiICAgICAgICBjb250ZW50PVwiJyArXG5fX2UoIGVwaXNvZGUuZGVzY3JpcHRpb24gKSArXG4nXCIgLz5cXG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiICAgICAgICAgICAgICBjb250ZW50PVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2xvZ28uanBnXCIgLz5cXG5cXG4gICAgPHRpdGxlPicgK1xuX19lKCBzcHJpbnRmKFwiJTAzZCAtICVzXCIsIGVwaXNvZGUubnVtYmVyLCBlcGlzb2RlLnRpdGxlKSApICtcbicgfCAnICtcbl9fZSggcG9kY2FzdC50aXRsZSApICtcbic8L3RpdGxlPlxcblxcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiBpbnRlZ3JpdHk9XCJzaGEyNTYtN3M1dURHVzNBSHF3Nnh0Sm1OTnRyK09CUkpVbGdrTkpFbzc4UDRiMHlSdz1cIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2Jvb3RzdHJhcC8zLjMuNi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIj5cXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgaW50ZWdyaXR5PVwic2hhMjU2LW84Yk0wWjVjRnZydnZ2UXAwRUpGaTRMSUN2QkE5RkN4N2lDTnVvalZzTjg9XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ib290c3RyYXAvMy4zLjYvY3NzL2Jvb3RzdHJhcC10aGVtZS5taW4uY3NzXCI+XFxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Fzc2V0cy92MS9jc3MvZXBpc29kZS5jc3NcIj5cXG4gICAgPHNjcmlwdCBjcm9zc29yaWdpbj1cImFub255bW91c1wiIGludGVncml0eT1cInNoYTI1Ni1JbVF2SUNWMzhMb3ZJc3ZsYTJ6eWthQ1RkRWgxWjgwMVkrRFNvcDkxd01VPVwiIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9qcXVlcnkvMi4xLjQvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDxkaXYgaWQ9XCJmYi1yb290XCI+PC9kaXY+XFxuICAgIDxzY3JpcHQ+KGZ1bmN0aW9uKGQsIHMsIGlkKSB7XFxuICAgICAgdmFyIGpzLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xcbiAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xcbiAgICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xcbiAgICAgIGpzLnNyYyA9IFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanMjeGZibWw9MSZ2ZXJzaW9uPXYyLjUmYXBwSWQ9MTQ5NzE1OTY0MzkwMDIwNFwiO1xcbiAgICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcXG4gICAgfShkb2N1bWVudCwgXFwnc2NyaXB0XFwnLCBcXCdmYWNlYm9vay1qc3Nka1xcJykpOzwvc2NyaXB0PiAgICBcXG4gICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWQtdG9wXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxcbiAgICAgICAgPCEtLSBCcmFuZCBhbmQgdG9nZ2xlIGdldCBncm91cGVkIGZvciBiZXR0ZXIgbW9iaWxlIGRpc3BsYXkgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxcbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+JyArXG5fX2UoIHBvZGNhc3QudGl0bGUgKSArXG4nPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+PCEtLSAvLmNvbnRhaW5lci1mbHVpZCAtLT5cXG4gICAgPC9uYXY+ICAgIFxcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiPlxcbiAgICAgICAgPGgxPicgK1xuX19lKCBzcHJpbnRmKFwiJTAzZCAtICVzXCIsIGVwaXNvZGUubnVtYmVyLCBlcGlzb2RlLnRpdGxlKSApICtcbic8L2gxPlxcbiAgICAgICAgPHA+PGltZyBzcmM9XCIuLi8uLi9sb2dvLmpwZ1wiLz4nICtcbl9fZSggZXBpc29kZS5kZXNjcmlwdGlvbiApICtcbic8L3A+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiYXVkaW8taGVhZGVyIHRleHQtY2VudGVyXCI+XFxuICAgICAgICAnO1xuIGlmKHBvZGNhc3QuaXR1bmVzX3VybCkgeyA7XG5fX3AgKz0gJ1xcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbiBpY29uLWl0dW5lc1wiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XCInICtcbl9fZSggcG9kY2FzdC5pdHVuZXNfdXJsLnJlcGxhY2UoL2h0dHBzPzovLCAnaXRtczonKSApICtcbidcIj48aW1nIHNyYz1cIi9hc3NldHMvdjEvaW1nL2l0dW5lcy1idXR0b24ucG5nXCIvPjwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAnO1xuIH0gO1xuX19wICs9ICdcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIGljb24tcnNzXCI+XFxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvZmVlZC5yc3NcIj48aW1nIHNyYz1cIi9hc3NldHMvdjEvaW1nL3Jzcy1idXR0b24ucG5nXCIvPjwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24gaWNvbi10d2l0dGVyXCI+XFxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlXCIgY2xhc3M9XCJ0d2l0dGVyLXNoYXJlLWJ1dHRvblwie2NvdW50fSBkYXRhLXRleHQ9XCInICtcbl9fZSggc3ByaW50ZihcIiUwM2QgLSAlc1wiLCBlcGlzb2RlLm51bWJlciwgZXBpc29kZS50aXRsZSkgKSArXG4nXCI+VHdlZXQ8L2E+XFxuICAgICAgICAgIDxzY3JpcHQ+IWZ1bmN0aW9uKGQscyxpZCl7dmFyIGpzLGZqcz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLHA9L15odHRwOi8udGVzdChkLmxvY2F0aW9uKT9cXCdodHRwXFwnOlxcJ2h0dHBzXFwnO2lmKCFkLmdldEVsZW1lbnRCeUlkKGlkKSl7anM9ZC5jcmVhdGVFbGVtZW50KHMpO2pzLmlkPWlkO2pzLnNyYz1wK1xcJzovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcXCc7ZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLGZqcyk7fX0oZG9jdW1lbnQsIFxcJ3NjcmlwdFxcJywgXFwndHdpdHRlci13anNcXCcpOzwvc2NyaXB0PiAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24gaWNvbi1mYWNlYm9va1wiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmItc2hhcmUtYnV0dG9uXCIgZGF0YS1ocmVmPVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2VwaXNvZGVzLycgK1xuX19lKCBlcGlzb2RlLnNsdWcgKSArXG4nL2luZGV4Lmh0bWxcIiBkYXRhLWxheW91dD1cImJ1dHRvblwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGF1ZGlvIGNvbnRyb2xzXFxuICAgICAgXFx0PHNvdXJjZSBzcmM9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvZXBpc29kZXMvJyArXG5fX2UoIGVwaXNvZGUuc2x1ZyApICtcbicvJyArXG5fX2UoIGVwaXNvZGUuc2x1ZyApICtcbicubTRhXCIgdHlwZT1cImF1ZGlvL21wZWdcIiAvPlxcbiAgICAgIDwvYXVkaW8+XFxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBzaG93LWluZm9cIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNCB0ZXh0LWxlZnRcIj5cXG4gICAgICAgICAgJyArXG5fX2UoIHBvZGNhc3QuYXV0aG9yICkgK1xuJ1xcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTggdGV4dC1yaWdodFwiPlxcbiAgICAgICAgICAnICtcbl9fZSggcmZjMjgyMihlcGlzb2RlLnB1Ymxpc2hlZF9hdCkgKSArXG4nXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICBcXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XCJmYi1jb21tZW50c1wiIGRhdGEtaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9lcGlzb2Rlcy8nICtcbl9fZSggZXBpc29kZS5zbHVnICkgK1xuJy9pbmRleC5odG1sXCIgZGF0YS1udW1wb3N0cz1cIjEwXCI+PC9kaXY+XFxuXFxuICAgIDxzY3JpcHQgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiBpbnRlZ3JpdHk9XCJzaGEyNTYtS1huNXB1TXZ4Q3crZEFZem51bitkck1kRzFJRmwzYWdLMHAvcHFUOUtBbz1cIiBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvYm9vdHN0cmFwLzMuMy42L2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuJztcblxufVxucmV0dXJuIF9fcFxufTtcbnRoaXNbXCJGYXN0Q2FzdFwiXVtcInRlbXBsYXRlc1wiXVtcInJzc1wiXSA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJywgX19lID0gXy5lc2NhcGUsIF9faiA9IEFycmF5LnByb3RvdHlwZS5qb2luO1xuZnVuY3Rpb24gcHJpbnQoKSB7IF9fcCArPSBfX2ouY2FsbChhcmd1bWVudHMsICcnKSB9XG53aXRoIChvYmopIHtcbl9fcCArPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHJzcyB4bWxuczphdG9tPVwiaHR0cDovL3d3dy53My5vcmcvMjAwNS9BdG9tXCIgeG1sbnM6aXR1bmVzPVwiaHR0cDovL3d3dy5pdHVuZXMuY29tL2R0ZHMvcG9kY2FzdC0xLjAuZHRkXCIgdmVyc2lvbj1cIjIuMFwiPlxcbiAgPGNoYW5uZWw+XFxuICAgIDxhdG9tOmxpbmsgaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9mZWVkLnJzc1wiIHJlbD1cInNlbGZcIiB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiLz5cXG4gICAgPHRpdGxlPicgK1xuX19lKCBwb2RjYXN0LnRpdGxlICkgK1xuJzwvdGl0bGU+XFxuICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9pbmRleC5odG1sPC9saW5rPlxcbiAgICA8cHViRGF0ZT4nICtcbl9fZSggcmZjMjgyMigpICkgK1xuJzwvcHViRGF0ZT5cXG4gICAgPGxhc3RCdWlsZERhdGU+JyArXG5fX2UoIHJmYzI4MjIoKSApICtcbic8L2xhc3RCdWlsZERhdGU+XFxuICAgIDx0dGw+NjA8L3R0bD5cXG4gICAgPGxhbmd1YWdlPmVuPC9sYW5ndWFnZT5cXG4gICAgPGNvcHlyaWdodD5BbGwgcmlnaHRzIHJlc2VydmVkPC9jb3B5cmlnaHQ+XFxuICAgIDx3ZWJNYXN0ZXI+JyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbidAZmFzdC1jYXN0Lm5ldCAoJyArXG5fX2UoIHBvZGNhc3QuYXV0aG9yICkgK1xuJyk8L3dlYk1hc3Rlcj5cXG4gICAgPGRlc2NyaXB0aW9uPicgK1xuX19lKCBwb2RjYXN0LmRlc2NyaXB0aW9uICkgK1xuJzwvZGVzY3JpcHRpb24+XFxuICAgIDxpdHVuZXM6bmV3LWZlZWQtdXJsPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9mZWVkLnJzczwvaXR1bmVzOm5ldy1mZWVkLXVybD5cXG4gICAgPGl0dW5lczpzdWJ0aXRsZT4nICtcbl9fZSggcG9kY2FzdC5zdWJ0aXRsZSApICtcbic8L2l0dW5lczpzdWJ0aXRsZT5cXG4gICAgPGl0dW5lczpvd25lcj5cXG4gICAgICA8aXR1bmVzOm5hbWU+JyArXG5fX2UoIHBvZGNhc3QuYXV0aG9yICkgK1xuJzwvaXR1bmVzOm5hbWU+XFxuICAgICAgPGl0dW5lczplbWFpbD4nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJ0BmYXN0LWNhc3QubmV0PC9pdHVuZXM6ZW1haWw+XFxuICAgIDwvaXR1bmVzOm93bmVyPlxcbiAgICA8aXR1bmVzOmF1dGhvcj4nICtcbl9fZSggcG9kY2FzdC5hdXRob3IgKSArXG4nPC9pdHVuZXM6YXV0aG9yPlxcbiAgICA8aXR1bmVzOmV4cGxpY2l0PicgK1xuX19lKCBwb2RjYXN0LmlzX2V4cGxpY2l0ID8gJ3llcycgOiAnbm8nICkgK1xuJzwvaXR1bmVzOmV4cGxpY2l0PlxcbiAgICA8aXR1bmVzOmltYWdlIGhyZWY9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvbG9nby5qcGdcIi8+XFxuICAgIDxpbWFnZT5cXG4gICAgICA8dXJsPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9sb2dvLmpwZzwvdXJsPlxcbiAgICAgIDx0aXRsZT4nICtcbl9fZSggcG9kY2FzdC50aXRsZSApICtcbic8L3RpdGxlPlxcbiAgICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9pbmRleC5odG1sPC9saW5rPlxcbiAgICA8L2ltYWdlPlxcbiAgICAnO1xuIF8uZWFjaChbJ3ByaW1hcnlfY2F0ZWdvcnknLCAnc2Vjb25kYXJ5X2NhdGVnb3J5J10sIGZ1bmN0aW9uKGspIHsgO1xuX19wICs9ICdcXG4gICAgICAnO1xuIHZhciBwYXJ0cyA9IHBvZGNhc3Rba10uc3BsaXQoL1xcfC8pOyA7XG5fX3AgKz0gJ1xcbiAgXFx0XFx0PGl0dW5lczpjYXRlZ29yeSB0ZXh0PVwiJyArXG5fX2UoIHBhcnRzWzBdICkgK1xuJ1wiPlxcbiAgXFx0XFx0XFx0JztcbiBpZihwYXJ0cy5sZW5ndGg+MSkgeyA7XG5fX3AgKz0gJ1xcbiAgXFx0XFx0XFx0XFx0PGl0dW5lczpjYXRlZ29yeSB0ZXh0PVwiJyArXG5fX2UoIHBhcnRzWzFdICkgK1xuJ1wiLz5cXG4gIFxcdFxcdFxcdCc7XG4gfSA7XG5fX3AgKz0gJ1xcbiAgXFx0XFx0PC9pdHVuZXM6Y2F0ZWdvcnk+XFxuICAgICc7XG4gfSkgO1xuX19wICs9ICdcXG5cXHRcXHQnO1xuIF8uZWFjaChvcmRlckJ5TWFnaWMocG9kY2FzdC5lcGlzb2RlcyksIGZ1bmN0aW9uKGVwaXNvZGUpIHtcbiAgICAgICAgaWYoIWVwaXNvZGUucHVibGlzaGVkX2F0KSByZXR1cm47XG4gICAgICAgIDtcbl9fcCArPSAnXFxuXFx0XFx0ICAgIDxpdGVtPlxcblxcdFxcdCAgICAgIDxndWlkIGlzUGVybWFMaW5rPVwiZmFsc2VcIj4nICtcbl9fZSggZXBpc29kZS5ndWlkICkgK1xuJzwvZ3VpZD5cXG5cXHRcXHQgICAgICA8dGl0bGU+JyArXG5fX2UoIHNwcmludGYoXCIlMDNkXCIsIGVwaXNvZGUubnVtYmVyKSApICtcbicgLSAnICtcbl9fZSggZXBpc29kZS50aXRsZSApICtcbic8L3RpdGxlPlxcblxcdFxcdCAgICAgIDxwdWJEYXRlPicgK1xuX19lKCByZmMyODIyKGVwaXNvZGUucHVibGlzaGVkX2F0KSApICtcbic8L3B1YkRhdGU+XFxuXFx0XFx0ICAgICAgPGxpbms+aHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2VwaXNvZGVzLycgK1xuX19lKCBlcGlzb2RlLnNsdWcgKSArXG4nPC9saW5rPlxcblxcdFxcdCAgICAgIDxpdHVuZXM6ZHVyYXRpb24+JyArXG5fX2UoIGVwaXNvZGUuZHVyYXRpb25fbXMudG9ISE1NU1MoKSApICtcbic8L2l0dW5lczpkdXJhdGlvbj5cXG5cXHRcXHQgICAgICA8aXR1bmVzOmF1dGhvcj5CZW4gQWxsZnJlZTwvaXR1bmVzOmF1dGhvcj5cXG5cXHRcXHQgICAgICA8aXR1bmVzOmV4cGxpY2l0PnllczwvaXR1bmVzOmV4cGxpY2l0PlxcblxcdFxcdCAgICAgIDxpdHVuZXM6c3VtbWFyeT4nICtcbl9fZSggZXBpc29kZS5kZXNjcmlwdGlvbiApICtcbic8L2l0dW5lczpzdW1tYXJ5PlxcblxcdFxcdCAgICAgIDxpdHVuZXM6c3VidGl0bGU+JyArXG5fX2UoIGVwaXNvZGUuZGVzY3JpcHRpb24gKSArXG4nPC9pdHVuZXM6c3VidGl0bGU+XFxuXFx0XFx0ICAgICAgPGRlc2NyaXB0aW9uPicgK1xuX19lKCBlcGlzb2RlLmRlc2NyaXB0aW9uICkgK1xuJzwvZGVzY3JpcHRpb24+XFxuXFx0XFx0ICAgICAgPGVuY2xvc3VyZSB0eXBlPVwiYXVkaW8vbXA0XCIgdXJsPVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2VwaXNvZGVzLycgK1xuX19lKCBlcGlzb2RlLnNsdWcgKSArXG4nLycgK1xuX19lKCBlcGlzb2RlLnNsdWcgKSArXG4nLm00YVwiIGxlbmd0aD1cIicgK1xuX19lKCBlcGlzb2RlLmxlbmd0aF9ieXRlcyApICtcbidcIi8+XFxuXFx0XFx0ICAgICAgPGl0dW5lczppbWFnZSBocmVmPVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2xvZ28uanBnXCIvPlxcblxcdFxcdCAgICA8L2l0ZW0+XFxuXFx0XFx0JztcbiB9KSA7XG5fX3AgKz0gJ1xcbiAgPC9jaGFubmVsPlxcbjwvcnNzPic7XG5cbn1cbnJldHVybiBfX3Bcbn07Iiwid2luZG93LmNhdGVnb3JpZXMgPVxuICBcIkFydHNcIjpbXG4gICAgXCJEZXNpZ25cIlxuICAgIFwiRmFzaGlvbiAmIEJlYXV0eVwiXG4gICAgXCJGb29kXCJcbiAgICBcIkxpdGVyYXR1cmVcIlxuICAgIFwiUGVyZm9ybWluZyBBcnRzXCJcbiAgICBcIlZpc3VhbCBBcnRzXCJdXG4gIFwiQnVzaW5lc3NcIjpbXG4gICAgXCJCdXNpbmVzcyBOZXdzXCJcbiAgICBcIkNhcmVlcnNcIlxuICAgIFwiSW52ZXN0aW5nXCJcbiAgICBcIk1hbmFnZW1lbnQgJiBNYXJrZXRpbmdcIlxuICAgIFwiU2hvcHBpbmdcIl1cbiAgXCJDb21lZHlcIjpbXVxuICBcIkVkdWNhdGlvblwiOltcbiAgICBcIkVkdWNhdGlvbmFsIFRlY2hub2xvZ3lcIlxuICAgIFwiSGlnaGVyIEVkdWNhdGlvblwiXG4gICAgXCJLLTEyXCJcbiAgICBcIkxhbmd1YWdlIENvdXJzZXNcIlxuICAgIFwiVHJhaW5pbmdcIl1cbiAgXCJHYW1lcyAmIEhvYmJpZXNcIjpbXG4gICAgXCJBdXRvbW90aXZlXCJcbiAgICBcIkF2aWF0aW9uXCJcbiAgICBcIkhvYmJpZXNcIlxuICAgIFwiT3RoZXIgR2FtZXNcIlxuICAgIFwiVmlkZW8gR2FtZXNcIl1cbiAgXCJHb3Zlcm5tZW50ICYgT3JnYW5pemF0aW9uc1wiOltcbiAgICBcIkxvY2FsXCJcbiAgICBcIk5hdGlvbmFsXCJcbiAgICBcIk5vbi1Qcm9maXRcIlxuICAgIFwiUmVnaW9uYWxcIl1cbiAgXCJIZWFsdGhcIjpbXG4gICAgXCJBbHRlcm5hdGl2ZSBIZWFsdGhcIlxuICAgIFwiRml0bmVzcyAmIE51dHJpdGlvblwiXG4gICAgXCJTZWxmLUhlbHBcIlxuICAgIFwiU2V4dWFsaXR5XCJdXG4gIFwiS2lkcyAmIEZhbWlseVwiOltdXG4gIFwiTXVzaWNcIjpbXVxuICBcIk5ld3MgJiBQb2xpdGljc1wiOltdXG4gIFwiUmVsaWdpb24gJiBTcGlyaXR1YWxpdHlcIjpbXG4gICAgXCJCdWRkaGlzbVwiXG4gICAgXCJDaHJpc3RpYW5pdHlcIlxuICAgIFwiSGluZHVpc21cIlxuICAgIFwiSXNsYW1cIlxuICAgIFwiSnVkYWlzbVwiXG4gICAgXCJPdGhlclwiXG4gICAgXCJTcGlyaXR1YWxpdHlcIl1cbiAgXCJTY2llbmNlICYgTWVkaWNpbmVcIjpbXG4gICAgXCJNZWRpY2luZVwiXG4gICAgXCJOYXR1cmFsIFNjaWVuY2VzXCJcbiAgICBcIlNvY2lhbCBTY2llbmNlc1wiXVxuICBcIlNvY2lldHkgJiBDdWx0dXJlXCI6W1xuICAgIFwiSGlzdG9yeVwiXG4gICAgXCJQZXJzb25hbCBKb3VybmFsc1wiXG4gICAgXCJQaGlsb3NvcGh5XCJcbiAgICBcIlBsYWNlcyAmIFRyYXZlbFwiXVxuICBcIlNwb3J0cyAmIFJlY3JlYXRpb25cIjpbXG4gICAgXCJBbWF0ZXVyXCJcbiAgICBcIkNvbGxlZ2UgJiBIaWdoIFNjaG9vbFwiXG4gICAgXCJPdXRkb29yXCJcbiAgICBcIlByb2Zlc3Npb25hbFwiXVxuICBcIlRlY2hub2xvZ3lcIjpbXG4gICAgXCJHYWRnZXRzXCJcbiAgICBcIlRlY2ggTmV3c1wiXG4gICAgXCJQb2RjYXN0aW5nXCJcbiAgICBcIlNvZnR3YXJlIEhvdy1Ub1wiXVxuICBcIlRWICYgRmlsbVwiOltdXG4gICAgIiwiU3RyaW5nOjpzbHVnaWZ5ID0gLT5cbiAgQHRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoL1teXFx3XFwtXSsvZywgJycpLnJlcGxhY2UoL1xcLVxcLSsvZywgJy0nKS5yZXBsYWNlKC9eLSsvLCAnJykucmVwbGFjZSAvLSskLywgJydcbiAgIyBUcmltIC0gZnJvbSBlbmQgb2YgdGV4dFxuXG5OdW1iZXI6OnRvSEhNTVNTID0gLT5cbiAgc2hvd19tcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwIGFuZCBhcmd1bWVudHNbMF1cbiAgbXNfbnVtID0gTWF0aC5mbG9vcih0aGlzKVxuICBob3VycyA9IE1hdGguZmxvb3IobXNfbnVtIC8gMzYwMDAwMClcbiAgbWludXRlcyA9IE1hdGguZmxvb3IoKG1zX251bSAtIChob3VycyAqIDM2MDAwMDApKSAvIDYwMDAwKVxuICBzZWNvbmRzID0gTWF0aC5mbG9vcigobXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkgLSAobWludXRlcyAqIDYwMDAwKSkgLyAxMDAwKVxuICBtcyA9IG1zX251bSAtIChob3VycyAqIDM2MDAwMDApIC0gKG1pbnV0ZXMgKiA2MDAwMCkgLSAoc2Vjb25kcyAqIDEwMDApXG4gIHRpbWUgPSBzcHJpbnRmKCclMDJkOiUwMmQ6JTAyZCcsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKVxuICBpZiBzaG93X21zXG4gICAgdGltZSArPSBzcHJpbnRmKCcuJTAzZCcsIG1zKVxuICB0aW1lXG5cbk51bWJlcjo6aHVtYW5pemUgPSAtPlxuICBtc19udW0gPSBNYXRoLmZsb29yKHRoaXMpXG4gIGhvdXJzID0gTWF0aC5mbG9vcihtc19udW0gLyAzNjAwMDAwKVxuICBtaW51dGVzID0gTWF0aC5mbG9vcigobXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkpIC8gNjAwMDApXG4gIHNlY29uZHMgPSBNYXRoLmZsb29yKChtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSAtIChtaW51dGVzICogNjAwMDApKSAvIDEwMDApXG4gIG1zID0gbXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkgLSAobWludXRlcyAqIDYwMDAwKSAtIChzZWNvbmRzICogMTAwMClcbiAgdGltZSA9ICcnXG4gIGlmIGhvdXJzXG4gICAgdGltZSA9IHNwcmludGYoJyVkaCcsIGhvdXJzKVxuICBpZiBtaW51dGVzXG4gICAgdGltZSArPSBzcHJpbnRmKCclZG0nLCBtaW51dGVzKVxuICB0aW1lICs9IHNwcmludGYoJyVkcycsIE1hdGguY2VpbChzZWNvbmRzICsgbXMgLyAxMDAwLjApKVxuICB0aW1lXG5cblN0cmluZzo6c3ByaW50ZiA9IC0+XG4gIHNwcmludGYuYXBwbHkgdGhpcywgdGhpcywgYXJndW1lbnRzXG5cbndpbmRvdy5yZmMyODIyID0gKGRhdGUpLT5cbiAgZGF0ZSA9IGlmICFkYXRlIG9yIGRhdGUubmFtZSA9PSAnZGF0ZXRpbWUnIHRoZW4gbW9tZW50KCkgZWxzZSBkYXRlXG4gIG1vbWVudChkYXRlKS5mb3JtYXQgJ2RkZCwgREQgTU1NIFlZWVkgSEg6bW06c3MgWlonXG4gIFxud2luZG93Lm9yZGVyQnlNYWdpYyA9IChoYXNoKSAtPlxuICBhcnJheSA9IFtdXG4gIE9iamVjdC5rZXlzKGhhc2gpLmZvckVhY2ggKGtleSkgLT5cbiAgICBhcnJheS5wdXNoIGhhc2hba2V5XVxuICAgIHJldHVyblxuICAjIGFwcGx5IGEgY3VzdG9tIHNvcnRpbmcgZnVuY3Rpb25cbiAgYXJyYXkuc29ydCAoYSwgYikgLT5cbiAgICBpZiBhLnB1Ymxpc2hlZF9hdCBhbmQgIWIucHVibGlzaGVkX2F0XG4gICAgICByZXR1cm4gMVxuICAgIGlmICFhLnB1Ymxpc2hlZF9hdCBhbmQgYi5wdWJsaXNoZWRfYXRcbiAgICAgIHJldHVybiAtMVxuICAgICMgRWl0aGVyIGJvdGggYXJlIHB1Ymxpc2hlZCBvciBuZWl0aGVyIGlzIHB1Ymxpc2hlZFxuICAgIGlmIGEucHVibGlzaGVkX2F0IGFuZCBiLnB1Ymxpc2hlZF9hdFxuICAgICAgcmV0dXJuIGlmIGEucHVibGlzaGVkX2F0ID4gYi5wdWJsaXNoZWRfYXQgdGhlbiAtMSBlbHNlIDFcbiAgICBpZiBhLnJlY29yZGVkX2F0ID4gYi5yZWNvcmRlZF9hdCB0aGVuIC0xIGVsc2UgMVxuICBhcnJheVxuICAiLCJjbGFzcyBSZWNvcmRlclxuICBjb25zdHJ1Y3RvcjogKEBmbmFtZSwgb3B0aW9ucyktPlxuICAgIGRlZmF1bHRfb3B0aW9ucyA9XG4gICAgICBvblNjcnViVXBkYXRlOiAobXMpLT5cbiAgICAgIG9uRHVyYXRpb25VcGRhdGU6IChtcyktPlxuICAgICAgb25SZWNvcmRTdGFydDogLT5cbiAgICAgIG9uUmVjb3JkU3RvcDogLT5cbiAgICAgIG9uQXVkaW9FcnJvcjogLT5cbiAgICAgIG9uUGxheVN0YXJ0OiAtPlxuICAgICAgb25QbGF5U3RvcDogLT5cbiAgICAgIG9uRXZlbnQ6IChuYW1lLGFyZ3MuLi4pLT5cbiAgICAgIGRlYnVnOiB0cnVlXG4gICAgQG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZChkZWZhdWx0X29wdGlvbnMsIG9wdGlvbnMpXG4gICAgQHNjcnViX3BvaW50X21zID0gMFxuICAgIEBzdG9wKClcbiAgICBAZ2V0X2R1cmF0aW9uKClcbiAgICBcbiAgbG9nOiAoYXJncy4uLik9PlxuICAgIHJldHVybiB1bmxlc3MgQG9wdGlvbnMuZGVidWdcbiAgICBjb25zb2xlLmxvZy5hcHBseShALCBhcmdzKVxuXG4gIGV2ZW50OiAobmFtZSxhcmdzLi4uKSA9PlxuICAgIEBsb2coXCJldmVudFwiLCBuYW1lLCBhcmdzKVxuICAgIEBvcHRpb25zW25hbWVdLmFwcGx5KEAsYXJncylcbiAgICBAb3B0aW9ucy5vbkV2ZW50KG5hbWUsIGFyZ3MpXG5cbiAgbmV3X21lZGlhOiAocmVhZHlfY2IsIHN0YXR1c19jYiwgZXJyb3JfY2IpID0+XG4gICAgc3RhdHVzID0ge31cbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfTk9ORV0gPSAnTm9uZSdcbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfU1RBUlRJTkddID0gJ1N0YXJ0aW5nJ1xuICAgIHN0YXR1c1tNZWRpYS5NRURJQV9SVU5OSU5HXSA9ICdSdW5uaW5nJ1xuICAgIHN0YXR1c1tNZWRpYS5NRURJQV9QQVVTRURdID0gJ1BhdXNlZCdcbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfU1RPUFBFRF0gPSAnU3RvcHBlZCdcbiAgICBcbiAgICBtZWRpYSA9IG5ldyBNZWRpYShcbiAgICAgIEBmbmFtZSwgXG4gICAgICAoKCk9PlxuICAgICAgICBAbG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCBhY3Rpb24gXCIsIEBmbmFtZSlcbiAgICAgICksIFxuICAgICAgKChlcnIpID0+XG4gICAgICAgIEBsb2cgJ0F1ZGlvIEVycm9yOiAnICsgZXJyLmNvZGVcbiAgICAgICAgQGxvZyBlcnJcbiAgICAgICAgZXJyb3JfY2IobWVkaWEsZXJyKVxuICAgICAgKSwgXG4gICAgICAoKHN0YXQpPT5cbiAgICAgICAgQGxvZyhcIk1lZGlhIHN0YXR1c1wiLCBzdGF0LCBzdGF0dXNbc3RhdF0pXG4gICAgICAgIHN0YXR1c19jYihtZWRpYSxzdGF0KVxuICAgICAgKVxuICAgIClcbiAgICByZWFkeV9jYihtZWRpYSlcbiAgICBtZWRpYVxuXG4gIGdldF9kdXJhdGlvbjogKGNiKSA9PlxuICAgICMgR2V0IHRoZSBmaW5hbCBkdXJhdGlvbiBzaW5jZSBpdCBkb2Vzbid0IHJlZ2lzdGVyIGR1cmluZyByZWNvcmRpbmdcbiAgICBAbmV3X21lZGlhKFxuICAgICAgKChtZWRpYSk9PiAjIHJlYWR5XG4gICAgICAgIG1lZGlhLnNldFZvbHVtZSgwKVxuICAgICAgICBtZWRpYS5wbGF5KClcbiAgICAgICksXG4gICAgICAoKG1lZGlhLHN0YXR1cykgPT4gIyBzdGF0dXNcbiAgICAgICAgaWYgc3RhdHVzPT1NZWRpYS5NRURJQV9SVU5OSU5HXG4gICAgICAgICAgbWVkaWEuc3RvcCgpXG4gICAgICAgICAgQGR1cmF0aW9uX21zID0gbWVkaWEuZ2V0RHVyYXRpb24oKSoxMDAwXG4gICAgICAgICAgQGV2ZW50KCdvbkR1cmF0aW9uVXBkYXRlJywgQGR1cmF0aW9uX21zKVxuICAgICAgICAgIGlmIGNiXG4gICAgICAgICAgICBjYihAZHVyYXRpb25fbXMpXG4gICAgICAgIGlmIHN0YXR1cz09TWVkaWEuTUVESUFfU1RPUFBFRFxuICAgICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsZXJyb3IpPT4gI2Vycm9yXG4gICAgICApXG4gICAgKVxuICAgICAgICAgXG4gIHJlY29yZDogPT5cbiAgICBAbmV3X21lZGlhKFxuICAgICAgKChtZWRpYSk9PiAjIHJlYWR5XG4gICAgICAgIG1lZGlhLnN0YXJ0UmVjb3JkKClcbiAgICAgICksXG4gICAgICAoKG1lZGlhLHN0YXR1cyk9PiAjIHN0YXR1c1xuICAgICAgICBpZiBzdGF0dXMgPT0gTWVkaWEuTUVESUFfUlVOTklOR1xuICAgICAgICAgIEBsb2coJ3JlY29yZGluZycpXG4gICAgICAgICAgQGlzX3JlY29yZGluZyA9IHRydWVcbiAgICAgICAgICBAZHVyYXRpb25fbXMgPSAwXG4gICAgICAgICAgc3RhcnRfdGltZV9tcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgICAgdXBkYXRlX3JlY29yZCA9ID0+XG4gICAgICAgICAgICBAbG9nKCdyZWNvcmRpbmcgY2hlY2snKVxuICAgICAgICAgICAgaWYgIUBpc19yZWNvcmRpbmdcbiAgICAgICAgICAgICAgQGxvZygncmVjb3JkaW5nIHN0b3AgcmVxdWVzdGVkJylcbiAgICAgICAgICAgICAgbWVkaWEuc3RvcFJlY29yZCgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgY3VycmVudF9tcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgICAgICBAZHVyYXRpb25fbXMgPSBjdXJyZW50X21zIC0gc3RhcnRfdGltZV9tc1xuICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gQGR1cmF0aW9uX21zXG4gICAgICAgICAgICBAZXZlbnQoJ29uRHVyYXRpb25VcGRhdGUnLCBAZHVyYXRpb25fbXMpXG4gICAgICAgICAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAZHVyYXRpb25fbXMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZV9yZWNvcmQsIDEwMClcbiAgICAgICAgICB1cGRhdGVfcmVjb3JkKClcbiAgICAgICAgICBAZXZlbnQoJ29uUmVjb3JkU3RhcnQnKVxuICAgICAgICAgIFxuICAgICAgICBpZiBzdGF0dXMgPT0gTWVkaWEuTUVESUFfU1RPUFBFRFxuICAgICAgICAgIEBpc19yZWNvcmRpbmcgPSBmYWxzZVxuICAgICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICAgIEBnZXRfZHVyYXRpb24oKG1zKT0+XG4gICAgICAgICAgICBAc2NydWJfcG9pbnRfbXMgPSBtc1xuICAgICAgICAgICAgQGV2ZW50KCdvblNjcnViVXBkYXRlJywgbXMpXG4gICAgICAgICAgICBAZXZlbnQoJ29uUmVjb3JkU3RvcCcpXG4gICAgICAgICAgKVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsZXJyKT0+ICNlcnJvclxuICAgICAgICBtZWRpYS5yZWxlYXNlKClcbiAgICAgICAgQGV2ZW50KCdvbkF1ZGlvRXJyb3InKVxuICAgICAgKVxuICAgIClcbiAgICBcbiAgc3RlcDogKG1zKSA9PlxuICAgIEBzZWVrKEBzY3J1Yl9wb2ludF9tcyArIG1zKVxuICAgIFxuICBzZWVrOiAobXMpID0+XG4gICAgaWYgbXM9PS0xXG4gICAgICBtcyA9IE51bWJlci5NQVhfVkFMVUVcbiAgICBAc2NydWJfcG9pbnRfbXMgPSBNYXRoLm1pbihAZHVyYXRpb25fbXMsIE1hdGgubWF4KDAsIG1zKSlcbiAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAc2NydWJfcG9pbnRfbXMpXG4gICAgaWYgQGlzX3BsYXlpbmdcbiAgICAgIEBtZWRpYS5zZWVrVG8gQHNjcnViX3BvaW50X21zXG4gICAgXG4gIHBsYXk6ID0+XG4gICAgaWYgQHNjcnViX3BvaW50X21zID49IEBkdXJhdGlvbl9tc1xuICAgICAgQHNjcnViX3BvaW50X21zID0gMFxuICAgICAgQGV2ZW50KCdvblNjcnViVXBkYXRlJywgQHNjcnViX3BvaW50X21zKVxuICAgIFxuICAgIEBtZWRpYSA9IEBuZXdfbWVkaWEoXG4gICAgICAoKG1lZGlhKT0+ICAgICMgcmVhZHlcbiAgICAgICAgbWVkaWEucGxheSgpXG4gICAgICAgIG1lZGlhLnNlZWtUbyhAc2NydWJfcG9pbnRfbXMpXG4gICAgICApLFxuICAgICAgKChtZWRpYSxzdGF0dXMpPT4gIyBTdGF0dXNcbiAgICAgICAgaWYgc3RhdHVzID09IE1lZGlhLk1FRElBX1JVTk5JTkdcbiAgICAgICAgICBAaXNfcGxheWluZyA9IHRydWVcbiAgICAgICAgICBwbGF5X3VwZGF0ZSA9ID0+XG4gICAgICAgICAgICBtZWRpYS5nZXRDdXJyZW50UG9zaXRpb24gKHBvcyk9PlxuICAgICAgICAgICAgICBpZiBwb3M9PS0xXG4gICAgICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gQGR1cmF0aW9uX21zXG4gICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gcG9zICogMTAwMFxuICAgICAgICAgICAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAc2NydWJfcG9pbnRfbXMpXG4gICAgICAgICAgICAgIGlmICFAaXNfcGxheWluZ1xuICAgICAgICAgICAgICAgIG1lZGlhLnN0b3AoKVxuICAgICAgICAgICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICAgICAgICAgIEBldmVudCgnb25QbGF5U3RvcCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQocGxheV91cGRhdGUsMTAwKVxuICAgICAgICAgIHBsYXlfdXBkYXRlKClcbiAgICAgICAgICBAZXZlbnQoJ29uUGxheVN0YXJ0JylcbiAgICAgICAgaWYgc3RhdHVzID09IE1lZGlhLk1FRElBX1NUT1BQRURcbiAgICAgICAgICBAaXNfcGxheWluZyA9IGZhbHNlXG4gICAgICApLFxuICAgICAgKChtZWRpYSxlcnIpPT4gI0Vycm9yXG4gICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICBAZXZlbnQoJ29uQXVkaW9FcnJvcicpXG4gICAgICApXG4gICAgKVxuICBcbiAgc3RvcDogPT5cbiAgICBAaXNfcGxheWluZyA9IGZhbHNlXG4gICAgQGlzX3JlY29yZGluZyA9IGZhbHNlXG5cbndpbmRvdy5SZWNvcmRlciA9IFJlY29yZGVyIiwiY2xhc3MgVXBsb2FkV29ya2VyXG4gIGNvbnN0cnVjdG9yOiAoQGl0ZW0sIG9wdGlvbnMgPSB7fSktPlxuICAgIGRlZmF1bHRfb3B0aW9ucyA9XG4gICAgICBvblN0YXJ0OiAtPlxuICAgICAgb25TdWNjZXNzOiAtPlxuICAgICAgb25GYWlsdXJlOiAoZXJyKS0+XG4gICAgICBvblByb2dyZXNzOiAocHJvZ3Jlc3MpLT5cbiAgICAgIG9uRXZlbnQ6IChuYW1lLGFyZ3MuLi4pLT5cbiAgICAgIGRlYnVnOiB0cnVlXG4gICAgQG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZChkZWZhdWx0X29wdGlvbnMsIG9wdGlvbnMpXG4gICAgQHVwbG9hZF9jb3VudCA9IDBcbiAgICBAbG9nKFwiVXBsb2FkIFdvcmtlciBzdGFydGVkXCIsIEBpdGVtKVxuICAgIHNldFRpbWVvdXQoQHN0YXJ0LCAwKSAjIEZpcmUgc3RhcnQgYXN5bmMgc28gcHJvbWlzZXMgYXJlIHByb2Nlc3NlZFxuICAgIFxuICBsb2c6IChhcmdzLi4uKT0+XG4gICAgcmV0dXJuIHVubGVzcyBAb3B0aW9ucy5kZWJ1Z1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KEAsIGFyZ3MpXG5cbiAgZXZlbnQ6IChuYW1lLGFyZ3MuLi4pID0+XG4gICAgQGxvZyhcImV2ZW50XCIsIG5hbWUsIGFyZ3MpXG4gICAgQG9wdGlvbnNbbmFtZV0uYXBwbHkoQCxhcmdzKVxuICAgIEBvcHRpb25zLm9uRXZlbnQobmFtZSwgYXJncylcbiAgICBcbiAgc3RhcnRlZDogKGNiKT0+XG4gICAgQG9wdGlvbnMub25TdGFydCA9IGNiXG4gICAgQFxuICBcbiAgcHJvZ3Jlc3M6IChjYik9PlxuICAgIEBvcHRpb25zLm9uUHJvZ3Jlc3MgPSBjYlxuICAgIEBcbiAgXG4gIGZpbmlzaGVkOiAoY2IpPT5cbiAgICBAb3B0aW9ucy5vblN1Y2Nlc3MgPSBjYlxuICAgIEBcbiAgXG4gIGZhaWxlZDogKGNiKT0+XG4gICAgQG9wdGlvbnMub25GYWlsdXJlID0gY2JcbiAgICBAXG4gICAgXG4gIHN0YXJ0OiA9PlxuICAgIEBldmVudCgnb25TdGFydCcpXG4gICAgQHByb2dyZXNzID0gMFxuICAgICRodHRwID0gYW5ndWxhci5pbmplY3RvcihbXCJuZ1wiXSkuZ2V0KFwiJGh0dHBcIilcbiAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9hcGkuZmFzdC1jYXN0Lm5ldCcsIHBhcmFtczpcbiAgICAgIHNsdWc6IEBpdGVtLnNsdWdcbiAgICAgIHR5cGU6IEBpdGVtLnR5cGVcbiAgICAgIGNvZGU6IEBpdGVtLmNvZGVcbiAgICApLnRoZW4gKChyZXNwb25zZSkgPT5cbiAgICAgIEBpdGVtLnByb2dyZXNzID0gMTBcbiAgICAgIEBldmVudCgnb25Qcm9ncmVzcycsIEBpdGVtLnByb2dyZXNzKVxuICAgICAgdXJsID0gcmVzcG9uc2UuZGF0YVxuICAgICAgZnQgPSBuZXcgRmlsZVRyYW5zZmVyXG4gICAgICBmdC5vbnByb2dyZXNzID0gKHBlKSA9PlxuICAgICAgICBAaXRlbS5wcm9ncmVzcyA9IHBlLmxvYWRlZCAvIHBlLnRvdGFsICogOTAgKyAxMFxuICAgICAgICBAZXZlbnQoJ29uUHJvZ3Jlc3MnLCBAaXRlbS5wcm9ncmVzcylcbiAgICAgIFxuICAgICAgdXBsb2FkX29wdGlvbnMgPSBuZXcgRmlsZVVwbG9hZE9wdGlvbnNcbiAgICAgIHVwbG9hZF9vcHRpb25zLmZpbGVOYW1lID0gQGl0ZW0uc3JjXG4gICAgICB1cGxvYWRfb3B0aW9ucy5taW1lVHlwZSA9IEBpdGVtLm1pbWVcbiAgICAgIHVwbG9hZF9vcHRpb25zLmNodW5rZWRNb2RlID0gZmFsc2VcbiAgICAgIHVwbG9hZF9vcHRpb25zLmh0dHBNZXRob2QgPSAnUFVUJ1xuICAgICAgdXBsb2FkX29wdGlvbnMuaGVhZGVycyA9ICdDb250ZW50LVR5cGUnOiBAaXRlbS5taW1lXG4gICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGluZ1wiLCBAaXRlbS5zcmMsIHVybClcbiAgICAgIGZ0LnVwbG9hZChcbiAgICAgICAgQGl0ZW0uc3JjLCBcbiAgICAgICAgdXJsLCBcbiAgICAgICAgKD0+ICMgc3VjY2Vzc1xuICAgICAgICAgIEBldmVudCgnb25TdWNjZXNzJylcbiAgICAgICAgKSxcbiAgICAgICAgKChlcnIpPT4gIyBFcnJvclxuICAgICAgICAgIEBldmVudCgnb25GYWlsdXJlJywgZXJyKVxuICAgICAgICApLFxuICAgICAgICB1cGxvYWRfb3B0aW9uc1xuICAgICAgKVxuICAgICksIChlcnIpPT4gIyBGYWlsdXJlXG4gICAgICBAZXZlbnQoJ29uRmFpbHVyZScsIGVycikgICAgXG5cbndpbmRvdy5VcGxvYWRXb3JrZXIgPSBVcGxvYWRXb3JrZXIiLCJhcHAuY29udHJvbGxlciAnQXBwQ29udHJvbGxlcicsIChcbiAgJHNjb3BlLCBcbiAgJGh0dHAsIFxuICAkaW50ZXJ2YWwsIFxuICAkY29yZG92YUZpbGUsIFxuICAkc3RhdGUsIFxuICAkY29yZG92YUZpbGVUcmFuc2ZlciwgXG4gICRxLCBcbiAgJGlvbmljSGlzdG9yeSwgXG4gICRpb25pY1NpZGVNZW51RGVsZWdhdGUsXG4gICRpb25pY1BvcHVwXG4gICkgLT5cbiAgY29uc29sZS5sb2coJ0FwcENvbnRyb2xsZXInKTtcblxuICAkc2NvcGUuc2V0dGluZ3MgPSAtPlxuICAgICRzdGF0ZS5nbyAnc2V0dGluZ3MucG9kY2FzdCdcbiAgICBcbiAgJHNjb3BlLnRvZ2dsZUxlZnQgPSAtPlxuICAgICRpb25pY1NpZGVNZW51RGVsZWdhdGUudG9nZ2xlTGVmdCgpXG4gIFxuICAkc2NvcGUuaG9tZSA9IC0+XG4gICAgJGlvbmljSGlzdG9yeS5uZXh0Vmlld09wdGlvbnMoe1xuICAgICAgZGlzYWJsZUJhY2s6IHRydWVcbiAgICB9KTsgIFxuICAgICRzdGF0ZS5nbyAnaG9tZSdcbiAgICBcbiAgbG9hZF9zdGF0ZSA9IC0+XG4gICAgJHNjb3BlLnBvZGNhc3QgPSBudWxsXG4gICAgdHJ5XG4gICAgICAkc2NvcGUucG9kY2FzdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb2RjYXN0JykpXG4gICAgY2F0Y2ggZVxuICAgICAgY29uc29sZS5sb2cgJ0Vycm9yIGxvYWRpbmcgc3RhdGUnLCBlXG4gICAgICBcbiAgICAjIEZpeCB1cCB2ZXJzaW9uIG51bWJlclxuICAgIGlmICEkc2NvcGUucG9kY2FzdCBvciAhJHNjb3BlLnBvZGNhc3QudmVyc2lvblxuICAgICAgJHNjb3BlLnBvZGNhc3QgPVxuICAgICAgICB2ZXJzaW9uOiAxXG4gICAgICAgIGVwaXNvZGVzOiB7fVxuICAgICAgJHNjb3BlLnNhdmVfc3RhdGUoKVxuICAgICAgXG4gICAgJHNjb3BlLnBvZGNhc3QuaXR1bmVzX3VybCA9ICdodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvcG9kY2FzdC90aGF0cy1hLWdvb2QtaWRlYS9pZDEwNDk0MDkxOTUnO1xuICAgIFxuICAgICMgRml4IHVwIG1pc3NpbmcgR1VJRHNcbiAgICBmb3IgayBvZiAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1xuICAgICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNba10uZ3VpZCA9IGtcbiAgICAgICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW2tdLmlzX3N5bmNpbmcgPSBmYWxzZVxuICAgICAgXG4gICAgIyBGaXggdXAgbWlzc2luZyBlcGlzb2Rlc1xuICAgICMgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXMgPSBhbmd1bGFyLm1lcmdlKHt9LCBzdGF0aWNfZXBpc29kZXMsICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzKTtcbiAgICAjIGZvciBndWlkIG9mIHN0YXRpY19lcGlzb2Rlc1xuICAgICMgICBlcGlzb2RlID0gc3RhdGljX2VwaXNvZGVzW2d1aWRdXG4gICAgIyAgICNpZiAhKGd1aWQgb2YgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXMpXG4gICAgIyAgICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW2d1aWRdID0gZXBpc29kZVxuXG4gIG5leHRfZXBpc29kZV9udW1iZXIgPSAtPlxuICAgIG4gPSAwXG4gICAgZm9yIHNsdWcgb2YgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNcbiAgICAgIGVwaXNvZGUgPSAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1tzbHVnXVxuICAgICAgbiA9IE1hdGgubWF4KG4sIGVwaXNvZGUubnVtYmVyKVxuICAgIG4gKyAxXG5cbiAgJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgPSAnY2R2ZmlsZTovL2xvY2FsaG9zdC9wZXJzaXN0ZW50LydcbiAgXG4gIHJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksIChlbnRyeSktPlxuICAgICRzY29wZS5uYXRpdmVfb3V0cHV0X2RpcmVjdG9yeSA9IGVudHJ5LnRvVVJMKClcbiAgKVxuICBcbiAgJHNjb3BlLnNhdmVfc3RhdGUgPSAtPlxuICAgIGpzb24gPSBhbmd1bGFyLnRvSnNvbigkc2NvcGUucG9kY2FzdClcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0gJ3BvZGNhc3QnLCBhbmd1bGFyLnRvSnNvbigkc2NvcGUucG9kY2FzdClcbiAgICAkY29yZG92YUZpbGUud3JpdGVGaWxlKCRzY29wZS5vdXRwdXRfZGlyZWN0b3J5LCAnZGF0YS5qc29uJywganNvbiwgdHJ1ZSkudGhlbiAoKHJlc3VsdCkgLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLnBvZGNhc3QuY29kZVxuICAgICAgKG5ldyBVcGxvYWRXb3JrZXIoXG4gICAgICAgIGNvZGU6ICRzY29wZS5wb2RjYXN0LmNvZGVcbiAgICAgICAgdHlwZTogJ2pzb24nXG4gICAgICAgIG1pbWU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICBzcmM6ICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJ2RhdGEuanNvbidcbiAgICAgICkpXG4gICAgKVxuICAgIFxuXG4gIGxvYWRfc3RhdGUoKVxuXG4gICRzY29wZS5uZXcgPSAtPlxuICAgIHQgPSAobmV3IERhdGUpLmdldFRpbWUoKVxuICAgIGd1aWQgPSBzcHJpbnRmKCdmYy0lcy0lZCcsICRzY29wZS5wb2RjYXN0LmNvZGUsIHQpXG4gICAgJHNjb3BlLmVwaXNvZGUgPVxuICAgICAgZ3VpZDogZ3VpZFxuICAgICAgbnVtYmVyOiBuZXh0X2VwaXNvZGVfbnVtYmVyKClcbiAgICAkc3RhdGUuZ28gJ2VwaXNvZGUucmVjb3JkJ1xuXG4gICRzY29wZS5nbyA9IChndWlkKSAtPlxuICAgICRzY29wZS5lcGlzb2RlID0gYW5ndWxhci5jb3B5KCRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW2d1aWRdKVxuICAgICRzY29wZS5lcGlzb2RlLmlzX3B1Ymxpc2hlZCA9ICRzY29wZS5lcGlzb2RlLnB1Ymxpc2hlZF9hdD9cbiAgICAkc3RhdGUuZ28gJ2VwaXNvZGUucmVjb3JkJ1xuIiwiYXBwLmNvbnRyb2xsZXIgJ0VwaXNvZGVDb250cm9sbGVyJywgKFxuICAkc2NvcGUsIFxuICAkaW9uaWNTaWRlTWVudURlbGVnYXRlXG4gICRpb25pY0FjdGlvblNoZWV0XG4gICkgLT5cbiAgICBcbiAgJHNjb3BlLiRvbiAnJGlvbmljVmlldy5lbnRlcicsIC0+XG4gICAgJGlvbmljU2lkZU1lbnVEZWxlZ2F0ZS5jYW5EcmFnQ29udGVudCBmYWxzZVxuXG4gICRzY29wZS4kb24gJyRpb25pY1ZpZXcubGVhdmUnLCAtPlxuICAgICRpb25pY1NpZGVNZW51RGVsZWdhdGUuY2FuRHJhZ0NvbnRlbnQgdHJ1ZVxuXG4gIHQgPSAobmV3IERhdGUpLmdldFRpbWUoKVxuICBcbiAgJHNjb3BlLmhhc19yZWNvcmRpbmcgPSAkc2NvcGUuZXBpc29kZS5yZWNvcmRlZF9hdD9cbiAgJHNjb3BlLmlzX3VwbG9hZGluZyA9IGZhbHNlXG4gICRzY29wZS5pc19wbGF5aW5nID0gZmFsc2VcbiAgJHNjb3BlLmlzX3JlY29yZGluZyA9IGZhbHNlXG4gICRzY29wZS5kdXJhdGlvbl9tcyA9ICRzY29wZS5lcGlzb2RlLmR1cmF0aW9uX21zIG9yIDBcbiAgJHNjb3BlLnNjcnViX3BvaW50X21zID0gMFxuICAkc2NvcGUuaGFzX2NoYW5nZXMgPSBmYWxzZVxuICBcbiAgJHNjb3BlLiR3YXRjaCAnZXBpc29kZScsICgobmV3T2JqLCBvbGRPYmopIC0+XG4gICAgJHNjb3BlLmhhc19jaGFuZ2VzID0gIWFuZ3VsYXIuZXF1YWxzKG9sZE9iaiwgbmV3T2JqKVxuICApLCB0cnVlXG5cbiAgJHNjb3BlLmNhbmNlbCA9IC0+XG4gICAgaGlkZVNoZWV0ID0gJGlvbmljQWN0aW9uU2hlZXQuc2hvdyhcbiAgICAgIGRlc3RydWN0aXZlVGV4dDogJ0Rpc2NhcmQgQ2hhbmdlcydcbiAgICAgIHRpdGxlVGV4dDogJ0Rpc2NhcmQgY2hhbmdlcydcbiAgICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnXG4gICAgICBkZXN0cnVjdGl2ZUJ1dHRvbkNsaWNrZWQ6IC0+XG4gICAgICAgICRzY29wZS5ob21lKClcbiAgICApXG4iLCJhcHAuY29udHJvbGxlciAnRmluYWxpemVDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNOYXZCYXJEZWxlZ2F0ZSwgJGlvbmljSGlzdG9yeSkgLT5cbiAgJGlvbmljTmF2QmFyRGVsZWdhdGUuc2hvd0JhY2tCdXR0b24gdHJ1ZVxuXG4gIHVwbG9hZF9yc3MgPSAtPlxuICAgIHJzcyA9IEZhc3RDYXN0LnRlbXBsYXRlcy5yc3NcbiAgICAgIHBvZGNhc3Q6ICRzY29wZS5wb2RjYXN0XG4gICAgJGNvcmRvdmFGaWxlLndyaXRlRmlsZSgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgJHNjb3BlLnBvZGNhc3QuY29kZSsnLnJzcycsIHJzcywgdHJ1ZSkudGhlbiAoKHJlc3VsdCkgLT5cbiAgICAgIHVwbG9hZFxuICAgICAgICB0eXBlOiAncnNzJ1xuICAgICAgICBtaW1lOiAnYXBwbGljYXRpb24vcnNzK3htbCdcbiAgICAgICAgc3JjOiAkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSArICRzY29wZS5wb2RjYXN0LmNvZGUgKyAnLnJzcydcbiAgICApLCAoZXJyKSAtPlxuICAgICAgY29uc29sZS5sb2cgJ2ZpbGUgd3JpdGUgZXJyb3InLCBlcnJcbiAgICBcbiAgdXBsb2FkX2h0bWwgPSAtPlxuICAgIGh0bWwgPSBGYXN0Q2FzdC50ZW1wbGF0ZXMuZXBpc29kZVxuICAgICAgcG9kY2FzdDogJHNjb3BlLnBvZGNhc3RcbiAgICAgIGVwaXNvZGU6ICRzY29wZS5lcGlzb2RlXG4gICAgJGNvcmRvdmFGaWxlLndyaXRlRmlsZSgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgJ2luZGV4Lmh0bWwnLCBodG1sLCB0cnVlKS50aGVuICgocmVzdWx0KSAtPlxuICAgICAgdXBsb2FkXG4gICAgICAgIHNsdWc6ICRzY29wZS5lcGlzb2RlLnNsdWdcbiAgICAgICAgdHlwZTogJ2h0bWwnXG4gICAgICAgIG1pbWU6ICd0ZXh0L2h0bWwnXG4gICAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAnaW5kZXguaHRtbCdcbiAgICApLCAoZXJyKSAtPlxuICAgICAgY29uc29sZS5sb2cgJ2ZpbGUgd3JpdGUgZXJyb3InLCBlcnJcblxuICB1cGxvYWRfYXVkaW8gPSAtPlxuICAgIHVwbG9hZFxuICAgICAgc2x1ZzogJHNjb3BlLmVwaXNvZGUuc2x1Z1xuICAgICAgdHlwZTogJ2F1ZGlvJ1xuICAgICAgbWltZTogJ2F1ZGlvL21wNCdcbiAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUuZXBpc29kZS5ndWlkICsgJy5tNGEnXG5cbiAgdXBsb2FkID0gKGl0ZW0pIC0+XG4gICAgaXRlbS5jb2RlID0gJHNjb3BlLnBvZGNhc3QuY29kZVxuICAgIChuZXcgVXBsb2FkV29ya2VyKGl0ZW0pKVxuICAgICAgLnN0YXJ0ZWQgLT5cbiAgICAgICAgJHNjb3BlLnVwbG9hZF9jb3VudCsrXG4gICAgICAgICRzY29wZS51cGxvYWRzW2l0ZW0udHlwZV0gPSAwXG4gICAgICAuZmluaXNoZWQgLT5cbiAgICAgICAgc2V0VGltZW91dCAoLT5cbiAgICAgICAgICBkZWxldGUgJHNjb3BlLnVwbG9hZHNbaXRlbS50eXBlXVxuICAgICAgICAgICRzY29wZS51cGxvYWRfY291bnQtLVxuICAgICAgICAgIGlmICRzY29wZS51cGxvYWRfY291bnQgPT0gMFxuICAgICAgICAgICAgJHNjb3BlLmlzX3VwbG9hZGluZ19maW5pc2hlZCA9IHRydWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KClcbiAgICAgICAgKSwgMTAwMFxuICAgICAgLnByb2dyZXNzIChwcm9ncmVzcyktPlxuICAgICAgICAkc2NvcGUudXBsb2Fkc1tpdGVtLnR5cGVdID0gcHJvZ3Jlc3NcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCcjcHJvZ3Jlc3NfJyArIGl0ZW0udHlwZSkudmFsIHByb2dyZXNzXG4gICAgICAgICRzY29wZS4kYXBwbHkoKVxuICAgICAgXG5cbiAgJHNjb3BlLmlzX3VwbG9hZGluZyA9IGZhbHNlXG4gICRzY29wZS51cGxvYWRzID0ge31cblxuICAkc2NvcGUuYmFjayA9IC0+XG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcblxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX3N0YXJ0ZWQgPSBmYWxzZVxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX2ZpbmlzaGVkID0gZmFsc2VcblxuICAkc2NvcGUucHVibGlzaCA9IC0+XG4gICAgaWYgISRzY29wZS5lcGlzb2RlLm51bWJlclxuICAgICAgYWxlcnQgJ1BsZWFzZSBzdXBwbHkgYW4gZXBpc29kZSBudW1iZXIuJ1xuICAgICRzY29wZS5lcGlzb2RlLnB1Ymxpc2hlZF9hdCA9IG51bGxcbiAgICBpZiAkc2NvcGUuZXBpc29kZS5pc19wdWJsaXNoZWRcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS50aXRsZVxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIHRpdGxlLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5kZXNjcmlwdGlvblxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIGRlc2NyaXB0aW9uLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgJHNjb3BlLmVwaXNvZGUucHVibGlzaGVkX2F0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICBlbHNlXG4gICAgICAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXQgPSBudWxsXG4gICAgJHNjb3BlLmlzX3VwbG9hZGluZ19zdGFydGVkID0gdHJ1ZVxuICAgICRzY29wZS5lcGlzb2RlLnNsdWcgPSBzcHJpbnRmKCclMDNkIC0gJXMnLCAkc2NvcGUuZXBpc29kZS5udW1iZXIsICRzY29wZS5lcGlzb2RlLnRpdGxlKS5zbHVnaWZ5KClcbiAgICBpZighJHNjb3BlLmVwaXNvZGUubGVuZ3RoX2J5dGVzKVxuICAgICAgd2luZG93LnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwgJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUuZXBpc29kZS5ndWlkICsgJy5tNGEnLCAoKGZpbGVFbnRyeSkgLT5cbiAgICAgICAgZmlsZUVudHJ5LmZpbGUgKGZpbGUpIC0+XG4gICAgICAgICAgY29uc29sZS5sb2cgXCJnb3QgYnl0ZSBzaXplXCIsIGZpbGVcbiAgICAgICAgICAkc2NvcGUuZXBpc29kZS5sZW5ndGhfYnl0ZXMgPSBmaWxlLnNpemVcbiAgICAgICAgICAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1skc2NvcGUuZXBpc29kZS5ndWlkXSA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZXBpc29kZSlcbiAgICAgICAgICBpZiAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgICAgIHVwbG9hZF9yc3MoKVxuICAgICAgICAgICRzY29wZS5zYXZlX3N0YXRlKClcbiAgICAgICAgICBjb25zb2xlLmxvZyBmaWxlXG4gICAgICApLCAoZXJyKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgZ2V0dGluZyBmaWxlIHNpemUnXG4gICAgZWxzZVxuICAgICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNbJHNjb3BlLmVwaXNvZGUuZ3VpZF0gPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVwaXNvZGUpXG4gICAgICBpZiAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgdXBsb2FkX3JzcygpXG4gICAgICAkc2NvcGUuc2F2ZV9zdGF0ZSgpXG4gICAgaWYgJHNjb3BlLmVwaXNvZGUucHVibGlzaGVkX2F0XG4gICAgICB1cGxvYWRfaHRtbCgpXG4gICAgdXBsb2FkX2F1ZGlvKClcblxuICAkc2NvcGUuJHdhdGNoICdpc191cGxvYWRpbmdfZmluaXNoZWQnLCAodikgLT5cbiAgICBpZiAhdlxuICAgICAgcmV0dXJuXG4gICAgJGlvbmljSGlzdG9yeS5uZXh0Vmlld09wdGlvbnMoe1xuICAgICAgZGlzYWJsZUJhY2s6IHRydWVcbiAgICB9KTsgIFxuICAgICRzdGF0ZS5nbyAnZXBpc29kZS5maW5pc2gnXG4gICRzY29wZS51cGxvYWRfY291bnQgPSAwXG4iLCJhcHAuY29udHJvbGxlciAnRmluaXNoQ29udHJvbGxlcicsICgkc2NvcGUsICRpb25pY0hpc3RvcnkpIC0+IFxuIiwiYXBwLmNvbnRyb2xsZXIgJ0hvbWVDb250cm9sbGVyJywgKCRzY29wZSwgJHN0YXRlLCAkaW9uaWNIaXN0b3J5LCAkaW9uaWNQb3B1cCkgLT4gXG4gIGlmKCEkc2NvcGUucG9kY2FzdC5jb2RlKVxuICAgIG15UG9wdXAgPSAkaW9uaWNQb3B1cC5zaG93KFxuICAgICAgdGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBuZy1tb2RlbD1cInBvZGNhc3QuY29kZVwiPidcbiAgICAgIHRpdGxlOiAnRW50ZXIgU2hvdyBDb2RlJ1xuICAgICAgc3ViVGl0bGU6ICdJbiBvcmRlciB0byB1c2UgdGhpcyBiZXRhIGFwcCwgeW91IG11c3QgaGF2ZSBhIFNob3cgQ29kZS4gR2V0IG9uZSBmcm9tIEJlbiB2aWEgRmFjZWJvb2suJ1xuICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJzxiPlNhdmU8L2I+J1xuICAgICAgICAgIHR5cGU6ICdidXR0b24tcG9zaXRpdmUnXG4gICAgICAgICAgb25UYXA6IChlKSAtPlxuICAgICAgICAgICAgaWYgISRzY29wZS5wb2RjYXN0LmNvZGVcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAkc2NvcGUucG9kY2FzdC5jb2RlID0gJHNjb3BlLnBvZGNhc3QuY29kZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgJHNjb3BlLnNhdmVfc3RhdGUoKVxuICAgICAgICB9XG4gICAgICBdXG4gICAgKS50aGVuIC0+XG4gICAgICAkaW9uaWNQb3B1cC5hbGVydChcbiAgICAgICAgdGl0bGU6ICdJbnB1dCBTaG93IEluZm8nXG4gICAgICAgIHRlbXBsYXRlOiAnU2luY2UgdGhpcyBpcyB5b3VyIGZpcnN0IHRpbWUgZ2V0dGluZyBzdGFydGVkLCBlbnRlciB5b3VyIHNob3cgaW5mb3JtYXRpb24gbmV4dC4nXG4gICAgICApLnRoZW4gKChyZXMpIC0+XG4gICAgICAgICRpb25pY0hpc3RvcnkubmV4dFZpZXdPcHRpb25zKHtcbiAgICAgICAgICBkaXNhYmxlQmFjazogdHJ1ZVxuICAgICAgICB9KTsgIFxuICAgICAgICAkc3RhdGUuZ28gJ3NldHRpbmdzLnBvZGNhc3QnXG4gICAgICApXG4iLCJhcHAuY29udHJvbGxlciAnUG9kY2FzdFNldHRpbmdzQ29udHJvbGxlcicsIChcbiAgJHNjb3BlLCBcbiAgJGlvbmljSGlzdG9yeSwgXG4gICRpb25pY1BvcHVwLCBcbiAgJGlvbmljTmF2QmFyRGVsZWdhdGUsIFxuICAkaW9uaWNBY3Rpb25TaGVldCxcbiAgJGpyQ3JvcCxcbiAgJGNvcmRvdmFJbWFnZVBpY2tlcixcbiAgJGNvcmRvdmFGaWxlXG4pIC0+XG4gIFxuICBjYXRzID0gW11cbiAgZm9yIGNhdCxzdWJjYXRzIG9mIGNhdGVnb3JpZXNcbiAgICBpZiBzdWJjYXRzLmxlbmd0aD09MFxuICAgICAgY2F0cy5wdXNoXG4gICAgICAgIGtleTogY2F0XG4gICAgICAgIG5hbWU6IGNhdFxuICAgIGVsc2VcbiAgICAgIGZvciBzdWJjYXQgaW4gc3ViY2F0c1xuICAgICAgICBjYXRzLnB1c2hcbiAgICAgICAgICBrZXk6IHNwcmludGYoXCIlc3wlc1wiLCBjYXQsIHN1YmNhdClcbiAgICAgICAgICBuYW1lOiBzcHJpbnRmKFwiJXMgLSAlc1wiLCBjYXQsIHN1YmNhdClcblxuICAkc2NvcGUuY2F0cyA9IGNhdHNcbiAgXG4gICRzY29wZS5kb19sb2dvID0gLT5cbiAgICBvcHRpb25zID0gXG4gICAgICBtYXhpbXVtSW1hZ2VzQ291bnQ6IDFcblxuICAgICRjb3Jkb3ZhSW1hZ2VQaWNrZXIuZ2V0UGljdHVyZXMob3B0aW9ucylcbiAgICAgIC50aGVuICggKChyZXN1bHRzKSAtPlxuICAgICAgICAkanJDcm9wLmNyb3AoXG4gICAgICAgICAgdXJsOiByZXN1bHRzWzBdXG4gICAgICAgICAgdGl0bGU6ICdNb3ZlIGFuZCBTY2FsZSdcbiAgICAgICAgICB3aWR0aDogMzAwXG4gICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgKS50aGVuKCAoY2FudmFzKS0+XG4gICAgICAgICAgX2Jhc2U2NFRvQXJyYXlCdWZmZXIgPSAoYmFzZTY0KSAtPlxuICAgICAgICAgICAgYmluYXJ5X3N0cmluZyA9IHdpbmRvdy5hdG9iKGJhc2U2NC5yZXBsYWNlKC9cXHMvZywgJycpKVxuICAgICAgICAgICAgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGhcbiAgICAgICAgICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKVxuICAgICAgICAgICAgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIGkgPCBsZW5cbiAgICAgICAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlfc3RyaW5nLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBieXRlcy5idWZmZXJcbiAgICAgICAgICByZXNpemUgPSAoc3JjX2NhbnZhcywgZHN0X25hbWUsIGQsY2IgPSBudWxsKS0+XG4gICAgICAgICAgICBDYW1hbihzcmNfY2FudmFzLCAtPlxuICAgICAgICAgICAgICBAcmVzaXplXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGRcbiAgICAgICAgICAgICAgQHJlbmRlciA9PlxuICAgICAgICAgICAgICAgIGRhdGFfdXJsID0gQHRvQmFzZTY0KCdqcGVnJylcbiAgICAgICAgICAgICAgICBiNjQgPSBkYXRhX3VybC5yZXBsYWNlKC9eZGF0YTouKz87YmFzZTY0LC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFfdXJsLnN1YnN0cmluZygwLDUwKSlcbiAgICAgICAgICAgICAgICBkYXRhID0gX2Jhc2U2NFRvQXJyYXlCdWZmZXIoYjY0KVxuICAgICAgICAgICAgICAgICRjb3Jkb3ZhRmlsZS53cml0ZUZpbGUoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksIGRzdF9uYW1lLCBkYXRhLCB0cnVlKS50aGVuKC0+XG4gICAgICAgICAgICAgICAgICBpZiBjYlxuICAgICAgICAgICAgICAgICAgICBjYigkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSsgZHN0X25hbWUsIGRhdGFfdXJsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgQHJlc2V0KClcbiAgICAgICAgICAgIClcbiAgICAgICAgICByZXNpemUoY2FudmFzLCAnbG9nby10aHVtYi5qcGcnLCA3NSwgKHBhdGgsIGRhdGFfdXJsKS0+XG4gICAgICAgICAgICAkc2NvcGUuc2hvdy5sb2dvX3BhdGggPSBwYXRoXG4gICAgICAgICAgICAkc2NvcGUubG9nb19zcmMgPSBkYXRhX3VybFxuICAgICAgICAgIClcbiAgICAgICAgICByZXNpemUoY2FudmFzLCAnbG9nby5qcGcnLCAxNDAwLCAocGF0aCwgZGF0YV91cmwpLT5cbiAgICAgICAgICAgIG5ldyBVcGxvYWRXb3JrZXIoXG4gICAgICAgICAgICAgIGNvZGU6ICRzY29wZS5wb2RjYXN0LmNvZGVcbiAgICAgICAgICAgICAgdHlwZTogJ2xvZ28nXG4gICAgICAgICAgICAgIG1pbWU6ICdpbWFnZS9qcGVnJ1xuICAgICAgICAgICAgICBzcmM6IHBhdGhcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICkpLCAoZXJyb3IpLT5cbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIFxuICBnZXRiNjQgPSAoY2R2X3BhdGgsIGNiKSAtPlxuICAgIHJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoY2R2X3BhdGgsIChlbnRyeSktPlxuICAgICAgcGF0aCA9IGVudHJ5LnRvVVJMKClcbiAgICAgIHdpbmRvdy5wbHVnaW5zLkJhc2U2NC5lbmNvZGVGaWxlKHBhdGgsIChiYXNlNjQpLT5cbiAgICAgICAgY29uc29sZS5sb2coYmFzZTY0LnN1YnN0cmluZygwLDUwKSlcbiAgICAgICAgY2IoYmFzZTY0KVxuICAgICAgKTtcbiAgICApXG5cbiAgJHNjb3BlLnNob3cgPSBcbiAgICB0aXRsZTogJydcbiAgICBzdWJ0aXRsZTogJydcbiAgICBhdXRob3I6ICcnXG4gICAgZGVzY3JpcHRpb246ICcnXG4gICAgcHJpbWFyeV9jYXRlZ29yeTogJydcbiAgICBzZWNvbmRhcnlfY2F0ZWdvcnk6ICcnXG4gICAgaXNfZXhwbGljaXQ6IGZhbHNlXG4gICAgbG9nb19wYXRoOiBudWxsXG4gICAgXG4gIGZvciBrLHYgb2YgJHNjb3BlLnNob3dcbiAgICBpZigkc2NvcGUucG9kY2FzdFtrXT8pXG4gICAgICAkc2NvcGUuc2hvd1trXSA9ICRzY29wZS5wb2RjYXN0W2tdXG4gIFxuICBpZigkc2NvcGUuc2hvdy5sb2dvX3BhdGgpXG4gICAgZ2V0YjY0KCAkc2NvcGUuc2hvdy5sb2dvX3BhdGgsIChiNjQpLT5cbiAgICAgICRzY29wZS5sb2dvX3NyYyA9IGI2NDtcbiAgICApXG4gICAgICBcbiAgY29uc29sZS5sb2coJHNjb3BlLnNob3cpXG4gIG9yaWdpbmFsID0gYW5ndWxhci5jb3B5KCRzY29wZS5zaG93KVxuICBcbiAgJHNjb3BlLmhhc19jaGFuZ2VzID0gZmFsc2VcbiAgJHNjb3BlLiR3YXRjaCAnc2hvdycsICgobmV3VmFsdWUsIG9sZFZhbHVlKSAtPlxuICAgICRzY29wZS5oYXNfY2hhbmdlcyA9ICFhbmd1bGFyLmVxdWFscyhvcmlnaW5hbCwgbmV3VmFsdWUpXG4gICAgJGlvbmljTmF2QmFyRGVsZWdhdGUuc2hvd0JhY2tCdXR0b24gISRzY29wZS5oYXNfY2hhbmdlc1xuICApLCB0cnVlXG4gICAgICBcbiAgJHNjb3BlLnNhdmUgPSAtPlxuICAgIHZhbGlkYXRlID1cbiAgICAgIHRpdGxlOiAnYSB0aXRsZSdcbiAgICAgIGxvZ29fcGF0aDogJ2NvdmVyIGFydCdcbiAgICAgIHN1YnRpdGxlOiAnYSBzdWJ0aXRsZSdcbiAgICAgIGF1dGhvcjogJ2FuIGF1dGhvcidcbiAgICAgIGRlc2NyaXB0aW9uOiAnYSBkZXNjcmlwdGlvbidcbiAgICAgIHByaW1hcnlfY2F0ZWdvcnk6ICdwcmltYXJ5IGNhdGVnb3J5J1xuICAgICAgc2Vjb25kYXJ5X2NhdGVnb3J5OiAnc2Vjb25kYXJ5IGNhdGVnb3J5J1xuICAgIGZvciBrLHYgb2YgdmFsaWRhdGVcbiAgICAgIGlmKCEoJHNjb3BlLnNob3dba10/KSlcbiAgICAgICAgJGlvbmljUG9wdXAuYWxlcnQoXG4gICAgICAgICAgdGl0bGU6ICdSZXF1aXJlZCdcbiAgICAgICAgICB0ZW1wbGF0ZTogXCJQbGVhc2Ugc3VwcGx5ICN7dn0uXCJcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgICRzY29wZS5zaG93W2tdID0gJHNjb3BlLnNob3dba10udHJpbSgpXG4gICAgZm9yIGssdiBvZiAkc2NvcGUuc2hvd1xuICAgICAgJHNjb3BlLnBvZGNhc3Rba10gPSAkc2NvcGUuc2hvd1trXVxuICAgICRzY29wZS5zYXZlX3N0YXRlKClcbiAgICBpZigkc2NvcGUuaGFzX2NoYW5nZXMpXG4gICAgICByc3MgPSBGYXN0Q2FzdC50ZW1wbGF0ZXMucnNzXG4gICAgICAgIHBvZGNhc3Q6ICRzY29wZS5wb2RjYXN0XG4gICAgICAkY29yZG92YUZpbGUud3JpdGVGaWxlKCRzY29wZS5vdXRwdXRfZGlyZWN0b3J5LCAkc2NvcGUucG9kY2FzdC5jb2RlKycucnNzJywgcnNzLCB0cnVlKS50aGVuICgocmVzdWx0KSAtPlxuICAgICAgICBuZXcgVXBsb2FkV29ya2VyKFxuICAgICAgICAgIGNvZGU6ICRzY29wZS5wb2RjYXN0LmNvZGVcbiAgICAgICAgICB0eXBlOiAncnNzJ1xuICAgICAgICAgIG1pbWU6ICdhcHBsaWNhdGlvbi9yc3MreG1sJ1xuICAgICAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUucG9kY2FzdC5jb2RlKycucnNzJ1xuICAgICAgICApXG4gICAgICApXG4gICAgJHNjb3BlLmhvbWUoKVxuXG4gICRzY29wZS5jYW5jZWwgPSAtPlxuICAgIGhpZGVTaGVldCA9ICRpb25pY0FjdGlvblNoZWV0LnNob3coXG4gICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdEaXNjYXJkIENoYW5nZXMnXG4gICAgICB0aXRsZVRleHQ6ICdEaXNjYXJkIGNoYW5nZXMnXG4gICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAkc2NvcGUuaG9tZSgpXG4gICAgKVxuICBcbiAgJGpyQ3JvcC5kZWZhdWx0T3B0aW9ucy50ZW1wbGF0ZSA9ICRqckNyb3AuZGVmYXVsdE9wdGlvbnMudGVtcGxhdGUucmVwbGFjZSgve3svZywgJzwlJykucmVwbGFjZSgvfX0vZywgJyU+JylcbiIsImFwcC5jb250cm9sbGVyICdSZWNvcmRDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNIaXN0b3J5LCAkaW9uaWNQb3B1cCwgJGlvbmljTmF2QmFyRGVsZWdhdGUpIC0+XG4gICRzY29wZS4kcGFyZW50LiRvbiAnJGlvbmljVmlldy5iZWZvcmVMZWF2ZScsIC0+XG4gICAgY29uc29sZS5sb2coJ2JlZm9yZUxlYXZlJylcbiAgICByZWMuc3RvcCgpXG5cbiAgcmVjID0gbmV3IFJlY29yZGVyKFxuICAgICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcubTRhJyxcbiAgICBvblNjcnViVXBkYXRlOiAobXMpLT5cbiAgICAgICRzY29wZS5zY3J1Yl9wb2ludF9tcyA9IG1zXG4gICAgb25EdXJhdGlvblVwZGF0ZTogKG1zKS0+XG4gICAgICAkc2NvcGUuZHVyYXRpb25fbXMgPSBtc1xuICAgICAgJHNjb3BlLmVwaXNvZGUuZHVyYXRpb25fbXMgPSBtc1xuICAgIG9uQXVkaW9FcnJvcjogLT5cbiAgICAgICRpb25pY1BvcHVwLmFsZXJ0KFxuICAgICAgICB0aXRsZTogJ0F1ZGlvIEVycm9yJ1xuICAgICAgICB0ZW1wbGF0ZTogJ1RoZSBhdWRpbyBzeXN0ZW0gaGFzIGZhaWxlZC4gUGxlYXNlIHJlcG9ydCB0aGlzLidcbiAgICAgICkudGhlbiAoKHJlcykgLT5cbiAgICAgICAgJHNjb3BlLmhvbWUoKVxuICAgICAgKVxuICAgIG9uUGxheVN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmlzX3BsYXlpbmcgPSB0cnVlXG4gICAgb25QbGF5U3RvcDogLT5cbiAgICAgICRzY29wZS5pc19wbGF5aW5nID0gZmFsc2VcbiAgICBvblJlY29yZFN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmhhc19jaGFuZ2VzID0gdHJ1ZVxuICAgICAgJGlvbmljTmF2QmFyRGVsZWdhdGUuc2hvd0JhY2tCdXR0b24gZmFsc2VcbiAgICAgICRpb25pY0hpc3RvcnkuY2xlYXJIaXN0b3J5KClcbiAgICAgICRzY29wZS5pc19yZWNvcmRpbmcgPSB0cnVlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuZXBpc29kZS5yZWNvcmRlZF9hdCA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgb25SZWNvcmRTdG9wOiAtPlxuICAgICAgJHNjb3BlLmlzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IHRydWVcbiAgICBvbkV2ZW50OiAtPlxuICAgICAgJHNjb3BlLiRhcHBseUFzeW5jKClcbiAgICAgIFxuICApXG5cbiAgaG9sZF9wcm9taXNlID0gbnVsbFxuICAkc2NvcGUuaG9sZCA9IChtcykgLT5cbiAgICBpZiAhbXNcbiAgICAgICRpbnRlcnZhbC5jYW5jZWwgaG9sZF9wcm9taXNlXG4gICAgICByZXR1cm5cbiAgICBob2xkX3Byb21pc2UgPSAkaW50ZXJ2YWwoKC0+XG4gICAgICByZWMuc3RlcChtcylcbiAgICApLCAxMDApXG5cbiAgJHNjb3BlLnNlZWsgPSAobXMpIC0+XG4gICAgY29uc29sZS5sb2cgJ3NlZWsnLCBtc1xuICAgIHJlYy5zZWVrKG1zKVxuXG4gICRzY29wZS5zdGVwID0gKG1zKSAtPlxuICAgIGNvbnNvbGUubG9nICdzdGVwJywgbXNcbiAgICByZWMuc3RlcChtcylcblxuICAkc2NvcGUucGxheSA9IC0+XG4gICAgcmVjLnBsYXkoKVxuXG4gICRzY29wZS5zdG9wX3BsYXlpbmcgPSAtPlxuICAgIHJlYy5zdG9wKClcbiAgICBcbiAgJHNjb3BlLnN0b3BfcmVjb3JkaW5nID0gLT5cbiAgICByZWMuc3RvcCgpXG4gICAgXG4gICRzY29wZS5yZWNvcmQgPSAtPlxuICAgIGlmICRzY29wZS5oYXNfcmVjb3JkaW5nXG4gICAgICBoaWRlU2hlZXQgPSAkaW9uaWNBY3Rpb25TaGVldC5zaG93KFxuICAgICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdTY3JhcCBhbmQgUmUtUmVjb3JkJ1xuICAgICAgICB0aXRsZVRleHQ6ICdSZS1yZWNvcmQgZXBpc29kZSdcbiAgICAgICAgY2FuY2VsVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAgIGhpZGVTaGVldCgpXG4gICAgICAgICAgcmVjLnJlY29yZCgpXG4gICAgICApXG4gICAgZWxzZVxuICAgICAgcmVjLnJlY29yZCgpXG4iLCJhcHAuY29udHJvbGxlciAnU2V0dGluZ3NDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNOYXZCYXJEZWxlZ2F0ZSwgJGlvbmljUG9wdXApIC0+XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
