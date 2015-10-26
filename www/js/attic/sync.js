var dst, episode, guid, src;

Media.prototype.getDurationAsync = function() {
  var obj;
  obj = this;
  return $q(function(resolve, reject) {
    var counter, timerDur;
    obj.setVolume(0);
    obj.play();
    obj.stop();
    counter = 0;
    return timerDur = setInterval((function() {
      var dur;
      counter = counter + 100;
      if (counter > 2000) {
        clearInterval(timerDur);
        reject();
      }
      dur = obj.getDuration();
      if (dur > 0) {
        clearInterval(timerDur);
        return resolve(dur);
      }
    }), 100);
  });
};

for (guid in $scope.podcast.episodes) {
  episode = $scope.podcast.episodes[guid];
  episode.audio_src = '';
  if (!episode.audio_src) {
    episode.is_syncing = true;
    if (is_app) {
      src = sprintf('http://www.fast-cast.net/podcasts/tgi/episodes/%s/%s.m4a', episode.slug, episode.slug);
      dst = sprintf('%s%s.m4a', $scope.output_directory, episode.guid);
      $cordovaFileTransfer.download(src, dst).then((function(result) {
        var media;
        episode.audio_src = episode.guid + '.m4a';
        media = new Media(dst);
        media.getDurationAsync().then((function(s) {
          episode.duration_ms = parseInt(s * 1000);
        }), function() {
          episode.is_broken = false;
        })["finally"](function() {
          episode.is_syncing = false;
          $scope.save_state();
        });
      }), (function(err) {
        console.log('Error downloading ', episode.slug, err);
        episode.is_syncing = false;
        episode.is_broken = true;
      }), function(progress) {
        var pct;
        console.log(dst, episode.guid, progress.loaded);
        pct = Math.ceil(progress.loaded / progress.total * 100);
        episode.length_bytes = progress.loaded;
        angular.element('#progress_' + episode.guid).val(pct);
      });
    } else {
      console.log('Downloading m4a for ', episode.guid);
    }
  }
}
