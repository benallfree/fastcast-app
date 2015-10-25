// Fix up missing local audio files
for(var guid in $scope.podcast.episodes)
{
  var episode = $scope.podcast.episodes[guid];
  episode.audio_src = '';
  if(!episode.audio_src)
  {
    episode.is_syncing = true;
    if(is_app)
    {
      var src = sprintf('http://www.fast-cast.net/podcasts/tgi/episodes/%s/%s.m4a', episode.slug, episode.slug);
      var dst = sprintf("%s%s.m4a", $scope.output_directory, episode.guid);
      $cordovaFileTransfer.download(src, dst).then(function(result) {
        episode.audio_src = episode.guid + '.m4a';
        // get the duration
        var media = new Media(dst);
        media.getDurationAsync().then(function(s) {
          episode.duration_ms = parseInt(s * 1000);
        }, function() {
          episode.is_broken = false;
        }).finally(function() {
          episode.is_syncing = false;
          $scope.save_state();
        });
      }, function(err) {
        console.log("Error downloading ", episode.slug, err);
        episode.is_syncing = false;
        episode.is_broken = true;
      }, function (progress) {
        console.log(dst, episode.guid, progress.loaded);
        var pct = Math.ceil((progress.loaded / progress.total)*100);
        episode.length_bytes = progress.loaded;
        angular.element('#progress_'+episode.guid).val(pct);
      });
    } else {
      console.log("Downloading m4a for ", episode.guid);
    }

  }
}   