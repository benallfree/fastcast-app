(function() {
  window.is_app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;

  window.app = angular.module('fastcast', ['ionic', 'ngCordova', 'ngIOS9UIWebViewPatch', 'jrCrop']).config(function($interpolateProvider) {
    return $interpolateProvider.startSymbol('<%').endSymbol('%>');
  }).run(function($ionicPlatform) {
    return $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        return StatusBar.styleDefault();
      }
    });
  }).filter('numberFixedLen', function() {
    return function(n, len) {
      return sprintf('%0' + len + 'd', n);
    };
  }).filter('orderByMagic', function() {
    return function(episodes) {
      return orderByMagic(episodes);
    };
  }).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeController'
    }).state('episode', {
      cache: false,
      url: '/episode',
      template: '<ion-nav-view></ion-nav-view>',
      controller: 'EpisodeController',
      abstract: true
    }).state('episode.record', {
      url: '/record',
      templateUrl: 'episode/record.html',
      controller: 'RecordController',
      parent: 'episode'
    }).state('episode.finalize', {
      url: '/finalize',
      templateUrl: 'episode/finalize.html',
      controller: 'FinalizeController',
      parent: 'episode'
    }).state('episode.finish', {
      url: '/finish',
      templateUrl: 'episode/finish.html',
      controller: 'FinishController',
      parent: 'episode'
    }).state('settings', {
      url: '/settings',
      template: '<ion-nav-view></ion-nav-view>',
      controller: 'SettingsController',
      abstract: true
    }).state('settings.podcast', {
      url: '/podcast',
      templateUrl: 'settings/podcast.html',
      controller: 'PodcastSettingsController',
      parent: 'settings'
    });
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);


(function() {
  var boot_angular;

  boot_angular = function() {
    var domElement;
    domElement = document.getElementById('body');
    return angular.bootstrap(domElement, ['fastcast']);
  };

  if (is_app) {
    document.addEventListener('deviceready', boot_angular, false);
  } else {
    $(function() {
      return boot_angular();
    });
  }

}).call(this);


this["FastCast"] = this["FastCast"] || {};
this["FastCast"]["templates"] = this["FastCast"]["templates"] || {};
this["FastCast"]["templates"]["episode"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>Agency - Start Bootstrap Theme</title>\n\n    <!-- Bootstrap Core CSS -->\n    <link href=\"../../../../assets/v1/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n    <!-- Custom CSS -->\n    <link href=\"../../../../assets/v1/css/agency.css\" rel=\"stylesheet\">\n\n    <!-- Custom Fonts -->\n    <link href=\"../../../../assets/v1/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\">\n    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>\n    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>\n    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>\n\n    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n    <!--[if lt IE 9]>\n        <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n        <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\n    <![endif]-->\n\n</head>\n\n<body id=\"page-top\" class=\"index\">\n\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header page-scroll\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand page-scroll\" href=\"#page-top\">Start Bootstrap</a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li class=\"hidden\">\n                        <a href=\"#page-top\"></a>\n                    </li>\n                    <li>\n                        <a class=\"page-scroll\" href=\"#services\">Services</a>\n                    </li>\n                    <li>\n                        <a class=\"page-scroll\" href=\"#portfolio\">Portfolio</a>\n                    </li>\n                    <li>\n                        <a class=\"page-scroll\" href=\"#about\">About</a>\n                    </li>\n                    <li>\n                        <a class=\"page-scroll\" href=\"#team\">Team</a>\n                    </li>\n                    <li>\n                        <a class=\"page-scroll\" href=\"#contact\">Contact</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n        </div>\n        <!-- /.container-fluid -->\n    </nav>\n\n    <!-- Header -->\n    <header>\n        <div class=\"container\">\n            <div class=\"intro-text\">\n                <div class=\"intro-lead-in\">Welcome To Our Studio!</div>\n                <div class=\"intro-heading\">This is an Episode!</div>\n                <a href=\"#services\" class=\"page-scroll btn btn-xl\">Tell Me More</a>\n            </div>\n        </div>\n    </header>\n\n    <!-- Services Section -->\n    <section id=\"services\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h2 class=\"section-heading\">Services</h2>\n                    <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class=\"row text-center\">\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"service-heading\">E-Commerce</h4>\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"service-heading\">Responsive Design</h4>\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <span class=\"fa-stack fa-4x\">\n                        <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-lock fa-stack-1x fa-inverse\"></i>\n                    </span>\n                    <h4 class=\"service-heading\">Web Security</h4>\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Portfolio Grid Section -->\n    <section id=\"portfolio\" class=\"bg-light-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h2 class=\"section-heading\">Portfolio</h2>\n                    <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4 col-sm-6 portfolio-item\">\n                    <a href=\"#portfolioModal1\" class=\"portfolio-link\" data-toggle=\"modal\">\n                        <div class=\"portfolio-hover\">\n                            <div class=\"portfolio-hover-content\">\n                                <i class=\"fa fa-plus fa-3x\"></i>\n                            </div>\n                        </div>\n                        <img src=\"../../../../assets/v1/img/portfolio/roundicons.png\" class=\"img-responsive\" alt=\"\">\n                    </a>\n                    <div class=\"portfolio-caption\">\n                        <h4>Round Icons</h4>\n                        <p class=\"text-muted\">Graphic Design</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6 portfolio-item\">\n                    <a href=\"#portfolioModal2\" class=\"portfolio-link\" data-toggle=\"modal\">\n                        <div class=\"portfolio-hover\">\n                            <div class=\"portfolio-hover-content\">\n                                <i class=\"fa fa-plus fa-3x\"></i>\n                            </div>\n                        </div>\n                        <img src=\"../../../../assets/v1/img/portfolio/startup-framework.png\" class=\"img-responsive\" alt=\"\">\n                    </a>\n                    <div class=\"portfolio-caption\">\n                        <h4>Startup Framework</h4>\n                        <p class=\"text-muted\">Website Design</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6 portfolio-item\">\n                    <a href=\"#portfolioModal3\" class=\"portfolio-link\" data-toggle=\"modal\">\n                        <div class=\"portfolio-hover\">\n                            <div class=\"portfolio-hover-content\">\n                                <i class=\"fa fa-plus fa-3x\"></i>\n                            </div>\n                        </div>\n                        <img src=\"../../../../assets/v1/img/portfolio/treehouse.png\" class=\"img-responsive\" alt=\"\">\n                    </a>\n                    <div class=\"portfolio-caption\">\n                        <h4>Treehouse</h4>\n                        <p class=\"text-muted\">Website Design</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6 portfolio-item\">\n                    <a href=\"#portfolioModal4\" class=\"portfolio-link\" data-toggle=\"modal\">\n                        <div class=\"portfolio-hover\">\n                            <div class=\"portfolio-hover-content\">\n                                <i class=\"fa fa-plus fa-3x\"></i>\n                            </div>\n                        </div>\n                        <img src=\"../../../../assets/v1/img/portfolio/golden.png\" class=\"img-responsive\" alt=\"\">\n                    </a>\n                    <div class=\"portfolio-caption\">\n                        <h4>Golden</h4>\n                        <p class=\"text-muted\">Website Design</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6 portfolio-item\">\n                    <a href=\"#portfolioModal5\" class=\"portfolio-link\" data-toggle=\"modal\">\n                        <div class=\"portfolio-hover\">\n                            <div class=\"portfolio-hover-content\">\n                                <i class=\"fa fa-plus fa-3x\"></i>\n                            </div>\n                        </div>\n                        <img src=\"../../../../assets/v1/img/portfolio/escape.png\" class=\"img-responsive\" alt=\"\">\n                    </a>\n                    <div class=\"portfolio-caption\">\n                        <h4>Escape</h4>\n                        <p class=\"text-muted\">Website Design</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6 portfolio-item\">\n                    <a href=\"#portfolioModal6\" class=\"portfolio-link\" data-toggle=\"modal\">\n                        <div class=\"portfolio-hover\">\n                            <div class=\"portfolio-hover-content\">\n                                <i class=\"fa fa-plus fa-3x\"></i>\n                            </div>\n                        </div>\n                        <img src=\"../../../../assets/v1/img/portfolio/dreams.png\" class=\"img-responsive\" alt=\"\">\n                    </a>\n                    <div class=\"portfolio-caption\">\n                        <h4>Dreams</h4>\n                        <p class=\"text-muted\">Website Design</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- About Section -->\n    <section id=\"about\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h2 class=\"section-heading\">About</h2>\n                    <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <ul class=\"timeline\">\n                        <li>\n                            <div class=\"timeline-image\">\n                                <img class=\"img-circle img-responsive\" src=\"../../../../assets/v1/img/about/1.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"timeline-panel\">\n                                <div class=\"timeline-heading\">\n                                    <h4>2009-2011</h4>\n                                    <h4 class=\"subheading\">Our Humble Beginnings</h4>\n                                </div>\n                                <div class=\"timeline-body\">\n                                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"timeline-inverted\">\n                            <div class=\"timeline-image\">\n                                <img class=\"img-circle img-responsive\" src=\"../../../../assets/v1/img/about/2.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"timeline-panel\">\n                                <div class=\"timeline-heading\">\n                                    <h4>March 2011</h4>\n                                    <h4 class=\"subheading\">An Agency is Born</h4>\n                                </div>\n                                <div class=\"timeline-body\">\n                                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"timeline-image\">\n                                <img class=\"img-circle img-responsive\" src=\"../../../../assets/v1/img/about/3.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"timeline-panel\">\n                                <div class=\"timeline-heading\">\n                                    <h4>December 2012</h4>\n                                    <h4 class=\"subheading\">Transition to Full Service</h4>\n                                </div>\n                                <div class=\"timeline-body\">\n                                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"timeline-inverted\">\n                            <div class=\"timeline-image\">\n                                <img class=\"img-circle img-responsive\" src=\"../../../../assets/v1/img/about/4.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"timeline-panel\">\n                                <div class=\"timeline-heading\">\n                                    <h4>July 2014</h4>\n                                    <h4 class=\"subheading\">Phase Two Expansion</h4>\n                                </div>\n                                <div class=\"timeline-body\">\n                                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"timeline-inverted\">\n                            <div class=\"timeline-image\">\n                                <h4>Be Part\n                                    <br>Of Our\n                                    <br>Story!</h4>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Team Section -->\n    <section id=\"team\" class=\"bg-light-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h2 class=\"section-heading\">Our Amazing Team</h2>\n                    <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"team-member\">\n                        <img src=\"../../../../assets/v1/img/team/1.jpg\" class=\"img-responsive img-circle\" alt=\"\">\n                        <h4>Kay Garland</h4>\n                        <p class=\"text-muted\">Lead Designer</p>\n                        <ul class=\"list-inline social-buttons\">\n                            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                            </li>\n                            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                            </li>\n                            <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"team-member\">\n                        <img src=\"../../../../assets/v1/img/team/2.jpg\" class=\"img-responsive img-circle\" alt=\"\">\n                        <h4>Larry Parker</h4>\n                        <p class=\"text-muted\">Lead Marketer</p>\n                        <ul class=\"list-inline social-buttons\">\n                            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                            </li>\n                            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                            </li>\n                            <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"team-member\">\n                        <img src=\"../../../../assets/v1/img/team/3.jpg\" class=\"img-responsive img-circle\" alt=\"\">\n                        <h4>Diana Pertersen</h4>\n                        <p class=\"text-muted\">Lead Developer</p>\n                        <ul class=\"list-inline social-buttons\">\n                            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                            </li>\n                            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                            </li>\n                            <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-lg-offset-2 text-center\">\n                    <p class=\"large text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Clients Aside -->\n    <aside class=\"clients\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6\">\n                    <a href=\"#\">\n                        <img src=\"../../../../assets/v1/img/logos/envato.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"col-md-3 col-sm-6\">\n                    <a href=\"#\">\n                        <img src=\"../../../../assets/v1/img/logos/designmodo.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"col-md-3 col-sm-6\">\n                    <a href=\"#\">\n                        <img src=\"../../../../assets/v1/img/logos/themeforest.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                </div>\n                <div class=\"col-md-3 col-sm-6\">\n                    <a href=\"#\">\n                        <img src=\"../../../../assets/v1/img/logos/creative-market.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                </div>\n            </div>\n        </div>\n    </aside>\n    \n    <!-- Contact Section -->\n    <section id=\"contact\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 text-center\">\n                    <h2 class=\"section-heading\">Contact Us</h2>\n                    <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <form name=\"sentMessage\" id=\"contactForm\" novalidate>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Your Name *\" id=\"name\" required data-validation-required-message=\"Please enter your name.\">\n                                    <p class=\"help-block text-danger\"></p>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Your Email *\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\">\n                                    <p class=\"help-block text-danger\"></p>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"tel\" class=\"form-control\" placeholder=\"Your Phone *\" id=\"phone\" required data-validation-required-message=\"Please enter your phone number.\">\n                                    <p class=\"help-block text-danger\"></p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <textarea class=\"form-control\" placeholder=\"Your Message *\" id=\"message\" required data-validation-required-message=\"Please enter a message.\"></textarea>\n                                    <p class=\"help-block text-danger\"></p>\n                                </div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                            <div class=\"col-lg-12 text-center\">\n                                <div id=\"success\"></div>\n                                <button type=\"submit\" class=\"btn btn-xl\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <footer>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <span class=\"copyright\">Copyright &copy; Your Website 2014</span>\n                </div>\n                <div class=\"col-md-4\">\n                    <ul class=\"list-inline social-buttons\">\n                        <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                        </li>\n                        <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                        </li>\n                        <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-md-4\">\n                    <ul class=\"list-inline quicklinks\">\n                        <li><a href=\"#\">Privacy Policy</a>\n                        </li>\n                        <li><a href=\"#\">Terms of Use</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </footer>\n\n    <!-- Portfolio Modals -->\n    <!-- Use the modals below to showcase details about your portfolio projects! -->\n\n    <!-- Portfolio Modal 1 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal1\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"close-modal\" data-dismiss=\"modal\">\n                <div class=\"lr\">\n                    <div class=\"rl\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-8 col-lg-offset-2\">\n                        <div class=\"modal-body\">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class=\"img-responsive img-centered\" src=\"../../../../assets/v1/img/portfolio/roundicons-free.png\" alt=\"\">\n                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                            <p>\n                                <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href=\"https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc\">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href=\"https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc\">here</a>.</p>\n                            <ul class=\"list-inline\">\n                                <li>Date: July 2014</li>\n                                <li>Client: Round Icons</li>\n                                <li>Category: Graphic Design</li>\n                            </ul>\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 2 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal2\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"close-modal\" data-dismiss=\"modal\">\n                <div class=\"lr\">\n                    <div class=\"rl\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-8 col-lg-offset-2\">\n                        <div class=\"modal-body\">\n                            <h2>Project Heading</h2>\n                            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class=\"img-responsive img-centered\" src=\"../../../../assets/v1/img/portfolio/startup-framework-preview.png\" alt=\"\">\n                            <p><a href=\"http://designmodo.com/startup/?u=787\">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p>\n                            <p>You can preview Startup Framework <a href=\"http://designmodo.com/startup/?u=787\">here</a>.</p>\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 3 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal3\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"close-modal\" data-dismiss=\"modal\">\n                <div class=\"lr\">\n                    <div class=\"rl\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-8 col-lg-offset-2\">\n                        <div class=\"modal-body\">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class=\"img-responsive img-centered\" src=\"../../../../assets/v1/img/portfolio/treehouse-preview.png\" alt=\"\">\n                            <p>Treehouse is a free PSD web template built by <a href=\"https://www.behance.net/MathavanJaya\">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p>\n                            <p>You can download the PSD template in this portfolio sample item at <a href=\"http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/\">FreebiesXpress.com</a>.</p>\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 4 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal4\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"close-modal\" data-dismiss=\"modal\">\n                <div class=\"lr\">\n                    <div class=\"rl\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-8 col-lg-offset-2\">\n                        <div class=\"modal-body\">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class=\"img-responsive img-centered\" src=\"../../../../assets/v1/img/portfolio/golden-preview.png\" alt=\"\">\n                            <p>Start Bootstrap's Agency theme is based on Golden, a free PSD website template built by <a href=\"https://www.behance.net/MathavanJaya\">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p>\n                            <p>You can download the PSD template in this portfolio sample item at <a href=\"http://freebiesxpress.com/gallery/golden-free-one-page-web-template/\">FreebiesXpress.com</a>.</p>\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 5 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal5\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"close-modal\" data-dismiss=\"modal\">\n                <div class=\"lr\">\n                    <div class=\"rl\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-8 col-lg-offset-2\">\n                        <div class=\"modal-body\">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class=\"img-responsive img-centered\" src=\"../../../../assets/v1/img/portfolio/escape-preview.png\" alt=\"\">\n                            <p>Escape is a free PSD web template built by <a href=\"https://www.behance.net/MathavanJaya\">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p>\n                            <p>You can download the PSD template in this portfolio sample item at <a href=\"http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/\">FreebiesXpress.com</a>.</p>\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 6 -->\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal6\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n        <div class=\"modal-content\">\n            <div class=\"close-modal\" data-dismiss=\"modal\">\n                <div class=\"lr\">\n                    <div class=\"rl\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-8 col-lg-offset-2\">\n                        <div class=\"modal-body\">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class=\"img-responsive img-centered\" src=\"../../../../assets/v1/img/portfolio/dreams-preview.png\" alt=\"\">\n                            <p>Dreams is a free PSD web template built by <a href=\"https://www.behance.net/MathavanJaya\">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p>\n                            <p>You can download the PSD template in this portfolio sample item at <a href=\"http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/\">FreebiesXpress.com</a>.</p>\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- jQuery -->\n    <script src=\"../../../../assets/v1/js/jquery.js\"></script>\n\n    <!-- Bootstrap Core JavaScript -->\n    <script src=\"../../../../assets/v1/js/bootstrap.min.js\"></script>\n\n    <!-- Plugin JavaScript -->\n    <script src=\"../../../../assets/v1/js/jquery.easing.min.js\"></script>\n    <script src=\"../../../../assets/v1/js/classie.js\"></script>\n    <script src=\"../../../../assets/v1/js/cbpAnimatedHeader.js\"></script>\n\n    <!-- Contact Form JavaScript -->\n    <script src=\"../../../../assets/v1/js/jqBootstrapValidation.js\"></script>\n    <script src=\"../../../../assets/v1/js/contact_me.js\"></script>\n\n    <!-- Custom Theme JavaScript -->\n    <script src=\"../../../../assets/v1/js/agency.js\"></script>\n\n</body>\n\n</html>\n";
},"useData":true});


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
    + ".m4a\" length=\""
    + alias2(alias1((depth0 != null ? depth0.length_bytes : depth0), depth0))
    + "\"/>\n		      <itunes:image href=\"http://www.fast-cast.net/podcasts/tgi/logo.jpg\"/>\n		    </item>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<?xml version=\"1.0\" encoding=\"UTF-8\"?><rss xmlns:atom=\"http://www.w3.org/2005/Atom\" xmlns:itunes=\"http://www.itunes.com/dtds/podcast-1.0.dtd\" version=\"2.0\">\n  <channel>\n    <atom:link href=\"http://www.fast-cast.net/podcasts/tgi/feed.rss\" rel=\"self\" type=\"application/rss+xml\"/>\n    <title>That's a Good Idea</title>\n    <link>http://www.fast-cast.net/podcasts/tgi/index.html</link>\n    <pubDate>Mon, 12 Oct 2015 10:37:00 -0700</pubDate>\n    <lastBuildDate>"
    + this.escapeExpression(((helper = (helper = helpers.datetime || (depth0 != null ? depth0.datetime : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"datetime","hash":{},"data":data}) : helper)))
    + "</lastBuildDate>\n    <ttl>60</ttl>\n    <language>en</language>\n    <copyright>All rights reserved</copyright>\n    <webMaster>ben@benallfree.com (Ben Allfree)</webMaster>\n    <description>Join tech entrepreneur and expert programmer Ben Allfree on That's a Good Idea (TGI) for a daily dose of new business ideas and startup thinking.</description>\n    <itunes:new-feed-url>http://www.fast-cast.net/podcasts/tgi/feed.rss</itunes:new-feed-url>\n    <itunes:subtitle>Good ideas served daily</itunes:subtitle>\n    <itunes:owner>\n      <itunes:name>Ben Allfree</itunes:name>\n      <itunes:email>ben@benallfree.com</itunes:email>\n    </itunes:owner>\n    <itunes:author>Ben Allfree</itunes:author>\n    <itunes:explicit>yes</itunes:explicit>\n    <itunes:image href=\"http://www.fast-cast.net/podcasts/tgi/logo.jpg\"/>\n    <image>\n      <url>http://www.fast-cast.net/podcasts/tgi/logo.jpg</url>\n      <title>That's a Good Idea</title>\n      <link>http://www.fast-cast.net/podcasts/tgi/index.html</link>\n    </image>\n    <itunes:category text=\"Education\"/>    \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.episodes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </channel>\n</rss>";
},"useData":true});


(function() {
  window.categories = {
    "Arts": ["Design", "Fashion & Beauty", "Food", "Literature", "Performing Arts", "Visual Arts"],
    "Business": ["Business News", "Careers", "Investing", "Management & Marketing", "Shopping"],
    "Comedy": [],
    "Education": ["Educational Technology", "Higher Education", "K-12", "Language Courses", "Training"],
    "Games & Hobbies": ["Automotive", "Aviation", "Hobbies", "Other Games", "Video Games"],
    "Government & Organizations": ["Local", "National", "Non-Profit", "Regional"],
    "Health": ["Alternative Health", "Fitness & Nutrition", "Self-Help", "Sexuality"],
    "Kids & Family": [],
    "Music": [],
    "News & Politics": [],
    "Religion & Spirituality": ["Buddhism", "Christianity", "Hinduism", "Islam", "Judaism", "Other", "Spirituality"],
    "Science & Medicine": ["Medicine", "Natural Sciences", "Social Sciences"],
    "Society & Culture": ["History", "Personal Journals", "Philosophy", "Places & Travel"],
    "Sports & Recreation": ["Amateur", "College & High School", "Outdoor", "Professional"],
    "Technology": ["Gadgets", "Tech News", "Podcasting", "Software How-To"],
    "TV & Film": []
  };

}).call(this);


(function() {
  window.static_episodes = {
    'fc-tgi-1444671420000': {
      guid: 'fc-tgi-1444671420000',
      slug: '001-assassins',
      title: 'Assassins',
      description: 'The age-old game of Assassins, re-imagined as a geo app.',
      number: 1,
      published_at: 1444671420000,
      recorded_at: 1444671420000,
      duration_ms: 5 * 60 * 1000 + 5 * 1000,
      length_bytes: 4029562
    },
    'fc-tgi-1445001240000': {
      guid: 'fc-tgi-1445001240000',
      slug: '002-social-car-values',
      title: 'Social Car Values',
      description: 'Need to know what your car is really worth? This idea might just do it.',
      number: 2,
      published_at: 1445001240000,
      recorded_at: 1445001240000,
      duration_ms: (22 * 60 + 34) * 1000,
      length_bytes: 32505688
    },
    'fc-tgi-1445288580000': {
      guid: 'fc-tgi-1445288580000',
      slug: '003-crowd-funded-apps',
      title: 'Crowd Funded Apps',
      description: 'A marketplace to find talent to help you build your new app-based startup.',
      number: 3,
      published_at: 1445288580000,
      recorded_at: 1445288580000,
      duration_ms: (32 * 60 + 51) * 1000,
      length_bytes: 55342961
    },
    'fc-tgi-1445376600000': {
      guid: 'fc-tgi-1445376600000',
      slug: '004-trustly',
      title: 'Trustly',
      description: 'An identity verification service to change the world.',
      number: 4,
      published_at: 1445376600000,
      recorded_at: 1445376600000,
      duration_ms: (79 * 60 + 57) * 1000,
      length_bytes: 114619680
    },
    'fc-tgi-1445446440000': {
      guid: 'fc-tgi-1445446440000',
      slug: '005-pick-cool',
      title: 'Pick.Cool',
      description: 'A social voting platform with community as its focus.',
      number: 5,
      published_at: 1445446440000,
      recorded_at: 1445446440000,
      duration_ms: (59 * 60 + 36) * 1000,
      length_bytes: 104554995
    },
    'fc-tgi-1445513040000': {
      guid: 'fc-tgi-1445513040000',
      slug: '006-turnkey-niche-sites',
      title: 'Turnkey Niche Sites',
      description: 'Grab on to that long tail by becoming a niche site host.',
      number: 6,
      published_at: 1445513040000,
      recorded_at: 1445513040000,
      duration_ms: (54 * 60 + 55) * 1000,
      length_bytes: 26652130
    },
    'fc-tgi-1445448628000': {
      guid: 'fc-tgi-1445448628000',
      slug: '007-fastcast',
      title: 'FastCast',
      description: 'The one click zero to hero podcasting platform.',
      number: 7,
      published_at: null,
      recorded_at: 1445448628000,
      duration_ms: (69 * 60 + 28) * 1000,
      length_bytes: 33708480
    },
    'fc-tgi-1445448635000': {
      guid: 'fc-tgi-1445448635000',
      slug: '007-part-2-social-relevance-engine',
      title: 'Part 2: Social Relevance Engine',
      description: 'A way to track how your content is performing on social sites.',
      number: 7,
      published_at: null,
      recorded_at: 1445448635000,
      duration_ms: (44 * 60 + 3) * 1000,
      length_bytes: 21378350
    },
    'fc-tgi-1445448637000': {
      guid: 'fc-tgi-1445448637000',
      slug: '008-podcast-network',
      title: 'Podcast Network',
      description: 'A podcasting network that helps you build an audience.',
      number: 8,
      published_at: null,
      recorded_at: 1445448637000,
      duration_ms: (48 * 60 + 4) * 1000,
      length_bytes: 23453405
    },
    'fc-tgi-1445448639000': {
      guid: 'fc-tgi-1445448639000',
      slug: '009-affiliate-sites',
      title: 'Affiliate Sites',
      description: 'How to build a business just by helping retailers market their goods.',
      number: 9,
      published_at: null,
      recorded_at: 1445448639000,
      duration_ms: (56 * 60 + 59) * 1000,
      length_bytes: 27803498
    },
    'fc-tgi-1445448641000': {
      guid: 'fc-tgi-1445448641000',
      slug: '010-junglefire',
      title: 'JungleFire',
      description: 'A business supplying plumbing for other businesses.',
      number: 10,
      published_at: null,
      recorded_at: 1445448641000,
      duration_ms: (68 * 60 + 32) * 1000,
      length_bytes: 33609409
    },
    'fc-tgi-1445448646000': {
      guid: 'fc-tgi-1445448646000',
      slug: '011-ilookgood',
      title: 'iLookGood',
      description: 'A fashion sharing and advice marketplace.',
      number: 11,
      published_at: null,
      recorded_at: 1445448646000,
      duration_ms: (94 * 60 + 10) * 1000,
      length_bytes: 45693225
    },
    'fc-tgi-1445448649000': {
      guid: 'fc-tgi-1445448649000',
      slug: '012-lifebook',
      title: 'LifeBook',
      description: 'An app to help foster kids capture their youth.',
      number: 12,
      published_at: null,
      recorded_at: 1445448649000,
      duration_ms: (87 * 60 + 36) * 1000,
      length_bytes: 42510687
    },
    'fc-tgi-1445448652000': {
      guid: 'fc-tgi-1445448652000',
      slug: '013-time-bomb',
      title: 'Time Bomb',
      description: 'A multiplayer alien puzzle game that kills.',
      number: 13,
      published_at: null,
      recorded_at: 1445448652000,
      duration_ms: (34 * 60 + 27) * 1000,
      length_bytes: 16719173
    },
    'fc-tgi-1445448654000': {
      guid: 'fc-tgi-1445448654000',
      slug: '014-kitchen-ingredient-tracker',
      title: 'Kitchen Ingredient Tracker',
      description: 'An app that keeps your cupboards full? Yes please.',
      number: 14,
      published_at: null,
      recorded_at: 1445448654000,
      duration_ms: (78 * 60 + 9) * 1000,
      length_bytes: 38890666
    },
    'fc-tgi-1445448658000': {
      guid: 'fc-tgi-1445448658000',
      slug: '015-epk',
      title: 'EPK',
      description: 'An app for touring musicians and the venues who love them.',
      number: 15,
      published_at: null,
      recorded_at: 1445448658000,
      duration_ms: (69 * 60 + 20) * 1000,
      length_bytes: 34003707
    },
    'fc-tgi-1445448680000': {
      guid: 'fc-tgi-1445448680000',
      slug: '016-catcher',
      title: 'Catcher',
      description: 'A Pokémon marketplace.',
      number: 16,
      published_at: null,
      recorded_at: 1445448680000,
      duration_ms: (48 * 60 + 17) * 1000,
      length_bytes: 23562676
    },
    'fc-tgi-1445448682000': {
      guid: 'fc-tgi-1445448682000',
      slug: '017-fanbrain',
      title: 'FanBrain',
      description: 'Sports mentoring for the masses.',
      number: 17,
      published_at: null,
      recorded_at: 1445448682000,
      duration_ms: (73 * 60 + 0) * 1000,
      length_bytes: 35797928
    },
    'fc-tgi-1445448688000': {
      guid: 'fc-tgi-1445448688000',
      slug: '018-quickdraw',
      title: 'QuickDraw',
      description: 'Be the fastest draw in the world...or die.',
      number: 18,
      published_at: null,
      recorded_at: 1445448688000,
      duration_ms: (52 * 60 + 15) * 1000,
      length_bytes: 25495470
    },
    'fc-tgi-1445445990000': {
      guid: 'fc-tgi-1445445990000',
      slug: '019-scapesearch',
      title: 'ScapeSearch',
      description: 'Having trouble finding a landscaper? Me neither.',
      number: 19,
      published_at: null,
      recorded_at: 1445445990000,
      duration_ms: (37 * 60 + 38) * 1000,
      length_bytes: 7206211
    },
    'fc-tgi-1445527834000': {
      guid: 'fc-tgi-1445527834000',
      slug: '020-fastcast-update',
      title: 'FastCast Update',
      description: "Today's FastCast update.",
      number: 20,
      published_at: null,
      recorded_at: 1445527834000,
      duration_ms: (21 * 60 + 36) * 1000,
      length_bytes: 4067590
    },
    'fc-tgi-1445554058000': {
      guid: 'fc-tgi-1445554058000',
      slug: '021-quickauthority',
      title: 'QuickAuthority',
      description: "Turnkey authority sites.",
      number: 21,
      published_at: null,
      recorded_at: 1445554058000,
      duration_ms: (24 * 60 + 5) * 1000,
      length_bytes: 4818196
    }
  };

}).call(this);


(function() {
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

  window.orderByMagic = function(hash) {
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

}).call(this);


(function() {
  var Recorder,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    slice = [].slice;

  Recorder = (function() {
    function Recorder(fname, options) {
      var default_options;
      this.fname = fname;
      this.stop = bind(this.stop, this);
      this.play = bind(this.play, this);
      this.seek = bind(this.seek, this);
      this.step = bind(this.step, this);
      this.record = bind(this.record, this);
      this.get_duration = bind(this.get_duration, this);
      this.new_media = bind(this.new_media, this);
      this.event = bind(this.event, this);
      this.log = bind(this.log, this);
      default_options = {
        onScrubUpdate: function(ms) {},
        onDurationUpdate: function(ms) {},
        onRecordStart: function() {},
        onRecordStop: function() {},
        onAudioError: function() {},
        onPlayStart: function() {},
        onPlayStop: function() {},
        onEvent: function() {
          var args, name;
          name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        },
        debug: false
      };
      this.options = angular.extend(default_options, options);
      this.scrub_point_ms = 0;
      this.stop();
      this.get_duration();
    }

    Recorder.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (!this.options.debug) {
        return;
      }
      return console.log.apply(this, args);
    };

    Recorder.prototype.event = function() {
      var args, name;
      name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      this.log("event", name, args);
      this.options[name].apply(this, args);
      return this.options.onEvent(name, args);
    };

    Recorder.prototype.new_media = function(ready_cb, status_cb, error_cb) {
      var media, status;
      status = {};
      status[Media.MEDIA_NONE] = 'None';
      status[Media.MEDIA_STARTING] = 'Starting';
      status[Media.MEDIA_RUNNING] = 'Running';
      status[Media.MEDIA_PAUSED] = 'Paused';
      status[Media.MEDIA_STOPPED] = 'Stopped';
      media = new Media(this.fname, ((function(_this) {
        return function() {
          return _this.log("Successfully completed action ", _this.fname);
        };
      })(this)), ((function(_this) {
        return function(err) {
          _this.log('Audio Error: ' + err.code);
          _this.log(err);
          return error_cb(media, err);
        };
      })(this)), ((function(_this) {
        return function(stat) {
          _this.log("Media status", stat, status[stat]);
          return status_cb(media, stat);
        };
      })(this)));
      ready_cb(media);
      return media;
    };

    Recorder.prototype.get_duration = function(cb) {
      return this.new_media(((function(_this) {
        return function(media) {
          media.setVolume(0);
          return media.play();
        };
      })(this)), ((function(_this) {
        return function(media, status) {
          if (status === Media.MEDIA_RUNNING) {
            media.stop();
            _this.duration_ms = media.getDuration() * 1000;
            _this.event('onDurationUpdate', _this.duration_ms);
            if (cb) {
              cb(_this.duration_ms);
            }
          }
          if (status === Media.MEDIA_STOPPED) {
            return media.release();
          }
        };
      })(this)), ((function(_this) {
        return function(media, error) {};
      })(this)));
    };

    Recorder.prototype.record = function() {
      return this.new_media(((function(_this) {
        return function(media) {
          return media.startRecord();
        };
      })(this)), ((function(_this) {
        return function(media, status) {
          var start_time_ms, update_record;
          if (status === Media.MEDIA_RUNNING) {
            _this.log('recording');
            _this.is_recording = true;
            _this.duration_ms = 0;
            start_time_ms = (new Date).getTime();
            update_record = function() {
              var current_ms;
              _this.log('recording check');
              if (!_this.is_recording) {
                media.stopRecord();
                return;
              }
              current_ms = (new Date).getTime();
              _this.duration_ms = current_ms - start_time_ms;
              _this.scrub_point_ms = _this.duration_ms;
              _this.event('onDurationUpdate', _this.duration_ms);
              _this.event('onScrubUpdate', _this.duration_ms);
              return setTimeout(update_record, 100);
            };
            update_record();
            _this.event('onRecordStart');
          }
          if (status === Media.MEDIA_STOPPED) {
            _this.is_recording = false;
            media.release();
            return _this.get_duration(function(ms) {
              _this.scrub_point_ms = ms;
              _this.event('onScrubUpdate', ms);
              return _this.event('onRecordStop');
            });
          }
        };
      })(this)), ((function(_this) {
        return function(media, err) {
          media.release();
          return _this.event('onAudioError');
        };
      })(this)));
    };

    Recorder.prototype.step = function(ms) {
      return this.seek(this.scrub_point_ms + ms);
    };

    Recorder.prototype.seek = function(ms) {
      if (ms === -1) {
        ms = Number.MAX_VALUE;
      }
      this.scrub_point_ms = Math.min(this.duration_ms, Math.max(0, ms));
      this.event('onScrubUpdate', this.scrub_point_ms);
      if (this.is_playing) {
        return this.media.seekTo(this.scrub_point_ms);
      }
    };

    Recorder.prototype.play = function() {
      if (this.scrub_point_ms >= this.duration_ms) {
        this.scrub_point_ms = 0;
        this.event('onScrubUpdate', this.scrub_point_ms);
      }
      return this.media = this.new_media(((function(_this) {
        return function(media) {
          media.play();
          return media.seekTo(_this.scrub_point_ms);
        };
      })(this)), ((function(_this) {
        return function(media, status) {
          var play_update;
          if (status === Media.MEDIA_RUNNING) {
            _this.is_playing = true;
            play_update = function() {
              return media.getCurrentPosition(function(pos) {
                if (pos === -1) {
                  _this.scrub_point_ms = _this.duration_ms;
                } else {
                  _this.scrub_point_ms = pos * 1000;
                }
                _this.event('onScrubUpdate', _this.scrub_point_ms);
                if (!_this.is_playing) {
                  media.stop();
                  media.release();
                  _this.event('onPlayStop');
                  return;
                }
                return setTimeout(play_update, 100);
              });
            };
            play_update();
            _this.event('onPlayStart');
          }
          if (status === Media.MEDIA_STOPPED) {
            return _this.is_playing = false;
          }
        };
      })(this)), ((function(_this) {
        return function(media, err) {
          media.release();
          return _this.event('onAudioError');
        };
      })(this)));
    };

    Recorder.prototype.stop = function() {
      this.is_playing = false;
      return this.is_recording = false;
    };

    return Recorder;

  })();

  window.Recorder = Recorder;

}).call(this);


(function() {
  var UploadWorker,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    slice = [].slice;

  UploadWorker = (function() {
    function UploadWorker(item, options) {
      var default_options;
      this.item = item;
      if (options == null) {
        options = {};
      }
      this.start = bind(this.start, this);
      this.failed = bind(this.failed, this);
      this.finished = bind(this.finished, this);
      this.progress = bind(this.progress, this);
      this.started = bind(this.started, this);
      this.event = bind(this.event, this);
      this.log = bind(this.log, this);
      default_options = {
        onStart: function() {},
        onSuccess: function() {},
        onFailure: function(err) {},
        onProgress: function(progress) {},
        onEvent: function() {
          var args, name;
          name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        },
        debug: true
      };
      this.options = angular.extend(default_options, options);
      this.upload_count = 0;
      this.log("Upload Worker started", this.item);
      setTimeout(this.start, 0);
    }

    UploadWorker.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (!this.options.debug) {
        return;
      }
      return console.log.apply(this, args);
    };

    UploadWorker.prototype.event = function() {
      var args, name;
      name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      this.log("event", name, args);
      this.options[name].apply(this, args);
      return this.options.onEvent(name, args);
    };

    UploadWorker.prototype.started = function(cb) {
      this.options.onStart = cb;
      return this;
    };

    UploadWorker.prototype.progress = function(cb) {
      this.options.onProgress = cb;
      return this;
    };

    UploadWorker.prototype.finished = function(cb) {
      this.options.onSuccess = cb;
      return this;
    };

    UploadWorker.prototype.failed = function(cb) {
      this.options.onFailure = cb;
      return this;
    };

    UploadWorker.prototype.start = function() {
      var $http;
      this.event('onStart');
      this.progress = 0;
      $http = angular.injector(["ng"]).get("$http");
      return $http.get('http://api.fast-cast.net', {
        params: {
          slug: this.item.slug,
          type: this.item.type
        }
      }).then(((function(_this) {
        return function(response) {
          var ft, upload_options, url;
          _this.item.progress = 10;
          _this.event('onProgress', _this.item.progress);
          url = response.data;
          ft = new FileTransfer;
          ft.onprogress = function(pe) {
            _this.item.progress = pe.loaded / pe.total * 90 + 10;
            return _this.event('onProgress', _this.item.progress);
          };
          upload_options = new FileUploadOptions;
          upload_options.fileName = _this.item.src;
          upload_options.mimeType = _this.item.mime;
          upload_options.chunkedMode = false;
          upload_options.httpMethod = 'PUT';
          upload_options.headers = {
            'Content-Type': _this.item.mime
          };
          return ft.upload(_this.item.src, url, (function() {
            return _this.event('onSuccess');
          }), (function(err) {
            return _this.event('onFailure', err);
          }), upload_options);
        };
      })(this)), (function(_this) {
        return function(err) {
          return _this.event('onFailure', err);
        };
      })(this));
    };

    return UploadWorker;

  })();

  window.UploadWorker = UploadWorker;

}).call(this);


(function() {
  app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state, $cordovaFileTransfer, $q, $ionicHistory, $ionicSideMenuDelegate, $jrCrop, $cordovaImagePicker) {
    var load_state, next_episode_number;
    $scope.select_logo = function(cb) {
      var options;
      options = {
        maximumImagesCount: 1
      };
      return $cordovaImagePicker.getPictures(options).then((function(results) {
        return $jrCrop.crop({
          url: results[0],
          title: 'Move and Scale',
          width: 300,
          height: 300
        }).then(function(canvas) {
          var c;
          return c = Caman(canvas, function() {
            this.resize({
              width: 75,
              height: 75
            });
            return this.render((function(_this) {
              return function() {
                var _base64ToArrayBuffer, b64, data, data_url;
                data_url = _this.toBase64('jpeg');
                b64 = data_url.replace(/^data:.+?;base64,/, "");
                console.log(data_url.substring(0, 50));
                _base64ToArrayBuffer = function(base64) {
                  var binary_string, bytes, i, len;
                  binary_string = window.atob(base64.replace(/\s/g, ''));
                  len = binary_string.length;
                  bytes = new Uint8Array(len);
                  i = 0;
                  while (i < len) {
                    bytes[i] = binary_string.charCodeAt(i);
                    i++;
                  }
                  return bytes.buffer;
                };
                data = _base64ToArrayBuffer(b64);
                return $cordovaFile.writeFile($scope.output_directory, "test.jpg", data, true).then(function() {
                  return cb($scope.output_directory + "test.jpg", data_url);
                });
              };
            })(this));
          });
        });
      }), function(error) {
        return console.log(error);
      });
    };
    $scope.settings = function() {
      return $state.go('settings.podcast');
    };
    $scope.toggleLeft = function() {
      return $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.home = function() {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      return $state.go('home');
    };
    load_state = function() {
      var e, error1, k;
      $scope.podcast = null;
      try {
        $scope.podcast = JSON.parse(window.localStorage.getItem('podcast'));
      } catch (error1) {
        e = error1;
        console.log('Error loading state', e);
      }
      if (!$scope.podcast || !$scope.podcast.version) {
        $scope.podcast = {
          version: 1,
          episodes: {}
        };
        $scope.save_state();
      }
      for (k in $scope.podcast.episodes) {
        $scope.podcast.episodes[k].guid = k;
        $scope.podcast.episodes[k].is_syncing = false;
      }
      return $scope.podcast.episodes = angular.merge({}, static_episodes, $scope.podcast.episodes);
    };
    next_episode_number = function() {
      var episode, n, slug;
      n = 0;
      for (slug in $scope.podcast.episodes) {
        episode = $scope.podcast.episodes[slug];
        n = Math.max(n, episode.number);
      }
      return n + 1;
    };
    $scope.output_directory = 'cdvfile://localhost/persistent/';
    resolveLocalFileSystemURL($scope.output_directory, function(entry) {
      return $scope.native_output_directory = entry.toURL();
    });
    $scope.save_state = function() {
      var json;
      json = angular.toJson($scope.podcast);
      window.localStorage.setItem('podcast', angular.toJson($scope.podcast));
      return $cordovaFile.writeFile($scope.output_directory, 'data.json', json, true).then((function(result) {
        return new UploadWorker({
          type: 'json',
          mime: 'application/json',
          src: $scope.output_directory + 'data.json'
        });
      }));
    };
    load_state();
    $scope["new"] = function() {
      var guid, t;
      t = (new Date).getTime();
      guid = sprintf('fc-tgi-%d', t);
      $scope.episode = {
        guid: guid,
        number: next_episode_number()
      };
      return $state.go('episode.record');
    };
    return $scope.go = function(guid) {
      $scope.episode = angular.copy($scope.podcast.episodes[guid]);
      return $state.go('episode.record');
    };
  });

}).call(this);


(function() {
  app.controller('EpisodeController', function($scope, $ionicSideMenuDelegate, $ionicActionSheet) {
    var t;
    $scope.$on('$ionicView.enter', function() {
      return $ionicSideMenuDelegate.canDragContent(false);
    });
    $scope.$on('$ionicView.leave', function() {
      return $ionicSideMenuDelegate.canDragContent(true);
    });
    t = (new Date).getTime();
    $scope.has_recording = $scope.episode.recorded_at != null;
    $scope.is_uploading = false;
    $scope.is_playing = false;
    $scope.is_recording = false;
    $scope.duration_ms = $scope.episode.duration_ms || 0;
    $scope.scrub_point_ms = 0;
    $scope.has_changes = false;
    $scope.$watch('episode', (function(newObj, oldObj) {
      return $scope.has_changes = !angular.equals(oldObj, newObj);
    }), true);
    return $scope.cancel = function() {
      var hideSheet;
      return hideSheet = $ionicActionSheet.show({
        destructiveText: 'Discard Changes',
        titleText: 'Discard changes',
        cancelText: 'Cancel',
        destructiveButtonClicked: function() {
          return $scope.home();
        }
      });
    };
  });

}).call(this);


(function() {
  app.controller('FinalizeController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicNavBarDelegate, $ionicHistory) {
    var upload, upload_audio, upload_html, upload_rss;
    $ionicNavBarDelegate.showBackButton(true);
    upload_rss = function() {
      var rss;
      rss = FastCast.templates.rss({
        episodes: orderByMagic($scope.podcast.episodes)
      });
      return $cordovaFile.writeFile($scope.output_directory, 'tgi.rss', rss, true).then((function(result) {
        return upload({
          type: 'rss',
          mime: 'application/rss+xml',
          src: $scope.output_directory + 'tgi.rss'
        });
      }), function(err) {
        return console.log('file write error', err);
      });
    };
    upload_html = function() {
      var html;
      html = FastCast.templates.episode({
        episode: $scope.episode
      });
      return $cordovaFile.writeFile($scope.output_directory, $scope.episode.guid + '.html', html, true).then((function(result) {
        return upload({
          slug: $scope.episode.slug,
          type: 'html',
          mime: 'text/html',
          src: $scope.output_directory + $scope.episode.guid + '.html'
        });
      }), function(err) {
        return console.log('file write error', err);
      });
    };
    upload_audio = function() {
      return upload({
        slug: $scope.episode.slug,
        type: 'audio',
        mime: 'audio/mp4',
        src: $scope.output_directory + $scope.episode.guid + '.m4a'
      });
    };
    upload = function(item) {
      return (new UploadWorker(item)).started(function() {
        $scope.upload_count++;
        return $scope.uploads[item.type] = 0;
      }).finished(function() {
        return setTimeout((function() {
          delete $scope.uploads[item.type];
          $scope.upload_count--;
          if ($scope.upload_count === 0) {
            $scope.is_uploading_finished = true;
          }
          return $scope.$apply();
        }), 1000);
      }).progress(function(progress) {
        $scope.uploads[item.type] = progress;
        angular.element('#progress_' + item.type).val(progress);
        return $scope.$apply();
      });
    };
    $scope.is_uploading = false;
    $scope.uploads = {};
    $scope.back = function() {
      return $state.go('episode.record');
    };
    $scope.is_uploading_started = false;
    $scope.is_uploading_finished = false;
    $scope.publish = function() {
      if (!$scope.episode.number) {
        alert('Please supply an episode number.');
      }
      $scope.episode.published_at = null;
      if ($scope.episode.is_published) {
        if (!$scope.episode.title) {
          alert('Please supply an episode title.');
        }
        if (!$scope.episode.description) {
          alert('Please supply an episode description.');
        }
        if (!$scope.episode.published_at) {
          $scope.episode.published_at = (new Date).getTime();
        }
      }
      $scope.is_uploading_started = true;
      $scope.episode.slug = sprintf('%03d - %s', $scope.episode.number, $scope.episode.title).slugify();
      if (!$scope.episode.length_bytes) {
        window.resolveLocalFileSystemURL($scope.output_directory + $scope.episode.guid + '.m4a', (function(fileEntry) {
          return fileEntry.file(function(file) {
            console.log("got byte size", file);
            $scope.episode.length_bytes = file.size;
            $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode);
            if ($scope.episode.published_at) {
              upload_rss();
            }
            $scope.save_state();
            return console.log(file);
          });
        }), function(err) {
          return console.log('error getting file size');
        });
      } else {
        $scope.podcast.episodes[$scope.episode.guid] = angular.copy($scope.episode);
        if ($scope.episode.published_at) {
          upload_rss();
        }
        $scope.save_state();
      }
      if ($scope.episode.published_at) {
        upload_html();
      }
      return upload_audio();
    };
    $scope.$watch('is_uploading_finished', function(v) {
      if (!v) {
        return;
      }
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      return $state.go('episode.finish');
    });
    return $scope.upload_count = 0;
  });

}).call(this);


(function() {
  app.controller('FinishController', function($scope, $ionicHistory) {});

}).call(this);


(function() {
  app.controller('HomeController', function($scope, $ionicHistory) {});

}).call(this);


(function() {
  app.controller('PodcastSettingsController', function($scope, $ionicHistory, $ionicPopup, $ionicNavBarDelegate, $ionicActionSheet) {
    var cat, cats, getb64, i, k, len, original, ref, subcat, subcats, v;
    cats = [];
    for (cat in categories) {
      subcats = categories[cat];
      if (subcats.length === 0) {
        cats.push({
          key: cat,
          name: cat
        });
      } else {
        for (i = 0, len = subcats.length; i < len; i++) {
          subcat = subcats[i];
          cats.push({
            key: sprintf("%s|%s", cat, subcat),
            name: sprintf("%s - %s", cat, subcat)
          });
        }
      }
    }
    $scope.cats = cats;
    $scope.do_logo = function() {
      return $scope.select_logo(function(path, data_url) {
        $scope.show.logo_path = path;
        return $scope.logo_src = data_url;
      });
    };
    getb64 = function(cdv_path, cb) {
      return resolveLocalFileSystemURL(cdv_path, function(entry) {
        var path;
        path = entry.toURL();
        return window.plugins.Base64.encodeFile(path, function(base64) {
          console.log(base64.substring(0, 50));
          return cb(base64);
        });
      });
    };
    $scope.show = {
      title: '',
      subtitle: '',
      author: '',
      description: '',
      primary_category: '',
      secondary_category: '',
      is_explicit: false,
      logo_path: null
    };
    ref = $scope.show;
    for (k in ref) {
      v = ref[k];
      if (($scope.podcast[k] != null)) {
        $scope.show[k] = $scope.podcast[k];
      }
    }
    if ($scope.show.logo_path) {
      getb64($scope.show.logo_path, function(b64) {
        return $scope.logo_src = b64;
      });
    }
    console.log($scope.show);
    original = angular.copy($scope.show);
    $scope.has_changes = false;
    $scope.$watch('show', (function(newValue, oldValue) {
      $scope.has_changes = !angular.equals(original, newValue);
      return $ionicNavBarDelegate.showBackButton(!$scope.has_changes);
    }), true);
    $scope.save = function() {
      var ref1, validate;
      validate = {
        title: 'a title',
        logo_path: 'cover art',
        subtitle: 'a subtitle',
        author: 'an author',
        description: 'a description',
        primary_category: 'primary category',
        secondary_category: 'secondary category'
      };
      for (k in validate) {
        v = validate[k];
        if (!($scope.show[k] != null)) {
          $ionicPopup.alert({
            title: 'Required',
            template: "Please supply " + v + "."
          });
          return;
        }
        $scope.show[k] = $scope.show[k].trim();
      }
      ref1 = $scope.show;
      for (k in ref1) {
        v = ref1[k];
        $scope.podcast[k] = $scope.show[k];
      }
      $scope.save_state();
      return $scope.home();
    };
    return $scope.cancel = function() {
      var hideSheet;
      return hideSheet = $ionicActionSheet.show({
        destructiveText: 'Discard Changes',
        titleText: 'Discard changes',
        cancelText: 'Cancel',
        destructiveButtonClicked: function() {
          return $scope.home();
        }
      });
    };
  });

}).call(this);


(function() {
  app.controller('RecordController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicHistory, $ionicPopup, $ionicNavBarDelegate) {
    var hold_promise, rec;
    rec = new Recorder($scope.output_directory + $scope.episode.guid + '.m4a', {
      onScrubUpdate: function(ms) {
        return $scope.scrub_point_ms = ms;
      },
      onDurationUpdate: function(ms) {
        $scope.duration_ms = ms;
        return $scope.episode.duration_ms = ms;
      },
      onAudioError: function() {
        return $ionicPopup.alert({
          title: 'Audio Error',
          template: 'The audio system has failed. Please report this.'
        }).then((function(res) {
          return $scope.home();
        }));
      },
      onPlayStart: function() {
        return $scope.is_playing = true;
      },
      onPlayStop: function() {
        return $scope.is_playing = false;
      },
      onRecordStart: function() {
        $scope.has_changes = true;
        $ionicNavBarDelegate.showBackButton(false);
        $ionicHistory.clearHistory();
        $scope.is_recording = true;
        $scope.has_recording = false;
        return $scope.episode.recorded_at = (new Date).getTime();
      },
      onRecordStop: function() {
        $scope.is_recording = false;
        return $scope.has_recording = true;
      },
      onEvent: function() {
        return $scope.$applyAsync();
      }
    });
    hold_promise = null;
    $scope.hold = function(ms) {
      if (!ms) {
        $interval.cancel(hold_promise);
        return;
      }
      return hold_promise = $interval((function() {
        return rec.step(ms);
      }), 100);
    };
    $scope.seek = function(ms) {
      console.log('seek', ms);
      return rec.seek(ms);
    };
    $scope.step = function(ms) {
      console.log('step', ms);
      return rec.step(ms);
    };
    $scope.play = function() {
      return rec.play();
    };
    $scope.stop_playing = function() {
      return rec.stop();
    };
    $scope.stop_recording = function() {
      return rec.stop();
    };
    return $scope.record = function() {
      var hideSheet;
      if ($scope.has_recording) {
        return hideSheet = $ionicActionSheet.show({
          destructiveText: 'Scrap and Re-Record',
          titleText: 'Re-record episode',
          cancelText: 'Cancel',
          destructiveButtonClicked: function() {
            hideSheet();
            return rec.record();
          }
        });
      } else {
        return rec.record();
      }
    };
  });

}).call(this);


(function() {
  app.controller('SettingsController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicNavBarDelegate, $ionicPopup) {});

}).call(this);


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvYXBwLmNvZmZlZSIsIi9zb3VyY2UvYm9vdHN0cmFwLmNvZmZlZSIsInJzcy5oYnMiLCIvc291cmNlL3N0YXRpY19jYXRlZ29yaWVzLmNvZmZlZSIsIi9zb3VyY2Uvc3RhdGljX3BvZGNhc3RzLmNvZmZlZSIsIi9zb3VyY2UvdXRpbC5jb2ZmZWUiLCIvc291cmNlL2NsYXNzZXMvY2xhc3Nlcy9SZWNvcmRlci5jb2ZmZWUiLCIvc291cmNlL2NsYXNzZXMvY2xhc3Nlcy9VcGxvYWRXb3JrZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9BcHBDb250cm9sbGVyLmNvZmZlZSIsIi9zb3VyY2UvY29udHJvbGxlcnMvY29udHJvbGxlcnMvRXBpc29kZUNvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9GaW5hbGl6ZUNvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9GaW5pc2hDb250cm9sbGVyLmNvZmZlZSIsIi9zb3VyY2UvY29udHJvbGxlcnMvY29udHJvbGxlcnMvSG9tZUNvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9Qb2RjYXN0U2V0dGluZ3NDb250cm9sbGVyLmNvZmZlZSIsIi9zb3VyY2UvY29udHJvbGxlcnMvY29udHJvbGxlcnMvUmVjb3JkQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL1NldHRpbmdzQ29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxNQUFNLENBQUMsTUFBUCxHQUFnQixRQUFRLENBQUMsR0FBRyxDQUFDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBQSxLQUFtQyxDQUFDLENBQXBDLElBQTBDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBYixDQUFxQixVQUFyQixDQUFBLEtBQW9D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LE1BQVAsR0FBZ0IsU0FBQTtBQUNkLFVBQUE7TUFBQSxJQUFHLE1BQU0sQ0FBQyxhQUFWO2VBQ0UsU0FBQSxHQUFZLGlCQUFpQixDQUFDLElBQWxCLENBQ1Y7VUFBQSxlQUFBLEVBQWlCLHFCQUFqQjtVQUNBLFNBQUEsRUFBVyxtQkFEWDtVQUVBLFVBQUEsRUFBWSxRQUZaO1VBR0Esd0JBQUEsRUFBMEIsU0FBQTtZQUN4QixTQUFBLENBQUE7bUJBQ0EsR0FBRyxDQUFDLE1BQUosQ0FBQTtVQUZ3QixDQUgxQjtTQURVLEVBRGQ7T0FBQSxNQUFBO2VBVUUsR0FBRyxDQUFDLE1BQUosQ0FBQSxFQVZGOztJQURjO0VBNURpQixDQUFuQztBQUFBOzs7O0FDQUE7RUFBQSxHQUFHLENBQUMsVUFBSixDQUFlLG9CQUFmLEVBQXFDLFNBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsU0FBaEIsRUFBMkIsWUFBM0IsRUFBeUMsTUFBekMsRUFBaUQsaUJBQWpELEVBQW9FLG9CQUFwRSxFQUEwRixXQUExRixHQUFBLENBQXJDO0FBQUEiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmlzX2FwcCA9IGRvY3VtZW50LlVSTC5pbmRleE9mKCdodHRwOi8vJykgPT0gLTEgYW5kIGRvY3VtZW50LlVSTC5pbmRleE9mKCdodHRwczovLycpID09IC0xXG5cbndpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnZmFzdGNhc3QnLCBbXG4gICdpb25pYydcbiAgJ25nQ29yZG92YScsXG4gICduZ0lPUzlVSVdlYlZpZXdQYXRjaCcsXG4gICdqckNyb3AnLFxuXSlcblxuLmNvbmZpZygoJGludGVycG9sYXRlUHJvdmlkZXIpIC0+XG4gICRpbnRlcnBvbGF0ZVByb3ZpZGVyLnN0YXJ0U3ltYm9sKCc8JScpLmVuZFN5bWJvbCAnJT4nXG4pXG5cbi5ydW4oKCRpb25pY1BsYXRmb3JtKSAtPlxuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeSAtPlxuICAgICMgSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgICMgZm9yIGZvcm0gaW5wdXRzKVxuICAgIGlmIHdpbmRvdy5jb3Jkb3ZhIGFuZCB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkXG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyIHRydWVcbiAgICBpZiB3aW5kb3cuU3RhdHVzQmFyXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KClcbilcblxuLmZpbHRlcignbnVtYmVyRml4ZWRMZW4nLCAtPlxuICAobiwgbGVuKSAtPlxuICAgIHNwcmludGYgJyUwJyArIGxlbiArICdkJywgblxuKVxuXG4uZmlsdGVyKCdvcmRlckJ5TWFnaWMnLCAtPiBcbiAgKGVwaXNvZGVzKSAtPlxuICAgIG9yZGVyQnlNYWdpYyhlcGlzb2RlcylcbilcblxuLmNvbmZpZygoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hvbWUnLFxuICAgIHVybDogJy8nXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnXG4gICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJylcbiAgLnN0YXRlKCdlcGlzb2RlJyxcbiAgICBjYWNoZTogZmFsc2VcbiAgICB1cmw6ICcvZXBpc29kZSdcbiAgICB0ZW1wbGF0ZTogJzxpb24tbmF2LXZpZXc+PC9pb24tbmF2LXZpZXc+J1xuICAgIGNvbnRyb2xsZXI6ICdFcGlzb2RlQ29udHJvbGxlcidcbiAgICBhYnN0cmFjdDogdHJ1ZSlcbiAgICAuc3RhdGUoJ2VwaXNvZGUucmVjb3JkJyxcbiAgICAgIHVybDogJy9yZWNvcmQnXG4gICAgICB0ZW1wbGF0ZVVybDogJ2VwaXNvZGUvcmVjb3JkLmh0bWwnXG4gICAgICBjb250cm9sbGVyOiAnUmVjb3JkQ29udHJvbGxlcidcbiAgICAgIHBhcmVudDogJ2VwaXNvZGUnKVxuICAgIC5zdGF0ZSgnZXBpc29kZS5maW5hbGl6ZScsXG4gICAgICB1cmw6ICcvZmluYWxpemUnXG4gICAgICB0ZW1wbGF0ZVVybDogJ2VwaXNvZGUvZmluYWxpemUuaHRtbCdcbiAgICAgIGNvbnRyb2xsZXI6ICdGaW5hbGl6ZUNvbnRyb2xsZXInXG4gICAgICBwYXJlbnQ6ICdlcGlzb2RlJylcbiAgICAuc3RhdGUoJ2VwaXNvZGUuZmluaXNoJyxcbiAgICAgIHVybDogJy9maW5pc2gnXG4gICAgICB0ZW1wbGF0ZVVybDogJ2VwaXNvZGUvZmluaXNoLmh0bWwnXG4gICAgICBjb250cm9sbGVyOiAnRmluaXNoQ29udHJvbGxlcidcbiAgICAgIHBhcmVudDogJ2VwaXNvZGUnKVxuICAuc3RhdGUoJ3NldHRpbmdzJyxcbiAgICB1cmw6ICcvc2V0dGluZ3MnXG4gICAgdGVtcGxhdGU6ICc8aW9uLW5hdi12aWV3PjwvaW9uLW5hdi12aWV3PidcbiAgICBjb250cm9sbGVyOiAnU2V0dGluZ3NDb250cm9sbGVyJ1xuICAgIGFic3RyYWN0OiB0cnVlKVxuICAgIC5zdGF0ZSgnc2V0dGluZ3MucG9kY2FzdCcsXG4gICAgICB1cmw6ICcvcG9kY2FzdCdcbiAgICAgIHRlbXBsYXRlVXJsOiAnc2V0dGluZ3MvcG9kY2FzdC5odG1sJ1xuICAgICAgY29udHJvbGxlcjogJ1BvZGNhc3RTZXR0aW5nc0NvbnRyb2xsZXInXG4gICAgICBwYXJlbnQ6ICdzZXR0aW5ncycpXG4gICAgXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgJy8nXG4pXG4iLCJib290X2FuZ3VsYXIgPSAtPlxuICBkb21FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuICBhbmd1bGFyLmJvb3RzdHJhcCBkb21FbGVtZW50LCBbICdmYXN0Y2FzdCcgXVxuICBcbmlmIGlzX2FwcFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdkZXZpY2VyZWFkeScsIGJvb3RfYW5ndWxhciwgZmFsc2VcbmVsc2VcbiAgJCAtPiBib290X2FuZ3VsYXIoKVxuIiwiPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHJzcyB4bWxuczphdG9tPVwiaHR0cDovL3d3dy53My5vcmcvMjAwNS9BdG9tXCIgeG1sbnM6aXR1bmVzPVwiaHR0cDovL3d3dy5pdHVuZXMuY29tL2R0ZHMvcG9kY2FzdC0xLjAuZHRkXCIgdmVyc2lvbj1cIjIuMFwiPlxuICA8Y2hhbm5lbD5cbiAgICA8YXRvbTpsaW5rIGhyZWY9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvdGdpL2ZlZWQucnNzXCIgcmVsPVwic2VsZlwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIvPlxuICAgIDx0aXRsZT5UaGF0J3MgYSBHb29kIElkZWE8L3RpdGxlPlxuICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy90Z2kvaW5kZXguaHRtbDwvbGluaz5cbiAgICA8cHViRGF0ZT5Nb24sIDEyIE9jdCAyMDE1IDEwOjM3OjAwIC0wNzAwPC9wdWJEYXRlPlxuICAgIDxsYXN0QnVpbGREYXRlPnt7ZGF0ZXRpbWV9fTwvbGFzdEJ1aWxkRGF0ZT5cbiAgICA8dHRsPjYwPC90dGw+XG4gICAgPGxhbmd1YWdlPmVuPC9sYW5ndWFnZT5cbiAgICA8Y29weXJpZ2h0PkFsbCByaWdodHMgcmVzZXJ2ZWQ8L2NvcHlyaWdodD5cbiAgICA8d2ViTWFzdGVyPmJlbkBiZW5hbGxmcmVlLmNvbSAoQmVuIEFsbGZyZWUpPC93ZWJNYXN0ZXI+XG4gICAgPGRlc2NyaXB0aW9uPkpvaW4gdGVjaCBlbnRyZXByZW5ldXIgYW5kIGV4cGVydCBwcm9ncmFtbWVyIEJlbiBBbGxmcmVlIG9uIFRoYXQncyBhIEdvb2QgSWRlYSAoVEdJKSBmb3IgYSBkYWlseSBkb3NlIG9mIG5ldyBidXNpbmVzcyBpZGVhcyBhbmQgc3RhcnR1cCB0aGlua2luZy48L2Rlc2NyaXB0aW9uPlxuICAgIDxpdHVuZXM6bmV3LWZlZWQtdXJsPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy90Z2kvZmVlZC5yc3M8L2l0dW5lczpuZXctZmVlZC11cmw+XG4gICAgPGl0dW5lczpzdWJ0aXRsZT5Hb29kIGlkZWFzIHNlcnZlZCBkYWlseTwvaXR1bmVzOnN1YnRpdGxlPlxuICAgIDxpdHVuZXM6b3duZXI+XG4gICAgICA8aXR1bmVzOm5hbWU+QmVuIEFsbGZyZWU8L2l0dW5lczpuYW1lPlxuICAgICAgPGl0dW5lczplbWFpbD5iZW5AYmVuYWxsZnJlZS5jb208L2l0dW5lczplbWFpbD5cbiAgICA8L2l0dW5lczpvd25lcj5cbiAgICA8aXR1bmVzOmF1dGhvcj5CZW4gQWxsZnJlZTwvaXR1bmVzOmF1dGhvcj5cbiAgICA8aXR1bmVzOmV4cGxpY2l0PnllczwvaXR1bmVzOmV4cGxpY2l0PlxuICAgIDxpdHVuZXM6aW1hZ2UgaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy90Z2kvbG9nby5qcGdcIi8+XG4gICAgPGltYWdlPlxuICAgICAgPHVybD5odHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvdGdpL2xvZ28uanBnPC91cmw+XG4gICAgICA8dGl0bGU+VGhhdCdzIGEgR29vZCBJZGVhPC90aXRsZT5cbiAgICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy90Z2kvaW5kZXguaHRtbDwvbGluaz5cbiAgICA8L2ltYWdlPlxuICAgIDxpdHVuZXM6Y2F0ZWdvcnkgdGV4dD1cIkVkdWNhdGlvblwiLz4gICAgXG5cdFx0e3sjZWFjaCBlcGlzb2Rlc319XG5cdFx0XHR7eyNpZiB0aGlzLnB1Ymxpc2hlZF9hdCB9fVxuXHRcdCAgICA8aXRlbT5cblx0XHQgICAgICA8Z3VpZCBpc1Blcm1hTGluaz1cImZhbHNlXCI+e3t0aGlzLmd1aWR9fTwvZ3VpZD5cblx0XHQgICAgICA8dGl0bGU+e3tzcHJpbnRmIFwiJTAzZFwiIHRoaXMubnVtYmVyfX0gLSB7e3RoaXMudGl0bGV9fTwvdGl0bGU+XG5cdFx0ICAgICAgPHB1YkRhdGU+e3tkYXRldGltZSB0aGlzLnB1Ymxpc2hlZF9hdH19PC9wdWJEYXRlPlxuXHRcdCAgICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy90Z2kvZXBpc29kZXMve3t0aGlzLnNsdWd9fTwvbGluaz5cblx0XHQgICAgICA8aXR1bmVzOmR1cmF0aW9uPnt7aGhtbXNzIHRoaXMuZHVyYXRpb25fbXN9fTwvaXR1bmVzOmR1cmF0aW9uPlxuXHRcdCAgICAgIDxpdHVuZXM6YXV0aG9yPkJlbiBBbGxmcmVlPC9pdHVuZXM6YXV0aG9yPlxuXHRcdCAgICAgIDxpdHVuZXM6ZXhwbGljaXQ+eWVzPC9pdHVuZXM6ZXhwbGljaXQ+XG5cdFx0ICAgICAgPGl0dW5lczpzdW1tYXJ5Pnt7dGhpcy5kZXNjcmlwdGlvbn19PC9pdHVuZXM6c3VtbWFyeT5cblx0XHQgICAgICA8aXR1bmVzOnN1YnRpdGxlPnt7dGhpcy5kZXNjcmlwdGlvbn19PC9pdHVuZXM6c3VidGl0bGU+XG5cdFx0ICAgICAgPGRlc2NyaXB0aW9uPnt7dGhpcy5kZXNjcmlwdGlvbn19PC9kZXNjcmlwdGlvbj5cblx0XHQgICAgICA8ZW5jbG9zdXJlIHR5cGU9XCJhdWRpby9tcDRcIiB1cmw9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvdGdpL2VwaXNvZGVzL3t7dGhpcy5zbHVnfX0ve3t0aGlzLnNsdWd9fS5tNGFcIiBsZW5ndGg9XCJ7e3RoaXMubGVuZ3RoX2J5dGVzfX1cIi8+XG5cdFx0ICAgICAgPGl0dW5lczppbWFnZSBocmVmPVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzL3RnaS9sb2dvLmpwZ1wiLz5cblx0XHQgICAgPC9pdGVtPlxuXHRcdFx0e3svaWZ9fVxuXHRcdHt7L2VhY2h9fVxuICA8L2NoYW5uZWw+XG48L3Jzcz4iLCJ3aW5kb3cuY2F0ZWdvcmllcyA9XG4gIFwiQXJ0c1wiOltcbiAgICBcIkRlc2lnblwiXG4gICAgXCJGYXNoaW9uICYgQmVhdXR5XCJcbiAgICBcIkZvb2RcIlxuICAgIFwiTGl0ZXJhdHVyZVwiXG4gICAgXCJQZXJmb3JtaW5nIEFydHNcIlxuICAgIFwiVmlzdWFsIEFydHNcIl1cbiAgXCJCdXNpbmVzc1wiOltcbiAgICBcIkJ1c2luZXNzIE5ld3NcIlxuICAgIFwiQ2FyZWVyc1wiXG4gICAgXCJJbnZlc3RpbmdcIlxuICAgIFwiTWFuYWdlbWVudCAmIE1hcmtldGluZ1wiXG4gICAgXCJTaG9wcGluZ1wiXVxuICBcIkNvbWVkeVwiOltdXG4gIFwiRWR1Y2F0aW9uXCI6W1xuICAgIFwiRWR1Y2F0aW9uYWwgVGVjaG5vbG9neVwiXG4gICAgXCJIaWdoZXIgRWR1Y2F0aW9uXCJcbiAgICBcIkstMTJcIlxuICAgIFwiTGFuZ3VhZ2UgQ291cnNlc1wiXG4gICAgXCJUcmFpbmluZ1wiXVxuICBcIkdhbWVzICYgSG9iYmllc1wiOltcbiAgICBcIkF1dG9tb3RpdmVcIlxuICAgIFwiQXZpYXRpb25cIlxuICAgIFwiSG9iYmllc1wiXG4gICAgXCJPdGhlciBHYW1lc1wiXG4gICAgXCJWaWRlbyBHYW1lc1wiXVxuICBcIkdvdmVybm1lbnQgJiBPcmdhbml6YXRpb25zXCI6W1xuICAgIFwiTG9jYWxcIlxuICAgIFwiTmF0aW9uYWxcIlxuICAgIFwiTm9uLVByb2ZpdFwiXG4gICAgXCJSZWdpb25hbFwiXVxuICBcIkhlYWx0aFwiOltcbiAgICBcIkFsdGVybmF0aXZlIEhlYWx0aFwiXG4gICAgXCJGaXRuZXNzICYgTnV0cml0aW9uXCJcbiAgICBcIlNlbGYtSGVscFwiXG4gICAgXCJTZXh1YWxpdHlcIl1cbiAgXCJLaWRzICYgRmFtaWx5XCI6W11cbiAgXCJNdXNpY1wiOltdXG4gIFwiTmV3cyAmIFBvbGl0aWNzXCI6W11cbiAgXCJSZWxpZ2lvbiAmIFNwaXJpdHVhbGl0eVwiOltcbiAgICBcIkJ1ZGRoaXNtXCJcbiAgICBcIkNocmlzdGlhbml0eVwiXG4gICAgXCJIaW5kdWlzbVwiXG4gICAgXCJJc2xhbVwiXG4gICAgXCJKdWRhaXNtXCJcbiAgICBcIk90aGVyXCJcbiAgICBcIlNwaXJpdHVhbGl0eVwiXVxuICBcIlNjaWVuY2UgJiBNZWRpY2luZVwiOltcbiAgICBcIk1lZGljaW5lXCJcbiAgICBcIk5hdHVyYWwgU2NpZW5jZXNcIlxuICAgIFwiU29jaWFsIFNjaWVuY2VzXCJdXG4gIFwiU29jaWV0eSAmIEN1bHR1cmVcIjpbXG4gICAgXCJIaXN0b3J5XCJcbiAgICBcIlBlcnNvbmFsIEpvdXJuYWxzXCJcbiAgICBcIlBoaWxvc29waHlcIlxuICAgIFwiUGxhY2VzICYgVHJhdmVsXCJdXG4gIFwiU3BvcnRzICYgUmVjcmVhdGlvblwiOltcbiAgICBcIkFtYXRldXJcIlxuICAgIFwiQ29sbGVnZSAmIEhpZ2ggU2Nob29sXCJcbiAgICBcIk91dGRvb3JcIlxuICAgIFwiUHJvZmVzc2lvbmFsXCJdXG4gIFwiVGVjaG5vbG9neVwiOltcbiAgICBcIkdhZGdldHNcIlxuICAgIFwiVGVjaCBOZXdzXCJcbiAgICBcIlBvZGNhc3RpbmdcIlxuICAgIFwiU29mdHdhcmUgSG93LVRvXCJdXG4gIFwiVFYgJiBGaWxtXCI6W11cbiAgICAiLCJ3aW5kb3cuc3RhdGljX2VwaXNvZGVzID0gXG4gICdmYy10Z2ktMTQ0NDY3MTQyMDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ0NjcxNDIwMDAwJ1xuICAgIHNsdWc6ICcwMDEtYXNzYXNzaW5zJ1xuICAgIHRpdGxlOiAnQXNzYXNzaW5zJ1xuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGFnZS1vbGQgZ2FtZSBvZiBBc3Nhc3NpbnMsIHJlLWltYWdpbmVkIGFzIGEgZ2VvIGFwcC4nXG4gICAgbnVtYmVyOiAxXG4gICAgcHVibGlzaGVkX2F0OiAxNDQ0NjcxNDIwMDAwXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDQ2NzE0MjAwMDBcbiAgICBkdXJhdGlvbl9tczogNSAqIDYwICogMTAwMCArIDUgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiA0MDI5NTYyXG4gICdmYy10Z2ktMTQ0NTAwMTI0MDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1MDAxMjQwMDAwJ1xuICAgIHNsdWc6ICcwMDItc29jaWFsLWNhci12YWx1ZXMnXG4gICAgdGl0bGU6ICdTb2NpYWwgQ2FyIFZhbHVlcydcbiAgICBkZXNjcmlwdGlvbjogJ05lZWQgdG8ga25vdyB3aGF0IHlvdXIgY2FyIGlzIHJlYWxseSB3b3J0aD8gVGhpcyBpZGVhIG1pZ2h0IGp1c3QgZG8gaXQuJ1xuICAgIG51bWJlcjogMlxuICAgIHB1Ymxpc2hlZF9hdDogMTQ0NTAwMTI0MDAwMFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1MDAxMjQwMDAwXG4gICAgZHVyYXRpb25fbXM6ICgyMiAqIDYwICsgMzQpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMzI1MDU2ODhcbiAgJ2ZjLXRnaS0xNDQ1Mjg4NTgwMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDUyODg1ODAwMDAnXG4gICAgc2x1ZzogJzAwMy1jcm93ZC1mdW5kZWQtYXBwcydcbiAgICB0aXRsZTogJ0Nyb3dkIEZ1bmRlZCBBcHBzJ1xuICAgIGRlc2NyaXB0aW9uOiAnQSBtYXJrZXRwbGFjZSB0byBmaW5kIHRhbGVudCB0byBoZWxwIHlvdSBidWlsZCB5b3VyIG5ldyBhcHAtYmFzZWQgc3RhcnR1cC4nXG4gICAgbnVtYmVyOiAzXG4gICAgcHVibGlzaGVkX2F0OiAxNDQ1Mjg4NTgwMDAwXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDUyODg1ODAwMDBcbiAgICBkdXJhdGlvbl9tczogKDMyICogNjAgKyA1MSkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiA1NTM0Mjk2MVxuICAnZmMtdGdpLTE0NDUzNzY2MDAwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTM3NjYwMDAwMCdcbiAgICBzbHVnOiAnMDA0LXRydXN0bHknXG4gICAgdGl0bGU6ICdUcnVzdGx5J1xuICAgIGRlc2NyaXB0aW9uOiAnQW4gaWRlbnRpdHkgdmVyaWZpY2F0aW9uIHNlcnZpY2UgdG8gY2hhbmdlIHRoZSB3b3JsZC4nXG4gICAgbnVtYmVyOiA0XG4gICAgcHVibGlzaGVkX2F0OiAxNDQ1Mzc2NjAwMDAwXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDUzNzY2MDAwMDBcbiAgICBkdXJhdGlvbl9tczogKDc5ICogNjAgKyA1NykgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAxMTQ2MTk2ODBcbiAgJ2ZjLXRnaS0xNDQ1NDQ2NDQwMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDY0NDAwMDAnXG4gICAgc2x1ZzogJzAwNS1waWNrLWNvb2wnXG4gICAgdGl0bGU6ICdQaWNrLkNvb2wnXG4gICAgZGVzY3JpcHRpb246ICdBIHNvY2lhbCB2b3RpbmcgcGxhdGZvcm0gd2l0aCBjb21tdW5pdHkgYXMgaXRzIGZvY3VzLidcbiAgICBudW1iZXI6IDVcbiAgICBwdWJsaXNoZWRfYXQ6IDE0NDU0NDY0NDAwMDBcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0NjQ0MDAwMFxuICAgIGR1cmF0aW9uX21zOiAoNTkgKiA2MCArIDM2KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDEwNDU1NDk5NVxuICAnZmMtdGdpLTE0NDU1MTMwNDAwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTUxMzA0MDAwMCdcbiAgICBzbHVnOiAnMDA2LXR1cm5rZXktbmljaGUtc2l0ZXMnXG4gICAgdGl0bGU6ICdUdXJua2V5IE5pY2hlIFNpdGVzJ1xuICAgIGRlc2NyaXB0aW9uOiAnR3JhYiBvbiB0byB0aGF0IGxvbmcgdGFpbCBieSBiZWNvbWluZyBhIG5pY2hlIHNpdGUgaG9zdC4nXG4gICAgbnVtYmVyOiA2XG4gICAgcHVibGlzaGVkX2F0OiAxNDQ1NTEzMDQwMDAwXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU1MTMwNDAwMDBcbiAgICBkdXJhdGlvbl9tczogKDU0ICogNjAgKyA1NSkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAyNjY1MjEzMFxuICAnZmMtdGdpLTE0NDU0NDg2MjgwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODYyODAwMCdcbiAgICBzbHVnOiAnMDA3LWZhc3RjYXN0J1xuICAgIHRpdGxlOiAnRmFzdENhc3QnXG4gICAgZGVzY3JpcHRpb246ICdUaGUgb25lIGNsaWNrIHplcm8gdG8gaGVybyBwb2RjYXN0aW5nIHBsYXRmb3JtLidcbiAgICBudW1iZXI6IDdcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODYyODAwMFxuICAgIGR1cmF0aW9uX21zOiAoNjkgKiA2MCArIDI4KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDMzNzA4NDgwXG4gICdmYy10Z2ktMTQ0NTQ0ODYzNTAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjM1MDAwJ1xuICAgIHNsdWc6ICcwMDctcGFydC0yLXNvY2lhbC1yZWxldmFuY2UtZW5naW5lJ1xuICAgIHRpdGxlOiAnUGFydCAyOiBTb2NpYWwgUmVsZXZhbmNlIEVuZ2luZSdcbiAgICBkZXNjcmlwdGlvbjogJ0Egd2F5IHRvIHRyYWNrIGhvdyB5b3VyIGNvbnRlbnQgaXMgcGVyZm9ybWluZyBvbiBzb2NpYWwgc2l0ZXMuJ1xuICAgIG51bWJlcjogN1xuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjM1MDAwXG4gICAgZHVyYXRpb25fbXM6ICg0NCAqIDYwICsgMykgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAyMTM3ODM1MFxuICAnZmMtdGdpLTE0NDU0NDg2MzcwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODYzNzAwMCdcbiAgICBzbHVnOiAnMDA4LXBvZGNhc3QtbmV0d29yaydcbiAgICB0aXRsZTogJ1BvZGNhc3QgTmV0d29yaydcbiAgICBkZXNjcmlwdGlvbjogJ0EgcG9kY2FzdGluZyBuZXR3b3JrIHRoYXQgaGVscHMgeW91IGJ1aWxkIGFuIGF1ZGllbmNlLidcbiAgICBudW1iZXI6IDhcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODYzNzAwMFxuICAgIGR1cmF0aW9uX21zOiAoNDggKiA2MCArIDQpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMjM0NTM0MDVcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjM5MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2MzkwMDAnXG4gICAgc2x1ZzogJzAwOS1hZmZpbGlhdGUtc2l0ZXMnXG4gICAgdGl0bGU6ICdBZmZpbGlhdGUgU2l0ZXMnXG4gICAgZGVzY3JpcHRpb246ICdIb3cgdG8gYnVpbGQgYSBidXNpbmVzcyBqdXN0IGJ5IGhlbHBpbmcgcmV0YWlsZXJzIG1hcmtldCB0aGVpciBnb29kcy4nXG4gICAgbnVtYmVyOiA5XG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDg2MzkwMDBcbiAgICBkdXJhdGlvbl9tczogKDU2ICogNjAgKyA1OSkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAyNzgwMzQ5OFxuICAnZmMtdGdpLTE0NDU0NDg2NDEwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODY0MTAwMCdcbiAgICBzbHVnOiAnMDEwLWp1bmdsZWZpcmUnXG4gICAgdGl0bGU6ICdKdW5nbGVGaXJlJ1xuICAgIGRlc2NyaXB0aW9uOiAnQSBidXNpbmVzcyBzdXBwbHlpbmcgcGx1bWJpbmcgZm9yIG90aGVyIGJ1c2luZXNzZXMuJ1xuICAgIG51bWJlcjogMTBcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY0MTAwMFxuICAgIGR1cmF0aW9uX21zOiAoNjggKiA2MCArIDMyKSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDMzNjA5NDA5XG4gICdmYy10Z2ktMTQ0NTQ0ODY0NjAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjQ2MDAwJ1xuICAgIHNsdWc6ICcwMTEtaWxvb2tnb29kJ1xuICAgIHRpdGxlOiAnaUxvb2tHb29kJ1xuICAgIGRlc2NyaXB0aW9uOiAnQSBmYXNoaW9uIHNoYXJpbmcgYW5kIGFkdmljZSBtYXJrZXRwbGFjZS4nXG4gICAgbnVtYmVyOiAxMVxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjQ2MDAwXG4gICAgZHVyYXRpb25fbXM6ICg5NCAqIDYwICsgMTApICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogNDU2OTMyMjVcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjQ5MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2NDkwMDAnXG4gICAgc2x1ZzogJzAxMi1saWZlYm9vaydcbiAgICB0aXRsZTogJ0xpZmVCb29rJ1xuICAgIGRlc2NyaXB0aW9uOiAnQW4gYXBwIHRvIGhlbHAgZm9zdGVyIGtpZHMgY2FwdHVyZSB0aGVpciB5b3V0aC4nXG4gICAgbnVtYmVyOiAxMlxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjQ5MDAwXG4gICAgZHVyYXRpb25fbXM6ICg4NyAqIDYwICsgMzYpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogNDI1MTA2ODdcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjUyMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2NTIwMDAnXG4gICAgc2x1ZzogJzAxMy10aW1lLWJvbWInXG4gICAgdGl0bGU6ICdUaW1lIEJvbWInXG4gICAgZGVzY3JpcHRpb246ICdBIG11bHRpcGxheWVyIGFsaWVuIHB1enpsZSBnYW1lIHRoYXQga2lsbHMuJ1xuICAgIG51bWJlcjogMTNcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY1MjAwMFxuICAgIGR1cmF0aW9uX21zOiAoMzQgKiA2MCArIDI3KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDE2NzE5MTczXG4gICdmYy10Z2ktMTQ0NTQ0ODY1NDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjU0MDAwJ1xuICAgIHNsdWc6ICcwMTQta2l0Y2hlbi1pbmdyZWRpZW50LXRyYWNrZXInXG4gICAgdGl0bGU6ICdLaXRjaGVuIEluZ3JlZGllbnQgVHJhY2tlcidcbiAgICBkZXNjcmlwdGlvbjogJ0FuIGFwcCB0aGF0IGtlZXBzIHlvdXIgY3VwYm9hcmRzIGZ1bGw/IFllcyBwbGVhc2UuJ1xuICAgIG51bWJlcjogMTRcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY1NDAwMFxuICAgIGR1cmF0aW9uX21zOiAoNzggKiA2MCArIDkpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMzg4OTA2NjZcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjU4MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2NTgwMDAnXG4gICAgc2x1ZzogJzAxNS1lcGsnXG4gICAgdGl0bGU6ICdFUEsnXG4gICAgZGVzY3JpcHRpb246ICdBbiBhcHAgZm9yIHRvdXJpbmcgbXVzaWNpYW5zIGFuZCB0aGUgdmVudWVzIHdobyBsb3ZlIHRoZW0uJ1xuICAgIG51bWJlcjogMTVcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY1ODAwMFxuICAgIGR1cmF0aW9uX21zOiAoNjkgKiA2MCArIDIwKSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDM0MDAzNzA3XG4gICdmYy10Z2ktMTQ0NTQ0ODY4MDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjgwMDAwJ1xuICAgIHNsdWc6ICcwMTYtY2F0Y2hlcidcbiAgICB0aXRsZTogJ0NhdGNoZXInXG4gICAgZGVzY3JpcHRpb246ICdBIFBva8OpbW9uIG1hcmtldHBsYWNlLidcbiAgICBudW1iZXI6IDE2XG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDg2ODAwMDBcbiAgICBkdXJhdGlvbl9tczogKDQ4ICogNjAgKyAxNykgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAyMzU2MjY3NlxuICAnZmMtdGdpLTE0NDU0NDg2ODIwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODY4MjAwMCdcbiAgICBzbHVnOiAnMDE3LWZhbmJyYWluJ1xuICAgIHRpdGxlOiAnRmFuQnJhaW4nXG4gICAgZGVzY3JpcHRpb246ICdTcG9ydHMgbWVudG9yaW5nIGZvciB0aGUgbWFzc2VzLidcbiAgICBudW1iZXI6IDE3XG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDg2ODIwMDBcbiAgICBkdXJhdGlvbl9tczogKDczICogNjAgKyAwKSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDM1Nzk3OTI4XG4gICdmYy10Z2ktMTQ0NTQ0ODY4ODAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4Njg4MDAwJ1xuICAgIHNsdWc6ICcwMTgtcXVpY2tkcmF3J1xuICAgIHRpdGxlOiAnUXVpY2tEcmF3J1xuICAgIGRlc2NyaXB0aW9uOiAnQmUgdGhlIGZhc3Rlc3QgZHJhdyBpbiB0aGUgd29ybGQuLi5vciBkaWUuJ1xuICAgIG51bWJlcjogMThcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY4ODAwMFxuICAgIGR1cmF0aW9uX21zOiAoNTIgKiA2MCArIDE1KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDI1NDk1NDcwXG4gICdmYy10Z2ktMTQ0NTQ0NTk5MDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ1OTkwMDAwJ1xuICAgIHNsdWc6ICcwMTktc2NhcGVzZWFyY2gnXG4gICAgdGl0bGU6ICdTY2FwZVNlYXJjaCdcbiAgICBkZXNjcmlwdGlvbjogJ0hhdmluZyB0cm91YmxlIGZpbmRpbmcgYSBsYW5kc2NhcGVyPyBNZSBuZWl0aGVyLidcbiAgICBudW1iZXI6IDE5XG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDU5OTAwMDBcbiAgICBkdXJhdGlvbl9tczogKDM3ICogNjAgKyAzOCkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiA3MjA2MjExXG4gICdmYy10Z2ktMTQ0NTUyNzgzNDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NTI3ODM0MDAwJ1xuICAgIHNsdWc6ICcwMjAtZmFzdGNhc3QtdXBkYXRlJ1xuICAgIHRpdGxlOiAnRmFzdENhc3QgVXBkYXRlJ1xuICAgIGRlc2NyaXB0aW9uOiBcIlRvZGF5J3MgRmFzdENhc3QgdXBkYXRlLlwiXG4gICAgbnVtYmVyOiAyMFxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NTI3ODM0MDAwXG4gICAgZHVyYXRpb25fbXM6ICgyMSAqIDYwICsgMzYpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogNDA2NzU5MFxuICAnZmMtdGdpLTE0NDU1NTQwNTgwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTU1NDA1ODAwMCdcbiAgICBzbHVnOiAnMDIxLXF1aWNrYXV0aG9yaXR5J1xuICAgIHRpdGxlOiAnUXVpY2tBdXRob3JpdHknXG4gICAgZGVzY3JpcHRpb246IFwiVHVybmtleSBhdXRob3JpdHkgc2l0ZXMuXCJcbiAgICBudW1iZXI6IDIxXG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU1NTQwNTgwMDBcbiAgICBkdXJhdGlvbl9tczogKDI0ICogNjAgKyA1KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDQ4MTgxOTYiLCJTdHJpbmc6OnNsdWdpZnkgPSAtPlxuICBAdG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJykucmVwbGFjZSgvW15cXHdcXC1dKy9nLCAnJykucmVwbGFjZSgvXFwtXFwtKy9nLCAnLScpLnJlcGxhY2UoL14tKy8sICcnKS5yZXBsYWNlIC8tKyQvLCAnJ1xuICAjIFRyaW0gLSBmcm9tIGVuZCBvZiB0ZXh0XG5cbk51bWJlcjo6dG9ISE1NU1MgPSAtPlxuICBzaG93X21zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgYW5kIGFyZ3VtZW50c1swXVxuICBtc19udW0gPSBNYXRoLmZsb29yKHRoaXMpXG4gIGhvdXJzID0gTWF0aC5mbG9vcihtc19udW0gLyAzNjAwMDAwKVxuICBtaW51dGVzID0gTWF0aC5mbG9vcigobXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkpIC8gNjAwMDApXG4gIHNlY29uZHMgPSBNYXRoLmZsb29yKChtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSAtIChtaW51dGVzICogNjAwMDApKSAvIDEwMDApXG4gIG1zID0gbXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkgLSAobWludXRlcyAqIDYwMDAwKSAtIChzZWNvbmRzICogMTAwMClcbiAgdGltZSA9IHNwcmludGYoJyUwMmQ6JTAyZDolMDJkJywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpXG4gIGlmIHNob3dfbXNcbiAgICB0aW1lICs9IHNwcmludGYoJy4lMDNkJywgbXMpXG4gIHRpbWVcblxuTnVtYmVyOjpodW1hbml6ZSA9IC0+XG4gIG1zX251bSA9IE1hdGguZmxvb3IodGhpcylcbiAgaG91cnMgPSBNYXRoLmZsb29yKG1zX251bSAvIDM2MDAwMDApXG4gIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSkgLyA2MDAwMClcbiAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG1zX251bSAtIChob3VycyAqIDM2MDAwMDApIC0gKG1pbnV0ZXMgKiA2MDAwMCkpIC8gMTAwMClcbiAgbXMgPSBtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSAtIChtaW51dGVzICogNjAwMDApIC0gKHNlY29uZHMgKiAxMDAwKVxuICB0aW1lID0gJydcbiAgaWYgaG91cnNcbiAgICB0aW1lID0gc3ByaW50ZignJWRoJywgaG91cnMpXG4gIGlmIG1pbnV0ZXNcbiAgICB0aW1lICs9IHNwcmludGYoJyVkbScsIG1pbnV0ZXMpXG4gIHRpbWUgKz0gc3ByaW50ZignJWRzJywgTWF0aC5jZWlsKHNlY29uZHMgKyBtcyAvIDEwMDAuMCkpXG4gIHRpbWVcblxuU3RyaW5nOjpzcHJpbnRmID0gLT5cbiAgc3ByaW50Zi5hcHBseSB0aGlzLCB0aGlzLCBhcmd1bWVudHNcblxuSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlciAnZGF0ZXRpbWUnLCAoZGF0ZSkgLT5cbiAgZGF0ZSA9IGlmICFkYXRlIG9yIGRhdGUubmFtZSA9PSAnZGF0ZXRpbWUnIHRoZW4gbW9tZW50KCkgZWxzZSBkYXRlXG4gIG1vbWVudChkYXRlKS5mb3JtYXQgJ2RkZCwgREQgTU1NIFlZWVkgSEg6bW06c3MgWlonXG5IYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyICdoaG1tc3MnLCAoZHVyYXRpb24pIC0+XG4gIGR1cmF0aW9uID0gTWF0aC5tYXgoMTAwMCwgZHVyYXRpb24pXG4gIGR1cmF0aW9uLnRvSEhNTVNTIGZhbHNlXG5IYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyICdzcHJpbnRmJywgLT5cbiAgc3ByaW50Zi5hcHBseSB0aGlzLCBhcmd1bWVudHNcbiAgXG53aW5kb3cub3JkZXJCeU1hZ2ljID0gKGhhc2gpIC0+XG4gIGFycmF5ID0gW11cbiAgT2JqZWN0LmtleXMoaGFzaCkuZm9yRWFjaCAoa2V5KSAtPlxuICAgIGFycmF5LnB1c2ggaGFzaFtrZXldXG4gICAgcmV0dXJuXG4gICMgYXBwbHkgYSBjdXN0b20gc29ydGluZyBmdW5jdGlvblxuICBhcnJheS5zb3J0IChhLCBiKSAtPlxuICAgIGlmIGEucHVibGlzaGVkX2F0IGFuZCAhYi5wdWJsaXNoZWRfYXRcbiAgICAgIHJldHVybiAxXG4gICAgaWYgIWEucHVibGlzaGVkX2F0IGFuZCBiLnB1Ymxpc2hlZF9hdFxuICAgICAgcmV0dXJuIC0xXG4gICAgIyBFaXRoZXIgYm90aCBhcmUgcHVibGlzaGVkIG9yIG5laXRoZXIgaXMgcHVibGlzaGVkXG4gICAgaWYgYS5wdWJsaXNoZWRfYXQgYW5kIGIucHVibGlzaGVkX2F0XG4gICAgICByZXR1cm4gaWYgYS5wdWJsaXNoZWRfYXQgPiBiLnB1Ymxpc2hlZF9hdCB0aGVuIC0xIGVsc2UgMVxuICAgIGlmIGEucmVjb3JkZWRfYXQgPiBiLnJlY29yZGVkX2F0IHRoZW4gLTEgZWxzZSAxXG4gIGFycmF5XG4gICIsImNsYXNzIFJlY29yZGVyXG4gIGNvbnN0cnVjdG9yOiAoQGZuYW1lLCBvcHRpb25zKS0+XG4gICAgZGVmYXVsdF9vcHRpb25zID1cbiAgICAgIG9uU2NydWJVcGRhdGU6IChtcyktPlxuICAgICAgb25EdXJhdGlvblVwZGF0ZTogKG1zKS0+XG4gICAgICBvblJlY29yZFN0YXJ0OiAtPlxuICAgICAgb25SZWNvcmRTdG9wOiAtPlxuICAgICAgb25BdWRpb0Vycm9yOiAtPlxuICAgICAgb25QbGF5U3RhcnQ6IC0+XG4gICAgICBvblBsYXlTdG9wOiAtPlxuICAgICAgb25FdmVudDogKG5hbWUsYXJncy4uLiktPlxuICAgICAgZGVidWc6IGZhbHNlXG4gICAgQG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZChkZWZhdWx0X29wdGlvbnMsIG9wdGlvbnMpXG4gICAgQHNjcnViX3BvaW50X21zID0gMFxuICAgIEBzdG9wKClcbiAgICBAZ2V0X2R1cmF0aW9uKClcbiAgICBcbiAgbG9nOiAoYXJncy4uLik9PlxuICAgIHJldHVybiB1bmxlc3MgQG9wdGlvbnMuZGVidWdcbiAgICBjb25zb2xlLmxvZy5hcHBseShALCBhcmdzKVxuXG4gIGV2ZW50OiAobmFtZSxhcmdzLi4uKSA9PlxuICAgIEBsb2coXCJldmVudFwiLCBuYW1lLCBhcmdzKVxuICAgIEBvcHRpb25zW25hbWVdLmFwcGx5KEAsYXJncylcbiAgICBAb3B0aW9ucy5vbkV2ZW50KG5hbWUsIGFyZ3MpXG5cbiAgbmV3X21lZGlhOiAocmVhZHlfY2IsIHN0YXR1c19jYiwgZXJyb3JfY2IpID0+XG4gICAgc3RhdHVzID0ge31cbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfTk9ORV0gPSAnTm9uZSdcbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfU1RBUlRJTkddID0gJ1N0YXJ0aW5nJ1xuICAgIHN0YXR1c1tNZWRpYS5NRURJQV9SVU5OSU5HXSA9ICdSdW5uaW5nJ1xuICAgIHN0YXR1c1tNZWRpYS5NRURJQV9QQVVTRURdID0gJ1BhdXNlZCdcbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfU1RPUFBFRF0gPSAnU3RvcHBlZCdcbiAgICBcbiAgICBtZWRpYSA9IG5ldyBNZWRpYShcbiAgICAgIEBmbmFtZSwgXG4gICAgICAoKCk9PlxuICAgICAgICBAbG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCBhY3Rpb24gXCIsIEBmbmFtZSlcbiAgICAgICksIFxuICAgICAgKChlcnIpID0+XG4gICAgICAgIEBsb2cgJ0F1ZGlvIEVycm9yOiAnICsgZXJyLmNvZGVcbiAgICAgICAgQGxvZyBlcnJcbiAgICAgICAgZXJyb3JfY2IobWVkaWEsZXJyKVxuICAgICAgKSwgXG4gICAgICAoKHN0YXQpPT5cbiAgICAgICAgQGxvZyhcIk1lZGlhIHN0YXR1c1wiLCBzdGF0LCBzdGF0dXNbc3RhdF0pXG4gICAgICAgIHN0YXR1c19jYihtZWRpYSxzdGF0KVxuICAgICAgKVxuICAgIClcbiAgICByZWFkeV9jYihtZWRpYSlcbiAgICBtZWRpYVxuXG4gIGdldF9kdXJhdGlvbjogKGNiKSA9PlxuICAgICMgR2V0IHRoZSBmaW5hbCBkdXJhdGlvbiBzaW5jZSBpdCBkb2Vzbid0IHJlZ2lzdGVyIGR1cmluZyByZWNvcmRpbmdcbiAgICBAbmV3X21lZGlhKFxuICAgICAgKChtZWRpYSk9PiAjIHJlYWR5XG4gICAgICAgIG1lZGlhLnNldFZvbHVtZSgwKVxuICAgICAgICBtZWRpYS5wbGF5KClcbiAgICAgICksXG4gICAgICAoKG1lZGlhLHN0YXR1cykgPT4gIyBzdGF0dXNcbiAgICAgICAgaWYgc3RhdHVzPT1NZWRpYS5NRURJQV9SVU5OSU5HXG4gICAgICAgICAgbWVkaWEuc3RvcCgpXG4gICAgICAgICAgQGR1cmF0aW9uX21zID0gbWVkaWEuZ2V0RHVyYXRpb24oKSoxMDAwXG4gICAgICAgICAgQGV2ZW50KCdvbkR1cmF0aW9uVXBkYXRlJywgQGR1cmF0aW9uX21zKVxuICAgICAgICAgIGlmIGNiXG4gICAgICAgICAgICBjYihAZHVyYXRpb25fbXMpXG4gICAgICAgIGlmIHN0YXR1cz09TWVkaWEuTUVESUFfU1RPUFBFRFxuICAgICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsZXJyb3IpPT4gI2Vycm9yXG4gICAgICApXG4gICAgKVxuICAgICAgICAgXG4gIHJlY29yZDogPT5cbiAgICBAbmV3X21lZGlhKFxuICAgICAgKChtZWRpYSk9PiAjIHJlYWR5XG4gICAgICAgIG1lZGlhLnN0YXJ0UmVjb3JkKClcbiAgICAgICksXG4gICAgICAoKG1lZGlhLHN0YXR1cyk9PiAjIHN0YXR1c1xuICAgICAgICBpZiBzdGF0dXMgPT0gTWVkaWEuTUVESUFfUlVOTklOR1xuICAgICAgICAgIEBsb2coJ3JlY29yZGluZycpXG4gICAgICAgICAgQGlzX3JlY29yZGluZyA9IHRydWVcbiAgICAgICAgICBAZHVyYXRpb25fbXMgPSAwXG4gICAgICAgICAgc3RhcnRfdGltZV9tcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgICAgdXBkYXRlX3JlY29yZCA9ID0+XG4gICAgICAgICAgICBAbG9nKCdyZWNvcmRpbmcgY2hlY2snKVxuICAgICAgICAgICAgaWYgIUBpc19yZWNvcmRpbmdcbiAgICAgICAgICAgICAgbWVkaWEuc3RvcFJlY29yZCgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgY3VycmVudF9tcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgICAgICBAZHVyYXRpb25fbXMgPSBjdXJyZW50X21zIC0gc3RhcnRfdGltZV9tc1xuICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gQGR1cmF0aW9uX21zXG4gICAgICAgICAgICBAZXZlbnQoJ29uRHVyYXRpb25VcGRhdGUnLCBAZHVyYXRpb25fbXMpXG4gICAgICAgICAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAZHVyYXRpb25fbXMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZV9yZWNvcmQsIDEwMClcbiAgICAgICAgICB1cGRhdGVfcmVjb3JkKClcbiAgICAgICAgICBAZXZlbnQoJ29uUmVjb3JkU3RhcnQnKVxuICAgICAgICAgIFxuICAgICAgICBpZiBzdGF0dXMgPT0gTWVkaWEuTUVESUFfU1RPUFBFRFxuICAgICAgICAgIEBpc19yZWNvcmRpbmcgPSBmYWxzZVxuICAgICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICAgIEBnZXRfZHVyYXRpb24oKG1zKT0+XG4gICAgICAgICAgICBAc2NydWJfcG9pbnRfbXMgPSBtc1xuICAgICAgICAgICAgQGV2ZW50KCdvblNjcnViVXBkYXRlJywgbXMpXG4gICAgICAgICAgICBAZXZlbnQoJ29uUmVjb3JkU3RvcCcpXG4gICAgICAgICAgKVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsZXJyKT0+ICNlcnJvclxuICAgICAgICBtZWRpYS5yZWxlYXNlKClcbiAgICAgICAgQGV2ZW50KCdvbkF1ZGlvRXJyb3InKVxuICAgICAgKVxuICAgIClcbiAgICBcbiAgc3RlcDogKG1zKSA9PlxuICAgIEBzZWVrKEBzY3J1Yl9wb2ludF9tcyArIG1zKVxuICAgIFxuICBzZWVrOiAobXMpID0+XG4gICAgaWYgbXM9PS0xXG4gICAgICBtcyA9IE51bWJlci5NQVhfVkFMVUVcbiAgICBAc2NydWJfcG9pbnRfbXMgPSBNYXRoLm1pbihAZHVyYXRpb25fbXMsIE1hdGgubWF4KDAsIG1zKSlcbiAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAc2NydWJfcG9pbnRfbXMpXG4gICAgaWYgQGlzX3BsYXlpbmdcbiAgICAgIEBtZWRpYS5zZWVrVG8gQHNjcnViX3BvaW50X21zXG4gICAgXG4gIHBsYXk6ID0+XG4gICAgaWYgQHNjcnViX3BvaW50X21zID49IEBkdXJhdGlvbl9tc1xuICAgICAgQHNjcnViX3BvaW50X21zID0gMFxuICAgICAgQGV2ZW50KCdvblNjcnViVXBkYXRlJywgQHNjcnViX3BvaW50X21zKVxuICAgIFxuICAgIEBtZWRpYSA9IEBuZXdfbWVkaWEoXG4gICAgICAoKG1lZGlhKT0+ICAgICMgcmVhZHlcbiAgICAgICAgbWVkaWEucGxheSgpXG4gICAgICAgIG1lZGlhLnNlZWtUbyhAc2NydWJfcG9pbnRfbXMpXG4gICAgICApLFxuICAgICAgKChtZWRpYSxzdGF0dXMpPT4gIyBTdGF0dXNcbiAgICAgICAgaWYgc3RhdHVzID09IE1lZGlhLk1FRElBX1JVTk5JTkdcbiAgICAgICAgICBAaXNfcGxheWluZyA9IHRydWVcbiAgICAgICAgICBwbGF5X3VwZGF0ZSA9ID0+XG4gICAgICAgICAgICBtZWRpYS5nZXRDdXJyZW50UG9zaXRpb24gKHBvcyk9PlxuICAgICAgICAgICAgICBpZiBwb3M9PS0xXG4gICAgICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gQGR1cmF0aW9uX21zXG4gICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gcG9zICogMTAwMFxuICAgICAgICAgICAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAc2NydWJfcG9pbnRfbXMpXG4gICAgICAgICAgICAgIGlmICFAaXNfcGxheWluZ1xuICAgICAgICAgICAgICAgIG1lZGlhLnN0b3AoKVxuICAgICAgICAgICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICAgICAgICAgIEBldmVudCgnb25QbGF5U3RvcCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQocGxheV91cGRhdGUsMTAwKVxuICAgICAgICAgIHBsYXlfdXBkYXRlKClcbiAgICAgICAgICBAZXZlbnQoJ29uUGxheVN0YXJ0JylcbiAgICAgICAgaWYgc3RhdHVzID09IE1lZGlhLk1FRElBX1NUT1BQRURcbiAgICAgICAgICBAaXNfcGxheWluZyA9IGZhbHNlXG4gICAgICApLFxuICAgICAgKChtZWRpYSxlcnIpPT4gI0Vycm9yXG4gICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICBAZXZlbnQoJ29uQXVkaW9FcnJvcicpXG4gICAgICApXG4gICAgKVxuICBcbiAgc3RvcDogPT5cbiAgICBAaXNfcGxheWluZyA9IGZhbHNlXG4gICAgQGlzX3JlY29yZGluZyA9IGZhbHNlXG5cbndpbmRvdy5SZWNvcmRlciA9IFJlY29yZGVyIiwiY2xhc3MgVXBsb2FkV29ya2VyXG4gIGNvbnN0cnVjdG9yOiAoQGl0ZW0sIG9wdGlvbnMgPSB7fSktPlxuICAgIGRlZmF1bHRfb3B0aW9ucyA9XG4gICAgICBvblN0YXJ0OiAtPlxuICAgICAgb25TdWNjZXNzOiAtPlxuICAgICAgb25GYWlsdXJlOiAoZXJyKS0+XG4gICAgICBvblByb2dyZXNzOiAocHJvZ3Jlc3MpLT5cbiAgICAgIG9uRXZlbnQ6IChuYW1lLGFyZ3MuLi4pLT5cbiAgICAgIGRlYnVnOiB0cnVlXG4gICAgQG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZChkZWZhdWx0X29wdGlvbnMsIG9wdGlvbnMpXG4gICAgQHVwbG9hZF9jb3VudCA9IDBcbiAgICBAbG9nKFwiVXBsb2FkIFdvcmtlciBzdGFydGVkXCIsIEBpdGVtKVxuICAgIHNldFRpbWVvdXQoQHN0YXJ0LCAwKSAjIEZpcmUgc3RhcnQgYXN5bmMgc28gcHJvbWlzZXMgYXJlIHByb2Nlc3NlZFxuICAgIFxuICBsb2c6IChhcmdzLi4uKT0+XG4gICAgcmV0dXJuIHVubGVzcyBAb3B0aW9ucy5kZWJ1Z1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KEAsIGFyZ3MpXG5cbiAgZXZlbnQ6IChuYW1lLGFyZ3MuLi4pID0+XG4gICAgQGxvZyhcImV2ZW50XCIsIG5hbWUsIGFyZ3MpXG4gICAgQG9wdGlvbnNbbmFtZV0uYXBwbHkoQCxhcmdzKVxuICAgIEBvcHRpb25zLm9uRXZlbnQobmFtZSwgYXJncylcbiAgICBcbiAgc3RhcnRlZDogKGNiKT0+XG4gICAgQG9wdGlvbnMub25TdGFydCA9IGNiXG4gICAgQFxuICBcbiAgcHJvZ3Jlc3M6IChjYik9PlxuICAgIEBvcHRpb25zLm9uUHJvZ3Jlc3MgPSBjYlxuICAgIEBcbiAgXG4gIGZpbmlzaGVkOiAoY2IpPT5cbiAgICBAb3B0aW9ucy5vblN1Y2Nlc3MgPSBjYlxuICAgIEBcbiAgXG4gIGZhaWxlZDogKGNiKT0+XG4gICAgQG9wdGlvbnMub25GYWlsdXJlID0gY2JcbiAgICBAXG4gICAgXG4gIHN0YXJ0OiA9PlxuICAgIEBldmVudCgnb25TdGFydCcpXG4gICAgQHByb2dyZXNzID0gMFxuICAgICRodHRwID0gYW5ndWxhci5pbmplY3RvcihbXCJuZ1wiXSkuZ2V0KFwiJGh0dHBcIilcbiAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9hcGkuZmFzdC1jYXN0Lm5ldCcsIHBhcmFtczpcbiAgICAgIHNsdWc6IEBpdGVtLnNsdWdcbiAgICAgIHR5cGU6IEBpdGVtLnR5cGVcbiAgICApLnRoZW4gKChyZXNwb25zZSkgPT5cbiAgICAgIEBpdGVtLnByb2dyZXNzID0gMTBcbiAgICAgIEBldmVudCgnb25Qcm9ncmVzcycsIEBpdGVtLnByb2dyZXNzKVxuICAgICAgdXJsID0gcmVzcG9uc2UuZGF0YVxuICAgICAgZnQgPSBuZXcgRmlsZVRyYW5zZmVyXG4gICAgICBmdC5vbnByb2dyZXNzID0gKHBlKSA9PlxuICAgICAgICBAaXRlbS5wcm9ncmVzcyA9IHBlLmxvYWRlZCAvIHBlLnRvdGFsICogOTAgKyAxMFxuICAgICAgICBAZXZlbnQoJ29uUHJvZ3Jlc3MnLCBAaXRlbS5wcm9ncmVzcylcbiAgICAgIFxuICAgICAgdXBsb2FkX29wdGlvbnMgPSBuZXcgRmlsZVVwbG9hZE9wdGlvbnNcbiAgICAgIHVwbG9hZF9vcHRpb25zLmZpbGVOYW1lID0gQGl0ZW0uc3JjXG4gICAgICB1cGxvYWRfb3B0aW9ucy5taW1lVHlwZSA9IEBpdGVtLm1pbWVcbiAgICAgIHVwbG9hZF9vcHRpb25zLmNodW5rZWRNb2RlID0gZmFsc2VcbiAgICAgIHVwbG9hZF9vcHRpb25zLmh0dHBNZXRob2QgPSAnUFVUJ1xuICAgICAgdXBsb2FkX29wdGlvbnMuaGVhZGVycyA9ICdDb250ZW50LVR5cGUnOiBAaXRlbS5taW1lXG4gICAgICBmdC51cGxvYWQoXG4gICAgICAgIEBpdGVtLnNyYywgXG4gICAgICAgIHVybCwgXG4gICAgICAgICg9PiAjIHN1Y2Nlc3NcbiAgICAgICAgICBAZXZlbnQoJ29uU3VjY2VzcycpXG4gICAgICAgICksXG4gICAgICAgICgoZXJyKT0+ICMgRXJyb3JcbiAgICAgICAgICBAZXZlbnQoJ29uRmFpbHVyZScsIGVycilcbiAgICAgICAgKSxcbiAgICAgICAgdXBsb2FkX29wdGlvbnNcbiAgICAgIClcbiAgICApLCAoZXJyKT0+ICMgRmFpbHVyZVxuICAgICAgQGV2ZW50KCdvbkZhaWx1cmUnLCBlcnIpICAgIFxuXG53aW5kb3cuVXBsb2FkV29ya2VyID0gVXBsb2FkV29ya2VyIiwiYXBwLmNvbnRyb2xsZXIgJ0FwcENvbnRyb2xsZXInLCAoXG4gICRzY29wZSwgXG4gICRodHRwLCBcbiAgJGludGVydmFsLCBcbiAgJGNvcmRvdmFGaWxlLCBcbiAgJHN0YXRlLCBcbiAgJGNvcmRvdmFGaWxlVHJhbnNmZXIsIFxuICAkcSwgXG4gICRpb25pY0hpc3RvcnksIFxuICAkaW9uaWNTaWRlTWVudURlbGVnYXRlLFxuICAkanJDcm9wLFxuICAkY29yZG92YUltYWdlUGlja2VyXG4gICkgLT5cblxuXG4gICRzY29wZS5zZWxlY3RfbG9nbyA9IChjYiktPlxuICAgIG9wdGlvbnMgPSBcbiAgICAgIG1heGltdW1JbWFnZXNDb3VudDogMVxuXG4gICAgJGNvcmRvdmFJbWFnZVBpY2tlci5nZXRQaWN0dXJlcyhvcHRpb25zKVxuICAgICAgLnRoZW4gKCAoKHJlc3VsdHMpIC0+XG4gICAgICAgICRqckNyb3AuY3JvcChcbiAgICAgICAgICB1cmw6IHJlc3VsdHNbMF1cbiAgICAgICAgICB0aXRsZTogJ01vdmUgYW5kIFNjYWxlJ1xuICAgICAgICAgIHdpZHRoOiAzMDBcbiAgICAgICAgICBoZWlnaHQ6IDMwMFxuICAgICAgICApLnRoZW4oIChjYW52YXMpLT5cbiAgICAgICAgICBjID0gQ2FtYW4oY2FudmFzLCAtPlxuICAgICAgICAgICAgQHJlc2l6ZVxuICAgICAgICAgICAgICB3aWR0aDogNzVcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3NVxuICAgICAgICAgICAgQHJlbmRlciA9PlxuICAgICAgICAgICAgICBkYXRhX3VybCA9IEB0b0Jhc2U2NCgnanBlZycpXG4gICAgICAgICAgICAgIGI2NCA9IGRhdGFfdXJsLnJlcGxhY2UoL15kYXRhOi4rPztiYXNlNjQsLywgXCJcIik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFfdXJsLnN1YnN0cmluZygwLDUwKSlcbiAgICAgICAgICAgICAgX2Jhc2U2NFRvQXJyYXlCdWZmZXIgPSAoYmFzZTY0KSAtPlxuICAgICAgICAgICAgICAgIGJpbmFyeV9zdHJpbmcgPSB3aW5kb3cuYXRvYihiYXNlNjQucmVwbGFjZSgvXFxzL2csICcnKSlcbiAgICAgICAgICAgICAgICBsZW4gPSBiaW5hcnlfc3RyaW5nLmxlbmd0aFxuICAgICAgICAgICAgICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKVxuICAgICAgICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgICAgICAgd2hpbGUgaSA8IGxlblxuICAgICAgICAgICAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlfc3RyaW5nLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgICAgIGJ5dGVzLmJ1ZmZlciAgICAgICAgXG4gICAgICAgICAgICAgIGRhdGEgPSBfYmFzZTY0VG9BcnJheUJ1ZmZlcihiNjQpXG4gICAgICAgICAgICAgICRjb3Jkb3ZhRmlsZS53cml0ZUZpbGUoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksIFwidGVzdC5qcGdcIiwgZGF0YSwgdHJ1ZSkudGhlbigtPlxuICAgICAgICAgICAgICAgIGNiKCRzY29wZS5vdXRwdXRfZGlyZWN0b3J5KyBcInRlc3QuanBnXCIsIGRhdGFfdXJsKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApKSwgKGVycm9yKS0+XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuXG5cbiAgJHNjb3BlLnNldHRpbmdzID0gLT5cbiAgICAkc3RhdGUuZ28gJ3NldHRpbmdzLnBvZGNhc3QnXG4gICAgXG4gICRzY29wZS50b2dnbGVMZWZ0ID0gLT5cbiAgICAkaW9uaWNTaWRlTWVudURlbGVnYXRlLnRvZ2dsZUxlZnQoKVxuICBcbiAgJHNjb3BlLmhvbWUgPSAtPlxuICAgICRpb25pY0hpc3RvcnkubmV4dFZpZXdPcHRpb25zKHtcbiAgICAgIGRpc2FibGVCYWNrOiB0cnVlXG4gICAgfSk7ICBcbiAgICAkc3RhdGUuZ28gJ2hvbWUnXG4gICAgXG4gIGxvYWRfc3RhdGUgPSAtPlxuICAgICRzY29wZS5wb2RjYXN0ID0gbnVsbFxuICAgIHRyeVxuICAgICAgJHNjb3BlLnBvZGNhc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9kY2FzdCcpKVxuICAgIGNhdGNoIGVcbiAgICAgIGNvbnNvbGUubG9nICdFcnJvciBsb2FkaW5nIHN0YXRlJywgZVxuICAgICAgXG4gICAgIyBGaXggdXAgdmVyc2lvbiBudW1iZXJcbiAgICBpZiAhJHNjb3BlLnBvZGNhc3Qgb3IgISRzY29wZS5wb2RjYXN0LnZlcnNpb25cbiAgICAgICRzY29wZS5wb2RjYXN0ID1cbiAgICAgICAgdmVyc2lvbjogMVxuICAgICAgICBlcGlzb2Rlczoge31cbiAgICAgICRzY29wZS5zYXZlX3N0YXRlKClcbiAgICAgIFxuICAgICMgRml4IHVwIG1pc3NpbmcgR1VJRHNcbiAgICBmb3IgayBvZiAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1xuICAgICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNba10uZ3VpZCA9IGtcbiAgICAgICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW2tdLmlzX3N5bmNpbmcgPSBmYWxzZVxuICAgICAgXG4gICAgIyBGaXggdXAgbWlzc2luZyBlcGlzb2Rlc1xuICAgICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzID0gYW5ndWxhci5tZXJnZSh7fSwgc3RhdGljX2VwaXNvZGVzLCAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlcyk7XG4gICAgIyBmb3IgZ3VpZCBvZiBzdGF0aWNfZXBpc29kZXNcbiAgICAjICAgZXBpc29kZSA9IHN0YXRpY19lcGlzb2Rlc1tndWlkXVxuICAgICMgICAjaWYgIShndWlkIG9mICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzKVxuICAgICMgICAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1tndWlkXSA9IGVwaXNvZGVcblxuICBuZXh0X2VwaXNvZGVfbnVtYmVyID0gLT5cbiAgICBuID0gMFxuICAgIGZvciBzbHVnIG9mICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzXG4gICAgICBlcGlzb2RlID0gJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNbc2x1Z11cbiAgICAgIG4gPSBNYXRoLm1heChuLCBlcGlzb2RlLm51bWJlcilcbiAgICBuICsgMVxuXG4gICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ID0gJ2NkdmZpbGU6Ly9sb2NhbGhvc3QvcGVyc2lzdGVudC8nXG4gIFxuICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKCRzY29wZS5vdXRwdXRfZGlyZWN0b3J5LCAoZW50cnkpLT5cbiAgICAkc2NvcGUubmF0aXZlX291dHB1dF9kaXJlY3RvcnkgPSBlbnRyeS50b1VSTCgpXG4gIClcbiAgXG4gICRzY29wZS5zYXZlX3N0YXRlID0gLT5cbiAgICBqc29uID0gYW5ndWxhci50b0pzb24oJHNjb3BlLnBvZGNhc3QpXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtICdwb2RjYXN0JywgYW5ndWxhci50b0pzb24oJHNjb3BlLnBvZGNhc3QpXG4gICAgJGNvcmRvdmFGaWxlLndyaXRlRmlsZSgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgJ2RhdGEuanNvbicsIGpzb24sIHRydWUpLnRoZW4gKChyZXN1bHQpIC0+XG4gICAgICAobmV3IFVwbG9hZFdvcmtlcihcbiAgICAgICAgdHlwZTogJ2pzb24nXG4gICAgICAgIG1pbWU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICBzcmM6ICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJ2RhdGEuanNvbidcbiAgICAgICkpXG4gICAgKVxuICAgIFxuXG4gIGxvYWRfc3RhdGUoKVxuXG4gICRzY29wZS5uZXcgPSAtPlxuICAgIHQgPSAobmV3IERhdGUpLmdldFRpbWUoKVxuICAgIGd1aWQgPSBzcHJpbnRmKCdmYy10Z2ktJWQnLCB0KVxuICAgICRzY29wZS5lcGlzb2RlID1cbiAgICAgIGd1aWQ6IGd1aWRcbiAgICAgIG51bWJlcjogbmV4dF9lcGlzb2RlX251bWJlcigpXG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcblxuICAkc2NvcGUuZ28gPSAoZ3VpZCkgLT5cbiAgICAkc2NvcGUuZXBpc29kZSA9IGFuZ3VsYXIuY29weSgkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1tndWlkXSlcbiAgICAkc3RhdGUuZ28gJ2VwaXNvZGUucmVjb3JkJ1xuIiwiYXBwLmNvbnRyb2xsZXIgJ0VwaXNvZGVDb250cm9sbGVyJywgKFxuICAkc2NvcGUsIFxuICAkaW9uaWNTaWRlTWVudURlbGVnYXRlXG4gICRpb25pY0FjdGlvblNoZWV0XG4gICkgLT5cbiAgICBcbiAgJHNjb3BlLiRvbiAnJGlvbmljVmlldy5lbnRlcicsIC0+XG4gICAgICAkaW9uaWNTaWRlTWVudURlbGVnYXRlLmNhbkRyYWdDb250ZW50IGZhbHNlXG5cbiAgJHNjb3BlLiRvbiAnJGlvbmljVmlldy5sZWF2ZScsIC0+XG4gICAgICAkaW9uaWNTaWRlTWVudURlbGVnYXRlLmNhbkRyYWdDb250ZW50IHRydWVcblxuICB0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgXG4gICRzY29wZS5oYXNfcmVjb3JkaW5nID0gJHNjb3BlLmVwaXNvZGUucmVjb3JkZWRfYXQ/XG4gICRzY29wZS5pc191cGxvYWRpbmcgPSBmYWxzZVxuICAkc2NvcGUuaXNfcGxheWluZyA9IGZhbHNlXG4gICRzY29wZS5pc19yZWNvcmRpbmcgPSBmYWxzZVxuICAkc2NvcGUuZHVyYXRpb25fbXMgPSAkc2NvcGUuZXBpc29kZS5kdXJhdGlvbl9tcyBvciAwXG4gICRzY29wZS5zY3J1Yl9wb2ludF9tcyA9IDBcbiAgJHNjb3BlLmhhc19jaGFuZ2VzID0gZmFsc2VcbiAgXG4gICRzY29wZS4kd2F0Y2ggJ2VwaXNvZGUnLCAoKG5ld09iaiwgb2xkT2JqKSAtPlxuICAgICRzY29wZS5oYXNfY2hhbmdlcyA9ICFhbmd1bGFyLmVxdWFscyhvbGRPYmosIG5ld09iailcbiAgKSwgdHJ1ZVxuXG4gICRzY29wZS5jYW5jZWwgPSAtPlxuICAgIGhpZGVTaGVldCA9ICRpb25pY0FjdGlvblNoZWV0LnNob3coXG4gICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdEaXNjYXJkIENoYW5nZXMnXG4gICAgICB0aXRsZVRleHQ6ICdEaXNjYXJkIGNoYW5nZXMnXG4gICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAkc2NvcGUuaG9tZSgpXG4gICAgKVxuIiwiYXBwLmNvbnRyb2xsZXIgJ0ZpbmFsaXplQ29udHJvbGxlcicsICgkc2NvcGUsICRodHRwLCAkaW50ZXJ2YWwsICRjb3Jkb3ZhRmlsZSwgJHN0YXRlLCAkaW9uaWNBY3Rpb25TaGVldCwgJGlvbmljTmF2QmFyRGVsZWdhdGUsICRpb25pY0hpc3RvcnkpIC0+XG4gICRpb25pY05hdkJhckRlbGVnYXRlLnNob3dCYWNrQnV0dG9uIHRydWVcblxuICB1cGxvYWRfcnNzID0gLT5cbiAgICByc3MgPSBGYXN0Q2FzdC50ZW1wbGF0ZXMucnNzKGVwaXNvZGVzOiBvcmRlckJ5TWFnaWMoJHNjb3BlLnBvZGNhc3QuZXBpc29kZXMpKVxuICAgICRjb3Jkb3ZhRmlsZS53cml0ZUZpbGUoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksICd0Z2kucnNzJywgcnNzLCB0cnVlKS50aGVuICgocmVzdWx0KSAtPlxuICAgICAgdXBsb2FkXG4gICAgICAgIHR5cGU6ICdyc3MnXG4gICAgICAgIG1pbWU6ICdhcHBsaWNhdGlvbi9yc3MreG1sJ1xuICAgICAgICBzcmM6ICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJ3RnaS5yc3MnXG4gICAgKSwgKGVycikgLT5cbiAgICAgIGNvbnNvbGUubG9nICdmaWxlIHdyaXRlIGVycm9yJywgZXJyXG4gICAgXG4gIHVwbG9hZF9odG1sID0gLT5cbiAgICBodG1sID0gRmFzdENhc3QudGVtcGxhdGVzLmVwaXNvZGUoZXBpc29kZTogJHNjb3BlLmVwaXNvZGUpXG4gICAgJGNvcmRvdmFGaWxlLndyaXRlRmlsZSgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcuaHRtbCcsIGh0bWwsIHRydWUpLnRoZW4gKChyZXN1bHQpIC0+XG4gICAgICB1cGxvYWRcbiAgICAgICAgc2x1ZzogJHNjb3BlLmVwaXNvZGUuc2x1Z1xuICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgbWltZTogJ3RleHQvaHRtbCdcbiAgICAgICAgc3JjOiAkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSArICRzY29wZS5lcGlzb2RlLmd1aWQgKyAnLmh0bWwnXG4gICAgKSwgKGVycikgLT5cbiAgICAgIGNvbnNvbGUubG9nICdmaWxlIHdyaXRlIGVycm9yJywgZXJyXG5cbiAgdXBsb2FkX2F1ZGlvID0gLT5cbiAgICB1cGxvYWRcbiAgICAgIHNsdWc6ICRzY29wZS5lcGlzb2RlLnNsdWdcbiAgICAgIHR5cGU6ICdhdWRpbydcbiAgICAgIG1pbWU6ICdhdWRpby9tcDQnXG4gICAgICBzcmM6ICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcubTRhJ1xuXG4gIHVwbG9hZCA9IChpdGVtKSAtPlxuICAgIChuZXcgVXBsb2FkV29ya2VyKGl0ZW0pKVxuICAgICAgLnN0YXJ0ZWQgLT5cbiAgICAgICAgJHNjb3BlLnVwbG9hZF9jb3VudCsrXG4gICAgICAgICRzY29wZS51cGxvYWRzW2l0ZW0udHlwZV0gPSAwXG4gICAgICAuZmluaXNoZWQgLT5cbiAgICAgICAgc2V0VGltZW91dCAoLT5cbiAgICAgICAgICBkZWxldGUgJHNjb3BlLnVwbG9hZHNbaXRlbS50eXBlXVxuICAgICAgICAgICRzY29wZS51cGxvYWRfY291bnQtLVxuICAgICAgICAgIGlmICRzY29wZS51cGxvYWRfY291bnQgPT0gMFxuICAgICAgICAgICAgJHNjb3BlLmlzX3VwbG9hZGluZ19maW5pc2hlZCA9IHRydWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KClcbiAgICAgICAgKSwgMTAwMFxuICAgICAgLnByb2dyZXNzIChwcm9ncmVzcyktPlxuICAgICAgICAkc2NvcGUudXBsb2Fkc1tpdGVtLnR5cGVdID0gcHJvZ3Jlc3NcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCcjcHJvZ3Jlc3NfJyArIGl0ZW0udHlwZSkudmFsIHByb2dyZXNzXG4gICAgICAgICRzY29wZS4kYXBwbHkoKVxuICAgICAgXG5cbiAgJHNjb3BlLmlzX3VwbG9hZGluZyA9IGZhbHNlXG4gICRzY29wZS51cGxvYWRzID0ge31cblxuICAkc2NvcGUuYmFjayA9IC0+XG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcblxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX3N0YXJ0ZWQgPSBmYWxzZVxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX2ZpbmlzaGVkID0gZmFsc2VcblxuICAkc2NvcGUucHVibGlzaCA9IC0+XG4gICAgaWYgISRzY29wZS5lcGlzb2RlLm51bWJlclxuICAgICAgYWxlcnQgJ1BsZWFzZSBzdXBwbHkgYW4gZXBpc29kZSBudW1iZXIuJ1xuICAgICRzY29wZS5lcGlzb2RlLnB1Ymxpc2hlZF9hdCA9IG51bGxcbiAgICBpZiAkc2NvcGUuZXBpc29kZS5pc19wdWJsaXNoZWRcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS50aXRsZVxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIHRpdGxlLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5kZXNjcmlwdGlvblxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIGRlc2NyaXB0aW9uLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgJHNjb3BlLmVwaXNvZGUucHVibGlzaGVkX2F0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICAkc2NvcGUuaXNfdXBsb2FkaW5nX3N0YXJ0ZWQgPSB0cnVlXG4gICAgJHNjb3BlLmVwaXNvZGUuc2x1ZyA9IHNwcmludGYoJyUwM2QgLSAlcycsICRzY29wZS5lcGlzb2RlLm51bWJlciwgJHNjb3BlLmVwaXNvZGUudGl0bGUpLnNsdWdpZnkoKVxuICAgIGlmKCEkc2NvcGUuZXBpc29kZS5sZW5ndGhfYnl0ZXMpXG4gICAgICB3aW5kb3cucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCAkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSArICRzY29wZS5lcGlzb2RlLmd1aWQgKyAnLm00YScsICgoZmlsZUVudHJ5KSAtPlxuICAgICAgICBmaWxlRW50cnkuZmlsZSAoZmlsZSkgLT5cbiAgICAgICAgICBjb25zb2xlLmxvZyBcImdvdCBieXRlIHNpemVcIiwgZmlsZVxuICAgICAgICAgICRzY29wZS5lcGlzb2RlLmxlbmd0aF9ieXRlcyA9IGZpbGUuc2l6ZVxuICAgICAgICAgICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzWyRzY29wZS5lcGlzb2RlLmd1aWRdID0gYW5ndWxhci5jb3B5KCRzY29wZS5lcGlzb2RlKVxuICAgICAgICAgIGlmICRzY29wZS5lcGlzb2RlLnB1Ymxpc2hlZF9hdFxuICAgICAgICAgICAgdXBsb2FkX3JzcygpXG4gICAgICAgICAgJHNjb3BlLnNhdmVfc3RhdGUoKVxuICAgICAgICAgIGNvbnNvbGUubG9nIGZpbGVcbiAgICAgICksIChlcnIpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdlcnJvciBnZXR0aW5nIGZpbGUgc2l6ZSdcbiAgICBlbHNlXG4gICAgICAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1skc2NvcGUuZXBpc29kZS5ndWlkXSA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZXBpc29kZSlcbiAgICAgIGlmICRzY29wZS5lcGlzb2RlLnB1Ymxpc2hlZF9hdFxuICAgICAgICB1cGxvYWRfcnNzKClcbiAgICAgICRzY29wZS5zYXZlX3N0YXRlKClcbiAgICBpZiAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgIHVwbG9hZF9odG1sKClcbiAgICB1cGxvYWRfYXVkaW8oKVxuXG4gICRzY29wZS4kd2F0Y2ggJ2lzX3VwbG9hZGluZ19maW5pc2hlZCcsICh2KSAtPlxuICAgIGlmICF2XG4gICAgICByZXR1cm5cbiAgICAkaW9uaWNIaXN0b3J5Lm5leHRWaWV3T3B0aW9ucyh7XG4gICAgICBkaXNhYmxlQmFjazogdHJ1ZVxuICAgIH0pOyAgXG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLmZpbmlzaCdcbiAgJHNjb3BlLnVwbG9hZF9jb3VudCA9IDBcbiIsImFwcC5jb250cm9sbGVyICdGaW5pc2hDb250cm9sbGVyJywgKCRzY29wZSwgJGlvbmljSGlzdG9yeSkgLT4gXG4iLCJhcHAuY29udHJvbGxlciAnSG9tZUNvbnRyb2xsZXInLCAoJHNjb3BlLCAkaW9uaWNIaXN0b3J5KSAtPiBcbiIsImFwcC5jb250cm9sbGVyICdQb2RjYXN0U2V0dGluZ3NDb250cm9sbGVyJywgKCRzY29wZSwgJGlvbmljSGlzdG9yeSwgJGlvbmljUG9wdXAsICRpb25pY05hdkJhckRlbGVnYXRlLCAkaW9uaWNBY3Rpb25TaGVldCkgLT5cbiAgXG4gIGNhdHMgPSBbXVxuICBmb3IgY2F0LHN1YmNhdHMgb2YgY2F0ZWdvcmllc1xuICAgIGlmIHN1YmNhdHMubGVuZ3RoPT0wXG4gICAgICBjYXRzLnB1c2hcbiAgICAgICAga2V5OiBjYXRcbiAgICAgICAgbmFtZTogY2F0XG4gICAgZWxzZVxuICAgICAgZm9yIHN1YmNhdCBpbiBzdWJjYXRzXG4gICAgICAgIGNhdHMucHVzaFxuICAgICAgICAgIGtleTogc3ByaW50ZihcIiVzfCVzXCIsIGNhdCwgc3ViY2F0KVxuICAgICAgICAgIG5hbWU6IHNwcmludGYoXCIlcyAtICVzXCIsIGNhdCwgc3ViY2F0KVxuXG4gICRzY29wZS5jYXRzID0gY2F0c1xuICBcbiAgJHNjb3BlLmRvX2xvZ28gPSAtPlxuICAgICRzY29wZS5zZWxlY3RfbG9nbyggKHBhdGgsIGRhdGFfdXJsKS0+XG4gICAgICAkc2NvcGUuc2hvdy5sb2dvX3BhdGggPSBwYXRoXG4gICAgICAkc2NvcGUubG9nb19zcmMgPSBkYXRhX3VybDtcbiAgICApXG5cbiAgZ2V0YjY0ID0gKGNkdl9wYXRoLCBjYikgLT5cbiAgICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGNkdl9wYXRoLCAoZW50cnkpLT5cbiAgICAgIHBhdGggPSBlbnRyeS50b1VSTCgpXG4gICAgICB3aW5kb3cucGx1Z2lucy5CYXNlNjQuZW5jb2RlRmlsZShwYXRoLCAoYmFzZTY0KS0+XG4gICAgICAgIGNvbnNvbGUubG9nKGJhc2U2NC5zdWJzdHJpbmcoMCw1MCkpXG4gICAgICAgIGNiKGJhc2U2NClcbiAgICAgICk7XG4gICAgKVxuXG4gICRzY29wZS5zaG93ID0gXG4gICAgdGl0bGU6ICcnXG4gICAgc3VidGl0bGU6ICcnXG4gICAgYXV0aG9yOiAnJ1xuICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgIHByaW1hcnlfY2F0ZWdvcnk6ICcnXG4gICAgc2Vjb25kYXJ5X2NhdGVnb3J5OiAnJ1xuICAgIGlzX2V4cGxpY2l0OiBmYWxzZVxuICAgIGxvZ29fcGF0aDogbnVsbFxuICAgIFxuICBmb3Igayx2IG9mICRzY29wZS5zaG93XG4gICAgaWYoJHNjb3BlLnBvZGNhc3Rba10/KVxuICAgICAgJHNjb3BlLnNob3dba10gPSAkc2NvcGUucG9kY2FzdFtrXVxuICBcbiAgaWYoJHNjb3BlLnNob3cubG9nb19wYXRoKVxuICAgIGdldGI2NCggJHNjb3BlLnNob3cubG9nb19wYXRoLCAoYjY0KS0+XG4gICAgICAkc2NvcGUubG9nb19zcmMgPSBiNjQ7XG4gICAgKVxuICAgICAgXG4gIGNvbnNvbGUubG9nKCRzY29wZS5zaG93KVxuICBvcmlnaW5hbCA9IGFuZ3VsYXIuY29weSgkc2NvcGUuc2hvdylcbiAgXG4gICRzY29wZS5oYXNfY2hhbmdlcyA9IGZhbHNlXG4gICRzY29wZS4kd2F0Y2ggJ3Nob3cnLCAoKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgLT5cbiAgICAkc2NvcGUuaGFzX2NoYW5nZXMgPSAhYW5ndWxhci5lcXVhbHMob3JpZ2luYWwsIG5ld1ZhbHVlKVxuICAgICRpb25pY05hdkJhckRlbGVnYXRlLnNob3dCYWNrQnV0dG9uICEkc2NvcGUuaGFzX2NoYW5nZXNcbiAgKSwgdHJ1ZVxuICAgICAgXG4gICRzY29wZS5zYXZlID0gLT5cbiAgICB2YWxpZGF0ZSA9XG4gICAgICB0aXRsZTogJ2EgdGl0bGUnXG4gICAgICBsb2dvX3BhdGg6ICdjb3ZlciBhcnQnXG4gICAgICBzdWJ0aXRsZTogJ2Egc3VidGl0bGUnXG4gICAgICBhdXRob3I6ICdhbiBhdXRob3InXG4gICAgICBkZXNjcmlwdGlvbjogJ2EgZGVzY3JpcHRpb24nXG4gICAgICBwcmltYXJ5X2NhdGVnb3J5OiAncHJpbWFyeSBjYXRlZ29yeSdcbiAgICAgIHNlY29uZGFyeV9jYXRlZ29yeTogJ3NlY29uZGFyeSBjYXRlZ29yeSdcbiAgICBmb3Igayx2IG9mIHZhbGlkYXRlXG4gICAgICBpZighKCRzY29wZS5zaG93W2tdPykpXG4gICAgICAgICRpb25pY1BvcHVwLmFsZXJ0KFxuICAgICAgICAgIHRpdGxlOiAnUmVxdWlyZWQnXG4gICAgICAgICAgdGVtcGxhdGU6IFwiUGxlYXNlIHN1cHBseSAje3Z9LlwiXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICAkc2NvcGUuc2hvd1trXSA9ICRzY29wZS5zaG93W2tdLnRyaW0oKVxuICAgIGZvciBrLHYgb2YgJHNjb3BlLnNob3dcbiAgICAgICRzY29wZS5wb2RjYXN0W2tdID0gJHNjb3BlLnNob3dba11cbiAgICAkc2NvcGUuc2F2ZV9zdGF0ZSgpXG4gICAgJHNjb3BlLmhvbWUoKVxuXG4gICRzY29wZS5jYW5jZWwgPSAtPlxuICAgIGhpZGVTaGVldCA9ICRpb25pY0FjdGlvblNoZWV0LnNob3coXG4gICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdEaXNjYXJkIENoYW5nZXMnXG4gICAgICB0aXRsZVRleHQ6ICdEaXNjYXJkIGNoYW5nZXMnXG4gICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAkc2NvcGUuaG9tZSgpXG4gICAgKVxuIiwiYXBwLmNvbnRyb2xsZXIgJ1JlY29yZENvbnRyb2xsZXInLCAoJHNjb3BlLCAkaHR0cCwgJGludGVydmFsLCAkY29yZG92YUZpbGUsICRzdGF0ZSwgJGlvbmljQWN0aW9uU2hlZXQsICRpb25pY0hpc3RvcnksICRpb25pY1BvcHVwLCAkaW9uaWNOYXZCYXJEZWxlZ2F0ZSkgLT5cbiAgcmVjID0gbmV3IFJlY29yZGVyKFxuICAgICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcubTRhJyxcbiAgICBvblNjcnViVXBkYXRlOiAobXMpLT5cbiAgICAgICRzY29wZS5zY3J1Yl9wb2ludF9tcyA9IG1zXG4gICAgb25EdXJhdGlvblVwZGF0ZTogKG1zKS0+XG4gICAgICAkc2NvcGUuZHVyYXRpb25fbXMgPSBtc1xuICAgICAgJHNjb3BlLmVwaXNvZGUuZHVyYXRpb25fbXMgPSBtc1xuICAgIG9uQXVkaW9FcnJvcjogLT5cbiAgICAgICRpb25pY1BvcHVwLmFsZXJ0KFxuICAgICAgICB0aXRsZTogJ0F1ZGlvIEVycm9yJ1xuICAgICAgICB0ZW1wbGF0ZTogJ1RoZSBhdWRpbyBzeXN0ZW0gaGFzIGZhaWxlZC4gUGxlYXNlIHJlcG9ydCB0aGlzLidcbiAgICAgICkudGhlbiAoKHJlcykgLT5cbiAgICAgICAgJHNjb3BlLmhvbWUoKVxuICAgICAgKVxuICAgIG9uUGxheVN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmlzX3BsYXlpbmcgPSB0cnVlXG4gICAgb25QbGF5U3RvcDogLT5cbiAgICAgICRzY29wZS5pc19wbGF5aW5nID0gZmFsc2VcbiAgICBvblJlY29yZFN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmhhc19jaGFuZ2VzID0gdHJ1ZVxuICAgICAgJGlvbmljTmF2QmFyRGVsZWdhdGUuc2hvd0JhY2tCdXR0b24gZmFsc2VcbiAgICAgICRpb25pY0hpc3RvcnkuY2xlYXJIaXN0b3J5KClcbiAgICAgICRzY29wZS5pc19yZWNvcmRpbmcgPSB0cnVlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuZXBpc29kZS5yZWNvcmRlZF9hdCA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgb25SZWNvcmRTdG9wOiAtPlxuICAgICAgJHNjb3BlLmlzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IHRydWVcbiAgICBvbkV2ZW50OiAtPlxuICAgICAgJHNjb3BlLiRhcHBseUFzeW5jKClcbiAgICAgIFxuICApXG5cbiAgaG9sZF9wcm9taXNlID0gbnVsbFxuICAkc2NvcGUuaG9sZCA9IChtcykgLT5cbiAgICBpZiAhbXNcbiAgICAgICRpbnRlcnZhbC5jYW5jZWwgaG9sZF9wcm9taXNlXG4gICAgICByZXR1cm5cbiAgICBob2xkX3Byb21pc2UgPSAkaW50ZXJ2YWwoKC0+XG4gICAgICByZWMuc3RlcChtcylcbiAgICApLCAxMDApXG5cbiAgJHNjb3BlLnNlZWsgPSAobXMpIC0+XG4gICAgY29uc29sZS5sb2cgJ3NlZWsnLCBtc1xuICAgIHJlYy5zZWVrKG1zKVxuXG4gICRzY29wZS5zdGVwID0gKG1zKSAtPlxuICAgIGNvbnNvbGUubG9nICdzdGVwJywgbXNcbiAgICByZWMuc3RlcChtcylcblxuICAkc2NvcGUucGxheSA9IC0+XG4gICAgcmVjLnBsYXkoKVxuXG4gICRzY29wZS5zdG9wX3BsYXlpbmcgPSAtPlxuICAgIHJlYy5zdG9wKClcbiAgICBcbiAgJHNjb3BlLnN0b3BfcmVjb3JkaW5nID0gLT5cbiAgICByZWMuc3RvcCgpXG4gICAgXG4gICRzY29wZS5yZWNvcmQgPSAtPlxuICAgIGlmICRzY29wZS5oYXNfcmVjb3JkaW5nXG4gICAgICBoaWRlU2hlZXQgPSAkaW9uaWNBY3Rpb25TaGVldC5zaG93KFxuICAgICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdTY3JhcCBhbmQgUmUtUmVjb3JkJ1xuICAgICAgICB0aXRsZVRleHQ6ICdSZS1yZWNvcmQgZXBpc29kZSdcbiAgICAgICAgY2FuY2VsVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAgIGhpZGVTaGVldCgpXG4gICAgICAgICAgcmVjLnJlY29yZCgpXG4gICAgICApXG4gICAgZWxzZVxuICAgICAgcmVjLnJlY29yZCgpXG4iLCJhcHAuY29udHJvbGxlciAnU2V0dGluZ3NDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNOYXZCYXJEZWxlZ2F0ZSwgJGlvbmljUG9wdXApIC0+XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
