

app.controller('EpisodeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicPopup) {
  $scope.output_directory = "cdvfile://localhost/persistent/";
  console.log($scope.output_directory);
  if(!$scope.episode)
  {
    $state.transitionTo('home');
    return;
  }
  var t = (new Date()).getTime();
  if(is_app)
  {
    $scope.audio = new Media($scope.output_directory+$scope.episode.guid+".m4a",
      function() {
        console.log("Audio Success");
      },
      function(err) {
        console.log("Audio Error: "+ err.code);
        console.log(err);
        $ionicPopup.alert({
          title: 'Audio Error',
          template: 'The audio system has failed. Please report this.'
        }).then(function(res) {
          $state.transitionTo('home');
        });
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

