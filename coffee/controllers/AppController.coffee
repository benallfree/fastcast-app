app.controller 'AppController', (
  $scope, 
  $http, 
  $interval, 
  $cordovaFile, 
  $state, 
  $cordovaFileTransfer, 
  $q, 
  $ionicHistory, 
  $ionicSideMenuDelegate
  ) ->

  $scope.settings = ->
    $state.go 'settings.podcast'
    
  $scope.toggleLeft = ->
    $ionicSideMenuDelegate.toggleLeft()
  
  $scope.home = ->
    $ionicHistory.nextViewOptions({
      disableBack: true
    });  
    $state.go 'home'
    
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
    $scope.podcast.episodes = angular.merge({}, static_episodes, $scope.podcast.episodes);
    # for guid of static_episodes
    #   episode = static_episodes[guid]
    #   #if !(guid of $scope.podcast.episodes)
    #   $scope.podcast.episodes[guid] = episode

  next_episode_number = ->
    n = 0
    for slug of $scope.podcast.episodes
      episode = $scope.podcast.episodes[slug]
      n = Math.max(n, episode.number)
    n + 1

  $scope.output_directory = 'cdvfile://localhost/persistent/'
  
  resolveLocalFileSystemURL($scope.output_directory, (entry)->
    $scope.native_output_directory = entry.toURL()
  )
  
  $scope.save_state = ->
    json = angular.toJson($scope.podcast)
    window.localStorage.setItem 'podcast', angular.toJson($scope.podcast)
    $cordovaFile.writeFile($scope.output_directory, 'data.json', json, true).then ((result) ->
      (new UploadWorker(
        type: 'json'
        mime: 'application/json'
        src: $scope.output_directory + 'data.json'
      ))
    )
    

  load_state()

  $scope.new = ->
    t = (new Date).getTime()
    guid = sprintf('fc-%s-%d', $scope.podcast.code t)
    $scope.episode =
      guid: guid
      number: next_episode_number()
    $state.go 'episode.record'

  $scope.go = (guid) ->
    $scope.episode = angular.copy($scope.podcast.episodes[guid])
    $scope.episode.is_published = $scope.episode.published_at?
    $state.go 'episode.record'
