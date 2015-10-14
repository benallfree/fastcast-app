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


.controller('FastCast', function($scope, $http) {
  $scope.is_recording = false;
  var src = null;
  var mediaRec = null;
  $scope.has_recording = false;


  $scope.stop = function() {
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
    $http.get('http://api.fast-cast.net').then(function(response) {
      var data = response.data;
      ft = new FileTransfer(),
      options = new FileUploadOptions();
      options.fileName = src;
      options.mimeType = "audio/mp4";
      options.chunkedMode = false;
      options.headers = {
        'Connection': 'close'
      };
      options.params = {
        "key": data.key,
        "AWSAccessKeyId": data.access_key,
        "acl": "public-read",
        "policy": data.policy,
        "signature": data.signature,
        "Content-Type": "audio/mp4"
      };
      
      console.log(options.params);
      
      ft.upload(src, "http://fastcast.s3.amazonaws.com/",
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