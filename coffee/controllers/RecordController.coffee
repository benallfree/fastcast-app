app.controller 'RecordController', ($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicHistory, $ionicPopup, $ionicNavBarDelegate) ->
  $scope.$parent.$on '$ionicView.beforeLeave', ->
    console.log('beforeLeave')
    rec.stop()

  rec = new Recorder(
    $scope.output_directory + $scope.episode.guid + '.m4a',
    onScrubUpdate: (ms)->
      $scope.scrub_point_ms = ms
    onDurationUpdate: (ms)->
      $scope.duration_ms = ms
      $scope.episode.duration_ms = ms
    onAudioError: ->
      $ionicPopup.alert(
        title: 'Audio Error'
        template: 'The audio system has failed. Please report this.'
      ).then ((res) ->
        $scope.home()
      )
    onPlayStart: ->
      $scope.is_playing = true
    onPlayStop: ->
      $scope.is_playing = false
    onRecordStart: ->
      $scope.has_changes = true
      $ionicNavBarDelegate.showBackButton false
      $ionicHistory.clearHistory()
      $scope.is_recording = true
      $scope.has_recording = false
      $scope.episode.recorded_at = (new Date).getTime()
    onRecordStop: ->
      $scope.is_recording = false
      $scope.has_recording = true
    onEvent: ->
      $scope.$applyAsync()
      
  )

  hold_promise = null
  $scope.hold = (ms) ->
    if !ms
      $interval.cancel hold_promise
      return
    hold_promise = $interval((->
      rec.step(ms)
    ), 100)

  $scope.seek = (ms) ->
    console.log 'seek', ms
    rec.seek(ms)

  $scope.step = (ms) ->
    console.log 'step', ms
    rec.step(ms)

  $scope.play = ->
    rec.play()

  $scope.stop_playing = ->
    rec.stop()
    
  $scope.stop_recording = ->
    rec.stop()
    
  $scope.record = ->
    if $scope.has_recording
      hideSheet = $ionicActionSheet.show(
        destructiveText: 'Scrap and Re-Record'
        titleText: 'Re-record episode'
        cancelText: 'Cancel'
        destructiveButtonClicked: ->
          hideSheet()
          rec.record()
      )
    else
      rec.record()
