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

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    if (ms < 100) {ms = "0"+ms;}
    if (ms < 10) {ms = "0"+ms;}
    var time    = hours+':'+minutes+':'+seconds+'.'+ms;
    return time;
}