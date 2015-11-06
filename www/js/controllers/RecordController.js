app.controller('RecordController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicHistory, $ionicPopup, $ionicNavBarDelegate) {
  var hold_promise, rec;
  rec = new Recorder($scope.output_directory + $scope.episode.guid + '.m4a', {
    onScrubUpdate: function(ms) {
      return $scope.scrub_point_ms = ms;
    },
    onDurationUpdate: function(ms) {
      $scope.duration_ms = ms;
      return $scope.episode.duration_ms = ms;
    },
    onAudioError: function() {
      return $ionicPopup.alert({
        title: 'Audio Error',
        template: 'The audio system has failed. Please report this.'
      }).then((function(res) {
        return $scope.home();
      }));
    },
    onPlayStart: function() {
      return $scope.is_playing = true;
    },
    onPlayStop: function() {
      return $scope.is_playing = false;
    },
    onRecordStart: function() {
      $scope.has_changes = true;
      $ionicNavBarDelegate.showBackButton(false);
      $ionicHistory.clearHistory();
      $scope.is_recording = true;
      $scope.has_recording = false;
      return $scope.episode.recorded_at = (new Date).getTime();
    },
    onRecordStop: function() {
      $scope.is_recording = false;
      return $scope.has_recording = true;
    },
    onEvent: function() {
      return $scope.$applyAsync();
    }
  });
  hold_promise = null;
  $scope.hold = function(ms) {
    if (!ms) {
      $interval.cancel(hold_promise);
      return;
    }
    return hold_promise = $interval((function() {
      return rec.step(ms);
    }), 100);
  };
  $scope.seek = function(ms) {
    console.log('seek', ms);
    return rec.seek(ms);
  };
  $scope.step = function(ms) {
    console.log('step', ms);
    return rec.step(ms);
  };
  $scope.play = function() {
    return rec.play();
  };
  $scope.stop_playing = function() {
    return rec.stop();
  };
  $scope.stop_recording = function() {
    return rec.stop();
  };
  return $scope.record = function() {
    var hideSheet;
    if ($scope.has_recording) {
      return hideSheet = $ionicActionSheet.show({
        destructiveText: 'Scrap and Re-Record',
        titleText: 'Re-record episode',
        cancelText: 'Cancel',
        destructiveButtonClicked: function() {
          hideSheet();
          return rec.record();
        }
      });
    } else {
      return rec.record();
    }
  };
});
