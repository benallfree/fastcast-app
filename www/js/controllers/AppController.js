app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state) {
  $scope.podcast = {
    next_episode_number: 42,
    episodes: {
      '001-slug-me': {
        slug: '001-slug-me',
        title: 'Tester 1',
        pub_date: null,
        duration_ms: 29348634,
        number: 1,
      },
      '002-slug-me': {
        slug: '002-slug-me',
        title: 'Tester 2',
        pub_date: 1445165649619,
        duration_ms: 19348634,
        number: 1,
      },
      '003-slug-me': {
        slug: '003-slug-me',
        title: 'Tester 3',
        pub_date: 1445165656489,
        duration_ms: 2934834,
        number: 1,
      },
    },
  };
  $scope.episode = $scope.podcast.episodes['002-slug-me'];
  
  $scope.new = function()
  {
    $scope.episode = {};
    $state.transitionTo('episode.record');
    
  }
  $scope.go = function(slug)
  {
    console.log(slug);
    $scope.episode = $scope.podcast.episodes[slug];
    console.log($scope.episode);
    $state.transitionTo('episode.record');
  }
});

