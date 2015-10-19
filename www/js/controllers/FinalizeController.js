

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
      $cordovaFile.writeFile( $scope.html_src[0] , $scope.html_src[1], 'hello world', true).then( function(result) {
        upload({slug: $scope.episode.slug, type: 'html', mime: 'text/html', src: $scope.html_src.join('/')});
      }, function(err) {
      	console.log('file write error', err);
      });
    }
  }
  
  function upload_audio()
  {
    upload({slug: $scope.episode.slug, type: 'audio', mime: 'audio/mp4', src: $scope.audio_src.join('/')});
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
    $scope.is_uploading_started = true;
    if(is_app)
    {
      upload_html();
      upload_audio();
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
        ft.upload(options.src, url, options.success, options.failure, upload_options);
      }
    }, options.failure);
  }
  
});

