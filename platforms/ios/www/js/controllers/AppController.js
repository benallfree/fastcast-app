app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state, $cordovaFileTransfer, $q) {
  var load_state, next_episode_number;
  load_state = function() {
    var e, episode, error, guid, k, results;
    $scope.podcast = null;
    try {
      $scope.podcast = JSON.parse(window.localStorage.getItem('podcast'));
    } catch (error) {
      e = error;
      console.log('Error loading state', e);
    }
    if (!$scope.podcast || !$scope.podcast.version) {
      $scope.podcast = {
        version: 1,
        episodes: {}
      };
      $scope.save_state();
    }
    for (k in $scope.podcast.episodes) {
      $scope.podcast.episodes[k].guid = k;
      $scope.podcast.episodes[k].is_syncing = false;
    }
    results = [];
    for (guid in static_episodes) {
      episode = static_episodes[guid];
      if (!(guid in $scope.podcast.episodes)) {
        results.push($scope.podcast.episodes[guid] = episode);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };
  next_episode_number = function() {
    var episode, n, slug;
    n = 0;
    for (slug in $scope.podcast.episodes) {
      episode = $scope.podcast.episodes[slug];
      n = Math.max(n, episode.number);
    }
    return n + 1;
  };
  $scope.output_directory = 'cdvfile://localhost/persistent/';
  $scope.save_state = function() {
    return window.localStorage.setItem('podcast', angular.toJson($scope.podcast));
  };
  load_state();
  $scope["new"] = function() {
    var guid, t;
    t = (new Date).getTime();
    guid = sprintf('fc-tgi-%d', t);
    $scope.episode = {
      guid: guid,
      number: next_episode_number()
    };
    return $state.transitionTo('episode.record');
  };
  return $scope.go = function(guid) {
    $scope.episode = angular.copy($scope.podcast.episodes[guid]);
    return $state.transitionTo('episode.record');
  };
});
