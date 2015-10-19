

app.controller('RecordController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet) {
  var start_time_ms = null;
  
  $scope.stop_recording = function() {
    $scope.is_recording = false;
    $scope.has_recording = true;
    var current_ms = (new Date()).getTime();
    $scope.duration_ms = current_ms - start_time_ms;
    $scope.scrub_point_ms = $scope.duration_ms;
    $scope.episode.duration_ms = $scope.duration_ms;
    $scope.podcast.episodes[$scope.episode.slug] = $scope.episode;

    angular.element('#timer').html($scope.duration_ms.toHHMMSS());
    if(is_app)
    {
      $scope.mediaRec.stopRecord();
    }
  };
  
  var hold_promise;
  $scope.hold = function(mode)
  {
    if(!mode)
    {
      $interval.cancel(hold_promise);
      return;
    }
    var parts = mode.split(/:/);
    hold_promise = $interval(function() {
      $scope[parts[0]](parseInt(parts[1]));
    }, 100);
  }
  
  $scope.seek = function(ms)
  {
    console.log(ms);
    if(ms==-1) ms = Number.MAX_VALUE;
    $scope.scrub_point_ms = Math.min($scope.duration_ms, Math.max(0, ms));
    console.log($scope.scrub_point_ms);
    angular.element('#timer').html(($scope.scrub_point_ms).toHHMMSS());
    if(is_app)
    {
      $scope.mediaRec.seekTo($scope.scrub_point_ms);
    }
  }
  
  $scope.ff = function(ms)
  {
    console.log('ff');
    $scope.seek($scope.scrub_point_ms + ms);
  };
  $scope.rw = function(ms)
  {
    $scope.seek($scope.scrub_point_ms - ms);
  }
  
  $scope.play = function() {
    $scope.is_playing = true;
    if($scope.scrub_point_ms >= $scope.duration_ms)
    {
      $scope.scrub_point_ms = 0;
    }
    var start_ms = (new Date()).getTime();
    var timeout_promise = $interval(function() {
      if(!$scope.is_playing)
      {
        $interval.cancel(timeout_promise);
        return;
      }
      var current_ms = (new Date()).getTime();
      elapsed_ms = current_ms - start_ms;
      start_ms = (new Date()).getTime();
      $scope.scrub_point_ms = $scope.scrub_point_ms + elapsed_ms;
      if($scope.scrub_point_ms >= $scope.duration_ms)
      {
        $scope.scrub_point_ms = $scope.duration_ms;
        $scope.stop();
      }
      angular.element('#timer').html(($scope.scrub_point_ms).toHHMMSS());
    }, 100);
    if(is_app)
    {
      $scope.mediaRec.seekTo($scope.scrub_point_ms/1000.0);
      $scope.mediaRec.play();
    }
  }
  
  $scope.stop = function() {
    $scope.is_playing = false;
    if(is_app)
    {
      $scope.mediaRec.stop();
    }
  }
  
  $scope.record = function()
  {
    if($scope.has_recording)
    {
      var hideSheet = $ionicActionSheet.show({
        destructiveText: 'Scrap and Re-Record',
        titleText: 'Re-record episode',
        cancelText: 'Cancel',
        destructiveButtonClicked: function() {
          hideSheet();
          _record();
        }
      });  
      return;    
    }
    _record();
  };
  
  function _record() {
    $scope.duration_ms = 0;
    $scope.has_recording = false;
    $scope.is_recording = true;
    start_time_ms = (new Date()).getTime();
    $scope.episode.recorded_at = start_time_ms;
    var timeout_promise = $interval(function() {
      if(!$scope.is_recording)
      {
        $interval.cancel(timeout_promise);
        return;
      }
      var current_ms = (new Date()).getTime();
      $scope.duration_ms = current_ms - start_time_ms;
      angular.element('#timer').html($scope.duration_ms.toHHMMSS());
    }, 100);
    
    if(is_app)
    {
      $scope.mediaRec = new Media($scope.audio_src.join('/'),
        function() {
          console.log("recordAudio():Audio Success");
        },
        function(err) {
          $scope.stop();
          console.log("recordAudio():Audio Error: "+ err.code);
          console.log(err);
        }
      );
      $scope.mediaRec.startRecord();
    }
  };
});

