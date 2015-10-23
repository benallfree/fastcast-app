this["FastCast"] = this["FastCast"] || {};
this["FastCast"]["templates"] = this["FastCast"]["templates"] || {};
this["FastCast"]["templates"]["rss"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.published_at : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "		    <item>\n		      <guid isPermaLink=\"false\">"
    + alias2(alias1((depth0 != null ? depth0.guid : depth0), depth0))
    + "</guid>\n		      <title>"
    + alias2((helpers.sprintf || (depth0 && depth0.sprintf) || alias3).call(depth0,"%03d",(depth0 != null ? depth0.number : depth0),{"name":"sprintf","hash":{},"data":data}))
    + " - "
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</title>\n		      <pubDate>"
    + alias2((helpers.datetime || (depth0 && depth0.datetime) || alias3).call(depth0,(depth0 != null ? depth0.published_at : depth0),{"name":"datetime","hash":{},"data":data}))
    + "</pubDate>\n		      <link>http://www.fast-cast.net/podcasts/tgi/episodes/"
    + alias2(alias1((depth0 != null ? depth0.slug : depth0), depth0))
    + "</link>\n		      <itunes:duration>"
    + alias2((helpers.hhmmss || (depth0 && depth0.hhmmss) || alias3).call(depth0,(depth0 != null ? depth0.duration_ms : depth0),{"name":"hhmmss","hash":{},"data":data}))
    + "</itunes:duration>\n		      <itunes:author>Ben Allfree</itunes:author>\n		      <itunes:explicit>yes</itunes:explicit>\n		      <itunes:summary>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</itunes:summary>\n		      <itunes:subtitle>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</itunes:subtitle>\n		      <description>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</description>\n		      <enclosure type=\"audio/mp4\" url=\"http://www.fast-cast.net/podcasts/tgi/episodes/"
    + alias2(alias1((depth0 != null ? depth0.slug : depth0), depth0))
    + "/"
    + alias2(alias1((depth0 != null ? depth0.slug : depth0), depth0))
    + ".m4a\" length=\"26652130\"/>\n		      <itunes:image href=\"http://www.fast-cast.net/podcasts/tgi/logo.jpg\"/>\n		    </item>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<?xml version=\"1.0\" encoding=\"UTF-8\"?><rss xmlns:atom=\"http://www.w3.org/2005/Atom\" xmlns:itunes=\"http://www.itunes.com/dtds/podcast-1.0.dtd\" version=\"2.0\">\n  <channel>\n    <atom:link href=\"http://www.fast-cast.net/podcasts/tgi/feed.rss\" rel=\"self\" type=\"application/rss+xml\"/>\n    <title>That's a Good Idea</title>\n    <link>http://www.fast-cast.net/podcasts/tgi/index.html</link>\n    <pubDate>Mon, 12 Oct 2015 10:37:00 -0700</pubDate>\n    <lastBuildDate>"
    + this.escapeExpression(((helper = (helper = helpers.datetime || (depth0 != null ? depth0.datetime : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"datetime","hash":{},"data":data}) : helper)))
    + "</lastBuildDate>\n    <ttl>60</ttl>\n    <language>en</language>\n    <copyright>All rights reserved</copyright>\n    <webMaster>ben@benallfree.com (Ben Allfree)</webMaster>\n    <description>Join tech entrepreneur and expert programmer Ben Allfree on That's a Good Idea (TGI) for a daily dose of new business ideas and startup thinking.</description>\n    <itunes:new-feed-url>http://www.fast-cast.net/podcasts/tgi/feed.rss</itunes:new-feed-url>\n    <itunes:subtitle>Good ideas served daily</itunes:subtitle>\n    <itunes:owner>\n      <itunes:name>Ben Allfree</itunes:name>\n      <itunes:email>ben@benallfree.com</itunes:email>\n    </itunes:owner>\n    <itunes:author>Ben Allfree</itunes:author>\n    <itunes:explicit>yes</itunes:explicit>\n    <itunes:image href=\"http://www.fast-cast.net/podcasts/tgi/logo.jpg\"/>\n    <image>\n      <url>http://www.fast-cast.net/podcasts/tgi/logo.jpg</url>\n      <title>That's a Good Idea</title>\n      <link>http://www.fast-cast.net/podcasts/tgi/index.html</link>\n    </image>\n    <itunes:category text=\"Education\"/>    \n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.podcast : depth0)) != null ? stack1.episodes : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </channel>\n</rss>";
},"useData":true});