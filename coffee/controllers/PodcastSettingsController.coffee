app.controller 'PodcastSettingsController', ($scope, $ionicHistory, $ionicPopup, $ionicNavBarDelegate, $ionicActionSheet) ->
  $scope.show = 
    title: ''
    subtitle: ''
    author: ''
    description: ''
    primary_category: ''
    secondary_category: ''
    is_explicit: false
  for k,v of $scope.show
    if($scope.podcast[k]?)
      $scope.show[k] = $scope.podcast[k]
      
  original = angular.copy($scope.show)
  
  $scope.has_changes = false
  $scope.$watch 'show', ((newValue, oldValue) ->
    console.log "old", oldValue
    console.log "new", newValue
    console.log "Original", original
    console.log "orig==new", angular.equals(original, newValue)
    $scope.has_changes = !angular.equals(original, newValue)
    $ionicNavBarDelegate.showBackButton !$scope.has_changes
  ), true
      
  $scope.save = ->
    validate =
      title: 'a title'
      subtitle: 'a subtitle'
      author: 'an author'
      description: 'a description'
      primary_category: 'primary category'
      secondary_category: 'secondary category'
    for k,v of validate
      $scope.show[k] = $scope.show[k].trim()
      if(!$scope.show[k])
        $ionicPopup.alert(
          title: 'Required'
          template: "Please supply #{v}."
        )
        return
    for k,v of $scope.show
      console.log k
      console.log $scope.show
      $scope.podcast[k] = $scope.show[k]
    console.log $scope.podcast
    $scope.save_state()
    $scope.home()

  $scope.cancel = ->
    hideSheet = $ionicActionSheet.show(
      destructiveText: 'Discard Changes'
      titleText: 'Discard changes'
      cancelText: 'Cancel'
      destructiveButtonClicked: ->
        $scope.home()
    )
