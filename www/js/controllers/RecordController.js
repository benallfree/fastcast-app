app.controller('RecordController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicPopup) {
  var _record, hold_promise, start_time_ms;
  start_time_ms = null;
  _record = function() {
    var timeout_promise;
    $scope.has_changes = true;
    $scope.duration_ms = 0;
    $scope.has_recording = false;
    $scope.is_recording = true;
    start_time_ms = (new Date).getTime();
    $scope.episode.recorded_at = start_time_ms;
    timeout_promise = $interval((function() {
      var current_ms;
      if (!$scope.is_recording) {
        $interval.cancel(timeout_promise);
        return;
      }
      current_ms = (new Date).getTime();
      $scope.duration_ms = current_ms - start_time_ms;
      angular.element('#timer').html($scope.duration_ms.toHHMMSS());
    }), 100);
    if (is_app) {
      return $scope.audio.startRecord();
    }
  };
  $scope.stop_recording = function() {
    var current_ms;
    $scope.is_recording = false;
    $scope.has_recording = true;
    current_ms = (new Date).getTime();
    $scope.duration_ms = current_ms - start_time_ms;
    $scope.scrub_point_ms = $scope.duration_ms;
    $scope.episode.duration_ms = $scope.duration_ms;
    angular.element('#timer').html($scope.duration_ms.toHHMMSS());
    if (is_app) {
      return $scope.audio.stopRecord();
    }
  };
  hold_promise = void 0;
  $scope.hold = function(mode) {
    var parts;
    if (!mode) {
      $interval.cancel(hold_promise);
      return;
    }
    parts = mode.split(/:/);
    return hold_promise = $interval((function() {
      return $scope[parts[0]](parseInt(parts[1]));
    }), 100);
  };
  $scope.seek = function(ms) {
    console.log(ms);
    if (ms === -1) {
      ms = Number.MAX_VALUE;
    }
    $scope.scrub_point_ms = Math.min($scope.duration_ms, Math.max(0, ms));
    console.log($scope.scrub_point_ms);
    angular.element('#timer').html($scope.scrub_point_ms.toHHMMSS());
    if (is_app) {
      return $scope.audio.seekTo($scope.scrub_point_ms);
    }
  };
  $scope.ff = function(ms) {
    console.log('ff');
    return $scope.seek($scope.scrub_point_ms + ms);
  };
  $scope.rw = function(ms) {
    return $scope.seek($scope.scrub_point_ms - ms);
  };
  $scope.play = function() {
    var start_ms, timeout_promise;
    $scope.is_playing = true;
    if ($scope.scrub_point_ms >= $scope.duration_ms) {
      $scope.scrub_point_ms = 0;
    }
    start_ms = (new Date).getTime();
    timeout_promise = $interval((function() {
      var current_ms, elapsed_ms;
      if (!$scope.is_playing) {
        $interval.cancel(timeout_promise);
        return;
      }
      current_ms = (new Date).getTime();
      elapsed_ms = current_ms - start_ms;
      start_ms = (new Date).getTime();
      $scope.scrub_point_ms = $scope.scrub_point_ms + elapsed_ms;
      if ($scope.scrub_point_ms >= $scope.duration_ms) {
        $scope.scrub_point_ms = $scope.duration_ms;
        $scope.stop_playing();
      }
      return angular.element('#timer').html($scope.scrub_point_ms.toHHMMSS());
    }), 100);
    if (is_app) {
      $scope.audio.seekTo($scope.scrub_point_ms / 1000.0);
      return $scope.audio.play();
    }
  };
  $scope.stop_playing = function() {
    $scope.is_playing = false;
    if (is_app) {
      return $scope.audio.stop();
    }
  };
  return $scope.record = function() {
    var hideSheet;
    if ($scope.has_recording) {
      hideSheet = $ionicActionSheet.show({
        destructiveText: 'Scrap and Re-Record',
        titleText: 'Re-record episode',
        cancelText: 'Cancel',
        destructiveButtonClicked: function() {
          hideSheet();
          return _record();
        }
      });
    }
    return _record();
  };
});
