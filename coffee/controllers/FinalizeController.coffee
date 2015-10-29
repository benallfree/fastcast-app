app.controller 'FinalizeController', ($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicHistory) ->

  upload_rss = ->
    rss = FastCast.templates.rss(episodes: orderByMagic($scope.podcast.episodes))
    console.log rss
    if is_app
      $cordovaFile.writeFile($scope.output_directory, 'tgi.rss', rss, true).then ((result) ->
        upload
          type: 'rss'
          mime: 'application/rss+xml'
          src: 'tgi.rss'
      ), (err) ->
        console.log 'file write error', err
    
  upload_html = ->
    html = FastCast.templates.episode(episode: $scope.episode)
    console.log html
    if is_app
      $cordovaFile.writeFile($scope.output_directory, $scope.episode.guid + '.html', html, true).then ((result) ->
        upload
          slug: $scope.episode.slug
          type: 'html'
          mime: 'text/html'
          src: $scope.episode.guid + '.html'
      ), (err) ->
        console.log 'file write error', err

  upload_audio = ->
    upload
      slug: $scope.episode.slug
      type: 'audio'
      mime: 'audio/mp4'
      src: $scope.episode.guid + '.m4a'

  upload = (options) ->
    $scope.upload_count++
    $scope.uploads[options.type] = 0
    $http.get('http://api.fast-cast.net', params:
      slug: options.slug
      type: options.type)
    .then ((response) ->
      $scope.uploads[options.type] = 10
      url = response.data
      if is_app
        ft = new FileTransfer
        ft.onprogress = (pe) ->
          console.log 'makin progress', options
          $scope.uploads[options.type] = pe.loaded / pe.total * 90 + 10
          angular.element('#progress_' + options.type).val $scope.uploads[options.type]
          if $scope.uploads[options.type] >= 100
            setTimeout (->
              delete $scope.uploads[options.type]
              $scope.upload_count--
              if $scope.upload_count == 0
                $scope.is_uploading_finished = true
              $scope.$apply()
            ), 1000

        upload_options = new FileUploadOptions
        upload_options.fileName = options.src
        upload_options.mimeType = options.mime
        upload_options.chunkedMode = false
        upload_options.httpMethod = 'PUT'
        upload_options.headers = 'Content-Type': options.mime
        ft.upload $scope.output_directory + options.src, url, options.success, options.failure, upload_options
    ), options.failure

  $scope.is_uploading = false
  $scope.uploads = {}

  $scope.back = ->
    $state.transitionTo 'episode.record'

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
    $scope.is_uploading_started = true
    $scope.episode.slug = sprintf('%03d - %s', $scope.episode.number, $scope.episode.title).slugify()
    if is_app
      if(!$scope.episode.length_bytes)
        window.resolveLocalFileSystemURL $scope.output_directory + $scope.episode.guid + '.m4a', ((fileEntry) ->
          fileEntry.file (file) ->
            console.log "got byte size", file
            $scope.episode.length_bytes = file.size
            $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode)
            upload_rss()
            $scope.save_state()
            console.log file
        ), (err) ->
          console.log 'error getting file size'
      else
        $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode)
        upload_rss()
        $scope.save_state()
      upload_html()
      upload_audio()
    else
      console.log 'Uploading HTML and M4A...'
      $scope.is_uploading_finished = true

  $scope.$watch 'is_uploading_finished', (v) ->
    if !v
      return
    $state.transitionTo 'episode.finish'
  $scope.upload_count = 0
