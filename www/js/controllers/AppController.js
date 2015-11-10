app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state, $cordovaFileTransfer, $q, $ionicHistory, $ionicSideMenuDelegate) {
  var load_state, next_episode_number;
  $scope.toggleLeft = function() {
    return $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.home = function() {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    return $state.go('home');
  };
  load_state = function() {
    var e, error, k;
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
    return $scope.podcast.episodes = angular.merge({}, static_episodes, $scope.podcast.episodes);
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
    var json;
    json = angular.toJson($scope.podcast);
    window.localStorage.setItem('podcast', angular.toJson($scope.podcast));
    return $cordovaFile.writeFile($scope.output_directory, 'data.json', json, true).then((function(result) {
      return new UploadWorker({
        type: 'json',
        mime: 'application/json',
        src: $scope.output_directory + 'data.json'
      });
    }));
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
    return $state.go('episode.record');
  };
  return $scope.go = function(guid) {
    $scope.episode = angular.copy($scope.podcast.episodes[guid]);
    return $state.go('episode.record');
  };
});
