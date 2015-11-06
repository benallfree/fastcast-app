app.controller('EpisodeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicPopup) {
  var t;
  console.log($scope.output_directory);
  if (!$scope.episode) {
    $state.go('home');
  }
  t = (new Date).getTime();
  $scope.has_recording = $scope.episode.recorded_at != null;
  $scope.is_uploading = false;
  $scope.is_playing = false;
  $scope.is_recording = false;
  $scope.duration_ms = $scope.episode.duration_ms || 0;
  $scope.scrub_point_ms = 0;
  $scope.has_changes = false;
  $scope.$watch('episode', (function(oldObj, newObj) {
    return $scope.has_changes = !angular.equals(oldObj, newObj);
  }), true);
  return $scope.cancel = function() {
    var hideSheet;
    return hideSheet = $ionicActionSheet.show({
      destructiveText: 'Discard Changes',
      titleText: 'Discard changes',
      cancelText: 'Cancel',
      destructiveButtonClicked: function() {
        return $state.go('home');
      }
    });
  };
});
