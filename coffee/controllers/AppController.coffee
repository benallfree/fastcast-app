app.controller 'AppController', ($scope, $http, $interval, $cordovaFile, $state, $cordovaFileTransfer, $q) ->

  load_state = ->
    $scope.podcast = null
    try
      $scope.podcast = JSON.parse(window.localStorage.getItem('podcast'))
    catch e
      console.log 'Error loading state', e
    # Fix up version number
    if !$scope.podcast or !$scope.podcast.version
      $scope.podcast =
        version: 1
        episodes: {}
      $scope.save_state()
    # Fix up missing GUIDs
    for k of $scope.podcast.episodes
      $scope.podcast.episodes[k].guid = k
      $scope.podcast.episodes[k].is_syncing = false
    # Fix up missing episodes
    for guid of static_episodes
      episode = static_episodes[guid]
      if !(guid of $scope.podcast.episodes)
        $scope.podcast.episodes[guid] = episode

  next_episode_number = ->
    n = 0
    for slug of $scope.podcast.episodes
      episode = $scope.podcast.episodes[slug]
      n = Math.max(n, episode.number)
    n + 1

  $scope.output_directory = 'cdvfile://localhost/persistent/'

  $scope.save_state = ->
    window.localStorage.setItem 'podcast', angular.toJson($scope.podcast)

  load_state()

  $scope.new = ->
    t = (new Date).getTime()
    guid = sprintf('fc-tgi-%d', t)
    $scope.episode =
      guid: guid
      number: next_episode_number()
    $state.transitionTo 'episode.record'

  $scope.go = (guid) ->
    $scope.episode = angular.copy($scope.podcast.episodes[guid])
    $state.transitionTo 'episode.record'
