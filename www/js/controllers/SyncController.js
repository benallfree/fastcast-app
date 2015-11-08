app.controller('FinalizeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicNavBarDelegate, $ionicHistory) {
  var upload_audio, upload_html, upload_rss;
  $ionicNavBarDelegate.showBackButton(true);
  upload_rss = function() {
    var rss;
    rss = FastCast.templates.rss({
      episodes: orderByMagic($scope.podcast.episodes)
    });
    console.log(rss);
    return $cordovaFile.writeFile($scope.output_directory, 'tgi.rss', rss, true).then((function(result) {
      return $scope.uplaoder.queue({
        type: 'rss',
        mime: 'application/rss+xml',
        src: $scope.output_directory + 'tgi.rss'
      });
    }), function(err) {
      return console.log('file write error', err);
    });
  };
  upload_html = function() {
    var fname, html;
    html = FastCast.templates.episode({
      episode: $scope.episode
    });
    console.log(html);
    fname = $scope.episode.guid + '.html';
    return $cordovaFile.writeFile($scope.output_directory, fname, html, true).then((function(result) {
      return $scope.uplaoder.queue({
        slug: $scope.episode.slug,
        type: 'html',
        mime: 'text/html',
        src: $scope.output_directory + fname
      });
    }), function(err) {
      return console.log('file write error', err);
    });
  };
  upload_audio = function() {
    return $scope.uplaoder.queue({
      slug: $scope.episode.slug,
      type: 'audio',
      mime: 'audio/mp4',
      src: $scope.output_directory + $scope.episode.guid + '.m4a'
    });
  };
  $scope.is_uploading = false;
  $scope.uploads = {};
  $scope.back = function() {
    return $state.go('episode.record');
  };
  $scope.is_uploading_started = false;
  $scope.is_uploading_finished = false;
  $scope.publish = function() {
    if (!$scope.episode.number) {
      alert('Please supply an episode number.');
    }
    $scope.episode.published_at = null;
    if ($scope.episode.is_published) {
      if (!$scope.episode.title) {
        alert('Please supply an episode title.');
      }
      if (!$scope.episode.description) {
        alert('Please supply an episode description.');
      }
      if (!$scope.episode.published_at) {
        $scope.episode.published_at = (new Date).getTime();
      }
    }
    $scope.is_uploading_started = true;
    $scope.episode.slug = sprintf('%03d - %s', $scope.episode.number, $scope.episode.title).slugify();
    if (!$scope.episode.length_bytes) {
      window.resolveLocalFileSystemURL($scope.output_directory + $scope.episode.guid + '.m4a', (function(fileEntry) {
        return fileEntry.file(function(file) {
          console.log("got byte size", file);
          $scope.episode.length_bytes = file.size;
          $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode);
          upload_rss();
          $scope.save_state();
          return console.log(file);
        });
      }), function(err) {
        return console.log('error getting file size');
      });
    } else {
      $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode);
      upload_rss();
      $scope.save_state();
    }
    upload_html();
    return upload_audio();
  };
  $scope.$watch('is_uploading_finished', function(v) {
    if (!v) {
      return;
    }
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    return $state.go('episode.finish');
  });
  return $scope.upload_count = 0;
});
