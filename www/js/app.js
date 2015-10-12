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


.controller('FastCast', function($scope) {
  alert('attach');
  $scope.record = function()
  {
    var src = "myrecording.m4a";
     var mediaRec = new Media(src,
         // success callback
         function() {
             console.log("recordAudio():Audio Success");
         },

         // error callback
         function(err) {
             console.log("recordAudio():Audio Error: "+ err.code);
             console.log(err);
         });

     // Record audio
     mediaRec.startRecord();
  }
});

