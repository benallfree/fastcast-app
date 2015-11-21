app.controller 'EpisodeController', (
  $scope, 
  $ionicSideMenuDelegate
  $ionicActionSheet
  ) ->
    
  $scope.$on '$ionicView.enter', ->
      $ionicSideMenuDelegate.canDragContent false

  $scope.$on '$ionicView.leave', ->
      $ionicSideMenuDelegate.canDragContent true

  t = (new Date).getTime()
  
  $scope.has_recording = $scope.episode.recorded_at?
  $scope.is_uploading = false
  $scope.is_playing = false
  $scope.is_recording = false
  $scope.duration_ms = $scope.episode.duration_ms or 0
  $scope.scrub_point_ms = 0
  $scope.has_changes = false
  
  $scope.$watch 'episode', ((newObj, oldObj) ->
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
