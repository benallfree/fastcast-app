resolveLocalFileSystemURL($scope.output_directory + $scope.episode.guid + '.wav', function(entry) {
  var dst, source;
  source = entry.toURL();
  dst = source.replace(/.wav/, '.m4a');
  console.log(source, dst);
  wav2m4a.convert(source, dst, (function() {
    uplaod_audio();
  }), function() {
    console.log('Encoding error', arguments);
  });
  return;
  console.log(nativePath);
  window.plugins.AudioEncode.encodeAudio($scope.output_directory + $scope.episode.guid + '.wav', (function() {
    upload_audio();
  }), function(statusCode) {
    console.log('Encoding failed', statusCode);
  });
});
