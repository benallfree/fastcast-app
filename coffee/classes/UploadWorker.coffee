class UploadWorker
  constructor: (@item, options = {})->
    default_options =
      onStart: ->
      onSuccess: ->
      onFailure: (err)->
      onProgress: (progress)->
      onEvent: (name,args...)->
      debug: true
    @options = angular.extend(default_options, options)
    @upload_count = 0
    @log("Upload Worker started", @item)
    setTimeout(@start, 0) # Fire start async so promises are processed
    
  log: (args...)=>
    return unless @options.debug
    console.log.apply(@, args)

  event: (name,args...) =>
    @log("event", name, args)
    @options[name].apply(@,args)
    @options.onEvent(name, args)
    
  started: (cb)=>
    @options.onStart = cb
    @
  
  progress: (cb)=>
    @options.onProgress = cb
    @
  
  finished: (cb)=>
    @options.onSuccess = cb
    @
  
  failed: (cb)=>
    @options.onFailure = cb
    @
    
  start: =>
    @event('onStart')
    @progress = 0
    $http = angular.injector(["ng"]).get("$http")
    $http.get('http://api.fast-cast.net', params:
      slug: @item.slug
      type: @item.type
      code: @item.code
    ).then ((response) =>
      @item.progress = 10
      @event('onProgress', @item.progress)
      url = response.data
      ft = new FileTransfer
      ft.onprogress = (pe) =>
        @item.progress = pe.loaded / pe.total * 90 + 10
        @event('onProgress', @item.progress)
      
      upload_options = new FileUploadOptions
      upload_options.fileName = @item.src
      upload_options.mimeType = @item.mime
      upload_options.chunkedMode = false
      upload_options.httpMethod = 'PUT'
      upload_options.headers = 'Content-Type': @item.mime
      console.log("Uploading", @item.src, url)
      ft.upload(
        @item.src, 
        url, 
        (=> # success
          @event('onSuccess')
        ),
        ((err)=> # Error
          @event('onFailure', err)
        ),
        upload_options
      )
    ), (err)=> # Failure
      @event('onFailure', err)    

window.UploadWorker = UploadWorker