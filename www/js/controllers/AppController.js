app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state) {
  $scope.podcast = {
    episodes: {
      '001-slug-me': {
        slug: '001-slug-me',
        title: 'Tester 1',
        published_at: null,
        duration_ms: 29348634,
        number: 1,
        recorded_at: 1445171088465,
      },
      '002-slug-me': {
        slug: '002-slug-me',
        title: 'Tester 2',
        published_at: 1445165649619,
        duration_ms: 19348634,
        number: 2,
        recorded_at: 1445171092622,
      },
      '003-slug-me': {
        slug: '003-slug-me',
        title: 'Tester 3',
        published_at: 1445165656489,
        duration_ms: 2934834,
        number: 3,
        recorded_at: 1445171102106,
      },
    },
  };

  function next_episode_number() {
    var n = 0;
    for(var slug in $scope.podcast.episodes)
    {
      var episode = $scope.podcast.episodes[slug];
      n = Math.max(n,episode.number);
    }
    return n+1;
  }
  
  $scope.new = function()
  {
    $scope.episode = {
      slug: sprintf("fc-tgi-%d", (new Date()).getTime()),
      number: next_episode_number(),
    };
    $state.transitionTo('episode.record');
    
  }
  $scope.go = function(slug)
  {
    $scope.episode = $scope.podcast.episodes[slug];
    $state.transitionTo('episode.record');
  }
});

