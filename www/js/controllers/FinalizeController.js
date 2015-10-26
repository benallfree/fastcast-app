app.controller('FinalizeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicHistory) {
  var upload, upload_audio, upload_html;
  upload_html = function() {
    var html;
    html = FastCast.templates.episode({
      episode: $scope.episode
    });
    console.log(html);
    if (is_app) {
      return $cordovaFile.writeFile($scope.output_directory, $scope.episode.guid + '.html', html, true).then((function(result) {
        return upload({
          slug: $scope.episode.slug,
          type: 'html',
          mime: 'text/html',
          src: $scope.episode.guid + '.html'
        });
      }), function(err) {
        return console.log('file write error', err);
      });
    }
  };
  upload_audio = function() {
    return upload({
      slug: $scope.episode.slug,
      type: 'audio',
      mime: 'audio/mp4',
      src: $scope.episode.guid + '.m4a'
    });
  };
  upload = function(options) {
    $scope.upload_count++;
    $scope.uploads[options.type] = 0;
    return $http.get('http://api.fast-cast.net', {
      params: {
        slug: options.slug,
        type: options.type
      }
    }).then((function(response) {
      var ft, upload_options, url;
      $scope.uploads[options.type] = 10;
      url = response.data;
      if (is_app) {
        ft = new FileTransfer;
        ft.onprogress = function(pe) {
          console.log('makin progress', options);
          $scope.uploads[options.type] = pe.loaded / pe.total * 90 + 10;
          angular.element('#progress_' + options.type).val($scope.uploads[options.type]);
          if ($scope.uploads[options.type] >= 100) {
            setTimeout((function() {
              delete $scope.uploads[options.type];
              $scope.upload_count--;
              if ($scope.upload_count === 0) {
                $scope.is_uploading_finished = true;
              }
              $scope.$apply();
            }), 1000);
          }
        };
        upload_options = new FileUploadOptions;
        upload_options.fileName = options.src;
        upload_options.mimeType = options.mime;
        upload_options.chunkedMode = false;
        upload_options.httpMethod = 'PUT';
        upload_options.headers = {
          'Content-Type': options.mime
        };
        return ft.upload($scope.output_directory + options.src, url, options.success, options.failure, upload_options);
      }
    }), options.failure);
  };
  $scope.is_uploading = false;
  $scope.uploads = {};
  $scope.back = function() {
    return $state.transitionTo('episode.record');
  };
  $scope.is_uploading_started = false;
  $scope.is_uploading_finished = false;
  $scope.publish = function() {
    if (!$scope.episode.number) {
      alert('Please supply an episode number.');
    }
    if (!$scope.episode.title) {
      alert('Please supply an episode title.');
    }
    if ($scope.episode.is_published && !$scope.episode.published_at) {
      $scope.episode.published_at = (new Date).getTime();
    }
    $scope.is_uploading_started = true;
    if (is_app) {
      window.resolveLocalFileSystemURL($scope.output_directory + $scope.episode.guid + '.m4a', (function(fileEntry) {
        return fileEntry.file(function(file) {
          $scope.episode.length_bytes = file.size;
          $scope.episode.slug = sprintf('%03d - %s', $scope.episode.number, $scope.episode.title).slugify();
          $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode);
          $scope.save_state();
          return console.log(file);
        });
      }), function(err) {
        return console.log('error getting file size');
      });
      upload_html();
      return upload_audio();
    } else {
      console.log('Uploading HTML and M4A...');
      return $scope.is_uploading_finished = true;
    }
  };
  $scope.$watch('is_uploading_finished', function(v) {
    if (!v) {
      return;
    }
    return $state.transitionTo('episode.finish');
  });
  return $scope.upload_count = 0;
});
