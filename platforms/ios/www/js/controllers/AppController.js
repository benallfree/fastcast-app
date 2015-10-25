

app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state, $cordovaFileTransfer, $q) {
  Media.prototype.getDurationAsync = function() {
    var obj = this;
    return $q(function(resolve,reject) {
      obj.setVolume(0);
      obj.play();
      obj.stop(); 
      var counter = 0;
      var timerDur = setInterval(function() {
        counter = counter + 100;
        if (counter > 2000) {
          clearInterval(timerDur);
          reject();
        }
        var dur = obj.getDuration();
        if (dur > 0) {
          clearInterval(timerDur);
          resolve(dur);
        }
      }, 100);            
    });
  };
  
  $scope.output_directory = "cdvfile://localhost/persistent/";

  $scope.save_state = function() {
    window.localStorage.setItem('podcast', angular.toJson($scope.podcast));
  }

  function load_state()
  {
    $scope.podcast = null;
    try {
      $scope.podcast = JSON.parse(window.localStorage.getItem('podcast'));
    } catch (e) {
      console.log("Error loading state", e);
    }
    
    // Fix up version number
    if(!$scope.podcast || !$scope.podcast.version)
    {
      $scope.podcast = {
        version: 1,
        episodes: {}
      };
      $scope.save_state();
    }
    
    // Fix up missing GUIDs
    for(var k in $scope.podcast.episodes)
    {
      $scope.podcast.episodes[k].guid = k;
      $scope.podcast.episodes[k].is_syncing = false;
    }
    
    // Fix up missing episodes
    for(var guid in static_episodes)
    {
      var episode = static_episodes[guid];
      if(!(guid in $scope.podcast.episodes))
      {
        $scope.podcast.episodes[guid] = episode;
      }
    }
  }
  load_state();
  
  function next_episode_number() {
    var n = 0;
    for(var slug in $scope.podcast.episodes)
    {
      var episode = $scope.podcast.episodes[slug];
      n = Math.max(n,episode.number);
    }
    return n+1;
  }
  
  $scope.new = function()
  {
    var t = (new Date()).getTime();
    var guid = sprintf("fc-tgi-%d", t);
    $scope.episode = {
      guid: guid,
      number: next_episode_number(),
    };
    $state.transitionTo('episode.record');
    
  }
  
  $scope.go = function(guid)
  {
    $scope.episode = angular.copy($scope.podcast.episodes[guid]);
    $state.transitionTo('episode.record');
  }
  
  
});

