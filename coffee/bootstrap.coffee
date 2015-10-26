boot_angular = ->
  domElement = document.getElementById('body')
  angular.bootstrap domElement, [ 'fastcast' ]
  
if is_app
  alert 'attach'
  document.addEventListener 'deviceready', boot_angular, false
else
  $ -> boot_angular()
