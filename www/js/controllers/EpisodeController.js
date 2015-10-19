

app.controller('EpisodeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet) {
  if(!$scope.episode)
  {
    $scope.episode = $scope.podcast.episodes['002-slug-me'];
  }
  $scope.audio_src = ["cdvfile://localhost/persistent", sprintf("%s.m4a", $scope.episode.slug)];
  $scope.html_src = ["cdvfile://localhost/persistent", sprintf("%s.html", $scope.episode.slug)];
  $scope.mediaRec = null;
  $scope.has_recording = $scope.episode.recorded_at != null;   
  $scope.is_uploading = false;
  $scope.is_playing = false;
  $scope.is_recording = false;
  $scope.duration_ms = $scope.episode.duration_ms || 0;
  $scope.scrub_point_ms = 0;
  console.log($scope.has_recording);

  $scope.cancel = function() {
    var hideSheet = $ionicActionSheet.show({
      destructiveText: 'Discard Changes',
      titleText: 'Discard changes',
      cancelText: 'Cancel',
      destructiveButtonClicked: function() {
        delete $scope.podcast.episodes[$scope.episode.slug];
        $state.transitionTo('home');
      }
    });      
  };
});

