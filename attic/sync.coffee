Media::getDurationAsync = ->
  obj = this
  $q (resolve, reject) ->
    obj.setVolume 0
    obj.play()
    obj.stop()
    counter = 0
    timerDur = setInterval((->
      counter = counter + 100
      if counter > 2000
        clearInterval timerDur
        reject()
      dur = obj.getDuration()
      if dur > 0
        clearInterval timerDur
        resolve dur
    ), 100)
    
for guid of $scope.podcast.episodes
  episode = $scope.podcast.episodes[guid]
  episode.audio_src = ''
  if !episode.audio_src
    episode.is_syncing = true
    if is_app
      src = sprintf('http://www.fast-cast.net/podcasts/tgi/episodes/%s/%s.m4a', episode.slug, episode.slug)
      dst = sprintf('%s%s.m4a', $scope.output_directory, episode.guid)
      $cordovaFileTransfer.download(src, dst).then ((result) ->
        episode.audio_src = episode.guid + '.m4a'
        # get the duration
        media = new Media(dst)
        media.getDurationAsync().then(((s) ->
          episode.duration_ms = parseInt(s * 1000)
          return
        ), ->
          episode.is_broken = false
          return
        ).finally ->
          episode.is_syncing = false
          $scope.save_state()
          return
        return
      ), ((err) ->
        console.log 'Error downloading ', episode.slug, err
        episode.is_syncing = false
        episode.is_broken = true
        return
      ), (progress) ->
        console.log dst, episode.guid, progress.loaded
        pct = Math.ceil(progress.loaded / progress.total * 100)
        episode.length_bytes = progress.loaded
        angular.element('#progress_' + episode.guid).val pct
        return
    else
      console.log 'Downloading m4a for ', episode.guid