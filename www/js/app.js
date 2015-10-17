var is_app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
if(is_app) alert('attach');

angular.module('fastcast', ['ionic', 'ngCordova'])

.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('<%').endSymbol('%>');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html'
  })
  .state('record', {
    url: '/record',
    templateUrl: 'record.html'
  })
  .state('publish', {
    url: '/publish',
    templateUrl: 'publish.html'
  })
  ;
  
  $urlRouterProvider.otherwise("/");
})


.controller('FastCast', function($scope, $http, $interval, $cordovaFile) {
  console.log('controller');
  var src = null;
  var mediaRec = null;
  $scope.has_recording = false;
  $scope.is_uploading = false;
  $scope.is_playing = false;
  $scope.is_recording = false;
  var duration_ms = 0;
  $scope.scrub_point_ms = 0;
  var start_time_ms = null;
  $scope.episode = {};
  
  $scope.stop_recording = function() {
    $scope.is_recording = false;
    $scope.has_recording = true;
    var current_ms = (new Date()).getTime();
    duration_ms = current_ms - start_time_ms;
    $scope.scrub_point_ms = duration_ms;
    angular.element('#timer').html(duration_ms.toHHMMSS());
    if(is_app)
    {
      mediaRec.stopRecord();
    }
  };
  
  $scope.seek = function(ms)
  {
    if(ms==-1) ms = Number.MAX_VALUE;
    $scope.scrub_point_ms = Math.min(duration_ms, Math.max(0, ms));
    angular.element('#timer').html(($scope.scrub_point_ms).toHHMMSS());
    console.log($scope.scrub_point_ms, duration_ms);
    if(is_app)
    {
      mediaRec.seekTo($scope.scrub_point_ms);
    }
  }
  
  $scope.ff = function(ms)
  {
    $scope.seek(ms);
  };
  $scope.rw = function(ms)
  {
    $scope.seek(-ms);
  }
  
  $scope.play = function() {
    $scope.is_playing = true;
    if($scope.scrub_point_ms >= duration_ms)
    {
      $scope.scrub_point_ms = 0;
    }
    var start_ms = (new Date()).getTime();
    var timeout_promise = $interval(function() {
      if(!$scope.is_playing)
      {
        $interval.cancel(timeout_promise);
        return;
      }
      var current_ms = (new Date()).getTime();
      elapsed_ms = current_ms - start_ms;
      start_ms = (new Date()).getTime();
      $scope.scrub_point_ms = $scope.scrub_point_ms + elapsed_ms;
      if($scope.scrub_point_ms >= duration_ms)
      {
        $scope.scrub_point_ms = duration_ms;
        $scope.stop();
      }
      angular.element('#timer').html(($scope.scrub_point_ms).toHHMMSS());
    }, 100);
    if(is_app)
    {
      mediaRec.seekTo($scope.scrub_point_ms/1000.0);
      mediaRec.play();
    }
  }
  
  $scope.stop = function() {
    $scope.is_playing = false;
    if(is_app)
    {
      mediaRec.stop();
    }
  }
  
  $scope.record = function()
  {
    if($scope.has_recording)
    {
      if(!confirm("Restart this recording?")) return;
    }
    duration_ms = 0;
    $scope.has_recording = false;
    src = "cdvfile://localhost/persistent/podcast.m4a";
    $scope.is_recording = true;
    start_time_ms = (new Date()).getTime();
    var timeout_promise = $interval(function() {
      if(!$scope.is_recording)
      {
        $interval.cancel(timeout_promise);
        return;
      }
      var current_ms = (new Date()).getTime();
      duration_ms = current_ms - start_time_ms;
      angular.element('#timer').html(duration_ms.toHHMMSS());
    }, 100);
    
    if(is_app)
    {
      mediaRec = new Media(src,
        function() {
          console.log("recordAudio():Audio Success");
        },
        function(err) {
          $scope.stop();
          console.log("recordAudio():Audio Error: "+ err.code);
          console.log(err);
        }
      );
      mediaRec.startRecord();
    }
  };
  
  $scope.publish = function() {
    if(!$scope.episode.number)
    {
      alert('Please supply an episode number.');
      return;
    }
    if(!$scope.episode.title)
    {
      alert('Please supply an episode title.');
      return;
    }
    $scope.is_uploading = true;
    
    $scope.progress = 0;

    var slug = sprintf("%03d-%s", $scope.episode.number, $scope.episode.title.slugify());
    $http.get('http://api.fast-cast.net', { params: {slug: slug, type: 'audio'}}).then(function(response) {
      $scope.progress = $scope.progress + 5;
      var url = response.data;
      if(is_app)
      {
        ft = new FileTransfer(),
        ft.onprogress = function(pe)
        {
          var progress = (pe.loaded / pe.total)*80 + 10;
          angular.element('#progress').val(progress);
        };
        options = new FileUploadOptions();
        options.fileName = src;
        options.mimeType = "audio/mp4";
        options.chunkedMode = false;
        options.httpMethod="PUT";
        options.headers = {'Content-Type': 'audio/mp4'};
      
        ft.upload(src, url,
          function (e) {
            console.log('success', e);
          },
          function (e) {
            console.log('failed', e, ft);
          }, options
        );
      }
    }, function(response) {
      console.log('Error getting publishing contract', response);
    });
    $http.get('http://api.fast-cast.net', { params: {slug: slug, type: 'html'}}).then(function(response) {
      $('#progress').val(90);
      var url = response.data;
      if(is_app)
      {
        ft = new FileTransfer(),
        ft.onprogress = function(pe)
        {
          var progress = (pe.loaded / pe.total)*90 + 10;
          angular.element('#progress').val(progress);
        };
        options = new FileUploadOptions();
        options.fileName = src;
        options.mimeType = "text/html";
        options.chunkedMode = false;
        options.httpMethod="PUT";
        options.headers = {'Content-Type': 'text/html'};
      
        var src = "cdvfile://localhost/persistent/podcast.html";
        $cordovaFile.writeFile( 'cdvfile://localhost/persistent' , 'podcast.html', 'hello world', true).then( function(result) {
                // Success!
        }, function(err) {
        	// An error occured. Show a message to the user
        });
              
        ft.upload(src, url,
          function (e) {
            console.log('success', e);
          },
          function (e) {
            console.log('failed', e, ft);
          }, options
        );
      }
    }, function(response) {
      console.log('Error getting publishing contract', response);
    });
  };
});

if(typeof(Media)=='undefined')
{
  var Media = function() {
    var startRecord = function() {};
  };
}

String.prototype.slugify = function()
{
  return this.toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

Number.prototype.toHHMMSS = function () {
  console.log(this);
    var ms_num = Math.floor(this);
    var hours   = Math.floor(ms_num / 3600000);
    var minutes = Math.floor((ms_num - (hours * 3600000)) / 60000);
    var seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000))/1000);
    var ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds*1000);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    if (ms < 100) {ms = "0"+ms;}
    if (ms < 10) {ms = "0"+ms;}
    var time    = hours+':'+minutes+':'+seconds+'.'+ms;
    return time;
}