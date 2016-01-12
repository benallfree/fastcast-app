boot_angular = ->
  # resolveLocalFileSystemURL(cordova.file.applicationDirectory+'/www', ( (src)->
  #   resolveLocalFileSystemURL(cordova.file.dataDirectory, ( (dst)->
  #     src.copyTo(dst, 'www', (->
  #       console.log('copy success')
  #       console.log(window.location)
  #       re = new RegExp(cordova.file.dataDirectory,"g");
  #       if !window.location.href.match(g)
  #         window.location = cordova.file.dataDirectory + '/www/index.html'
  #     ), (->
  #       console.log('copy fail')
  #     ))
  #   ), (->
  #     console.log('err');
  #   ))
  # ), (->
  #   console.log("Error")
  # ))


  domElement = document.getElementById('body')
  angular.bootstrap domElement, [ 'fastcast' ]

document.addEventListener 'deviceready', boot_angular, false
