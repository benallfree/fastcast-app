

app.controller('EpisodeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet) {
  $scope.src = null;
  $scope.mediaRec = null;
  $scope.has_recording = $scope.episode.slug != null;
  $scope.is_uploading = false;
  $scope.is_playing = false;
  $scope.is_recording = false;
  $scope.duration_ms = $scope.episode.duration_ms || null;
  $scope.scrub_point_ms = 0;

  $scope.cancel = function() {
    var hideSheet = $ionicActionSheet.show({
      destructiveText: 'Discard Changes',
      titleText: 'Discard changes',
      cancelText: 'Cancel',
      destructiveButtonClicked: function() {
        $state.transitionTo('home');
      }
    });      
  };
});

