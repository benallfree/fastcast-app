if(is_app)
{
  document.addEventListener("deviceready", function() {
    var domElement = document.getElementById('body');
    angular.bootstrap(domElement, ["fastcast"]);
  }, false);  
} else {
  $(function() {
    var domElement = document.getElementById('body');
    angular.bootstrap(domElement, ["fastcast"]);
  });
}
