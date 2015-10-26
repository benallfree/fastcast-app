app.controller 'EpisodeController', ($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicPopup) ->
  console.log $scope.output_directory
  
  if !$scope.episode
    $state.transitionTo 'home'
  t = (new Date).getTime()
  if is_app
    $scope.audio = new Media($scope.output_directory + $scope.episode.guid + '.m4a', (->
      console.log 'Audio Success'
    ), (err) ->
      console.log 'Audio Error: ' + err.code
      console.log err
      $ionicPopup.alert(
        title: 'Audio Error'
        template: 'The audio system has failed. Please report this.').then (res) ->
        $state.transitionTo 'home'
      )
  $scope.has_recording = $scope.episode.recorded_at != null
  $scope.is_uploading = false
  $scope.is_playing = false
  $scope.is_recording = false
  $scope.duration_ms = $scope.episode.duration_ms or 0
  $scope.scrub_point_ms = 0
  $scope.has_changes = false
  $scope.$watch 'episode', ((oldObj, newObj) ->
    console.log oldObj, newObj
    $scope.has_changes = !angular.equals(oldObj, newObj)
  ), true

  $scope.cancel = ->
    hideSheet = $ionicActionSheet.show(
      destructiveText: 'Discard Changes'
      titleText: 'Discard changes'
      cancelText: 'Cancel'
      destructiveButtonClicked: ->
        $state.transitionTo 'home'
    )
