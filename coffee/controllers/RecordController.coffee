app.controller 'RecordController', ($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicPopup) ->
  start_time_ms = null

  new_media = ->
    if is_app
      $scope.audio = new Media($scope.output_directory + $scope.episode.guid + '.m4a', (->
        # Audio success
      ), ((err) ->
        console.log 'Audio Error: ' + err.code
        console.log err
        $ionicPopup.alert(
          title: 'Audio Error'
          template: 'The audio system has failed. Please report this.'
        ).then (res) ->
          $state.transitionTo 'home'
      ), ((status)->
        console.log("Media status", status)
      )
              
  _record = ->
    $scope.new_media()
    $scope.has_changes = true
    $scope.duration_ms = 0
    $scope.has_recording = false
    $scope.is_recording = true
    start_time_ms = (new Date).getTime()
    $scope.episode.recorded_at = start_time_ms
    timeout_promise = $interval((->
      if !$scope.is_recording
        $interval.cancel timeout_promise
        return
      current_ms = (new Date).getTime()
      $scope.duration_ms = current_ms - start_time_ms
      angular.element('#timer').html $scope.duration_ms.toHHMMSS()
      return
    ), 100)
    if is_app
      $scope.audio.startRecord()

  $scope.stop_recording = ->
    $scope.is_recording = false
    $scope.has_recording = true
    current_ms = (new Date).getTime()
    $scope.duration_ms = current_ms - start_time_ms
    $scope.scrub_point_ms = $scope.duration_ms
    $scope.episode.duration_ms = $scope.duration_ms
    angular.element('#timer').html $scope.duration_ms.toHHMMSS()
    if is_app
      $scope.audio.stopRecord()

  hold_promise = null

  $scope.hold = (mode) ->
    if !mode
      $interval.cancel hold_promise
      return
    parts = mode.split(/:/)
    hold_promise = $interval((->
      $scope[parts[0]] parseInt(parts[1])
    ), 100)

  $scope.seek = (ms) ->
    console.log ms
    if ms == -1
      ms = Number.MAX_VALUE
    $scope.scrub_point_ms = Math.min($scope.duration_ms, Math.max(0, ms))
    console.log $scope.scrub_point_ms
    angular.element('#timer').html $scope.scrub_point_ms.toHHMMSS()
    if is_app
      $scope.audio.seekTo $scope.scrub_point_ms

  $scope.ff = (ms) ->
    console.log 'ff'
    $scope.seek $scope.scrub_point_ms + ms

  $scope.rw = (ms) ->
    $scope.seek $scope.scrub_point_ms - ms

  $scope.play = ->
    $scope.is_playing = true
    if $scope.scrub_point_ms >= $scope.duration_ms
      $scope.scrub_point_ms = 0
    start_ms = (new Date).getTime()
    timeout_promise = $interval((->
      if !$scope.is_playing
        $interval.cancel timeout_promise
        return
      current_ms = (new Date).getTime()
      elapsed_ms = current_ms - start_ms
      start_ms = (new Date).getTime()
      $scope.scrub_point_ms = $scope.scrub_point_ms + elapsed_ms
      if $scope.scrub_point_ms >= $scope.duration_ms
        $scope.scrub_point_ms = $scope.duration_ms
        $scope.stop_playing()
      angular.element('#timer').html $scope.scrub_point_ms.toHHMMSS()
    ), 100)
    if is_app
      $scope.audio.seekTo $scope.scrub_point_ms / 1000.0
      $scope.audio.play()

  $scope.stop_playing = ->
    $scope.is_playing = false
    if is_app
      $scope.audio.stop()

  $scope.record = ->
    if $scope.has_recording
      hideSheet = $ionicActionSheet.show(
        destructiveText: 'Scrap and Re-Record'
        titleText: 'Re-record episode'
        cancelText: 'Cancel'
        destructiveButtonClicked: ->
          hideSheet()
          _record()
      )
    _record()
