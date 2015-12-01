app.controller 'FinalizeController', ($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicNavBarDelegate, $ionicHistory) ->
  $ionicNavBarDelegate.showBackButton true

  upload_rss = ->
    rss = FastCast.templates.rss
      podcast: $scope.podcast
    $cordovaFile.writeFile($scope.output_directory, $scope.podcast.code+'.rss', rss, true).then ((result) ->
      upload
        type: 'rss'
        mime: 'application/rss+xml'
        src: $scope.output_directory + $scope.podcast.code + '.rss'
    ), (err) ->
      console.log 'file write error', err
    
  upload_html = ->
    html = FastCast.templates.episode
      episode: $scope.episode
    $cordovaFile.writeFile($scope.output_directory, $scope.episode.guid + '.html', html, true).then ((result) ->
      upload
        slug: $scope.episode.slug
        type: 'html'
        mime: 'text/html'
        src: $scope.output_directory + $scope.episode.guid + '.html'
    ), (err) ->
      console.log 'file write error', err

  upload_audio = ->
    upload
      slug: $scope.episode.slug
      type: 'audio'
      mime: 'audio/mp4'
      src: $scope.output_directory + $scope.episode.guid + '.m4a'

  upload = (item) ->
    item.code = $scope.podcast.code
    (new UploadWorker(item))
      .started ->
        $scope.upload_count++
        $scope.uploads[item.type] = 0
      .finished ->
        setTimeout (->
          delete $scope.uploads[item.type]
          $scope.upload_count--
          if $scope.upload_count == 0
            $scope.is_uploading_finished = true
          $scope.$apply()
        ), 1000
      .progress (progress)->
        $scope.uploads[item.type] = progress
        angular.element('#progress_' + item.type).val progress
        $scope.$apply()
      

  $scope.is_uploading = false
  $scope.uploads = {}

  $scope.back = ->
    $state.go 'episode.record'

  $scope.is_uploading_started = false
  $scope.is_uploading_finished = false

  $scope.publish = ->
    if !$scope.episode.number
      alert 'Please supply an episode number.'
    $scope.episode.published_at = null
    if $scope.episode.is_published
      if !$scope.episode.title
        alert 'Please supply an episode title.'
      if !$scope.episode.description
        alert 'Please supply an episode description.'
      if !$scope.episode.published_at
        $scope.episode.published_at = (new Date).getTime()
    else
      $scope.episode.published_at = null
    $scope.is_uploading_started = true
    $scope.episode.slug = sprintf('%03d - %s', $scope.episode.number, $scope.episode.title).slugify()
    if(!$scope.episode.length_bytes)
      window.resolveLocalFileSystemURL $scope.output_directory + $scope.episode.guid + '.m4a', ((fileEntry) ->
        fileEntry.file (file) ->
          console.log "got byte size", file
          $scope.episode.length_bytes = file.size
          $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode)
          if $scope.episode.published_at
            upload_rss()
          $scope.save_state()
          console.log file
      ), (err) ->
        console.log 'error getting file size'
    else
      $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode)
      if $scope.episode.published_at
        upload_rss()
      $scope.save_state()
    if $scope.episode.published_at
      upload_html()
    upload_audio()

  $scope.$watch 'is_uploading_finished', (v) ->
    if !v
      return
    $ionicHistory.nextViewOptions({
      disableBack: true
    });  
    $state.go 'episode.finish'
  $scope.upload_count = 0
