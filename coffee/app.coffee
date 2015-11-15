window.is_app = document.URL.indexOf('http://') == -1 and document.URL.indexOf('https://') == -1

window.app = angular.module('fastcast', [
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
      url: '/record'
      templateUrl: 'episode/record.html'
      controller: 'RecordController'
      parent: 'episode')
    .state('episode.finalize',
      url: '/finalize'
      templateUrl: 'episode/finalize.html'
      controller: 'FinalizeController'
      parent: 'episode')
    .state('episode.finish',
      url: '/finish'
      templateUrl: 'episode/finish.html'
      controller: 'FinishController'
      parent: 'episode')
  .state('settings',
    url: '/settings'
    template: '<ion-nav-view></ion-nav-view>'
    controller: 'SettingsController'
    abstract: true)
    .state('settings.podcast',
      url: '/podcast'
      templateUrl: 'settings/podcast.html'
      controller: 'PodcastSettingsController'
      parent: 'settings')
    
  $urlRouterProvider.otherwise '/'
)
