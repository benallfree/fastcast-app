class Uploader
  constructor: (options)->
    default_options =
      onEvent: (name,args...)->
      onUploadProgress: ->
      onUploadComplete: ->
      onUploadFail: ->
      onUploadStart: ->
      debug: true
      max_uploads: 5
    @options = angular.extend(default_options, options)
    @is_syncing = false
    @uploading_count=0
    @uploads = []

  event: (name,args...) =>
    @log("event", name, args)
    @options[name].apply(@,args)
    @options.onEvent(name, args)

  log: (args...)=>
    return unless @options.debug
    console.log.apply(args)

  queue: (item) =>
    @uploads.push(item)
    @uploading_count++
    item.status = 'uploading'
    event('onUploadStart', item)
    $http.get('http://api.fast-cast.net', params:
      slug: item.slug
      type: item.type)
    .then ((response) =>
      item.progress = 10
      url = response.data
      ft = new FileTransfer
      ft.onprogress = (pe) =>
        item.progress = pe.loaded / pe.total * 90 + 10
        event('onUploadProgress', item)
        if item.progress >= 100
          setTimeout (=>
            item.status = 'success'
            event('onUploadComplete', item)
            @uploading_count--
            if @uploading_count == 0
              @is_syncing = false
          ), 1000
      upload_options = new FileUploadOptions
      upload_options.fileName = item.src
      upload_options.mimeType = item.mime
      upload_options.chunkedMode = false
      upload_options.httpMethod = 'PUT'
      upload_options.headers = 'Content-Type': item.mime
      ft.upload(
        item.src, 
        url, 
        (-> # Success
        ),
        (-> # Failure
          item.status = 'fail'
          event('onUploadFailed', item)
        ),
        upload_options
      )
    ), options.failure
