app.controller 'AppController', (
  $scope, 
  $http, 
  $interval, 
  $cordovaFile, 
  $state, 
  $cordovaFileTransfer, 
  $q, 
  $ionicHistory, 
  $ionicSideMenuDelegate,
  $jrCrop,
  $cordovaImagePicker
  ) ->


  $scope.select_logo = (cb)->
    options = 
      maximumImagesCount: 1

    $cordovaImagePicker.getPictures(options)
      .then ( ((results) ->
        $jrCrop.crop(
          url: results[0]
          title: 'Move and Scale'
          width: 300
          height: 300
        ).then( (canvas)->
          c = Caman(canvas, ->
            @resize
              width: 75
              height: 75
            @render =>
              data_url = @toBase64('jpeg')
              b64 = data_url.replace(/^data:.+?;base64,/, "");
              console.log(data_url.substring(0,50))
              _base64ToArrayBuffer = (base64) ->
                binary_string = window.atob(base64.replace(/\s/g, ''))
                len = binary_string.length
                bytes = new Uint8Array(len)
                i = 0
                while i < len
                  bytes[i] = binary_string.charCodeAt(i)
                  i++
                bytes.buffer        
              data = _base64ToArrayBuffer(b64)
              $cordovaFile.writeFile($scope.output_directory, "test.jpg", data, true).then(->
                cb($scope.output_directory+ "test.jpg", data_url)
              )
          )
        )
      )), (error)->
        console.log(error)


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
    guid = sprintf('fc-tgi-%d', t)
    $scope.episode =
      guid: guid
      number: next_episode_number()
    $state.go 'episode.record'

  $scope.go = (guid) ->
    $scope.episode = angular.copy($scope.podcast.episodes[guid])
    $state.go 'episode.record'
