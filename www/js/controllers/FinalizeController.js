

app.controller('FinalizeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicHistory) {
  var src = null;
  var mediaRec = null;
  $scope.is_uploading = false;
  $scope.episode = {
    number: $scope.podcast.next_episode_number,
  };
  $scope.uploads = {};

  $scope.back = function() {
    $state.transitionTo('episode.record');
  };
    
  function upload_html(slug)
  {
    if(is_app)
    {
      $cordovaFile.writeFile( 'cdvfile://localhost/persistent' , 'podcast.html', 'hello world', true).then( function(result) {
        var src = "cdvfile://localhost/persistent/podcast.html";
        upload({slug: slug, type: 'html', mime: 'text/html', src: src});
      }, function(err) {
      	console.log('file write error', err);
      });
    }
  }
  
  function upload_audio(slug)
  {
    upload({slug: slug, type: 'audio', mime: 'audio/mp4', src: src});
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
    slug = sprintf("%03d-%s", $scope.episode.number, $scope.episode.title.slugify());
    upload_html(slug);
    upload_audio(slug);
    $scope.is_uploading_started = true;
  };
  
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
              if($scope.is_uploading_finished)
              {
                $state.transitionTo('finished');
              }
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

