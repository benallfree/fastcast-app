document.addEventListener("deviceready", function() {
    // retrieve the DOM element that had the ng-app attribute
  if(is_app) alert('attachx');
  
  var domElement = document.getElementById('body');
  angular.bootstrap(domElement, ["fastcast"]);
}, false);