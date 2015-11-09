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
      debug: false
    @options = angular.extend(default_options, options)
    @duration_ms = 0
    @scrub_point_ms = 0
    @stop()
    
  log: (args...)=>
    return unless @options.debug
    console.log.apply(@, args)

  new_media: (ready_cb, status_cb, error_cb) =>
    status = {}
    status[Media.MEDIA_NONE] = 'None'
    status[Media.MEDIA_STARTING] = 'Starting'
    status[Media.MEDIA_RUNNING] = 'Running'
    status[Media.MEDIA_PAUSED] = 'Paused'
    status[Media.MEDIA_STOPPED] = 'Stopped'
    
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
        @log("Media status", stat, status[stat])
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
     
  event: (name,args...) =>
    @log("event", name, args)
    @options[name].apply(@,args)
    @options.onEvent(name, args)
    
  record: =>
    @new_media(
      ((media)=> # ready
        media.startRecord()
      ),
      ((media,status)=> # status
        if status == Media.MEDIA_RUNNING
          @log('recording')
          @is_recording = true
          @duration_ms = 0
          start_time_ms = (new Date).getTime()
          update_record = =>
            @log('recording check')
            if !@is_recording
              media.stopRecord()
              return
            current_ms = (new Date).getTime()
            @duration_ms = current_ms - start_time_ms
            @scrub_point_ms = @duration_ms
            @event('onDurationUpdate', @duration_ms)
            @event('onScrubUpdate', @duration_ms)
            setTimeout(update_record, 100)
          update_record()
          @event('onRecordStart')
          
        if status == Media.MEDIA_STOPPED
          @is_recording = false
          media.release()
          @get_duration((ms)=>
            @scrub_point_ms = ms
            @event('onScrubUpdate', ms)
            @event('onRecordStop')
          )
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
      @media.seekTo @scrub_point_ms
    
  play: =>
    if @scrub_point_ms >= @duration_ms
      @scrub_point_ms = 0
      @event('onScrubUpdate', @scrub_point_ms)
      
    @media = @new_media(
      ((media)=>    # ready
        media.seekTo(@scrub_point_ms / 1000.0)
        media.play()
      ),
      ((media,status)=> # Status
        if status == Media.MEDIA_RUNNING
          @is_playing = true
          play_update = =>
            media.getCurrentPosition (pos)=>
              if pos==-1
                @scrub_point_ms = @duration_ms
              else 
                @scrub_point_ms = pos * 1000
              @event('onScrubUpdate', @scrub_point_ms)
              if !@is_playing
                media.stop()
                media.release()
                @event('onPlayStop')
                return
              setTimeout(play_update,100)
          play_update()
          @event('onPlayStart')
        if status == Media.MEDIA_STOPPED
          @is_playing = false
      ),
      ((media,err)=> #Error
        media.release()
        @event('onAudioError')
      )
    )
    
  stop: =>
    @is_playing = false
    @is_recording = false
    @get_duration()
