class Recorder
  constructor: (@fname, options)->
    default_options =
      onScrubUpdate: (ms)->
      onDurationUpdate: (ms)->
      onRecordStart: ->
      onRecordStop: ->
      onAudioError: ->
      onPlayStart: ->
      onPlayStop: ->
      onEvent: (name,args...)->
      debug: true
    @options = angular.extend(default_options, options)
    @scrub_point_ms = 0

    @status = {}
    @status[Media.MEDIA_NONE] = 'None'
    @status[Media.MEDIA_STARTING] = 'Starting'
    @status[Media.MEDIA_RUNNING] = 'Running'
    @status[Media.MEDIA_PAUSED] = 'Paused'
    @status[Media.MEDIA_STOPPED] = 'Stopped'
    
    @drop_events = []
    @scheduled_drops = []
    @live_drops = []

    @stop()
    @get_duration()
    
    
    
  log: (args...)=>
    return unless @options.debug
    console.log.apply(@, args)

  event: (name,args...) =>
    # @log("event", name, args)
    @options[name].apply(@,args)
    @options.onEvent(name, args)

  new_media: (ready_cb, status_cb, error_cb) =>
    
    media = new Media(
      @fname, 
      (()=>
        @log("Successfully completed action ", @fname)
      ), 
      ((err) =>
        @log 'Audio Error: ' + err.code
        @log err
        error_cb(media,err)
      ), 
      ((stat)=>
        @log("Media status", stat, @status[stat])
        status_cb(media,stat)
      )
    )
    ready_cb(media)
    media

  get_duration: (cb) =>
    # Get the final duration since it doesn't register during recording
    @new_media(
      ((media)=> # ready
        media.setVolume(0)
        media.play()
      ),
      ((media,status) => # status
        if status==Media.MEDIA_RUNNING
          media.stop()
          @duration_ms = media.getDuration()*1000
          @event('onDurationUpdate', @duration_ms)
          if cb
            cb(@duration_ms)
        if status==Media.MEDIA_STOPPED
          media.release()
      ),
      ((media,error)=> #error
      )
    )
         
  record: =>
    @drop_events = []
    @scheduled_drops = []
    @live_drops = []

    @main_track = @new_media(
      ((media)=> # ready
        media.startRecord()
      ),
      ((media,status)=> # status
        if status == Media.MEDIA_RUNNING
          @log('recording')
          @is_recording = true
          @duration_ms = 0
          @start_time_ms = (new Date).getTime()
          update_record = =>
            # @log('recording check')
            # resolveLocalFileSystemURL(@fname, ((fs)->
            #   fs.file (file)->
            #     console.log(file.size)
            # ), (->
            #   console.log("Could not get fstat")
            # ))
            if !@is_recording
              @log('recording stop requested')
              media.stopRecord()
              @get_duration((ms)=>
                @scrub_point_ms = ms
                @event('onScrubUpdate', ms)
                @event('onRecordStop')
              )
              media.release()
              return
            current_ms = (new Date).getTime()
            @duration_ms = current_ms - @start_time_ms
            @scrub_point_ms = @duration_ms
            @event('onDurationUpdate', @duration_ms)
            @event('onScrubUpdate', @duration_ms)
            setTimeout(update_record, 100)
          update_record()
          @event('onRecordStart')
          
        if status == Media.MEDIA_STOPPED
          media.release()
      ),
      ((media,err)=> #error
        media.release()
        @event('onAudioError')
      )
    )
    
  step: (ms) =>
    @seek(@scrub_point_ms + ms)
    
  seek: (ms) =>
    if ms==-1
      ms = Number.MAX_VALUE
    @scrub_point_ms = Math.min(@duration_ms, Math.max(0, ms))
    @event('onScrubUpdate', @scrub_point_ms)
    if @is_playing
      @main_track.seekTo @scrub_point_ms
    
  play: =>
    @scheduled_drops = []
    @live_drops = []

    if @scrub_point_ms >= @duration_ms
      @scrub_point_ms = 0
      @event('onScrubUpdate', @scrub_point_ms)
    
    @main_track = @new_media(
      ((media)=>    # ready
        media.play()
        media.seekTo(@scrub_point_ms)
      ),
      ((media,status)=> # Status
        if status == Media.MEDIA_RUNNING
          @is_playing = true
          scheduleDrop = (e)=>
            @scheduled_drops.push setTimeout((=>
              return unless @is_playing
              @log("Playing drop", e.drop, "at", e.ms)
              m = new Media(
                'fx/'+e.drop+'.mp3'
                (()=>
                  @log("Drop Successfully completed action ", 'fx/'+e.drop+'.mp3')
                ), 
                ((err) =>
                  @log 'Drop Audio Error: ' + err.code
                  @log err
                ), 
                ((stat)=>
                  @log("Drop Media status", stat, @status[stat])
                )
              )
              @live_drops.push m
              m.play()
            ), e.ms)
          for e in @drop_events
            @log("Scheduling drop for", e.drop, e.ms)
            scheduleDrop(e)


          play_update = =>
            media.getCurrentPosition (pos)=>
              if pos==-1
                @scrub_point_ms = @duration_ms
              else 
                @scrub_point_ms = pos * 1000
              @event('onScrubUpdate', @scrub_point_ms)
              if !@is_playing
                @event('onPlayStop')
                return
              setTimeout(play_update,100)
          play_update()
          @event('onPlayStart')
        if status == Media.MEDIA_STOPPED
          @stop()
      ),
      ((media,err)=> #Error
        media.release()
        @event('onAudioError')
      )
    )
  
  stop: =>
    @is_playing = false
    @is_recording = false

    for id in @scheduled_drops
      clearTimeout(id)

    for d in @live_drops
      d.stop()
      d.release()
      
    @scheduled_drops = []
    @live_drops = []
      
    @main_track?.stop()
    @main_track?.release()
      

  drop: (id)=>
    return unless @is_recording
    @log("Getting position")
    current_ms = (new Date).getTime()
    scrub_point_ms = current_ms - @start_time_ms
    
    @drop_events.push {
      ms: scrub_point_ms
      drop: id
    }
    
    m = new Media(
      'fx/'+id+'.mp3'
      (()=>
        @log("Drop Successfully completed action ", 'fx/'+id+'.mp3')
      ), 
      ((err) =>
        @log 'Drop Audio Error: ' + err.code
        @log err
      ), 
      ((stat)=>
        @log("Drop Media status", stat, @status[stat])
      )
    )
    @live_drops.push m
    m.play()

    @log("Playing error drop at", @scrub_point_ms)
    

window.Recorder = Recorder