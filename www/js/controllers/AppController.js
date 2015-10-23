app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state) {
  $scope.save_state = function() {
    window.localStorage.setItem('podcast', angular.toJson($scope.podcast));
  }

  function load_state()
  {
    $scope.podcast = null;
    try {
      $scope.podcast = JSON.parse(window.localStorage.getItem('podcast'));
    } catch (e) {
      console.log("Error loading state", e);
    }
    if(!$scope.podcast || !$scope.podcast.version)
    {
      $scope.podcast = {
        version: 1,
        episodes: {}
      };
      $scope.save_state();
    }
    for(var k in $scope.podcast.episodes)
    {
      $scope.podcast.episodes[k].guid = k;
    }
  }
  load_state();
  
  console.log($scope.podcast);
  console.log(FastCast.templates.rss({podcast: $scope.podcast}));

  

  
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
    var t = (new Date()).getTime();
    var guid = sprintf("fc-tgi-%d", t);
    $scope.episode = {
      guid: guid,
      number: next_episode_number(),
    };
    $state.transitionTo('episode.record');
    
  }
  
  $scope.go = function(guid)
  {
    $scope.episode = angular.copy($scope.podcast.episodes[guid]);
    $state.transitionTo('episode.record');
  }
  
  
});

