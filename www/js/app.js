alert('connect');
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
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
  $scope.is_recording = false;
  var src = null;
  var mediaRec = null;
  $scope.has_recording = false;
  $scope.is_uplaoding = false;

  $scope.stop = function() {
    $scope.is_recording = false;
    return;
    mediaRec.stopRecord();
    mediaRec.seekTo(0);
    mediaRec.play();
    $scope.is_recording = false;
    $scope.has_recording = true;
  };
  
  $scope.record = function()
  {
    src = "cdvfile://localhost/persistent/podcast.m4a";
    $scope.is_recording = true;
    var d = new Date();
    var start = d.getTime();
    var timeout_promise = $interval(function() {
      if(!$scope.is_recording)
      {
        var elapsed = 0;
        $interval.cancel(timeout_promise);
        angular.element('#timer').html(elapsed.toHHMMSS());
        return;
      }
      var d = new Date();
      var current = d.getTime();
      var elapsed = current - start;
      angular.element('#timer').html(elapsed.toHHMMSS());
      
    }, 100);

    
    return;
    
    mediaRec = new Media(src,
      function() {
        console.log("recordAudio():Audio Success");
      },
      function(err) {
        $scope.is_recording = false;
        console.log("recordAudio():Audio Error: "+ err.code);
        console.log(err);
      }
    );
    mediaRec.startRecord();
  };
  
  $scope.publish = function() {
    $scope.is_uploading = true;
    angular.element('#progress').val(0);
    $http.get('http://api.fast-cast.net').then(function(response) {
      $('#progress').val(10);
      var url = response.data;
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
    var ms_num = this;
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