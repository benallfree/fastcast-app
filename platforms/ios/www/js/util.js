var orderByMagic;

String.prototype.slugify = function() {
  return this.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
};

Number.prototype.toHHMMSS = function() {
  var hours, minutes, ms, ms_num, seconds, show_ms, time;
  show_ms = arguments.length > 0 && arguments[0];
  ms_num = Math.floor(this);
  hours = Math.floor(ms_num / 3600000);
  minutes = Math.floor((ms_num - (hours * 3600000)) / 60000);
  seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000)) / 1000);
  ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds * 1000);
  time = sprintf('%02d:%02d:%02d', hours, minutes, seconds);
  if (show_ms) {
    time += sprintf('.%03d', ms);
  }
  return time;
};

Number.prototype.humanize = function() {
  var hours, minutes, ms, ms_num, seconds, time;
  ms_num = Math.floor(this);
  hours = Math.floor(ms_num / 3600000);
  minutes = Math.floor((ms_num - (hours * 3600000)) / 60000);
  seconds = Math.floor((ms_num - (hours * 3600000) - (minutes * 60000)) / 1000);
  ms = ms_num - (hours * 3600000) - (minutes * 60000) - (seconds * 1000);
  time = '';
  if (hours) {
    time = sprintf('%dh', hours);
  }
  if (minutes) {
    time += sprintf('%dm', minutes);
  }
  time += sprintf('%ds', Math.ceil(seconds + ms / 1000.0));
  return time;
};

String.prototype.sprintf = function() {
  return sprintf.apply(this, this, arguments);
};

Handlebars.registerHelper('datetime', function(date) {
  date = !date || date.name === 'datetime' ? moment() : date;
  return moment(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
});

Handlebars.registerHelper('hhmmss', function(duration) {
  duration = Math.max(1000, duration);
  return duration.toHHMMSS(false);
});

Handlebars.registerHelper('sprintf', function() {
  return sprintf.apply(this, arguments);
});

orderByMagic = function(hash) {
  var array;
  array = [];
  Object.keys(hash).forEach(function(key) {
    array.push(hash[key]);
  });
  array.sort(function(a, b) {
    if (a.published_at && !b.published_at) {
      return 1;
    }
    if (!a.published_at && b.published_at) {
      return -1;
    }
    if (a.published_at && b.published_at) {
      if (a.published_at > b.published_at) {
        return -1;
      } else {
        return 1;
      }
    }
    if (a.recorded_at > b.recorded_at) {
      return -1;
    } else {
      return 1;
    }
  });
  return array;
};
