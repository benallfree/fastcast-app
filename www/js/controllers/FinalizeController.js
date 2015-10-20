

app.controller('FinalizeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicHistory) {
  $scope.is_uploading = false;
  $scope.uploads = {};

  $scope.back = function() {
    $state.transitionTo('episode.record');
  };
    
  function upload_html()
  {
    if(is_app)
    {
      $cordovaFile.writeFile( $scope.output_directory , $scope.episode.guid+'.html', 'hello world', true).then( function(result) {
        upload({slug: $scope.episode.slug, type: 'html', mime: 'text/html', src: $scope.episode.guid+'.html'});
      }, function(err) {
      	console.log('file write error', err);
      });
    }
  }
  
  function upload_audio()
  {
    upload({slug: $scope.episode.slug, type: 'audio', mime: 'audio/mp4', src: $scope.episode.guid+'.m4a'});
  }
  
  $scope.is_uploading_started = false;
  $scope.is_uploading_finished = false;

  $scope.publish = function() {
    if(!$scope.episode.number)
    {
      alert('Please supply an episode number.');
      return;
    }
    if(!$scope.episode.title)
    {
      alert('Please supply an episode title.');
      return;
    }
    if($scope.episode.is_published && !$scope.episode.published_at)
    {
      $scope.episode.published_at = (new Date()).getTime();
    }
    $scope.episode.slug = sprintf("%03d - %s", $scope.episode.number, $scope.episode.title).slugify();
    $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode);
    $scope.save_state();
    $scope.is_uploading_started = true;
    if(is_app)
    {
      upload_html();
      
      resolveLocalFileSystemURL($scope.output_directory+$scope.episode.guid+'.wav', function(entry) {
        var source = entry.toURL();
        var dst = source.replace(/.wav/, '.m4a');
        console.log(source, dst);
        wav2m4a.convert(source, dst, function() {
            uplaod_audio();
          },
          function()
          {
            console.log("Encoding error", arguments);
          }
        );
        return;
        console.log(nativePath);
        window.plugins.AudioEncode.encodeAudio($scope.output_directory+$scope.episode.guid+'.wav', function() {
          upload_audio();
        }, function(statusCode) {
          console.log("Encoding failed", statusCode);
        });
      });
      
    } else {
      $scope.is_uploading_finished = true;
    }
  };
  
  $scope.$watch('is_uploading_finished', function(v) {
    if(!v) return;
    $state.transitionTo('episode.finish');
  });
  
  $scope.upload_count=0;
  function upload(options)
  {
    $scope.upload_count++;
    $scope.uploads[options.type] = 0;
    $http.get('http://api.fast-cast.net', { params: {slug: options.slug, type: options.type}}).then(function(response) {
      $scope.uploads[options.type] = 10;
      var url = response.data;
      if(is_app)
      {
        var ft = new FileTransfer();
        ft.onprogress = function(pe)
        {
          console.log("makin progress", options);
          $scope.uploads[options.type] = ((pe.loaded / pe.total)*90 + 10);
          angular.element('#progress_'+options.type).val($scope.uploads[options.type]);
          if($scope.uploads[options.type]>=100)
          {
            setTimeout(function() {
              delete $scope.uploads[options.type]
              $scope.upload_count--;
              if($scope.upload_count==0) $scope.is_uploading_finished = true;
              $scope.$apply();
            }, 1000);
          }
        };
        var upload_options = new FileUploadOptions();
        upload_options.fileName = options.src;
        upload_options.mimeType = options.mime;
        upload_options.chunkedMode = false;
        upload_options.httpMethod="PUT";
        upload_options.headers = {'Content-Type': options.mime};
        ft.upload($scope.output_directory+options.src, url, options.success, options.failure, upload_options);
      }
    }, options.failure);
  }
  
});

