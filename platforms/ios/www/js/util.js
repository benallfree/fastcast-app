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
  var ms_num = Math.floor(this);
  var hours   = Math.floor(ms_num / 3600000);
  var minutes = Math.floor((ms_num - (hours * 3600000)) / 60000);
  var seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000))/1000);
  var ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds*1000);
  var time = sprintf("%02d:%02d:%02d.%03d",hours, minutes, seconds, ms);
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