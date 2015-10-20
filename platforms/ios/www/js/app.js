var is_app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
if(is_app) alert('attach');

var app = angular.module('fastcast', ['ionic', 'ngCordova'])

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

.filter('numberFixedLen', function () {
  return function (n, len) {
    return sprintf('%0'+len+'d', n);
  };
})

.filter('orderByMagic', function() {
  return function(episodes) {
    var array = []; 
    Object.keys(episodes).forEach(function (key) {
      array.push(episodes[key]);
    });
    // apply a custom sorting function
    array.sort(function (a, b) {
      if(a.published_at && !b.published_at) return 1;
      if(!a.published_at && b.published_at) return -1;
      // Either both are published or neither is published
      if(a.published_at && b.published_at) return (a.published_at > b.published_at ? -1 : 1);
      return (a.recorded_at > b.recorded_at ? -1 : 1); 
    });
    return array;
  };   
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html',
    controller: 'HomeController'
  })
  .state('episode', {
    cache: false,
    url: '/episode',
    template: '<ion-nav-view></ion-nav-view>',
    controller: 'EpisodeController',
    abstract: true,
  })
  .state('episode.record', {
    url: '/record',
    templateUrl: 'record.html',
    controller: 'RecordController',
    parent: 'episode',
  })
  .state('episode.finalize', {
    url: '/finalize',
    templateUrl: 'finalize.html',
    controller: 'FinalizeController',
    parent: 'episode',
  })
  .state('episode.finish', {
    url: '/finish',
    templateUrl: 'finish.html',
    parent: 'episode',
  })
  ;
  
  $urlRouterProvider.otherwise("/");
});

