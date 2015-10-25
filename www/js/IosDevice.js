var IosDeviceService;

IosDeviceService = (function() {
  function IosDeviceService() {}

  IosDeviceService.prototype.init = function() {
    return $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  };

  return IosDeviceService;

})();
