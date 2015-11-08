is_app = document.URL.indexOf('http://') == -1 and document.URL.indexOf('https://') == -1

app = angular.module('fastcast', [
  'ionic'
  'ngCordova',
  'ngIOS9UIWebViewPatch',
])

.config(($interpolateProvider) ->
  $interpolateProvider.startSymbol('<%').endSymbol '%>'
)

.run(($ionicPlatform) ->
  $ionicPlatform.ready ->
    # Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    # for form inputs)
    if window.cordova and window.cordova.plugins.Keyboard
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar true
    if window.StatusBar
      StatusBar.styleDefault()
)

.filter('numberFixedLen', ->
  (n, len) ->
    sprintf '%0' + len + 'd', n
)

.filter('orderByMagic', -> 
  (episodes) ->
    orderByMagic(episodes)
)

.config(($stateProvider, $urlRouterProvider) ->
  $stateProvider.state('home',
    url: '/'
    templateUrl: 'home.html'
    controller: 'HomeController')
  .state('episode',
    cache: false
    url: '/episode'
    template: '<ion-nav-view></ion-nav-view>'
    controller: 'EpisodeController'
    abstract: true)
  .state('episode.record',
    url: '/episode/record'
    templateUrl: 'record.html'
    controller: 'RecordController'
    parent: 'episode')
  .state('episode.finalize',
    url: '/episode/finalize'
    templateUrl: 'finalize.html'
    controller: 'FinalizeController'
    parent: 'episode')
  .state 'episode.finish',
    url: '/episode/finish'
    templateUrl: 'finish.html'
    controller: 'FinishController'
    parent: 'episode'
  $urlRouterProvider.otherwise '/'
)
