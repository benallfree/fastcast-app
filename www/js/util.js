String.prototype.slugify = function()
{
  return this.toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};



Number.prototype.toHHMMSS = function () {
  var show_ms = arguments.length>0 && arguments[0];
  var ms_num = Math.floor(this);
  var hours   = Math.floor(ms_num / 3600000);
  var minutes = Math.floor((ms_num - (hours * 3600000)) / 60000);
  var seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000))/1000);
  var ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds*1000);
  var time = sprintf("%02d:%02d:%02d",hours, minutes, seconds);
  if(show_ms) time += sprintf(".%03d", ms);
  return time;
}

Number.prototype.humanize = function () {
  var ms_num = Math.floor(this);
  var hours   = Math.floor(ms_num / 3600000);
  var minutes = Math.floor((ms_num - (hours * 3600000)) / 60000);
  var seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000))/1000);
  var ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds*1000);

  var time = '';
  if(hours) time = sprintf("%dh",hours);
  if(minutes) time+= sprintf("%dm",minutes);
  time+= sprintf("%ds",Math.ceil(seconds + ms/1000.0));

  return time;
}


Handlebars.registerHelper('datetime', function(date) {
  date = !date || date.name=='datetime' ? moment() : date;
  return moment(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
});

Handlebars.registerHelper('hhmmss', function(duration) {
  duration = Math.max(1000,duration);
  return duration.toHHMMSS(false);
});

Handlebars.registerHelper('sprintf', function() {
  return sprintf.apply(this, arguments);
});
