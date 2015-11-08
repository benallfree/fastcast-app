var app, is_app;

is_app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;

app = angular.module('fastcast', ['ionic', 'ngCordova', 'ngIOS9UIWebViewPatch']).config(function($interpolateProvider) {
  return $interpolateProvider.startSymbol('<%').endSymbol('%>');
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
}).config(function($stateProvider, $urlRouterProvider) {
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
    url: '/episode/record',
    templateUrl: 'record.html',
    controller: 'RecordController',
    parent: 'episode'
  }).state('episode.finalize', {
    url: '/episode/finalize',
    templateUrl: 'finalize.html',
    controller: 'FinalizeController',
    parent: 'episode'
  }).state('episode.finish', {
    url: '/episode/finish',
    templateUrl: 'finish.html',
    controller: 'FinishController',
    parent: 'episode'
  });
  return $urlRouterProvider.otherwise('/');
});
