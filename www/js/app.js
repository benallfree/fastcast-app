var is_app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;

angular.module('fastcast', ['ionic'])

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


.controller('FastCast', function($scope, $http, $interval) {
  var src = null;
  var mediaRec = null;
  $scope.has_recording = false;
  $scope.is_uploading = false;
  $scope.is_playing = false;
  $scope.is_recording = false;
  $scope.data = {scrub: 0};
  var duration = 0;
  var scrub_point = 0;

  $scope.$watch('data.scrub', function(o,n) {
    scrub_point = duration * ((n)/100.0);
    angular.element('#timer').html(scrub_point.toHHMMSS());
    if(is_app)
    {
      mediaRec.seekTo(scrub_point);
    }
  });
  
  $scope.stop_recording = function() {
    $scope.is_recording = false;
    $scope.has_recording = true;
    $scope.data.scrub = 0;
    if(is_app)
    {
      mediaRec.stopRecord();
      duration = mediaRec.duration;
    }
  };
  
  $scope.play = function() {
    $scope.is_playing = true;
    var d = new Date();
    var start = d.getTime();
    var timeout_promise = $interval(function() {
      if(!$scope.is_playing)
      {
        $interval.cancel(timeout_promise);
        return;
      }
      var d = new Date();
      var current = d.getTime();
      var elapsed = current - start;
      angular.element('#timer').html(elapsed.toHHMMSS());
      
    }, 100);
    if(is_app)
    {
      mediaRec.seekTo(scrub_point);
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
    duration = 0;
    $scope.has_recording = false;
    src = "cdvfile://localhost/persistent/podcast.m4a";
    $scope.is_recording = true;
    var d = new Date();
    var start = d.getTime();
    var timeout_promise = $interval(function() {
      if(!$scope.is_recording)
      {
        $interval.cancel(timeout_promise);
        return;
      }
      var d = new Date();
      var current = d.getTime();
      duration = current - start;
      angular.element('#timer').html(duration.toHHMMSS());
      
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
    $scope.is_uploading = true;
    angular.element('#progress').val(0);
    $http.get('http://api.fast-cast.net').then(function(response) {
      $('#progress').val(10);
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
        options.mimeType = "audio/mp4";
        options.chunkedMode = false;
        options.httpMethod="PUT";
      
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