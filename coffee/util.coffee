String::slugify = ->
  @toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace /-+$/, ''
  # Trim - from end of text

Number::toHHMMSS = ->
  show_ms = arguments.length > 0 and arguments[0]
  ms_num = Math.floor(this)
  hours = Math.floor(ms_num / 3600000)
  minutes = Math.floor((ms_num - (hours * 3600000)) / 60000)
  seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000)) / 1000)
  ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)
  time = sprintf('%02d:%02d:%02d', hours, minutes, seconds)
  if show_ms
    time += sprintf('.%03d', ms)
  time

Number::humanize = ->
  ms_num = Math.floor(this)
  hours = Math.floor(ms_num / 3600000)
  minutes = Math.floor((ms_num - (hours * 3600000)) / 60000)
  seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000)) / 1000)
  ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds * 1000)
  time = ''
  if hours
    time = sprintf('%dh', hours)
  if minutes
    time += sprintf('%dm', minutes)
  time += sprintf('%ds', Math.ceil(seconds + ms / 1000.0))
  time

String::sprintf = ->
  sprintf.apply this, this, arguments

Handlebars.registerHelper 'datetime', (date) ->
  date = if !date or date.name == 'datetime' then moment() else date
  moment(date).format 'ddd, DD MMM YYYY HH:mm:ss ZZ'
Handlebars.registerHelper 'hhmmss', (duration) ->
  duration = Math.max(1000, duration)
  duration.toHHMMSS false
Handlebars.registerHelper 'sprintf', ->
  sprintf.apply this, arguments