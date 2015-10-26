resolveLocalFileSystemURL $scope.output_directory + $scope.episode.guid + '.wav', (entry) ->
  source = entry.toURL()
  dst = source.replace(/.wav/, '.m4a')
  console.log source, dst
  wav2m4a.convert source, dst, (->
    uplaod_audio()
    return
  ), ->
    console.log 'Encoding error', arguments
    return
  return
  console.log nativePath
  window.plugins.AudioEncode.encodeAudio $scope.output_directory + $scope.episode.guid + '.wav', (->
    upload_audio()
    return
  ), (statusCode) ->
    console.log 'Encoding failed', statusCode
    return
  return