

app.controller('EpisodeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet) {
  if(!$scope.episode)
  {
    $state.transitionTo('home');
    return;
  }
  var t = (new Date()).getTime();
  if(is_app)
  {
    $scope.audio = new Media("cdvfile://localhost/persistent/"+$scope.episode.audio_src,
      function() {
        console.log("Audio Success");
      },
      function(err) {
        console.log("Audio Error: "+ err.code);
        console.log(err);
      }
    );
  }
  
  $scope.has_recording = $scope.episode.recorded_at != null;   
  $scope.is_uploading = false;
  $scope.is_playing = false;
  $scope.is_recording = false;
  $scope.duration_ms = $scope.episode.duration_ms || 0;
  $scope.scrub_point_ms = 0;
  $scope.has_changes = false;
  $scope.$watch('episode', function(oldObj, newObj) {
    console.log(oldObj, newObj);
    $scope.has_changes = !angular.equals(oldObj, newObj);
  }, true);

  $scope.cancel = function() {
    var hideSheet = $ionicActionSheet.show({
      destructiveText: 'Discard Changes',
      titleText: 'Discard changes',
      cancelText: 'Cancel',
      destructiveButtonClicked: function() {
        $state.transitionTo('home');
      }
    });      
  };
});

