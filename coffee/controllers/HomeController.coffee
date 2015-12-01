app.controller 'HomeController', ($scope, $state, $ionicHistory, $ionicPopup) -> 
  if(!$scope.podcast.code)
    myPopup = $ionicPopup.show(
      template: '<input type="text" ng-model="podcast.code">'
      title: 'Enter Show Code'
      subTitle: 'In order to use this beta app, you must have a Show Code. Get one from Ben via Facebook.'
      scope: $scope
      buttons: [
        {
          text: '<b>Save</b>'
          type: 'button-positive'
          onTap: (e) ->
            if !$scope.podcast.code
              e.preventDefault()
            $scope.podcast.code = $scope.podcast.code.trim().toLowerCase()
            $scope.save_state()
        }
      ]
    ).then ->
      $ionicPopup.alert(
        title: 'Input Show Info'
        template: 'Since this is your first time getting started, enter your show information next.'
      ).then ((res) ->
        $ionicHistory.nextViewOptions({
          disableBack: true
        });  
        $state.go 'settings.podcast'
      )
