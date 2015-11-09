app.controller 'EpisodeController', ($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicNavBarDelegate, $ionicPopup) ->
  t = (new Date).getTime()
  
  $scope.has_recording = $scope.episode.recorded_at?
  $scope.is_uploading = false
  $scope.is_playing = false
  $scope.is_recording = false
  $scope.duration_ms = $scope.episode.duration_ms or 0
  $scope.scrub_point_ms = 0
  $scope.has_changes = false
  
  $scope.$watch 'episode', ((oldObj, newObj) ->
    $scope.has_changes = !angular.equals(oldObj, newObj)
  ), true

  $scope.cancel = ->
    hideSheet = $ionicActionSheet.show(
      destructiveText: 'Discard Changes'
      titleText: 'Discard changes'
      cancelText: 'Cancel'
      destructiveButtonClicked: ->
        $scope.home()
    )
