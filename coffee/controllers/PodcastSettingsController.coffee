app.controller 'PodcastSettingsController', ($scope, $ionicHistory, $ionicPopup, $ionicNavBarDelegate, $ionicActionSheet) ->
  
  cats = []
  for cat,subcats of categories
    if subcats.length==0
      cats.push
        key: cat
        name: cat
    else
      for subcat in subcats
        cats.push
          key: sprintf("%s|%s", cat, subcat)
          name: sprintf("%s - %s", cat, subcat)

  $scope.cats = cats
  
  $scope.do_logo = ->
    $scope.select_logo( (path, data_url)->
      $scope.show.logo_path = path
      $scope.logo_src = data_url;
    )

  getb64 = (cdv_path, cb) ->
    resolveLocalFileSystemURL(cdv_path, (entry)->
      path = entry.toURL()
      window.plugins.Base64.encodeFile(path, (base64)->
        console.log(base64.substring(0,50))
        cb(base64)
      );
    )

  $scope.show = 
    title: ''
    subtitle: ''
    author: ''
    description: ''
    primary_category: ''
    secondary_category: ''
    is_explicit: false
    logo_path: null
    
  for k,v of $scope.show
    if($scope.podcast[k]?)
      $scope.show[k] = $scope.podcast[k]
  
  if($scope.show.logo_path)
    getb64( $scope.show.logo_path, (b64)->
      $scope.logo_src = b64;
    )
      
  console.log($scope.show)
  original = angular.copy($scope.show)
  
  $scope.has_changes = false
  $scope.$watch 'show', ((newValue, oldValue) ->
    $scope.has_changes = !angular.equals(original, newValue)
    $ionicNavBarDelegate.showBackButton !$scope.has_changes
  ), true
      
  $scope.save = ->
    validate =
      title: 'a title'
      logo_path: 'cover art'
      subtitle: 'a subtitle'
      author: 'an author'
      description: 'a description'
      primary_category: 'primary category'
      secondary_category: 'secondary category'
    for k,v of validate
      if(!($scope.show[k]?))
        $ionicPopup.alert(
          title: 'Required'
          template: "Please supply #{v}."
        )
        return
      $scope.show[k] = $scope.show[k].trim()
    for k,v of $scope.show
      $scope.podcast[k] = $scope.show[k]
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
