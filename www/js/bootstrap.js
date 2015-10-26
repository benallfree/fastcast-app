var boot_angular;

boot_angular = function() {
  var domElement;
  domElement = document.getElementById('body');
  return angular.bootstrap(domElement, ['fastcast']);
};

if (is_app) {
  alert('attach');
  document.addEventListener('deviceready', boot_angular, false);
} else {
  $(function() {
    return boot_angular();
  });
}
