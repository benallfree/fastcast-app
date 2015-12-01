(function() {
  window.is_app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;

  window.app = angular.module('fastcast', ['ionic', 'ngCordova', 'ngIOS9UIWebViewPatch', 'jrCrop', 'monospaced.elastic']).config(function($interpolateProvider, $ionicConfigProvider) {
    $interpolateProvider.startSymbol('<%').endSymbol('%>');
    return $ionicConfigProvider.views.swipeBackEnabled(false);
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
  }).config([
    'msdElasticConfig', function(msdElasticConfig) {
      return msdElasticConfig.append = '\n';
    }
  ]).config(function($stateProvider, $urlRouterProvider) {
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
this["FastCast"]["templates"]["episode"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="">\n    <meta name="author" content="">\n\n    <title>Agency - Start Bootstrap Theme</title>\n\n    <!-- Bootstrap Core CSS -->\n    <link href="../../../../assets/v1/css/bootstrap.min.css" rel="stylesheet">\n\n    <!-- Custom CSS -->\n    <link href="../../../../assets/v1/css/agency.css" rel="stylesheet">\n\n    <!-- Custom Fonts -->\n    <link href="../../../../assets/v1/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">\n    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">\n    <link href=\'https://fonts.googleapis.com/css?family=Kaushan+Script\' rel=\'stylesheet\' type=\'text/css\'>\n    <link href=\'https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic\' rel=\'stylesheet\' type=\'text/css\'>\n    <link href=\'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700\' rel=\'stylesheet\' type=\'text/css\'>\n\n    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n    <!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->\n    <!--[if lt IE 9]>\n        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>\n        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>\n    <![endif]-->\n\n</head>\n\n<body id="page-top" class="index">\n\n    <!-- Navigation -->\n    <nav class="navbar navbar-default navbar-fixed-top">\n        <div class="container">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class="navbar-header page-scroll">\n                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n                    <span class="sr-only">Toggle navigation</span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </button>\n                <a class="navbar-brand page-scroll" href="#page-top">Start Bootstrap</a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n                <ul class="nav navbar-nav navbar-right">\n                    <li class="hidden">\n                        <a href="#page-top"></a>\n                    </li>\n                    <li>\n                        <a class="page-scroll" href="#services">Services</a>\n                    </li>\n                    <li>\n                        <a class="page-scroll" href="#portfolio">Portfolio</a>\n                    </li>\n                    <li>\n                        <a class="page-scroll" href="#about">About</a>\n                    </li>\n                    <li>\n                        <a class="page-scroll" href="#team">Team</a>\n                    </li>\n                    <li>\n                        <a class="page-scroll" href="#contact">Contact</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n        </div>\n        <!-- /.container-fluid -->\n    </nav>\n\n    <!-- Header -->\n    <header>\n        <div class="container">\n            <div class="intro-text">\n                <div class="intro-lead-in">Welcome To Our Studio!</div>\n                <div class="intro-heading">This is an Episode!</div>\n                <a href="#services" class="page-scroll btn btn-xl">Tell Me More</a>\n            </div>\n        </div>\n    </header>\n\n    <!-- Services Section -->\n    <section id="services">\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-12 text-center">\n                    <h2 class="section-heading">Services</h2>\n                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class="row text-center">\n                <div class="col-md-4">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x text-primary"></i>\n                        <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>\n                    </span>\n                    <h4 class="service-heading">E-Commerce</h4>\n                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n                <div class="col-md-4">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x text-primary"></i>\n                        <i class="fa fa-laptop fa-stack-1x fa-inverse"></i>\n                    </span>\n                    <h4 class="service-heading">Responsive Design</h4>\n                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n                <div class="col-md-4">\n                    <span class="fa-stack fa-4x">\n                        <i class="fa fa-circle fa-stack-2x text-primary"></i>\n                        <i class="fa fa-lock fa-stack-1x fa-inverse"></i>\n                    </span>\n                    <h4 class="service-heading">Web Security</h4>\n                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Portfolio Grid Section -->\n    <section id="portfolio" class="bg-light-gray">\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-12 text-center">\n                    <h2 class="section-heading">Portfolio</h2>\n                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-md-4 col-sm-6 portfolio-item">\n                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">\n                        <div class="portfolio-hover">\n                            <div class="portfolio-hover-content">\n                                <i class="fa fa-plus fa-3x"></i>\n                            </div>\n                        </div>\n                        <img src="../../../../assets/v1/img/portfolio/roundicons.png" class="img-responsive" alt="">\n                    </a>\n                    <div class="portfolio-caption">\n                        <h4>Round Icons</h4>\n                        <p class="text-muted">Graphic Design</p>\n                    </div>\n                </div>\n                <div class="col-md-4 col-sm-6 portfolio-item">\n                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">\n                        <div class="portfolio-hover">\n                            <div class="portfolio-hover-content">\n                                <i class="fa fa-plus fa-3x"></i>\n                            </div>\n                        </div>\n                        <img src="../../../../assets/v1/img/portfolio/startup-framework.png" class="img-responsive" alt="">\n                    </a>\n                    <div class="portfolio-caption">\n                        <h4>Startup Framework</h4>\n                        <p class="text-muted">Website Design</p>\n                    </div>\n                </div>\n                <div class="col-md-4 col-sm-6 portfolio-item">\n                    <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">\n                        <div class="portfolio-hover">\n                            <div class="portfolio-hover-content">\n                                <i class="fa fa-plus fa-3x"></i>\n                            </div>\n                        </div>\n                        <img src="../../../../assets/v1/img/portfolio/treehouse.png" class="img-responsive" alt="">\n                    </a>\n                    <div class="portfolio-caption">\n                        <h4>Treehouse</h4>\n                        <p class="text-muted">Website Design</p>\n                    </div>\n                </div>\n                <div class="col-md-4 col-sm-6 portfolio-item">\n                    <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">\n                        <div class="portfolio-hover">\n                            <div class="portfolio-hover-content">\n                                <i class="fa fa-plus fa-3x"></i>\n                            </div>\n                        </div>\n                        <img src="../../../../assets/v1/img/portfolio/golden.png" class="img-responsive" alt="">\n                    </a>\n                    <div class="portfolio-caption">\n                        <h4>Golden</h4>\n                        <p class="text-muted">Website Design</p>\n                    </div>\n                </div>\n                <div class="col-md-4 col-sm-6 portfolio-item">\n                    <a href="#portfolioModal5" class="portfolio-link" data-toggle="modal">\n                        <div class="portfolio-hover">\n                            <div class="portfolio-hover-content">\n                                <i class="fa fa-plus fa-3x"></i>\n                            </div>\n                        </div>\n                        <img src="../../../../assets/v1/img/portfolio/escape.png" class="img-responsive" alt="">\n                    </a>\n                    <div class="portfolio-caption">\n                        <h4>Escape</h4>\n                        <p class="text-muted">Website Design</p>\n                    </div>\n                </div>\n                <div class="col-md-4 col-sm-6 portfolio-item">\n                    <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal">\n                        <div class="portfolio-hover">\n                            <div class="portfolio-hover-content">\n                                <i class="fa fa-plus fa-3x"></i>\n                            </div>\n                        </div>\n                        <img src="../../../../assets/v1/img/portfolio/dreams.png" class="img-responsive" alt="">\n                    </a>\n                    <div class="portfolio-caption">\n                        <h4>Dreams</h4>\n                        <p class="text-muted">Website Design</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- About Section -->\n    <section id="about">\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-12 text-center">\n                    <h2 class="section-heading">About</h2>\n                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-lg-12">\n                    <ul class="timeline">\n                        <li>\n                            <div class="timeline-image">\n                                <img class="img-circle img-responsive" src="../../../../assets/v1/img/about/1.jpg" alt="">\n                            </div>\n                            <div class="timeline-panel">\n                                <div class="timeline-heading">\n                                    <h4>2009-2011</h4>\n                                    <h4 class="subheading">Our Humble Beginnings</h4>\n                                </div>\n                                <div class="timeline-body">\n                                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                                </div>\n                            </div>\n                        </li>\n                        <li class="timeline-inverted">\n                            <div class="timeline-image">\n                                <img class="img-circle img-responsive" src="../../../../assets/v1/img/about/2.jpg" alt="">\n                            </div>\n                            <div class="timeline-panel">\n                                <div class="timeline-heading">\n                                    <h4>March 2011</h4>\n                                    <h4 class="subheading">An Agency is Born</h4>\n                                </div>\n                                <div class="timeline-body">\n                                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class="timeline-image">\n                                <img class="img-circle img-responsive" src="../../../../assets/v1/img/about/3.jpg" alt="">\n                            </div>\n                            <div class="timeline-panel">\n                                <div class="timeline-heading">\n                                    <h4>December 2012</h4>\n                                    <h4 class="subheading">Transition to Full Service</h4>\n                                </div>\n                                <div class="timeline-body">\n                                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                                </div>\n                            </div>\n                        </li>\n                        <li class="timeline-inverted">\n                            <div class="timeline-image">\n                                <img class="img-circle img-responsive" src="../../../../assets/v1/img/about/4.jpg" alt="">\n                            </div>\n                            <div class="timeline-panel">\n                                <div class="timeline-heading">\n                                    <h4>July 2014</h4>\n                                    <h4 class="subheading">Phase Two Expansion</h4>\n                                </div>\n                                <div class="timeline-body">\n                                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n                                </div>\n                            </div>\n                        </li>\n                        <li class="timeline-inverted">\n                            <div class="timeline-image">\n                                <h4>Be Part\n                                    <br>Of Our\n                                    <br>Story!</h4>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Team Section -->\n    <section id="team" class="bg-light-gray">\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-12 text-center">\n                    <h2 class="section-heading">Our Amazing Team</h2>\n                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-sm-4">\n                    <div class="team-member">\n                        <img src="../../../../assets/v1/img/team/1.jpg" class="img-responsive img-circle" alt="">\n                        <h4>Kay Garland</h4>\n                        <p class="text-muted">Lead Designer</p>\n                        <ul class="list-inline social-buttons">\n                            <li><a href="#"><i class="fa fa-twitter"></i></a>\n                            </li>\n                            <li><a href="#"><i class="fa fa-facebook"></i></a>\n                            </li>\n                            <li><a href="#"><i class="fa fa-linkedin"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-sm-4">\n                    <div class="team-member">\n                        <img src="../../../../assets/v1/img/team/2.jpg" class="img-responsive img-circle" alt="">\n                        <h4>Larry Parker</h4>\n                        <p class="text-muted">Lead Marketer</p>\n                        <ul class="list-inline social-buttons">\n                            <li><a href="#"><i class="fa fa-twitter"></i></a>\n                            </li>\n                            <li><a href="#"><i class="fa fa-facebook"></i></a>\n                            </li>\n                            <li><a href="#"><i class="fa fa-linkedin"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-sm-4">\n                    <div class="team-member">\n                        <img src="../../../../assets/v1/img/team/3.jpg" class="img-responsive img-circle" alt="">\n                        <h4>Diana Pertersen</h4>\n                        <p class="text-muted">Lead Developer</p>\n                        <ul class="list-inline social-buttons">\n                            <li><a href="#"><i class="fa fa-twitter"></i></a>\n                            </li>\n                            <li><a href="#"><i class="fa fa-facebook"></i></a>\n                            </li>\n                            <li><a href="#"><i class="fa fa-linkedin"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-lg-8 col-lg-offset-2 text-center">\n                    <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Clients Aside -->\n    <aside class="clients">\n        <div class="container">\n            <div class="row">\n                <div class="col-md-3 col-sm-6">\n                    <a href="#">\n                        <img src="../../../../assets/v1/img/logos/envato.jpg" class="img-responsive img-centered" alt="">\n                    </a>\n                </div>\n                <div class="col-md-3 col-sm-6">\n                    <a href="#">\n                        <img src="../../../../assets/v1/img/logos/designmodo.jpg" class="img-responsive img-centered" alt="">\n                    </a>\n                </div>\n                <div class="col-md-3 col-sm-6">\n                    <a href="#">\n                        <img src="../../../../assets/v1/img/logos/themeforest.jpg" class="img-responsive img-centered" alt="">\n                    </a>\n                </div>\n                <div class="col-md-3 col-sm-6">\n                    <a href="#">\n                        <img src="../../../../assets/v1/img/logos/creative-market.jpg" class="img-responsive img-centered" alt="">\n                    </a>\n                </div>\n            </div>\n        </div>\n    </aside>\n    \n    <!-- Contact Section -->\n    <section id="contact">\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-12 text-center">\n                    <h2 class="section-heading">Contact Us</h2>\n                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-lg-12">\n                    <form name="sentMessage" id="contactForm" novalidate>\n                        <div class="row">\n                            <div class="col-md-6">\n                                <div class="form-group">\n                                    <input type="text" class="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name.">\n                                    <p class="help-block text-danger"></p>\n                                </div>\n                                <div class="form-group">\n                                    <input type="email" class="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address.">\n                                    <p class="help-block text-danger"></p>\n                                </div>\n                                <div class="form-group">\n                                    <input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number.">\n                                    <p class="help-block text-danger"></p>\n                                </div>\n                            </div>\n                            <div class="col-md-6">\n                                <div class="form-group">\n                                    <textarea class="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>\n                                    <p class="help-block text-danger"></p>\n                                </div>\n                            </div>\n                            <div class="clearfix"></div>\n                            <div class="col-lg-12 text-center">\n                                <div id="success"></div>\n                                <button type="submit" class="btn btn-xl">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <footer>\n        <div class="container">\n            <div class="row">\n                <div class="col-md-4">\n                    <span class="copyright">Copyright &copy; Your Website 2014</span>\n                </div>\n                <div class="col-md-4">\n                    <ul class="list-inline social-buttons">\n                        <li><a href="#"><i class="fa fa-twitter"></i></a>\n                        </li>\n                        <li><a href="#"><i class="fa fa-facebook"></i></a>\n                        </li>\n                        <li><a href="#"><i class="fa fa-linkedin"></i></a>\n                        </li>\n                    </ul>\n                </div>\n                <div class="col-md-4">\n                    <ul class="list-inline quicklinks">\n                        <li><a href="#">Privacy Policy</a>\n                        </li>\n                        <li><a href="#">Terms of Use</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </footer>\n\n    <!-- Portfolio Modals -->\n    <!-- Use the modals below to showcase details about your portfolio projects! -->\n\n    <!-- Portfolio Modal 1 -->\n    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">\n        <div class="modal-content">\n            <div class="close-modal" data-dismiss="modal">\n                <div class="lr">\n                    <div class="rl">\n                    </div>\n                </div>\n            </div>\n            <div class="container">\n                <div class="row">\n                    <div class="col-lg-8 col-lg-offset-2">\n                        <div class="modal-body">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class="img-responsive img-centered" src="../../../../assets/v1/img/portfolio/roundicons-free.png" alt="">\n                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                            <p>\n                                <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>\n                            <ul class="list-inline">\n                                <li>Date: July 2014</li>\n                                <li>Client: Round Icons</li>\n                                <li>Category: Graphic Design</li>\n                            </ul>\n                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 2 -->\n    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">\n        <div class="modal-content">\n            <div class="close-modal" data-dismiss="modal">\n                <div class="lr">\n                    <div class="rl">\n                    </div>\n                </div>\n            </div>\n            <div class="container">\n                <div class="row">\n                    <div class="col-lg-8 col-lg-offset-2">\n                        <div class="modal-body">\n                            <h2>Project Heading</h2>\n                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class="img-responsive img-centered" src="../../../../assets/v1/img/portfolio/startup-framework-preview.png" alt="">\n                            <p><a href="http://designmodo.com/startup/?u=787">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p>\n                            <p>You can preview Startup Framework <a href="http://designmodo.com/startup/?u=787">here</a>.</p>\n                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 3 -->\n    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">\n        <div class="modal-content">\n            <div class="close-modal" data-dismiss="modal">\n                <div class="lr">\n                    <div class="rl">\n                    </div>\n                </div>\n            </div>\n            <div class="container">\n                <div class="row">\n                    <div class="col-lg-8 col-lg-offset-2">\n                        <div class="modal-body">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class="img-responsive img-centered" src="../../../../assets/v1/img/portfolio/treehouse-preview.png" alt="">\n                            <p>Treehouse is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p>\n                            <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">FreebiesXpress.com</a>.</p>\n                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 4 -->\n    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">\n        <div class="modal-content">\n            <div class="close-modal" data-dismiss="modal">\n                <div class="lr">\n                    <div class="rl">\n                    </div>\n                </div>\n            </div>\n            <div class="container">\n                <div class="row">\n                    <div class="col-lg-8 col-lg-offset-2">\n                        <div class="modal-body">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class="img-responsive img-centered" src="../../../../assets/v1/img/portfolio/golden-preview.png" alt="">\n                            <p>Start Bootstrap\'s Agency theme is based on Golden, a free PSD website template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p>\n                            <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">FreebiesXpress.com</a>.</p>\n                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 5 -->\n    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">\n        <div class="modal-content">\n            <div class="close-modal" data-dismiss="modal">\n                <div class="lr">\n                    <div class="rl">\n                    </div>\n                </div>\n            </div>\n            <div class="container">\n                <div class="row">\n                    <div class="col-lg-8 col-lg-offset-2">\n                        <div class="modal-body">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class="img-responsive img-centered" src="../../../../assets/v1/img/portfolio/escape-preview.png" alt="">\n                            <p>Escape is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p>\n                            <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">FreebiesXpress.com</a>.</p>\n                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Portfolio Modal 6 -->\n    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">\n        <div class="modal-content">\n            <div class="close-modal" data-dismiss="modal">\n                <div class="lr">\n                    <div class="rl">\n                    </div>\n                </div>\n            </div>\n            <div class="container">\n                <div class="row">\n                    <div class="col-lg-8 col-lg-offset-2">\n                        <div class="modal-body">\n                            <!-- Project Details Go Here -->\n                            <h2>Project Name</h2>\n                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\n                            <img class="img-responsive img-centered" src="../../../../assets/v1/img/portfolio/dreams-preview.png" alt="">\n                            <p>Dreams is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p>\n                            <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.</p>\n                            <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- jQuery -->\n    <script src="../../../../assets/v1/js/jquery.js"></script>\n\n    <!-- Bootstrap Core JavaScript -->\n    <script src="../../../../assets/v1/js/bootstrap.min.js"></script>\n\n    <!-- Plugin JavaScript -->\n    <script src="../../../../assets/v1/js/jquery.easing.min.js"></script>\n    <script src="../../../../assets/v1/js/classie.js"></script>\n    <script src="../../../../assets/v1/js/cbpAnimatedHeader.js"></script>\n\n    <!-- Contact Form JavaScript -->\n    <script src="../../../../assets/v1/js/jqBootstrapValidation.js"></script>\n    <script src="../../../../assets/v1/js/contact_me.js"></script>\n\n    <!-- Custom Theme JavaScript -->\n    <script src="../../../../assets/v1/js/agency.js"></script>\n\n</body>\n\n</html>\n';

}
return __p
};
this["FastCast"]["templates"]["rss"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<?xml version="1.0" encoding="UTF-8"?><rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">\n  <channel>\n    <atom:link href="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/feed.rss" rel="self" type="application/rss+xml"/>\n    <title>' +
__e( podcast.title ) +
'</title>\n    <link>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/index.html</link>\n    <pubDate>' +
__e( rfc2822() ) +
'</pubDate>\n    <lastBuildDate>' +
__e( rfc2822() ) +
'</lastBuildDate>\n    <ttl>60</ttl>\n    <language>en</language>\n    <copyright>All rights reserved</copyright>\n    <webMaster>' +
__e( podcast.code ) +
'@fast-cast.net (' +
__e( podcast.author ) +
')</webMaster>\n    <description>' +
__e( podcast.description ) +
'</description>\n    <itunes:new-feed-url>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/feed.rss</itunes:new-feed-url>\n    <itunes:subtitle>' +
__e( podcast.subtitle ) +
'</itunes:subtitle>\n    <itunes:owner>\n      <itunes:name>' +
__e( podcast.author ) +
'</itunes:name>\n      <itunes:email>' +
__e( podcast.code ) +
'@fast-cast.net</itunes:email>\n    </itunes:owner>\n    <itunes:author>' +
__e( podcast.author ) +
'</itunes:author>\n    <itunes:explicit>' +
__e( podcast.is_explicit ? 'yes' : 'no' ) +
'</itunes:explicit>\n    <itunes:image href="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/logo.jpg"/>\n    <image>\n      <url>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/logo.jpg</url>\n      <title>' +
__e( podcast.title ) +
'</title>\n      <link>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/index.html</link>\n    </image>\n    ';
 _.each(['primary_category', 'secondary_category'], function(k) { ;
__p += '\n      ';
 var parts = podcast[k].split(/\|/); ;
__p += '\n  \t\t<itunes:category text="' +
__e( parts[0] ) +
'">\n  \t\t\t';
 if(parts.length>1) { ;
__p += '\n  \t\t\t\t<itunes:category text="' +
__e( parts[1] ) +
'"/>\n  \t\t\t';
 } ;
__p += '\n  \t\t</itunes:category>\n    ';
 }) ;
__p += '\n\t\t';
 _.each(orderByMagic(podcast.episodes), function(episode) {
        if(!episode.published_at) return;
        ;
__p += '\n\t\t    <item>\n\t\t      <guid isPermaLink="false">' +
__e( episode.guid ) +
'</guid>\n\t\t      <title>' +
__e( sprintf("%03d", episode.number) ) +
' - ' +
__e( episode.title ) +
'</title>\n\t\t      <pubDate>' +
__e( rfc2822(episode.published_at) ) +
'</pubDate>\n\t\t      <link>http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/episodes/' +
__e( episode.slug ) +
'</link>\n\t\t      <itunes:duration>' +
__e( episode.duration_ms.toHHMMSS() ) +
'</itunes:duration>\n\t\t      <itunes:author>Ben Allfree</itunes:author>\n\t\t      <itunes:explicit>yes</itunes:explicit>\n\t\t      <itunes:summary>' +
__e( episode.description ) +
'</itunes:summary>\n\t\t      <itunes:subtitle>' +
__e( episode.description ) +
'</itunes:subtitle>\n\t\t      <description>' +
__e( episode.description ) +
'</description>\n\t\t      <enclosure type="audio/mp4" url="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/episodes/' +
__e( episode.slug ) +
'/' +
__e( episode.slug ) +
'.m4a" length="' +
__e( episode.length_bytes ) +
'"/>\n\t\t      <itunes:image href="http://www.fast-cast.net/podcasts/' +
__e( podcast.code ) +
'/logo.jpg"/>\n\t\t    </item>\n\t\t';
 }) ;
__p += '\n  </channel>\n</rss>';

}
return __p
};
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

  window.rfc2822 = function(date) {
    date = !date || date.name === 'datetime' ? moment() : date;
    return moment(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
  };

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
          type: this.item.type,
          code: this.item.code
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
          console.log("Uploading", _this.item.src, url);
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
  app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state, $cordovaFileTransfer, $q, $ionicHistory, $ionicSideMenuDelegate, $ionicPopup) {
    var load_state, next_episode_number;
    console.log('AppController');
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
      var e, error, k, results;
      $scope.podcast = null;
      try {
        $scope.podcast = JSON.parse(window.localStorage.getItem('podcast'));
      } catch (error) {
        e = error;
        console.log('Error loading state', e);
      }
      if (!$scope.podcast || !$scope.podcast.version) {
        $scope.podcast = {
          version: 1,
          episodes: {}
        };
        $scope.save_state();
      }
      results = [];
      for (k in $scope.podcast.episodes) {
        $scope.podcast.episodes[k].guid = k;
        results.push($scope.podcast.episodes[k].is_syncing = false);
      }
      return results;
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
        if (!$scope.podcast.code) {
          return;
        }
        return new UploadWorker({
          code: $scope.podcast.code,
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
      guid = sprintf('fc-%s-%d', $scope.podcast.code, t);
      $scope.episode = {
        guid: guid,
        number: next_episode_number()
      };
      return $state.go('episode.record');
    };
    return $scope.go = function(guid) {
      $scope.episode = angular.copy($scope.podcast.episodes[guid]);
      $scope.episode.is_published = $scope.episode.published_at != null;
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
        podcast: $scope.podcast
      });
      return $cordovaFile.writeFile($scope.output_directory, $scope.podcast.code + '.rss', rss, true).then((function(result) {
        return upload({
          type: 'rss',
          mime: 'application/rss+xml',
          src: $scope.output_directory + $scope.podcast.code + '.rss'
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
      item.code = $scope.podcast.code;
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
      } else {
        $scope.episode.published_at = null;
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
  app.controller('HomeController', function($scope, $state, $ionicHistory, $ionicPopup) {
    var myPopup;
    if (!$scope.podcast.code) {
      return myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="podcast.code">',
        title: 'Enter Show Code',
        subTitle: 'In order to use this beta app, you must have a Show Code. Get one from Ben via Facebook.',
        scope: $scope,
        buttons: [
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.podcast.code) {
                e.preventDefault();
              }
              $scope.podcast.code = $scope.podcast.code.trim().toLowerCase();
              return $scope.save_state();
            }
          }
        ]
      }).then(function() {
        return $ionicPopup.alert({
          title: 'Input Show Info',
          template: 'Since this is your first time getting started, enter your show information next.'
        }).then((function(res) {
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          return $state.go('settings.podcast');
        }));
      });
    }
  });

}).call(this);


(function() {
  app.controller('PodcastSettingsController', function($scope, $ionicHistory, $ionicPopup, $ionicNavBarDelegate, $ionicActionSheet, $jrCrop, $cordovaImagePicker, $cordovaFile) {
    var cat, cats, getb64, j, k, len1, original, ref, subcat, subcats, v;
    cats = [];
    for (cat in categories) {
      subcats = categories[cat];
      if (subcats.length === 0) {
        cats.push({
          key: cat,
          name: cat
        });
      } else {
        for (j = 0, len1 = subcats.length; j < len1; j++) {
          subcat = subcats[j];
          cats.push({
            key: sprintf("%s|%s", cat, subcat),
            name: sprintf("%s - %s", cat, subcat)
          });
        }
      }
    }
    $scope.cats = cats;
    $scope.do_logo = function() {
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
          var _base64ToArrayBuffer, resize;
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
          resize = function(src_canvas, dst_name, d, cb) {
            if (cb == null) {
              cb = null;
            }
            return Caman(src_canvas, function() {
              this.resize({
                width: d,
                height: d
              });
              this.render((function(_this) {
                return function() {
                  var b64, data, data_url;
                  data_url = _this.toBase64('jpeg');
                  b64 = data_url.replace(/^data:.+?;base64,/, "");
                  console.log(data_url.substring(0, 50));
                  data = _base64ToArrayBuffer(b64);
                  return $cordovaFile.writeFile($scope.output_directory, dst_name, data, true).then(function() {
                    if (cb) {
                      return cb($scope.output_directory + dst_name, data_url);
                    }
                  });
                };
              })(this));
              return this.reset();
            });
          };
          resize(canvas, 'logo-thumb.jpg', 75, function(path, data_url) {
            $scope.show.logo_path = path;
            return $scope.logo_src = data_url;
          });
          return resize(canvas, 'logo.jpg', 1400, function(path, data_url) {
            return new UploadWorker({
              code: $scope.podcast.code,
              type: 'logo',
              mime: 'image/jpeg',
              src: path
            });
          });
        });
      }), function(error) {
        return console.log(error);
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
      var ref1, rss, validate;
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
      if ($scope.has_changes) {
        rss = FastCast.templates.rss({
          podcast: $scope.podcast
        });
        $cordovaFile.writeFile($scope.output_directory, $scope.podcast.code + '.rss', rss, true).then((function(result) {
          return new UploadWorker({
            code: $scope.podcast.code,
            type: 'rss',
            mime: 'application/rss+xml',
            src: $scope.output_directory + $scope.podcast.code + '.rss'
          });
        }));
      }
      return $scope.home();
    };
    $scope.cancel = function() {
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
    return $jrCrop.defaultOptions.template = $jrCrop.defaultOptions.template.replace(/{{/g, '<%').replace(/}}/g, '%>');
  });

}).call(this);


(function() {
  app.controller('RecordController', function($scope, $http, $interval, $cordovaFile, $state, $ionicActionSheet, $ionicHistory, $ionicPopup, $ionicNavBarDelegate) {
    var hold_promise, rec;
    $scope.$parent.$on('$ionicView.beforeLeave', function() {
      console.log('beforeLeave');
      return rec.stop();
    });
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvYXBwLmNvZmZlZSIsIi9zb3VyY2UvYm9vdHN0cmFwLmNvZmZlZSIsImpzdC5qcyIsIi9zb3VyY2Uvc3RhdGljX2NhdGVnb3JpZXMuY29mZmVlIiwiL3NvdXJjZS91dGlsLmNvZmZlZSIsIi9zb3VyY2UvY2xhc3Nlcy9jbGFzc2VzL1JlY29yZGVyLmNvZmZlZSIsIi9zb3VyY2UvY2xhc3Nlcy9jbGFzc2VzL1VwbG9hZFdvcmtlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9FcGlzb2RlQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0ZpbmFsaXplQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0ZpbmlzaENvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9Ib21lQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL1BvZGNhc3RTZXR0aW5nc0NvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9SZWNvcmRDb250cm9sbGVyLmNvZmZlZSIsIi9zb3VyY2UvY29udHJvbGxlcnMvY29udHJvbGxlcnMvU2V0dGluZ3NDb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBYixDQUFxQixTQUFyQixDQUFBLEtBQW1DLENBQUMsQ0FBcEMsSUFBMEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFiLENBQXFCLFVBQXJCLENBQUEsS0FBb0MsQ0FBQzs7RUFFL0YsTUFBTSxDQUFDLEdBQVAsR0FBYSxP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Q29udGVudCI6WyJ3aW5kb3cuaXNfYXBwID0gZG9jdW1lbnQuVVJMLmluZGV4T2YoJ2h0dHA6Ly8nKSA9PSAtMSBhbmQgZG9jdW1lbnQuVVJMLmluZGV4T2YoJ2h0dHBzOi8vJykgPT0gLTFcblxud2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdmYXN0Y2FzdCcsIFtcbiAgJ2lvbmljJ1xuICAnbmdDb3Jkb3ZhJyxcbiAgJ25nSU9TOVVJV2ViVmlld1BhdGNoJyxcbiAgJ2pyQ3JvcCcsXG4gICdtb25vc3BhY2VkLmVsYXN0aWMnLFxuXSlcblxuLmNvbmZpZygoJGludGVycG9sYXRlUHJvdmlkZXIsICRpb25pY0NvbmZpZ1Byb3ZpZGVyKSAtPlxuICAkaW50ZXJwb2xhdGVQcm92aWRlci5zdGFydFN5bWJvbCgnPCUnKS5lbmRTeW1ib2wgJyU+J1xuICAkaW9uaWNDb25maWdQcm92aWRlci52aWV3cy5zd2lwZUJhY2tFbmFibGVkKGZhbHNlKVxuKVxuXG4ucnVuKCgkaW9uaWNQbGF0Zm9ybSkgLT5cbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkgLT5cbiAgICAjIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAjIGZvciBmb3JtIGlucHV0cylcbiAgICBpZiB3aW5kb3cuY29yZG92YSBhbmQgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZFxuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhciB0cnVlXG4gICAgaWYgd2luZG93LlN0YXR1c0JhclxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpXG4pXG5cbi5maWx0ZXIoJ251bWJlckZpeGVkTGVuJywgLT5cbiAgKG4sIGxlbikgLT5cbiAgICBzcHJpbnRmICclMCcgKyBsZW4gKyAnZCcsIG5cbilcblxuLmZpbHRlcignb3JkZXJCeU1hZ2ljJywgLT4gXG4gIChlcGlzb2RlcykgLT5cbiAgICBvcmRlckJ5TWFnaWMoZXBpc29kZXMpXG4pXG5cbi5jb25maWcoWydtc2RFbGFzdGljQ29uZmlnJywgKG1zZEVsYXN0aWNDb25maWcpIC0+XG4gIG1zZEVsYXN0aWNDb25maWcuYXBwZW5kID0gJ1xcbidcbl0pXG5cbi5jb25maWcoKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIC0+XG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJyxcbiAgICB1cmw6ICcvJ1xuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xuICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicpXG4gIC5zdGF0ZSgnZXBpc29kZScsXG4gICAgY2FjaGU6IGZhbHNlXG4gICAgdXJsOiAnL2VwaXNvZGUnXG4gICAgdGVtcGxhdGU6ICc8aW9uLW5hdi12aWV3PjwvaW9uLW5hdi12aWV3PidcbiAgICBjb250cm9sbGVyOiAnRXBpc29kZUNvbnRyb2xsZXInXG4gICAgYWJzdHJhY3Q6IHRydWUpXG4gICAgLnN0YXRlKCdlcGlzb2RlLnJlY29yZCcsXG4gICAgICB1cmw6ICcvcmVjb3JkJ1xuICAgICAgdGVtcGxhdGVVcmw6ICdlcGlzb2RlL3JlY29yZC5odG1sJ1xuICAgICAgY29udHJvbGxlcjogJ1JlY29yZENvbnRyb2xsZXInXG4gICAgICBwYXJlbnQ6ICdlcGlzb2RlJylcbiAgICAuc3RhdGUoJ2VwaXNvZGUuZmluYWxpemUnLFxuICAgICAgdXJsOiAnL2ZpbmFsaXplJ1xuICAgICAgdGVtcGxhdGVVcmw6ICdlcGlzb2RlL2ZpbmFsaXplLmh0bWwnXG4gICAgICBjb250cm9sbGVyOiAnRmluYWxpemVDb250cm9sbGVyJ1xuICAgICAgcGFyZW50OiAnZXBpc29kZScpXG4gICAgLnN0YXRlKCdlcGlzb2RlLmZpbmlzaCcsXG4gICAgICB1cmw6ICcvZmluaXNoJ1xuICAgICAgdGVtcGxhdGVVcmw6ICdlcGlzb2RlL2ZpbmlzaC5odG1sJ1xuICAgICAgY29udHJvbGxlcjogJ0ZpbmlzaENvbnRyb2xsZXInXG4gICAgICBwYXJlbnQ6ICdlcGlzb2RlJylcbiAgLnN0YXRlKCdzZXR0aW5ncycsXG4gICAgdXJsOiAnL3NldHRpbmdzJ1xuICAgIHRlbXBsYXRlOiAnPGlvbi1uYXYtdmlldz48L2lvbi1uYXYtdmlldz4nXG4gICAgY29udHJvbGxlcjogJ1NldHRpbmdzQ29udHJvbGxlcidcbiAgICBhYnN0cmFjdDogdHJ1ZSlcbiAgICAuc3RhdGUoJ3NldHRpbmdzLnBvZGNhc3QnLFxuICAgICAgdXJsOiAnL3BvZGNhc3QnXG4gICAgICB0ZW1wbGF0ZVVybDogJ3NldHRpbmdzL3BvZGNhc3QuaHRtbCdcbiAgICAgIGNvbnRyb2xsZXI6ICdQb2RjYXN0U2V0dGluZ3NDb250cm9sbGVyJ1xuICAgICAgcGFyZW50OiAnc2V0dGluZ3MnKVxuICAgIFxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvJ1xuKVxuIiwiYm9vdF9hbmd1bGFyID0gLT5cbiAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5JylcbiAgYW5ndWxhci5ib290c3RyYXAgZG9tRWxlbWVudCwgWyAnZmFzdGNhc3QnIF1cbiAgXG5pZiBpc19hcHBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAnZGV2aWNlcmVhZHknLCBib290X2FuZ3VsYXIsIGZhbHNlXG5lbHNlXG4gICQgLT4gYm9vdF9hbmd1bGFyKClcbiIsInRoaXNbXCJGYXN0Q2FzdFwiXSA9IHRoaXNbXCJGYXN0Q2FzdFwiXSB8fCB7fTtcbnRoaXNbXCJGYXN0Q2FzdFwiXVtcInRlbXBsYXRlc1wiXSA9IHRoaXNbXCJGYXN0Q2FzdFwiXVtcInRlbXBsYXRlc1wiXSB8fCB7fTtcbnRoaXNbXCJGYXN0Q2FzdFwiXVtcInRlbXBsYXRlc1wiXVtcImVwaXNvZGVcIl0gPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJycsIF9fZSA9IF8uZXNjYXBlO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XCJlblwiPlxcblxcbjxoZWFkPlxcblxcbiAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCI+XFxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPlxcbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiXCI+XFxuICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiXCI+XFxuXFxuICAgIDx0aXRsZT5BZ2VuY3kgLSBTdGFydCBCb290c3RyYXAgVGhlbWU8L3RpdGxlPlxcblxcbiAgICA8IS0tIEJvb3RzdHJhcCBDb3JlIENTUyAtLT5cXG4gICAgPGxpbmsgaHJlZj1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+XFxuXFxuICAgIDwhLS0gQ3VzdG9tIENTUyAtLT5cXG4gICAgPGxpbmsgaHJlZj1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9jc3MvYWdlbmN5LmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cXG5cXG4gICAgPCEtLSBDdXN0b20gRm9udHMgLS0+XFxuICAgIDxsaW5rIGhyZWY9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIj5cXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCI+XFxuICAgIDxsaW5rIGhyZWY9XFwnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthdXNoYW4rU2NyaXB0XFwnIHJlbD1cXCdzdHlsZXNoZWV0XFwnIHR5cGU9XFwndGV4dC9jc3NcXCc+XFxuICAgIDxsaW5rIGhyZWY9XFwnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURyb2lkK1NlcmlmOjQwMCw3MDAsNDAwaXRhbGljLDcwMGl0YWxpY1xcJyByZWw9XFwnc3R5bGVzaGVldFxcJyB0eXBlPVxcJ3RleHQvY3NzXFwnPlxcbiAgICA8bGluayBocmVmPVxcJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rU2xhYjo0MDAsMTAwLDMwMCw3MDBcXCcgcmVsPVxcJ3N0eWxlc2hlZXRcXCcgdHlwZT1cXCd0ZXh0L2Nzc1xcJz5cXG5cXG4gICAgPCEtLSBIVE1MNSBTaGltIGFuZCBSZXNwb25kLmpzIElFOCBzdXBwb3J0IG9mIEhUTUw1IGVsZW1lbnRzIGFuZCBtZWRpYSBxdWVyaWVzIC0tPlxcbiAgICA8IS0tIFdBUk5JTkc6IFJlc3BvbmQuanMgZG9lc25cXCd0IHdvcmsgaWYgeW91IHZpZXcgdGhlIHBhZ2UgdmlhIGZpbGU6Ly8gLS0+XFxuICAgIDwhLS1baWYgbHQgSUUgOV0+XFxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vb3NzLm1heGNkbi5jb20vbGlicy9odG1sNXNoaXYvMy43LjAvaHRtbDVzaGl2LmpzXCI+PC9zY3JpcHQ+XFxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vb3NzLm1heGNkbi5jb20vbGlicy9yZXNwb25kLmpzLzEuNC4yL3Jlc3BvbmQubWluLmpzXCI+PC9zY3JpcHQ+XFxuICAgIDwhW2VuZGlmXS0tPlxcblxcbjwvaGVhZD5cXG5cXG48Ym9keSBpZD1cInBhZ2UtdG9wXCIgY2xhc3M9XCJpbmRleFwiPlxcblxcbiAgICA8IS0tIE5hdmlnYXRpb24gLS0+XFxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDwhLS0gQnJhbmQgYW5kIHRvZ2dsZSBnZXQgZ3JvdXBlZCBmb3IgYmV0dGVyIG1vYmlsZSBkaXNwbGF5IC0tPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyIHBhZ2Utc2Nyb2xsXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kIHBhZ2Utc2Nyb2xsXCIgaHJlZj1cIiNwYWdlLXRvcFwiPlN0YXJ0IEJvb3RzdHJhcDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8IS0tIENvbGxlY3QgdGhlIG5hdiBsaW5rcywgZm9ybXMsIGFuZCBvdGhlciBjb250ZW50IGZvciB0b2dnbGluZyAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwYWdlLXRvcFwiPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLXNjcm9sbFwiIGhyZWY9XCIjc2VydmljZXNcIj5TZXJ2aWNlczwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLXNjcm9sbFwiIGhyZWY9XCIjcG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2Utc2Nyb2xsXCIgaHJlZj1cIiNhYm91dFwiPkFib3V0PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2Utc2Nyb2xsXCIgaHJlZj1cIiN0ZWFtXCI+VGVhbTwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLXNjcm9sbFwiIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3Q8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwhLS0gLy5uYXZiYXItY29sbGFwc2UgLS0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0gLy5jb250YWluZXItZmx1aWQgLS0+XFxuICAgIDwvbmF2PlxcblxcbiAgICA8IS0tIEhlYWRlciAtLT5cXG4gICAgPGhlYWRlcj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tdGV4dFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tbGVhZC1pblwiPldlbGNvbWUgVG8gT3VyIFN0dWRpbyE8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWhlYWRpbmdcIj5UaGlzIGlzIGFuIEVwaXNvZGUhPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2VydmljZXNcIiBjbGFzcz1cInBhZ2Utc2Nyb2xsIGJ0biBidG4teGxcIj5UZWxsIE1lIE1vcmU8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuXFxuICAgIDwhLS0gU2VydmljZXMgU2VjdGlvbiAtLT5cXG4gICAgPHNlY3Rpb24gaWQ9XCJzZXJ2aWNlc1wiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+U2VydmljZXM8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi1zdWJoZWFkaW5nIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L2gzPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHRleHQtY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYS1zdGFjayBmYS00eFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlIGZhLXN0YWNrLTJ4IHRleHQtcHJpbWFyeVwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNob3BwaW5nLWNhcnQgZmEtc3RhY2stMXggZmEtaW52ZXJzZVwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInNlcnZpY2UtaGVhZGluZ1wiPkUtQ29tbWVyY2U8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1pbmltYSBtYXhpbWUgcXVhbSBhcmNoaXRlY3RvIHF1byBpbnZlbnRvcmUgaGFydW0gZXggbWFnbmksIGRpY3RhIGltcGVkaXQuPC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhLXN0YWNrIGZhLTR4XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaXJjbGUgZmEtc3RhY2stMnggdGV4dC1wcmltYXJ5XCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGFwdG9wIGZhLXN0YWNrLTF4IGZhLWludmVyc2VcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzZXJ2aWNlLWhlYWRpbmdcIj5SZXNwb25zaXZlIERlc2lnbjwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWluaW1hIG1heGltZSBxdWFtIGFyY2hpdGVjdG8gcXVvIGludmVudG9yZSBoYXJ1bSBleCBtYWduaSwgZGljdGEgaW1wZWRpdC48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEtc3RhY2sgZmEtNHhcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNpcmNsZSBmYS1zdGFjay0yeCB0ZXh0LXByaW1hcnlcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1sb2NrIGZhLXN0YWNrLTF4IGZhLWludmVyc2VcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzZXJ2aWNlLWhlYWRpbmdcIj5XZWIgU2VjdXJpdHk8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1pbmltYSBtYXhpbWUgcXVhbSBhcmNoaXRlY3RvIHF1byBpbnZlbnRvcmUgaGFydW0gZXggbWFnbmksIGRpY3RhIGltcGVkaXQuPC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDwhLS0gUG9ydGZvbGlvIEdyaWQgU2VjdGlvbiAtLT5cXG4gICAgPHNlY3Rpb24gaWQ9XCJwb3J0Zm9saW9cIiBjbGFzcz1cImJnLWxpZ2h0LWdyYXlcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPlBvcnRmb2xpbzwvaDI+XFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJzZWN0aW9uLXN1YmhlYWRpbmcgdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvaDM+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IHBvcnRmb2xpby1pdGVtXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb01vZGFsMVwiIGNsYXNzPVwicG9ydGZvbGlvLWxpbmtcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3ZlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cyBmYS0zeFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9yb3VuZGljb25zLnBuZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tY2FwdGlvblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Sb3VuZCBJY29uczwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+R3JhcGhpYyBEZXNpZ248L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtc20tNiBwb3J0Zm9saW8taXRlbVwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9Nb2RhbDJcIiBjbGFzcz1cInBvcnRmb2xpby1saW5rXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3Zlci1jb250ZW50XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMgZmEtM3hcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vc3RhcnR1cC1mcmFtZXdvcmsucG5nXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1jYXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlN0YXJ0dXAgRnJhbWV3b3JrPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5XZWJzaXRlIERlc2lnbjwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IHBvcnRmb2xpby1pdGVtXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb01vZGFsM1wiIGNsYXNzPVwicG9ydGZvbGlvLWxpbmtcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3ZlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cyBmYS0zeFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby90cmVlaG91c2UucG5nXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1jYXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRyZWVob3VzZTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+V2Vic2l0ZSBEZXNpZ248L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtc20tNiBwb3J0Zm9saW8taXRlbVwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9Nb2RhbDRcIiBjbGFzcz1cInBvcnRmb2xpby1saW5rXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3Zlci1jb250ZW50XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMgZmEtM3hcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vZ29sZGVuLnBuZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tY2FwdGlvblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Hb2xkZW48L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPldlYnNpdGUgRGVzaWduPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgcG9ydGZvbGlvLWl0ZW1cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvTW9kYWw1XCIgY2xhc3M9XCJwb3J0Zm9saW8tbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXItY29udGVudFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzIGZhLTN4XCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL2VzY2FwZS5wbmdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWNhcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RXNjYXBlPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5XZWJzaXRlIERlc2lnbjwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IHBvcnRmb2xpby1pdGVtXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb01vZGFsNlwiIGNsYXNzPVwicG9ydGZvbGlvLWxpbmtcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3ZlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cyBmYS0zeFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9kcmVhbXMucG5nXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1jYXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkRyZWFtczwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+V2Vic2l0ZSBEZXNpZ248L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8IS0tIEFib3V0IFNlY3Rpb24gLS0+XFxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPkFib3V0PC9oMj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb24tc3ViaGVhZGluZyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9oMz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ0aW1lbGluZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWltYWdlXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWNpcmNsZSBpbWctcmVzcG9uc2l2ZVwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvYWJvdXQvMS5qcGdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1wYW5lbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWhlYWRpbmdcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+MjAwOS0yMDExPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzdWJoZWFkaW5nXCI+T3VyIEh1bWJsZSBCZWdpbm5pbmdzPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VudCB1dCB2b2x1cHRhdHVtIGVpdXMgc2FwaWVudGUsIHRvdGFtIHJlaWNpZW5kaXMgdGVtcG9yaWJ1cyBxdWkgcXVpYnVzZGFtLCByZWN1c2FuZGFlIHNpdCB2ZXJvIHVuZGUsIHNlZCwgaW5jaWR1bnQgZXQgZWEgcXVvIGRvbG9yZSBsYXVkYW50aXVtIGNvbnNlY3RldHVyITwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWludmVydGVkXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1pbWFnZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1jaXJjbGUgaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL2Fib3V0LzIuanBnXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtcGFuZWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1oZWFkaW5nXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk1hcmNoIDIwMTE8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInN1YmhlYWRpbmdcIj5BbiBBZ2VuY3kgaXMgQm9ybjwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdXQgdm9sdXB0YXR1bSBlaXVzIHNhcGllbnRlLCB0b3RhbSByZWljaWVuZGlzIHRlbXBvcmlidXMgcXVpIHF1aWJ1c2RhbSwgcmVjdXNhbmRhZSBzaXQgdmVybyB1bmRlLCBzZWQsIGluY2lkdW50IGV0IGVhIHF1byBkb2xvcmUgbGF1ZGFudGl1bSBjb25zZWN0ZXR1ciE8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1pbWFnZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1jaXJjbGUgaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL2Fib3V0LzMuanBnXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtcGFuZWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1oZWFkaW5nXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkRlY2VtYmVyIDIwMTI8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInN1YmhlYWRpbmdcIj5UcmFuc2l0aW9uIHRvIEZ1bGwgU2VydmljZTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdXQgdm9sdXB0YXR1bSBlaXVzIHNhcGllbnRlLCB0b3RhbSByZWljaWVuZGlzIHRlbXBvcmlidXMgcXVpIHF1aWJ1c2RhbSwgcmVjdXNhbmRhZSBzaXQgdmVybyB1bmRlLCBzZWQsIGluY2lkdW50IGV0IGVhIHF1byBkb2xvcmUgbGF1ZGFudGl1bSBjb25zZWN0ZXR1ciE8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0aW1lbGluZS1pbnZlcnRlZFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaW1hZ2VcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctY2lyY2xlIGltZy1yZXNwb25zaXZlXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9hYm91dC80LmpwZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLXBhbmVsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaGVhZGluZ1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5KdWx5IDIwMTQ8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInN1YmhlYWRpbmdcIj5QaGFzZSBUd28gRXhwYW5zaW9uPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VudCB1dCB2b2x1cHRhdHVtIGVpdXMgc2FwaWVudGUsIHRvdGFtIHJlaWNpZW5kaXMgdGVtcG9yaWJ1cyBxdWkgcXVpYnVzZGFtLCByZWN1c2FuZGFlIHNpdCB2ZXJvIHVuZGUsIHNlZCwgaW5jaWR1bnQgZXQgZWEgcXVvIGRvbG9yZSBsYXVkYW50aXVtIGNvbnNlY3RldHVyITwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWludmVydGVkXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1pbWFnZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkJlIFBhcnRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+T2YgT3VyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlN0b3J5ITwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDwhLS0gVGVhbSBTZWN0aW9uIC0tPlxcbiAgICA8c2VjdGlvbiBpZD1cInRlYW1cIiBjbGFzcz1cImJnLWxpZ2h0LWdyYXlcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPk91ciBBbWF6aW5nIFRlYW08L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi1zdWJoZWFkaW5nIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L2gzPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tbWVtYmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3RlYW0vMS5qcGdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGVcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+S2F5IEdhcmxhbmQ8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxlYWQgRGVzaWduZXI8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgc29jaWFsLWJ1dHRvbnNcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS10d2l0dGVyXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtbGlua2VkaW5cIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tbWVtYmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3RlYW0vMi5qcGdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGVcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TGFycnkgUGFya2VyPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5MZWFkIE1hcmtldGVyPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIHNvY2lhbC1idXR0b25zXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWxpbmtlZGluXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLW1lbWJlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy90ZWFtLzMuanBnXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkRpYW5hIFBlcnRlcnNlbjwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TGVhZCBEZXZlbG9wZXI8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgc29jaWFsLWJ1dHRvbnNcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS10d2l0dGVyXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtbGlua2VkaW5cIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yIHRleHQtY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhcmdlIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXV0IGVhcXVlLCBsYWJvcmlvc2FtIHZlcml0YXRpcywgcXVvcyBub24gcXVpcyBhZCBwZXJzcGljaWF0aXMsIHRvdGFtIGNvcnBvcmlzIGVhLCBhbGlhcyB1dCB1bmRlLjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8IS0tIENsaWVudHMgQXNpZGUgLS0+XFxuICAgIDxhc2lkZSBjbGFzcz1cImNsaWVudHNcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtc20tNlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvbG9nb3MvZW52YXRvLmpwZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLXNtLTZcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL2xvZ29zL2Rlc2lnbm1vZG8uanBnXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtc20tNlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvbG9nb3MvdGhlbWVmb3Jlc3QuanBnXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtc20tNlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvbG9nb3MvY3JlYXRpdmUtbWFya2V0LmpwZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvYXNpZGU+XFxuICAgIFxcbiAgICA8IS0tIENvbnRhY3QgU2VjdGlvbiAtLT5cXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5Db250YWN0IFVzPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb24tc3ViaGVhZGluZyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9oMz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwic2VudE1lc3NhZ2VcIiBpZD1cImNvbnRhY3RGb3JtXCIgbm92YWxpZGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lICpcIiBpZD1cIm5hbWVcIiByZXF1aXJlZCBkYXRhLXZhbGlkYXRpb24tcmVxdWlyZWQtbWVzc2FnZT1cIlBsZWFzZSBlbnRlciB5b3VyIG5hbWUuXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyXCI+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCAqXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkIGRhdGEtdmFsaWRhdGlvbi1yZXF1aXJlZC1tZXNzYWdlPVwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcy5cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2sgdGV4dC1kYW5nZXJcIj48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBQaG9uZSAqXCIgaWQ9XCJwaG9uZVwiIHJlcXVpcmVkIGRhdGEtdmFsaWRhdGlvbi1yZXF1aXJlZC1tZXNzYWdlPVwiUGxlYXNlIGVudGVyIHlvdXIgcGhvbmUgbnVtYmVyLlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlclwiPjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlICpcIiBpZD1cIm1lc3NhZ2VcIiByZXF1aXJlZCBkYXRhLXZhbGlkYXRpb24tcmVxdWlyZWQtbWVzc2FnZT1cIlBsZWFzZSBlbnRlciBhIG1lc3NhZ2UuXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2sgdGV4dC1kYW5nZXJcIj48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3VjY2Vzc1wiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXhsXCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxmb290ZXI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0ICZjb3B5OyBZb3VyIFdlYnNpdGUgMjAxNDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgc29jaWFsLWJ1dHRvbnNcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWxpbmtlZGluXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgcXVpY2tsaW5rc1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByaXZhY3kgUG9saWN5PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VGVybXMgb2YgVXNlPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Zvb3Rlcj5cXG5cXG4gICAgPCEtLSBQb3J0Zm9saW8gTW9kYWxzIC0tPlxcbiAgICA8IS0tIFVzZSB0aGUgbW9kYWxzIGJlbG93IHRvIHNob3djYXNlIGRldGFpbHMgYWJvdXQgeW91ciBwb3J0Zm9saW8gcHJvamVjdHMhIC0tPlxcblxcbiAgICA8IS0tIFBvcnRmb2xpbyBNb2RhbCAxIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLW1vZGFsIG1vZGFsIGZhZGVcIiBpZD1cInBvcnRmb2xpb01vZGFsMVwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1tb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJsXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQcm9qZWN0IERldGFpbHMgR28gSGVyZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlByb2plY3QgTmFtZTwvaDI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1pbnRybyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vcm91bmRpY29ucy1mcmVlLnBuZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2UgdGhpcyBhcmVhIHRvIGRlc2NyaWJlIHlvdXIgcHJvamVjdC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVzdCBibGFuZGl0aWlzIGRvbG9yZW0gY3VscGEgaW5jaWR1bnQgbWludXMgZGlnbmlzc2ltb3MgZGVzZXJ1bnQgcmVwZWxsYXQgYXBlcmlhbSBxdWFzaSBzdW50IG9mZmljaWEgZXhwZWRpdGEgYmVhdGFlIGN1cGlkaXRhdGUsIG1haW9yZXMgcmVwdWRpYW5kYWUsIG5vc3RydW0sIHJlaWNpZW5kaXMgZmFjZXJlIG5lbW8hPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2FudCB0aGVzZSBpY29ucyBpbiB0aGlzIHBvcnRmb2xpbyBpdGVtIHNhbXBsZT88L3N0cm9uZz5Zb3UgY2FuIGRvd25sb2FkIDYwIG9mIHRoZW0gZm9yIGZyZWUsIGNvdXJ0ZXN5IG9mIDxhIGhyZWY9XCJodHRwczovL2dldGRwZC5jb20vY2FydC9ob3BsaW5rLzE4MDc2P3JlZmVycmVyPWJ2Ym80a2F4NWs4b2djXCI+Um91bmRJY29ucy5jb208L2E+LCBvciB5b3UgY2FuIHB1cmNoYXNlIHRoZSAxNTAwIGljb24gc2V0IDxhIGhyZWY9XCJodHRwczovL2dldGRwZC5jb20vY2FydC9ob3BsaW5rLzE4MDc2P3JlZmVycmVyPWJ2Ym80a2F4NWs4b2djXCI+aGVyZTwvYT4uPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRhdGU6IEp1bHkgMjAxNDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2xpZW50OiBSb3VuZCBJY29uczwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2F0ZWdvcnk6IEdyYXBoaWMgRGVzaWduPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+IENsb3NlIFByb2plY3Q8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPCEtLSBQb3J0Zm9saW8gTW9kYWwgMiAtLT5cXG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1tb2RhbCBtb2RhbCBmYWRlXCIgaWQ9XCJwb3J0Zm9saW9Nb2RhbDJcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtbW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibHJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJybFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9qZWN0IEhlYWRpbmc8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0taW50cm8gdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL3N0YXJ0dXAtZnJhbWV3b3JrLXByZXZpZXcucG5nXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCJodHRwOi8vZGVzaWdubW9kby5jb20vc3RhcnR1cC8/dT03ODdcIj5TdGFydHVwIEZyYW1ld29yazwvYT4gaXMgYSB3ZWJzaXRlIGJ1aWxkZXIgZm9yIHByb2Zlc3Npb25hbHMuIFN0YXJ0dXAgRnJhbWV3b3JrIGNvbnRhaW5zIGNvbXBvbmVudHMgYW5kIGNvbXBsZXggYmxvY2tzIChQU0QrSFRNTCBCb290c3RyYXAgdGhlbWVzIGFuZCB0ZW1wbGF0ZXMpIHdoaWNoIGNhbiBlYXNpbHkgYmUgaW50ZWdyYXRlZCBpbnRvIGFsbW9zdCBhbnkgZGVzaWduLiBBbGwgb2YgdGhlc2UgY29tcG9uZW50cyBhcmUgbWFkZSBpbiB0aGUgc2FtZSBzdHlsZSwgYW5kIGNhbiBlYXNpbHkgYmUgaW50ZWdyYXRlZCBpbnRvIHByb2plY3RzLCBhbGxvd2luZyB5b3UgdG8gY3JlYXRlIGh1bmRyZWRzIG9mIHNvbHV0aW9ucyBmb3IgeW91ciBmdXR1cmUgcHJvamVjdHMuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIHByZXZpZXcgU3RhcnR1cCBGcmFtZXdvcmsgPGEgaHJlZj1cImh0dHA6Ly9kZXNpZ25tb2RvLmNvbS9zdGFydHVwLz91PTc4N1wiPmhlcmU8L2E+LjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+IENsb3NlIFByb2plY3Q8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPCEtLSBQb3J0Zm9saW8gTW9kYWwgMyAtLT5cXG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1tb2RhbCBtb2RhbCBmYWRlXCIgaWQ9XCJwb3J0Zm9saW9Nb2RhbDNcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtbW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibHJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJybFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUHJvamVjdCBEZXRhaWxzIEdvIEhlcmUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9qZWN0IE5hbWU8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0taW50cm8gdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL3RyZWVob3VzZS1wcmV2aWV3LnBuZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UcmVlaG91c2UgaXMgYSBmcmVlIFBTRCB3ZWIgdGVtcGxhdGUgYnVpbHQgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L01hdGhhdmFuSmF5YVwiPk1hdGhhdmFuIEpheWE8L2E+LiBUaGlzIGlzIGJyaWdodCBhbmQgc3BhY2lvdXMgZGVzaWduIHBlcmZlY3QgZm9yIHBlb3BsZSBvciBzdGFydHVwIGNvbXBhbmllcyBsb29raW5nIHRvIHNob3djYXNlIHRoZWlyIGFwcHMgb3Igb3RoZXIgcHJvamVjdHMuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGRvd25sb2FkIHRoZSBQU0QgdGVtcGxhdGUgaW4gdGhpcyBwb3J0Zm9saW8gc2FtcGxlIGl0ZW0gYXQgPGEgaHJlZj1cImh0dHA6Ly9mcmVlYmllc3hwcmVzcy5jb20vZ2FsbGVyeS90cmVlaG91c2UtZnJlZS1wc2Qtd2ViLXRlbXBsYXRlL1wiPkZyZWViaWVzWHByZXNzLmNvbTwvYT4uPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4gQ2xvc2UgUHJvamVjdDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIFBvcnRmb2xpbyBNb2RhbCA0IC0tPlxcbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLW1vZGFsIG1vZGFsIGZhZGVcIiBpZD1cInBvcnRmb2xpb01vZGFsNFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1tb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJsXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQcm9qZWN0IERldGFpbHMgR28gSGVyZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlByb2plY3QgTmFtZTwvaDI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1pbnRybyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vZ29sZGVuLXByZXZpZXcucG5nXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN0YXJ0IEJvb3RzdHJhcFxcJ3MgQWdlbmN5IHRoZW1lIGlzIGJhc2VkIG9uIEdvbGRlbiwgYSBmcmVlIFBTRCB3ZWJzaXRlIHRlbXBsYXRlIGJ1aWx0IGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9NYXRoYXZhbkpheWFcIj5NYXRoYXZhbiBKYXlhPC9hPi4gR29sZGVuIGlzIGEgbW9kZXJuIGFuZCBjbGVhbiBvbmUgcGFnZSB3ZWIgdGVtcGxhdGUgdGhhdCB3YXMgbWFkZSBleGNsdXNpdmVseSBmb3IgQmVzdCBQU0QgRnJlZWJpZXMuIFRoaXMgdGVtcGxhdGUgaGFzIGEgZ3JlYXQgcG9ydGZvbGlvLCB0aW1lbGluZSwgYW5kIG1lZXQgeW91ciB0ZWFtIHNlY3Rpb25zIHRoYXQgY2FuIGJlIGVhc2lseSBtb2RpZmllZCB0byBmaXQgeW91ciBuZWVkcy48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gZG93bmxvYWQgdGhlIFBTRCB0ZW1wbGF0ZSBpbiB0aGlzIHBvcnRmb2xpbyBzYW1wbGUgaXRlbSBhdCA8YSBocmVmPVwiaHR0cDovL2ZyZWViaWVzeHByZXNzLmNvbS9nYWxsZXJ5L2dvbGRlbi1mcmVlLW9uZS1wYWdlLXdlYi10ZW1wbGF0ZS9cIj5GcmVlYmllc1hwcmVzcy5jb208L2E+LjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+IENsb3NlIFByb2plY3Q8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPCEtLSBQb3J0Zm9saW8gTW9kYWwgNSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1tb2RhbCBtb2RhbCBmYWRlXCIgaWQ9XCJwb3J0Zm9saW9Nb2RhbDVcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtbW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibHJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJybFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUHJvamVjdCBEZXRhaWxzIEdvIEhlcmUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9qZWN0IE5hbWU8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0taW50cm8gdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL2VzY2FwZS1wcmV2aWV3LnBuZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Fc2NhcGUgaXMgYSBmcmVlIFBTRCB3ZWIgdGVtcGxhdGUgYnVpbHQgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L01hdGhhdmFuSmF5YVwiPk1hdGhhdmFuIEpheWE8L2E+LiBFc2NhcGUgaXMgYSBvbmUgcGFnZSB3ZWIgdGVtcGxhdGUgdGhhdCB3YXMgZGVzaWduZWQgd2l0aCBhZ2VuY2llcyBpbiBtaW5kLiBUaGlzIHRlbXBsYXRlIGlzIGlkZWFsIGZvciB0aG9zZSBsb29raW5nIGZvciBhIHNpbXBsZSBvbmUgcGFnZSBzb2x1dGlvbiB0byBkZXNjcmliZSB5b3VyIGJ1c2luZXNzIGFuZCBvZmZlciB5b3VyIHNlcnZpY2VzLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IGNhbiBkb3dubG9hZCB0aGUgUFNEIHRlbXBsYXRlIGluIHRoaXMgcG9ydGZvbGlvIHNhbXBsZSBpdGVtIGF0IDxhIGhyZWY9XCJodHRwOi8vZnJlZWJpZXN4cHJlc3MuY29tL2dhbGxlcnkvZXNjYXBlLW9uZS1wYWdlLXBzZC13ZWItdGVtcGxhdGUvXCI+RnJlZWJpZXNYcHJlc3MuY29tPC9hPi48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPiBDbG9zZSBQcm9qZWN0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0gUG9ydGZvbGlvIE1vZGFsIDYgLS0+XFxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tbW9kYWwgbW9kYWwgZmFkZVwiIGlkPVwicG9ydGZvbGlvTW9kYWw2XCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLW1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbGctb2Zmc2V0LTJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFByb2plY3QgRGV0YWlscyBHbyBIZXJlIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdCBOYW1lPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWludHJvIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9kcmVhbXMtcHJldmlldy5wbmdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHJlYW1zIGlzIGEgZnJlZSBQU0Qgd2ViIHRlbXBsYXRlIGJ1aWx0IGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9NYXRoYXZhbkpheWFcIj5NYXRoYXZhbiBKYXlhPC9hPi4gRHJlYW1zIGlzIGEgbW9kZXJuIG9uZSBwYWdlIHdlYiB0ZW1wbGF0ZSBkZXNpZ25lZCBmb3IgYWxtb3N0IGFueSBwdXJwb3NlLiBJdOKAmXMgYSBiZWF1dGlmdWwgdGVtcGxhdGUgdGhhdOKAmXMgZGVzaWduZWQgd2l0aCB0aGUgQm9vdHN0cmFwIGZyYW1ld29yayBpbiBtaW5kLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IGNhbiBkb3dubG9hZCB0aGUgUFNEIHRlbXBsYXRlIGluIHRoaXMgcG9ydGZvbGlvIHNhbXBsZSBpdGVtIGF0IDxhIGhyZWY9XCJodHRwOi8vZnJlZWJpZXN4cHJlc3MuY29tL2dhbGxlcnkvZHJlYW1zLWZyZWUtb25lLXBhZ2Utd2ViLXRlbXBsYXRlL1wiPkZyZWViaWVzWHByZXNzLmNvbTwvYT4uPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4gQ2xvc2UgUHJvamVjdDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIGpRdWVyeSAtLT5cXG4gICAgPHNjcmlwdCBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvanMvanF1ZXJ5LmpzXCI+PC9zY3JpcHQ+XFxuXFxuICAgIDwhLS0gQm9vdHN0cmFwIENvcmUgSmF2YVNjcmlwdCAtLT5cXG4gICAgPHNjcmlwdCBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxcblxcbiAgICA8IS0tIFBsdWdpbiBKYXZhU2NyaXB0IC0tPlxcbiAgICA8c2NyaXB0IHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9qcy9qcXVlcnkuZWFzaW5nLm1pbi5qc1wiPjwvc2NyaXB0PlxcbiAgICA8c2NyaXB0IHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9qcy9jbGFzc2llLmpzXCI+PC9zY3JpcHQ+XFxuICAgIDxzY3JpcHQgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2pzL2NicEFuaW1hdGVkSGVhZGVyLmpzXCI+PC9zY3JpcHQ+XFxuXFxuICAgIDwhLS0gQ29udGFjdCBGb3JtIEphdmFTY3JpcHQgLS0+XFxuICAgIDxzY3JpcHQgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2pzL2pxQm9vdHN0cmFwVmFsaWRhdGlvbi5qc1wiPjwvc2NyaXB0PlxcbiAgICA8c2NyaXB0IHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9qcy9jb250YWN0X21lLmpzXCI+PC9zY3JpcHQ+XFxuXFxuICAgIDwhLS0gQ3VzdG9tIFRoZW1lIEphdmFTY3JpcHQgLS0+XFxuICAgIDxzY3JpcHQgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2pzL2FnZW5jeS5qc1wiPjwvc2NyaXB0PlxcblxcbjwvYm9keT5cXG5cXG48L2h0bWw+XFxuJztcblxufVxucmV0dXJuIF9fcFxufTtcbnRoaXNbXCJGYXN0Q2FzdFwiXVtcInRlbXBsYXRlc1wiXVtcInJzc1wiXSA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJywgX19lID0gXy5lc2NhcGUsIF9faiA9IEFycmF5LnByb3RvdHlwZS5qb2luO1xuZnVuY3Rpb24gcHJpbnQoKSB7IF9fcCArPSBfX2ouY2FsbChhcmd1bWVudHMsICcnKSB9XG53aXRoIChvYmopIHtcbl9fcCArPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHJzcyB4bWxuczphdG9tPVwiaHR0cDovL3d3dy53My5vcmcvMjAwNS9BdG9tXCIgeG1sbnM6aXR1bmVzPVwiaHR0cDovL3d3dy5pdHVuZXMuY29tL2R0ZHMvcG9kY2FzdC0xLjAuZHRkXCIgdmVyc2lvbj1cIjIuMFwiPlxcbiAgPGNoYW5uZWw+XFxuICAgIDxhdG9tOmxpbmsgaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9mZWVkLnJzc1wiIHJlbD1cInNlbGZcIiB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiLz5cXG4gICAgPHRpdGxlPicgK1xuX19lKCBwb2RjYXN0LnRpdGxlICkgK1xuJzwvdGl0bGU+XFxuICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9pbmRleC5odG1sPC9saW5rPlxcbiAgICA8cHViRGF0ZT4nICtcbl9fZSggcmZjMjgyMigpICkgK1xuJzwvcHViRGF0ZT5cXG4gICAgPGxhc3RCdWlsZERhdGU+JyArXG5fX2UoIHJmYzI4MjIoKSApICtcbic8L2xhc3RCdWlsZERhdGU+XFxuICAgIDx0dGw+NjA8L3R0bD5cXG4gICAgPGxhbmd1YWdlPmVuPC9sYW5ndWFnZT5cXG4gICAgPGNvcHlyaWdodD5BbGwgcmlnaHRzIHJlc2VydmVkPC9jb3B5cmlnaHQ+XFxuICAgIDx3ZWJNYXN0ZXI+JyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbidAZmFzdC1jYXN0Lm5ldCAoJyArXG5fX2UoIHBvZGNhc3QuYXV0aG9yICkgK1xuJyk8L3dlYk1hc3Rlcj5cXG4gICAgPGRlc2NyaXB0aW9uPicgK1xuX19lKCBwb2RjYXN0LmRlc2NyaXB0aW9uICkgK1xuJzwvZGVzY3JpcHRpb24+XFxuICAgIDxpdHVuZXM6bmV3LWZlZWQtdXJsPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9mZWVkLnJzczwvaXR1bmVzOm5ldy1mZWVkLXVybD5cXG4gICAgPGl0dW5lczpzdWJ0aXRsZT4nICtcbl9fZSggcG9kY2FzdC5zdWJ0aXRsZSApICtcbic8L2l0dW5lczpzdWJ0aXRsZT5cXG4gICAgPGl0dW5lczpvd25lcj5cXG4gICAgICA8aXR1bmVzOm5hbWU+JyArXG5fX2UoIHBvZGNhc3QuYXV0aG9yICkgK1xuJzwvaXR1bmVzOm5hbWU+XFxuICAgICAgPGl0dW5lczplbWFpbD4nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJ0BmYXN0LWNhc3QubmV0PC9pdHVuZXM6ZW1haWw+XFxuICAgIDwvaXR1bmVzOm93bmVyPlxcbiAgICA8aXR1bmVzOmF1dGhvcj4nICtcbl9fZSggcG9kY2FzdC5hdXRob3IgKSArXG4nPC9pdHVuZXM6YXV0aG9yPlxcbiAgICA8aXR1bmVzOmV4cGxpY2l0PicgK1xuX19lKCBwb2RjYXN0LmlzX2V4cGxpY2l0ID8gJ3llcycgOiAnbm8nICkgK1xuJzwvaXR1bmVzOmV4cGxpY2l0PlxcbiAgICA8aXR1bmVzOmltYWdlIGhyZWY9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvbG9nby5qcGdcIi8+XFxuICAgIDxpbWFnZT5cXG4gICAgICA8dXJsPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9sb2dvLmpwZzwvdXJsPlxcbiAgICAgIDx0aXRsZT4nICtcbl9fZSggcG9kY2FzdC50aXRsZSApICtcbic8L3RpdGxlPlxcbiAgICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9pbmRleC5odG1sPC9saW5rPlxcbiAgICA8L2ltYWdlPlxcbiAgICAnO1xuIF8uZWFjaChbJ3ByaW1hcnlfY2F0ZWdvcnknLCAnc2Vjb25kYXJ5X2NhdGVnb3J5J10sIGZ1bmN0aW9uKGspIHsgO1xuX19wICs9ICdcXG4gICAgICAnO1xuIHZhciBwYXJ0cyA9IHBvZGNhc3Rba10uc3BsaXQoL1xcfC8pOyA7XG5fX3AgKz0gJ1xcbiAgXFx0XFx0PGl0dW5lczpjYXRlZ29yeSB0ZXh0PVwiJyArXG5fX2UoIHBhcnRzWzBdICkgK1xuJ1wiPlxcbiAgXFx0XFx0XFx0JztcbiBpZihwYXJ0cy5sZW5ndGg+MSkgeyA7XG5fX3AgKz0gJ1xcbiAgXFx0XFx0XFx0XFx0PGl0dW5lczpjYXRlZ29yeSB0ZXh0PVwiJyArXG5fX2UoIHBhcnRzWzFdICkgK1xuJ1wiLz5cXG4gIFxcdFxcdFxcdCc7XG4gfSA7XG5fX3AgKz0gJ1xcbiAgXFx0XFx0PC9pdHVuZXM6Y2F0ZWdvcnk+XFxuICAgICc7XG4gfSkgO1xuX19wICs9ICdcXG5cXHRcXHQnO1xuIF8uZWFjaChvcmRlckJ5TWFnaWMocG9kY2FzdC5lcGlzb2RlcyksIGZ1bmN0aW9uKGVwaXNvZGUpIHtcbiAgICAgICAgaWYoIWVwaXNvZGUucHVibGlzaGVkX2F0KSByZXR1cm47XG4gICAgICAgIDtcbl9fcCArPSAnXFxuXFx0XFx0ICAgIDxpdGVtPlxcblxcdFxcdCAgICAgIDxndWlkIGlzUGVybWFMaW5rPVwiZmFsc2VcIj4nICtcbl9fZSggZXBpc29kZS5ndWlkICkgK1xuJzwvZ3VpZD5cXG5cXHRcXHQgICAgICA8dGl0bGU+JyArXG5fX2UoIHNwcmludGYoXCIlMDNkXCIsIGVwaXNvZGUubnVtYmVyKSApICtcbicgLSAnICtcbl9fZSggZXBpc29kZS50aXRsZSApICtcbic8L3RpdGxlPlxcblxcdFxcdCAgICAgIDxwdWJEYXRlPicgK1xuX19lKCByZmMyODIyKGVwaXNvZGUucHVibGlzaGVkX2F0KSApICtcbic8L3B1YkRhdGU+XFxuXFx0XFx0ICAgICAgPGxpbms+aHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2VwaXNvZGVzLycgK1xuX19lKCBlcGlzb2RlLnNsdWcgKSArXG4nPC9saW5rPlxcblxcdFxcdCAgICAgIDxpdHVuZXM6ZHVyYXRpb24+JyArXG5fX2UoIGVwaXNvZGUuZHVyYXRpb25fbXMudG9ISE1NU1MoKSApICtcbic8L2l0dW5lczpkdXJhdGlvbj5cXG5cXHRcXHQgICAgICA8aXR1bmVzOmF1dGhvcj5CZW4gQWxsZnJlZTwvaXR1bmVzOmF1dGhvcj5cXG5cXHRcXHQgICAgICA8aXR1bmVzOmV4cGxpY2l0PnllczwvaXR1bmVzOmV4cGxpY2l0PlxcblxcdFxcdCAgICAgIDxpdHVuZXM6c3VtbWFyeT4nICtcbl9fZSggZXBpc29kZS5kZXNjcmlwdGlvbiApICtcbic8L2l0dW5lczpzdW1tYXJ5PlxcblxcdFxcdCAgICAgIDxpdHVuZXM6c3VidGl0bGU+JyArXG5fX2UoIGVwaXNvZGUuZGVzY3JpcHRpb24gKSArXG4nPC9pdHVuZXM6c3VidGl0bGU+XFxuXFx0XFx0ICAgICAgPGRlc2NyaXB0aW9uPicgK1xuX19lKCBlcGlzb2RlLmRlc2NyaXB0aW9uICkgK1xuJzwvZGVzY3JpcHRpb24+XFxuXFx0XFx0ICAgICAgPGVuY2xvc3VyZSB0eXBlPVwiYXVkaW8vbXA0XCIgdXJsPVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2VwaXNvZGVzLycgK1xuX19lKCBlcGlzb2RlLnNsdWcgKSArXG4nLycgK1xuX19lKCBlcGlzb2RlLnNsdWcgKSArXG4nLm00YVwiIGxlbmd0aD1cIicgK1xuX19lKCBlcGlzb2RlLmxlbmd0aF9ieXRlcyApICtcbidcIi8+XFxuXFx0XFx0ICAgICAgPGl0dW5lczppbWFnZSBocmVmPVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2xvZ28uanBnXCIvPlxcblxcdFxcdCAgICA8L2l0ZW0+XFxuXFx0XFx0JztcbiB9KSA7XG5fX3AgKz0gJ1xcbiAgPC9jaGFubmVsPlxcbjwvcnNzPic7XG5cbn1cbnJldHVybiBfX3Bcbn07Iiwid2luZG93LmNhdGVnb3JpZXMgPVxuICBcIkFydHNcIjpbXG4gICAgXCJEZXNpZ25cIlxuICAgIFwiRmFzaGlvbiAmIEJlYXV0eVwiXG4gICAgXCJGb29kXCJcbiAgICBcIkxpdGVyYXR1cmVcIlxuICAgIFwiUGVyZm9ybWluZyBBcnRzXCJcbiAgICBcIlZpc3VhbCBBcnRzXCJdXG4gIFwiQnVzaW5lc3NcIjpbXG4gICAgXCJCdXNpbmVzcyBOZXdzXCJcbiAgICBcIkNhcmVlcnNcIlxuICAgIFwiSW52ZXN0aW5nXCJcbiAgICBcIk1hbmFnZW1lbnQgJiBNYXJrZXRpbmdcIlxuICAgIFwiU2hvcHBpbmdcIl1cbiAgXCJDb21lZHlcIjpbXVxuICBcIkVkdWNhdGlvblwiOltcbiAgICBcIkVkdWNhdGlvbmFsIFRlY2hub2xvZ3lcIlxuICAgIFwiSGlnaGVyIEVkdWNhdGlvblwiXG4gICAgXCJLLTEyXCJcbiAgICBcIkxhbmd1YWdlIENvdXJzZXNcIlxuICAgIFwiVHJhaW5pbmdcIl1cbiAgXCJHYW1lcyAmIEhvYmJpZXNcIjpbXG4gICAgXCJBdXRvbW90aXZlXCJcbiAgICBcIkF2aWF0aW9uXCJcbiAgICBcIkhvYmJpZXNcIlxuICAgIFwiT3RoZXIgR2FtZXNcIlxuICAgIFwiVmlkZW8gR2FtZXNcIl1cbiAgXCJHb3Zlcm5tZW50ICYgT3JnYW5pemF0aW9uc1wiOltcbiAgICBcIkxvY2FsXCJcbiAgICBcIk5hdGlvbmFsXCJcbiAgICBcIk5vbi1Qcm9maXRcIlxuICAgIFwiUmVnaW9uYWxcIl1cbiAgXCJIZWFsdGhcIjpbXG4gICAgXCJBbHRlcm5hdGl2ZSBIZWFsdGhcIlxuICAgIFwiRml0bmVzcyAmIE51dHJpdGlvblwiXG4gICAgXCJTZWxmLUhlbHBcIlxuICAgIFwiU2V4dWFsaXR5XCJdXG4gIFwiS2lkcyAmIEZhbWlseVwiOltdXG4gIFwiTXVzaWNcIjpbXVxuICBcIk5ld3MgJiBQb2xpdGljc1wiOltdXG4gIFwiUmVsaWdpb24gJiBTcGlyaXR1YWxpdHlcIjpbXG4gICAgXCJCdWRkaGlzbVwiXG4gICAgXCJDaHJpc3RpYW5pdHlcIlxuICAgIFwiSGluZHVpc21cIlxuICAgIFwiSXNsYW1cIlxuICAgIFwiSnVkYWlzbVwiXG4gICAgXCJPdGhlclwiXG4gICAgXCJTcGlyaXR1YWxpdHlcIl1cbiAgXCJTY2llbmNlICYgTWVkaWNpbmVcIjpbXG4gICAgXCJNZWRpY2luZVwiXG4gICAgXCJOYXR1cmFsIFNjaWVuY2VzXCJcbiAgICBcIlNvY2lhbCBTY2llbmNlc1wiXVxuICBcIlNvY2lldHkgJiBDdWx0dXJlXCI6W1xuICAgIFwiSGlzdG9yeVwiXG4gICAgXCJQZXJzb25hbCBKb3VybmFsc1wiXG4gICAgXCJQaGlsb3NvcGh5XCJcbiAgICBcIlBsYWNlcyAmIFRyYXZlbFwiXVxuICBcIlNwb3J0cyAmIFJlY3JlYXRpb25cIjpbXG4gICAgXCJBbWF0ZXVyXCJcbiAgICBcIkNvbGxlZ2UgJiBIaWdoIFNjaG9vbFwiXG4gICAgXCJPdXRkb29yXCJcbiAgICBcIlByb2Zlc3Npb25hbFwiXVxuICBcIlRlY2hub2xvZ3lcIjpbXG4gICAgXCJHYWRnZXRzXCJcbiAgICBcIlRlY2ggTmV3c1wiXG4gICAgXCJQb2RjYXN0aW5nXCJcbiAgICBcIlNvZnR3YXJlIEhvdy1Ub1wiXVxuICBcIlRWICYgRmlsbVwiOltdXG4gICAgIiwiU3RyaW5nOjpzbHVnaWZ5ID0gLT5cbiAgQHRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpLnJlcGxhY2UoL1teXFx3XFwtXSsvZywgJycpLnJlcGxhY2UoL1xcLVxcLSsvZywgJy0nKS5yZXBsYWNlKC9eLSsvLCAnJykucmVwbGFjZSAvLSskLywgJydcbiAgIyBUcmltIC0gZnJvbSBlbmQgb2YgdGV4dFxuXG5OdW1iZXI6OnRvSEhNTVNTID0gLT5cbiAgc2hvd19tcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwIGFuZCBhcmd1bWVudHNbMF1cbiAgbXNfbnVtID0gTWF0aC5mbG9vcih0aGlzKVxuICBob3VycyA9IE1hdGguZmxvb3IobXNfbnVtIC8gMzYwMDAwMClcbiAgbWludXRlcyA9IE1hdGguZmxvb3IoKG1zX251bSAtIChob3VycyAqIDM2MDAwMDApKSAvIDYwMDAwKVxuICBzZWNvbmRzID0gTWF0aC5mbG9vcigobXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkgLSAobWludXRlcyAqIDYwMDAwKSkgLyAxMDAwKVxuICBtcyA9IG1zX251bSAtIChob3VycyAqIDM2MDAwMDApIC0gKG1pbnV0ZXMgKiA2MDAwMCkgLSAoc2Vjb25kcyAqIDEwMDApXG4gIHRpbWUgPSBzcHJpbnRmKCclMDJkOiUwMmQ6JTAyZCcsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKVxuICBpZiBzaG93X21zXG4gICAgdGltZSArPSBzcHJpbnRmKCcuJTAzZCcsIG1zKVxuICB0aW1lXG5cbk51bWJlcjo6aHVtYW5pemUgPSAtPlxuICBtc19udW0gPSBNYXRoLmZsb29yKHRoaXMpXG4gIGhvdXJzID0gTWF0aC5mbG9vcihtc19udW0gLyAzNjAwMDAwKVxuICBtaW51dGVzID0gTWF0aC5mbG9vcigobXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkpIC8gNjAwMDApXG4gIHNlY29uZHMgPSBNYXRoLmZsb29yKChtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSAtIChtaW51dGVzICogNjAwMDApKSAvIDEwMDApXG4gIG1zID0gbXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkgLSAobWludXRlcyAqIDYwMDAwKSAtIChzZWNvbmRzICogMTAwMClcbiAgdGltZSA9ICcnXG4gIGlmIGhvdXJzXG4gICAgdGltZSA9IHNwcmludGYoJyVkaCcsIGhvdXJzKVxuICBpZiBtaW51dGVzXG4gICAgdGltZSArPSBzcHJpbnRmKCclZG0nLCBtaW51dGVzKVxuICB0aW1lICs9IHNwcmludGYoJyVkcycsIE1hdGguY2VpbChzZWNvbmRzICsgbXMgLyAxMDAwLjApKVxuICB0aW1lXG5cblN0cmluZzo6c3ByaW50ZiA9IC0+XG4gIHNwcmludGYuYXBwbHkgdGhpcywgdGhpcywgYXJndW1lbnRzXG5cbndpbmRvdy5yZmMyODIyID0gKGRhdGUpLT5cbiAgZGF0ZSA9IGlmICFkYXRlIG9yIGRhdGUubmFtZSA9PSAnZGF0ZXRpbWUnIHRoZW4gbW9tZW50KCkgZWxzZSBkYXRlXG4gIG1vbWVudChkYXRlKS5mb3JtYXQgJ2RkZCwgREQgTU1NIFlZWVkgSEg6bW06c3MgWlonXG4gIFxud2luZG93Lm9yZGVyQnlNYWdpYyA9IChoYXNoKSAtPlxuICBhcnJheSA9IFtdXG4gIE9iamVjdC5rZXlzKGhhc2gpLmZvckVhY2ggKGtleSkgLT5cbiAgICBhcnJheS5wdXNoIGhhc2hba2V5XVxuICAgIHJldHVyblxuICAjIGFwcGx5IGEgY3VzdG9tIHNvcnRpbmcgZnVuY3Rpb25cbiAgYXJyYXkuc29ydCAoYSwgYikgLT5cbiAgICBpZiBhLnB1Ymxpc2hlZF9hdCBhbmQgIWIucHVibGlzaGVkX2F0XG4gICAgICByZXR1cm4gMVxuICAgIGlmICFhLnB1Ymxpc2hlZF9hdCBhbmQgYi5wdWJsaXNoZWRfYXRcbiAgICAgIHJldHVybiAtMVxuICAgICMgRWl0aGVyIGJvdGggYXJlIHB1Ymxpc2hlZCBvciBuZWl0aGVyIGlzIHB1Ymxpc2hlZFxuICAgIGlmIGEucHVibGlzaGVkX2F0IGFuZCBiLnB1Ymxpc2hlZF9hdFxuICAgICAgcmV0dXJuIGlmIGEucHVibGlzaGVkX2F0ID4gYi5wdWJsaXNoZWRfYXQgdGhlbiAtMSBlbHNlIDFcbiAgICBpZiBhLnJlY29yZGVkX2F0ID4gYi5yZWNvcmRlZF9hdCB0aGVuIC0xIGVsc2UgMVxuICBhcnJheVxuICAiLCJjbGFzcyBSZWNvcmRlclxuICBjb25zdHJ1Y3RvcjogKEBmbmFtZSwgb3B0aW9ucyktPlxuICAgIGRlZmF1bHRfb3B0aW9ucyA9XG4gICAgICBvblNjcnViVXBkYXRlOiAobXMpLT5cbiAgICAgIG9uRHVyYXRpb25VcGRhdGU6IChtcyktPlxuICAgICAgb25SZWNvcmRTdGFydDogLT5cbiAgICAgIG9uUmVjb3JkU3RvcDogLT5cbiAgICAgIG9uQXVkaW9FcnJvcjogLT5cbiAgICAgIG9uUGxheVN0YXJ0OiAtPlxuICAgICAgb25QbGF5U3RvcDogLT5cbiAgICAgIG9uRXZlbnQ6IChuYW1lLGFyZ3MuLi4pLT5cbiAgICAgIGRlYnVnOiBmYWxzZVxuICAgIEBvcHRpb25zID0gYW5ndWxhci5leHRlbmQoZGVmYXVsdF9vcHRpb25zLCBvcHRpb25zKVxuICAgIEBzY3J1Yl9wb2ludF9tcyA9IDBcbiAgICBAc3RvcCgpXG4gICAgQGdldF9kdXJhdGlvbigpXG4gICAgXG4gIGxvZzogKGFyZ3MuLi4pPT5cbiAgICByZXR1cm4gdW5sZXNzIEBvcHRpb25zLmRlYnVnXG4gICAgY29uc29sZS5sb2cuYXBwbHkoQCwgYXJncylcblxuICBldmVudDogKG5hbWUsYXJncy4uLikgPT5cbiAgICBAbG9nKFwiZXZlbnRcIiwgbmFtZSwgYXJncylcbiAgICBAb3B0aW9uc1tuYW1lXS5hcHBseShALGFyZ3MpXG4gICAgQG9wdGlvbnMub25FdmVudChuYW1lLCBhcmdzKVxuXG4gIG5ld19tZWRpYTogKHJlYWR5X2NiLCBzdGF0dXNfY2IsIGVycm9yX2NiKSA9PlxuICAgIHN0YXR1cyA9IHt9XG4gICAgc3RhdHVzW01lZGlhLk1FRElBX05PTkVdID0gJ05vbmUnXG4gICAgc3RhdHVzW01lZGlhLk1FRElBX1NUQVJUSU5HXSA9ICdTdGFydGluZydcbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfUlVOTklOR10gPSAnUnVubmluZydcbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfUEFVU0VEXSA9ICdQYXVzZWQnXG4gICAgc3RhdHVzW01lZGlhLk1FRElBX1NUT1BQRURdID0gJ1N0b3BwZWQnXG4gICAgXG4gICAgbWVkaWEgPSBuZXcgTWVkaWEoXG4gICAgICBAZm5hbWUsIFxuICAgICAgKCgpPT5cbiAgICAgICAgQGxvZyhcIlN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQgYWN0aW9uIFwiLCBAZm5hbWUpXG4gICAgICApLCBcbiAgICAgICgoZXJyKSA9PlxuICAgICAgICBAbG9nICdBdWRpbyBFcnJvcjogJyArIGVyci5jb2RlXG4gICAgICAgIEBsb2cgZXJyXG4gICAgICAgIGVycm9yX2NiKG1lZGlhLGVycilcbiAgICAgICksIFxuICAgICAgKChzdGF0KT0+XG4gICAgICAgIEBsb2coXCJNZWRpYSBzdGF0dXNcIiwgc3RhdCwgc3RhdHVzW3N0YXRdKVxuICAgICAgICBzdGF0dXNfY2IobWVkaWEsc3RhdClcbiAgICAgIClcbiAgICApXG4gICAgcmVhZHlfY2IobWVkaWEpXG4gICAgbWVkaWFcblxuICBnZXRfZHVyYXRpb246IChjYikgPT5cbiAgICAjIEdldCB0aGUgZmluYWwgZHVyYXRpb24gc2luY2UgaXQgZG9lc24ndCByZWdpc3RlciBkdXJpbmcgcmVjb3JkaW5nXG4gICAgQG5ld19tZWRpYShcbiAgICAgICgobWVkaWEpPT4gIyByZWFkeVxuICAgICAgICBtZWRpYS5zZXRWb2x1bWUoMClcbiAgICAgICAgbWVkaWEucGxheSgpXG4gICAgICApLFxuICAgICAgKChtZWRpYSxzdGF0dXMpID0+ICMgc3RhdHVzXG4gICAgICAgIGlmIHN0YXR1cz09TWVkaWEuTUVESUFfUlVOTklOR1xuICAgICAgICAgIG1lZGlhLnN0b3AoKVxuICAgICAgICAgIEBkdXJhdGlvbl9tcyA9IG1lZGlhLmdldER1cmF0aW9uKCkqMTAwMFxuICAgICAgICAgIEBldmVudCgnb25EdXJhdGlvblVwZGF0ZScsIEBkdXJhdGlvbl9tcylcbiAgICAgICAgICBpZiBjYlxuICAgICAgICAgICAgY2IoQGR1cmF0aW9uX21zKVxuICAgICAgICBpZiBzdGF0dXM9PU1lZGlhLk1FRElBX1NUT1BQRURcbiAgICAgICAgICBtZWRpYS5yZWxlYXNlKClcbiAgICAgICksXG4gICAgICAoKG1lZGlhLGVycm9yKT0+ICNlcnJvclxuICAgICAgKVxuICAgIClcbiAgICAgICAgIFxuICByZWNvcmQ6ID0+XG4gICAgQG5ld19tZWRpYShcbiAgICAgICgobWVkaWEpPT4gIyByZWFkeVxuICAgICAgICBtZWRpYS5zdGFydFJlY29yZCgpXG4gICAgICApLFxuICAgICAgKChtZWRpYSxzdGF0dXMpPT4gIyBzdGF0dXNcbiAgICAgICAgaWYgc3RhdHVzID09IE1lZGlhLk1FRElBX1JVTk5JTkdcbiAgICAgICAgICBAbG9nKCdyZWNvcmRpbmcnKVxuICAgICAgICAgIEBpc19yZWNvcmRpbmcgPSB0cnVlXG4gICAgICAgICAgQGR1cmF0aW9uX21zID0gMFxuICAgICAgICAgIHN0YXJ0X3RpbWVfbXMgPSAobmV3IERhdGUpLmdldFRpbWUoKVxuICAgICAgICAgIHVwZGF0ZV9yZWNvcmQgPSA9PlxuICAgICAgICAgICAgQGxvZygncmVjb3JkaW5nIGNoZWNrJylcbiAgICAgICAgICAgIGlmICFAaXNfcmVjb3JkaW5nXG4gICAgICAgICAgICAgIG1lZGlhLnN0b3BSZWNvcmQoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIGN1cnJlbnRfbXMgPSAobmV3IERhdGUpLmdldFRpbWUoKVxuICAgICAgICAgICAgQGR1cmF0aW9uX21zID0gY3VycmVudF9tcyAtIHN0YXJ0X3RpbWVfbXNcbiAgICAgICAgICAgIEBzY3J1Yl9wb2ludF9tcyA9IEBkdXJhdGlvbl9tc1xuICAgICAgICAgICAgQGV2ZW50KCdvbkR1cmF0aW9uVXBkYXRlJywgQGR1cmF0aW9uX21zKVxuICAgICAgICAgICAgQGV2ZW50KCdvblNjcnViVXBkYXRlJywgQGR1cmF0aW9uX21zKVxuICAgICAgICAgICAgc2V0VGltZW91dCh1cGRhdGVfcmVjb3JkLCAxMDApXG4gICAgICAgICAgdXBkYXRlX3JlY29yZCgpXG4gICAgICAgICAgQGV2ZW50KCdvblJlY29yZFN0YXJ0JylcbiAgICAgICAgICBcbiAgICAgICAgaWYgc3RhdHVzID09IE1lZGlhLk1FRElBX1NUT1BQRURcbiAgICAgICAgICBAaXNfcmVjb3JkaW5nID0gZmFsc2VcbiAgICAgICAgICBtZWRpYS5yZWxlYXNlKClcbiAgICAgICAgICBAZ2V0X2R1cmF0aW9uKChtcyk9PlxuICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gbXNcbiAgICAgICAgICAgIEBldmVudCgnb25TY3J1YlVwZGF0ZScsIG1zKVxuICAgICAgICAgICAgQGV2ZW50KCdvblJlY29yZFN0b3AnKVxuICAgICAgICAgIClcbiAgICAgICksXG4gICAgICAoKG1lZGlhLGVycik9PiAjZXJyb3JcbiAgICAgICAgbWVkaWEucmVsZWFzZSgpXG4gICAgICAgIEBldmVudCgnb25BdWRpb0Vycm9yJylcbiAgICAgIClcbiAgICApXG4gICAgXG4gIHN0ZXA6IChtcykgPT5cbiAgICBAc2VlayhAc2NydWJfcG9pbnRfbXMgKyBtcylcbiAgICBcbiAgc2VlazogKG1zKSA9PlxuICAgIGlmIG1zPT0tMVxuICAgICAgbXMgPSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgQHNjcnViX3BvaW50X21zID0gTWF0aC5taW4oQGR1cmF0aW9uX21zLCBNYXRoLm1heCgwLCBtcykpXG4gICAgQGV2ZW50KCdvblNjcnViVXBkYXRlJywgQHNjcnViX3BvaW50X21zKVxuICAgIGlmIEBpc19wbGF5aW5nXG4gICAgICBAbWVkaWEuc2Vla1RvIEBzY3J1Yl9wb2ludF9tc1xuICAgIFxuICBwbGF5OiA9PlxuICAgIGlmIEBzY3J1Yl9wb2ludF9tcyA+PSBAZHVyYXRpb25fbXNcbiAgICAgIEBzY3J1Yl9wb2ludF9tcyA9IDBcbiAgICAgIEBldmVudCgnb25TY3J1YlVwZGF0ZScsIEBzY3J1Yl9wb2ludF9tcylcbiAgICBcbiAgICBAbWVkaWEgPSBAbmV3X21lZGlhKFxuICAgICAgKChtZWRpYSk9PiAgICAjIHJlYWR5XG4gICAgICAgIG1lZGlhLnBsYXkoKVxuICAgICAgICBtZWRpYS5zZWVrVG8oQHNjcnViX3BvaW50X21zKVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsc3RhdHVzKT0+ICMgU3RhdHVzXG4gICAgICAgIGlmIHN0YXR1cyA9PSBNZWRpYS5NRURJQV9SVU5OSU5HXG4gICAgICAgICAgQGlzX3BsYXlpbmcgPSB0cnVlXG4gICAgICAgICAgcGxheV91cGRhdGUgPSA9PlxuICAgICAgICAgICAgbWVkaWEuZ2V0Q3VycmVudFBvc2l0aW9uIChwb3MpPT5cbiAgICAgICAgICAgICAgaWYgcG9zPT0tMVxuICAgICAgICAgICAgICAgIEBzY3J1Yl9wb2ludF9tcyA9IEBkdXJhdGlvbl9tc1xuICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIEBzY3J1Yl9wb2ludF9tcyA9IHBvcyAqIDEwMDBcbiAgICAgICAgICAgICAgQGV2ZW50KCdvblNjcnViVXBkYXRlJywgQHNjcnViX3BvaW50X21zKVxuICAgICAgICAgICAgICBpZiAhQGlzX3BsYXlpbmdcbiAgICAgICAgICAgICAgICBtZWRpYS5zdG9wKClcbiAgICAgICAgICAgICAgICBtZWRpYS5yZWxlYXNlKClcbiAgICAgICAgICAgICAgICBAZXZlbnQoJ29uUGxheVN0b3AnKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KHBsYXlfdXBkYXRlLDEwMClcbiAgICAgICAgICBwbGF5X3VwZGF0ZSgpXG4gICAgICAgICAgQGV2ZW50KCdvblBsYXlTdGFydCcpXG4gICAgICAgIGlmIHN0YXR1cyA9PSBNZWRpYS5NRURJQV9TVE9QUEVEXG4gICAgICAgICAgQGlzX3BsYXlpbmcgPSBmYWxzZVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsZXJyKT0+ICNFcnJvclxuICAgICAgICBtZWRpYS5yZWxlYXNlKClcbiAgICAgICAgQGV2ZW50KCdvbkF1ZGlvRXJyb3InKVxuICAgICAgKVxuICAgIClcbiAgXG4gIHN0b3A6ID0+XG4gICAgQGlzX3BsYXlpbmcgPSBmYWxzZVxuICAgIEBpc19yZWNvcmRpbmcgPSBmYWxzZVxuXG53aW5kb3cuUmVjb3JkZXIgPSBSZWNvcmRlciIsImNsYXNzIFVwbG9hZFdvcmtlclxuICBjb25zdHJ1Y3RvcjogKEBpdGVtLCBvcHRpb25zID0ge30pLT5cbiAgICBkZWZhdWx0X29wdGlvbnMgPVxuICAgICAgb25TdGFydDogLT5cbiAgICAgIG9uU3VjY2VzczogLT5cbiAgICAgIG9uRmFpbHVyZTogKGVyciktPlxuICAgICAgb25Qcm9ncmVzczogKHByb2dyZXNzKS0+XG4gICAgICBvbkV2ZW50OiAobmFtZSxhcmdzLi4uKS0+XG4gICAgICBkZWJ1ZzogdHJ1ZVxuICAgIEBvcHRpb25zID0gYW5ndWxhci5leHRlbmQoZGVmYXVsdF9vcHRpb25zLCBvcHRpb25zKVxuICAgIEB1cGxvYWRfY291bnQgPSAwXG4gICAgQGxvZyhcIlVwbG9hZCBXb3JrZXIgc3RhcnRlZFwiLCBAaXRlbSlcbiAgICBzZXRUaW1lb3V0KEBzdGFydCwgMCkgIyBGaXJlIHN0YXJ0IGFzeW5jIHNvIHByb21pc2VzIGFyZSBwcm9jZXNzZWRcbiAgICBcbiAgbG9nOiAoYXJncy4uLik9PlxuICAgIHJldHVybiB1bmxlc3MgQG9wdGlvbnMuZGVidWdcbiAgICBjb25zb2xlLmxvZy5hcHBseShALCBhcmdzKVxuXG4gIGV2ZW50OiAobmFtZSxhcmdzLi4uKSA9PlxuICAgIEBsb2coXCJldmVudFwiLCBuYW1lLCBhcmdzKVxuICAgIEBvcHRpb25zW25hbWVdLmFwcGx5KEAsYXJncylcbiAgICBAb3B0aW9ucy5vbkV2ZW50KG5hbWUsIGFyZ3MpXG4gICAgXG4gIHN0YXJ0ZWQ6IChjYik9PlxuICAgIEBvcHRpb25zLm9uU3RhcnQgPSBjYlxuICAgIEBcbiAgXG4gIHByb2dyZXNzOiAoY2IpPT5cbiAgICBAb3B0aW9ucy5vblByb2dyZXNzID0gY2JcbiAgICBAXG4gIFxuICBmaW5pc2hlZDogKGNiKT0+XG4gICAgQG9wdGlvbnMub25TdWNjZXNzID0gY2JcbiAgICBAXG4gIFxuICBmYWlsZWQ6IChjYik9PlxuICAgIEBvcHRpb25zLm9uRmFpbHVyZSA9IGNiXG4gICAgQFxuICAgIFxuICBzdGFydDogPT5cbiAgICBAZXZlbnQoJ29uU3RhcnQnKVxuICAgIEBwcm9ncmVzcyA9IDBcbiAgICAkaHR0cCA9IGFuZ3VsYXIuaW5qZWN0b3IoW1wibmdcIl0pLmdldChcIiRodHRwXCIpXG4gICAgJGh0dHAuZ2V0KCdodHRwOi8vYXBpLmZhc3QtY2FzdC5uZXQnLCBwYXJhbXM6XG4gICAgICBzbHVnOiBAaXRlbS5zbHVnXG4gICAgICB0eXBlOiBAaXRlbS50eXBlXG4gICAgICBjb2RlOiBAaXRlbS5jb2RlXG4gICAgKS50aGVuICgocmVzcG9uc2UpID0+XG4gICAgICBAaXRlbS5wcm9ncmVzcyA9IDEwXG4gICAgICBAZXZlbnQoJ29uUHJvZ3Jlc3MnLCBAaXRlbS5wcm9ncmVzcylcbiAgICAgIHVybCA9IHJlc3BvbnNlLmRhdGFcbiAgICAgIGZ0ID0gbmV3IEZpbGVUcmFuc2ZlclxuICAgICAgZnQub25wcm9ncmVzcyA9IChwZSkgPT5cbiAgICAgICAgQGl0ZW0ucHJvZ3Jlc3MgPSBwZS5sb2FkZWQgLyBwZS50b3RhbCAqIDkwICsgMTBcbiAgICAgICAgQGV2ZW50KCdvblByb2dyZXNzJywgQGl0ZW0ucHJvZ3Jlc3MpXG4gICAgICBcbiAgICAgIHVwbG9hZF9vcHRpb25zID0gbmV3IEZpbGVVcGxvYWRPcHRpb25zXG4gICAgICB1cGxvYWRfb3B0aW9ucy5maWxlTmFtZSA9IEBpdGVtLnNyY1xuICAgICAgdXBsb2FkX29wdGlvbnMubWltZVR5cGUgPSBAaXRlbS5taW1lXG4gICAgICB1cGxvYWRfb3B0aW9ucy5jaHVua2VkTW9kZSA9IGZhbHNlXG4gICAgICB1cGxvYWRfb3B0aW9ucy5odHRwTWV0aG9kID0gJ1BVVCdcbiAgICAgIHVwbG9hZF9vcHRpb25zLmhlYWRlcnMgPSAnQ29udGVudC1UeXBlJzogQGl0ZW0ubWltZVxuICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRpbmdcIiwgQGl0ZW0uc3JjLCB1cmwpXG4gICAgICBmdC51cGxvYWQoXG4gICAgICAgIEBpdGVtLnNyYywgXG4gICAgICAgIHVybCwgXG4gICAgICAgICg9PiAjIHN1Y2Nlc3NcbiAgICAgICAgICBAZXZlbnQoJ29uU3VjY2VzcycpXG4gICAgICAgICksXG4gICAgICAgICgoZXJyKT0+ICMgRXJyb3JcbiAgICAgICAgICBAZXZlbnQoJ29uRmFpbHVyZScsIGVycilcbiAgICAgICAgKSxcbiAgICAgICAgdXBsb2FkX29wdGlvbnNcbiAgICAgIClcbiAgICApLCAoZXJyKT0+ICMgRmFpbHVyZVxuICAgICAgQGV2ZW50KCdvbkZhaWx1cmUnLCBlcnIpICAgIFxuXG53aW5kb3cuVXBsb2FkV29ya2VyID0gVXBsb2FkV29ya2VyIiwiYXBwLmNvbnRyb2xsZXIgJ0FwcENvbnRyb2xsZXInLCAoXG4gICRzY29wZSwgXG4gICRodHRwLCBcbiAgJGludGVydmFsLCBcbiAgJGNvcmRvdmFGaWxlLCBcbiAgJHN0YXRlLCBcbiAgJGNvcmRvdmFGaWxlVHJhbnNmZXIsIFxuICAkcSwgXG4gICRpb25pY0hpc3RvcnksIFxuICAkaW9uaWNTaWRlTWVudURlbGVnYXRlLFxuICAkaW9uaWNQb3B1cFxuICApIC0+XG4gIGNvbnNvbGUubG9nKCdBcHBDb250cm9sbGVyJyk7XG5cbiAgJHNjb3BlLnNldHRpbmdzID0gLT5cbiAgICAkc3RhdGUuZ28gJ3NldHRpbmdzLnBvZGNhc3QnXG4gICAgXG4gICRzY29wZS50b2dnbGVMZWZ0ID0gLT5cbiAgICAkaW9uaWNTaWRlTWVudURlbGVnYXRlLnRvZ2dsZUxlZnQoKVxuICBcbiAgJHNjb3BlLmhvbWUgPSAtPlxuICAgICRpb25pY0hpc3RvcnkubmV4dFZpZXdPcHRpb25zKHtcbiAgICAgIGRpc2FibGVCYWNrOiB0cnVlXG4gICAgfSk7ICBcbiAgICAkc3RhdGUuZ28gJ2hvbWUnXG4gICAgXG4gIGxvYWRfc3RhdGUgPSAtPlxuICAgICRzY29wZS5wb2RjYXN0ID0gbnVsbFxuICAgIHRyeVxuICAgICAgJHNjb3BlLnBvZGNhc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9kY2FzdCcpKVxuICAgIGNhdGNoIGVcbiAgICAgIGNvbnNvbGUubG9nICdFcnJvciBsb2FkaW5nIHN0YXRlJywgZVxuICAgICAgXG4gICAgIyBGaXggdXAgdmVyc2lvbiBudW1iZXJcbiAgICBpZiAhJHNjb3BlLnBvZGNhc3Qgb3IgISRzY29wZS5wb2RjYXN0LnZlcnNpb25cbiAgICAgICRzY29wZS5wb2RjYXN0ID1cbiAgICAgICAgdmVyc2lvbjogMVxuICAgICAgICBlcGlzb2Rlczoge31cbiAgICAgICRzY29wZS5zYXZlX3N0YXRlKClcbiAgICAgIFxuICAgICMgRml4IHVwIG1pc3NpbmcgR1VJRHNcbiAgICBmb3IgayBvZiAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1xuICAgICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNba10uZ3VpZCA9IGtcbiAgICAgICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW2tdLmlzX3N5bmNpbmcgPSBmYWxzZVxuICAgICAgXG4gICAgIyBGaXggdXAgbWlzc2luZyBlcGlzb2Rlc1xuICAgICMgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXMgPSBhbmd1bGFyLm1lcmdlKHt9LCBzdGF0aWNfZXBpc29kZXMsICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzKTtcbiAgICAjIGZvciBndWlkIG9mIHN0YXRpY19lcGlzb2Rlc1xuICAgICMgICBlcGlzb2RlID0gc3RhdGljX2VwaXNvZGVzW2d1aWRdXG4gICAgIyAgICNpZiAhKGd1aWQgb2YgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXMpXG4gICAgIyAgICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW2d1aWRdID0gZXBpc29kZVxuXG4gIG5leHRfZXBpc29kZV9udW1iZXIgPSAtPlxuICAgIG4gPSAwXG4gICAgZm9yIHNsdWcgb2YgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNcbiAgICAgIGVwaXNvZGUgPSAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1tzbHVnXVxuICAgICAgbiA9IE1hdGgubWF4KG4sIGVwaXNvZGUubnVtYmVyKVxuICAgIG4gKyAxXG5cbiAgJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgPSAnY2R2ZmlsZTovL2xvY2FsaG9zdC9wZXJzaXN0ZW50LydcbiAgXG4gIHJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksIChlbnRyeSktPlxuICAgICRzY29wZS5uYXRpdmVfb3V0cHV0X2RpcmVjdG9yeSA9IGVudHJ5LnRvVVJMKClcbiAgKVxuICBcbiAgJHNjb3BlLnNhdmVfc3RhdGUgPSAtPlxuICAgIGpzb24gPSBhbmd1bGFyLnRvSnNvbigkc2NvcGUucG9kY2FzdClcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0gJ3BvZGNhc3QnLCBhbmd1bGFyLnRvSnNvbigkc2NvcGUucG9kY2FzdClcbiAgICAkY29yZG92YUZpbGUud3JpdGVGaWxlKCRzY29wZS5vdXRwdXRfZGlyZWN0b3J5LCAnZGF0YS5qc29uJywganNvbiwgdHJ1ZSkudGhlbiAoKHJlc3VsdCkgLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLnBvZGNhc3QuY29kZVxuICAgICAgKG5ldyBVcGxvYWRXb3JrZXIoXG4gICAgICAgIGNvZGU6ICRzY29wZS5wb2RjYXN0LmNvZGVcbiAgICAgICAgdHlwZTogJ2pzb24nXG4gICAgICAgIG1pbWU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICBzcmM6ICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJ2RhdGEuanNvbidcbiAgICAgICkpXG4gICAgKVxuICAgIFxuXG4gIGxvYWRfc3RhdGUoKVxuXG4gICRzY29wZS5uZXcgPSAtPlxuICAgIHQgPSAobmV3IERhdGUpLmdldFRpbWUoKVxuICAgIGd1aWQgPSBzcHJpbnRmKCdmYy0lcy0lZCcsICRzY29wZS5wb2RjYXN0LmNvZGUsIHQpXG4gICAgJHNjb3BlLmVwaXNvZGUgPVxuICAgICAgZ3VpZDogZ3VpZFxuICAgICAgbnVtYmVyOiBuZXh0X2VwaXNvZGVfbnVtYmVyKClcbiAgICAkc3RhdGUuZ28gJ2VwaXNvZGUucmVjb3JkJ1xuXG4gICRzY29wZS5nbyA9IChndWlkKSAtPlxuICAgICRzY29wZS5lcGlzb2RlID0gYW5ndWxhci5jb3B5KCRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW2d1aWRdKVxuICAgICRzY29wZS5lcGlzb2RlLmlzX3B1Ymxpc2hlZCA9ICRzY29wZS5lcGlzb2RlLnB1Ymxpc2hlZF9hdD9cbiAgICAkc3RhdGUuZ28gJ2VwaXNvZGUucmVjb3JkJ1xuIiwiYXBwLmNvbnRyb2xsZXIgJ0VwaXNvZGVDb250cm9sbGVyJywgKFxuICAkc2NvcGUsIFxuICAkaW9uaWNTaWRlTWVudURlbGVnYXRlXG4gICRpb25pY0FjdGlvblNoZWV0XG4gICkgLT5cbiAgICBcbiAgJHNjb3BlLiRvbiAnJGlvbmljVmlldy5lbnRlcicsIC0+XG4gICAgJGlvbmljU2lkZU1lbnVEZWxlZ2F0ZS5jYW5EcmFnQ29udGVudCBmYWxzZVxuXG4gICRzY29wZS4kb24gJyRpb25pY1ZpZXcubGVhdmUnLCAtPlxuICAgICRpb25pY1NpZGVNZW51RGVsZWdhdGUuY2FuRHJhZ0NvbnRlbnQgdHJ1ZVxuXG4gIHQgPSAobmV3IERhdGUpLmdldFRpbWUoKVxuICBcbiAgJHNjb3BlLmhhc19yZWNvcmRpbmcgPSAkc2NvcGUuZXBpc29kZS5yZWNvcmRlZF9hdD9cbiAgJHNjb3BlLmlzX3VwbG9hZGluZyA9IGZhbHNlXG4gICRzY29wZS5pc19wbGF5aW5nID0gZmFsc2VcbiAgJHNjb3BlLmlzX3JlY29yZGluZyA9IGZhbHNlXG4gICRzY29wZS5kdXJhdGlvbl9tcyA9ICRzY29wZS5lcGlzb2RlLmR1cmF0aW9uX21zIG9yIDBcbiAgJHNjb3BlLnNjcnViX3BvaW50X21zID0gMFxuICAkc2NvcGUuaGFzX2NoYW5nZXMgPSBmYWxzZVxuICBcbiAgJHNjb3BlLiR3YXRjaCAnZXBpc29kZScsICgobmV3T2JqLCBvbGRPYmopIC0+XG4gICAgJHNjb3BlLmhhc19jaGFuZ2VzID0gIWFuZ3VsYXIuZXF1YWxzKG9sZE9iaiwgbmV3T2JqKVxuICApLCB0cnVlXG5cbiAgJHNjb3BlLmNhbmNlbCA9IC0+XG4gICAgaGlkZVNoZWV0ID0gJGlvbmljQWN0aW9uU2hlZXQuc2hvdyhcbiAgICAgIGRlc3RydWN0aXZlVGV4dDogJ0Rpc2NhcmQgQ2hhbmdlcydcbiAgICAgIHRpdGxlVGV4dDogJ0Rpc2NhcmQgY2hhbmdlcydcbiAgICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnXG4gICAgICBkZXN0cnVjdGl2ZUJ1dHRvbkNsaWNrZWQ6IC0+XG4gICAgICAgICRzY29wZS5ob21lKClcbiAgICApXG4iLCJhcHAuY29udHJvbGxlciAnRmluYWxpemVDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNOYXZCYXJEZWxlZ2F0ZSwgJGlvbmljSGlzdG9yeSkgLT5cbiAgJGlvbmljTmF2QmFyRGVsZWdhdGUuc2hvd0JhY2tCdXR0b24gdHJ1ZVxuXG4gIHVwbG9hZF9yc3MgPSAtPlxuICAgIHJzcyA9IEZhc3RDYXN0LnRlbXBsYXRlcy5yc3NcbiAgICAgIHBvZGNhc3Q6ICRzY29wZS5wb2RjYXN0XG4gICAgJGNvcmRvdmFGaWxlLndyaXRlRmlsZSgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgJHNjb3BlLnBvZGNhc3QuY29kZSsnLnJzcycsIHJzcywgdHJ1ZSkudGhlbiAoKHJlc3VsdCkgLT5cbiAgICAgIHVwbG9hZFxuICAgICAgICB0eXBlOiAncnNzJ1xuICAgICAgICBtaW1lOiAnYXBwbGljYXRpb24vcnNzK3htbCdcbiAgICAgICAgc3JjOiAkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSArICRzY29wZS5wb2RjYXN0LmNvZGUgKyAnLnJzcydcbiAgICApLCAoZXJyKSAtPlxuICAgICAgY29uc29sZS5sb2cgJ2ZpbGUgd3JpdGUgZXJyb3InLCBlcnJcbiAgICBcbiAgdXBsb2FkX2h0bWwgPSAtPlxuICAgIGh0bWwgPSBGYXN0Q2FzdC50ZW1wbGF0ZXMuZXBpc29kZVxuICAgICAgZXBpc29kZTogJHNjb3BlLmVwaXNvZGVcbiAgICAkY29yZG92YUZpbGUud3JpdGVGaWxlKCRzY29wZS5vdXRwdXRfZGlyZWN0b3J5LCAkc2NvcGUuZXBpc29kZS5ndWlkICsgJy5odG1sJywgaHRtbCwgdHJ1ZSkudGhlbiAoKHJlc3VsdCkgLT5cbiAgICAgIHVwbG9hZFxuICAgICAgICBzbHVnOiAkc2NvcGUuZXBpc29kZS5zbHVnXG4gICAgICAgIHR5cGU6ICdodG1sJ1xuICAgICAgICBtaW1lOiAndGV4dC9odG1sJ1xuICAgICAgICBzcmM6ICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcuaHRtbCdcbiAgICApLCAoZXJyKSAtPlxuICAgICAgY29uc29sZS5sb2cgJ2ZpbGUgd3JpdGUgZXJyb3InLCBlcnJcblxuICB1cGxvYWRfYXVkaW8gPSAtPlxuICAgIHVwbG9hZFxuICAgICAgc2x1ZzogJHNjb3BlLmVwaXNvZGUuc2x1Z1xuICAgICAgdHlwZTogJ2F1ZGlvJ1xuICAgICAgbWltZTogJ2F1ZGlvL21wNCdcbiAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUuZXBpc29kZS5ndWlkICsgJy5tNGEnXG5cbiAgdXBsb2FkID0gKGl0ZW0pIC0+XG4gICAgaXRlbS5jb2RlID0gJHNjb3BlLnBvZGNhc3QuY29kZVxuICAgIChuZXcgVXBsb2FkV29ya2VyKGl0ZW0pKVxuICAgICAgLnN0YXJ0ZWQgLT5cbiAgICAgICAgJHNjb3BlLnVwbG9hZF9jb3VudCsrXG4gICAgICAgICRzY29wZS51cGxvYWRzW2l0ZW0udHlwZV0gPSAwXG4gICAgICAuZmluaXNoZWQgLT5cbiAgICAgICAgc2V0VGltZW91dCAoLT5cbiAgICAgICAgICBkZWxldGUgJHNjb3BlLnVwbG9hZHNbaXRlbS50eXBlXVxuICAgICAgICAgICRzY29wZS51cGxvYWRfY291bnQtLVxuICAgICAgICAgIGlmICRzY29wZS51cGxvYWRfY291bnQgPT0gMFxuICAgICAgICAgICAgJHNjb3BlLmlzX3VwbG9hZGluZ19maW5pc2hlZCA9IHRydWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KClcbiAgICAgICAgKSwgMTAwMFxuICAgICAgLnByb2dyZXNzIChwcm9ncmVzcyktPlxuICAgICAgICAkc2NvcGUudXBsb2Fkc1tpdGVtLnR5cGVdID0gcHJvZ3Jlc3NcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCcjcHJvZ3Jlc3NfJyArIGl0ZW0udHlwZSkudmFsIHByb2dyZXNzXG4gICAgICAgICRzY29wZS4kYXBwbHkoKVxuICAgICAgXG5cbiAgJHNjb3BlLmlzX3VwbG9hZGluZyA9IGZhbHNlXG4gICRzY29wZS51cGxvYWRzID0ge31cblxuICAkc2NvcGUuYmFjayA9IC0+XG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcblxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX3N0YXJ0ZWQgPSBmYWxzZVxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX2ZpbmlzaGVkID0gZmFsc2VcblxuICAkc2NvcGUucHVibGlzaCA9IC0+XG4gICAgaWYgISRzY29wZS5lcGlzb2RlLm51bWJlclxuICAgICAgYWxlcnQgJ1BsZWFzZSBzdXBwbHkgYW4gZXBpc29kZSBudW1iZXIuJ1xuICAgICRzY29wZS5lcGlzb2RlLnB1Ymxpc2hlZF9hdCA9IG51bGxcbiAgICBpZiAkc2NvcGUuZXBpc29kZS5pc19wdWJsaXNoZWRcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS50aXRsZVxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIHRpdGxlLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5kZXNjcmlwdGlvblxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIGRlc2NyaXB0aW9uLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgJHNjb3BlLmVwaXNvZGUucHVibGlzaGVkX2F0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICBlbHNlXG4gICAgICAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXQgPSBudWxsXG4gICAgJHNjb3BlLmlzX3VwbG9hZGluZ19zdGFydGVkID0gdHJ1ZVxuICAgICRzY29wZS5lcGlzb2RlLnNsdWcgPSBzcHJpbnRmKCclMDNkIC0gJXMnLCAkc2NvcGUuZXBpc29kZS5udW1iZXIsICRzY29wZS5lcGlzb2RlLnRpdGxlKS5zbHVnaWZ5KClcbiAgICBpZighJHNjb3BlLmVwaXNvZGUubGVuZ3RoX2J5dGVzKVxuICAgICAgd2luZG93LnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwgJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUuZXBpc29kZS5ndWlkICsgJy5tNGEnLCAoKGZpbGVFbnRyeSkgLT5cbiAgICAgICAgZmlsZUVudHJ5LmZpbGUgKGZpbGUpIC0+XG4gICAgICAgICAgY29uc29sZS5sb2cgXCJnb3QgYnl0ZSBzaXplXCIsIGZpbGVcbiAgICAgICAgICAkc2NvcGUuZXBpc29kZS5sZW5ndGhfYnl0ZXMgPSBmaWxlLnNpemVcbiAgICAgICAgICAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1skc2NvcGUuZXBpc29kZS5ndWlkXSA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZXBpc29kZSlcbiAgICAgICAgICBpZiAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgICAgIHVwbG9hZF9yc3MoKVxuICAgICAgICAgICRzY29wZS5zYXZlX3N0YXRlKClcbiAgICAgICAgICBjb25zb2xlLmxvZyBmaWxlXG4gICAgICApLCAoZXJyKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgZ2V0dGluZyBmaWxlIHNpemUnXG4gICAgZWxzZVxuICAgICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNbJHNjb3BlLmVwaXNvZGUuZ3VpZF0gPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVwaXNvZGUpXG4gICAgICBpZiAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgdXBsb2FkX3JzcygpXG4gICAgICAkc2NvcGUuc2F2ZV9zdGF0ZSgpXG4gICAgaWYgJHNjb3BlLmVwaXNvZGUucHVibGlzaGVkX2F0XG4gICAgICB1cGxvYWRfaHRtbCgpXG4gICAgdXBsb2FkX2F1ZGlvKClcblxuICAkc2NvcGUuJHdhdGNoICdpc191cGxvYWRpbmdfZmluaXNoZWQnLCAodikgLT5cbiAgICBpZiAhdlxuICAgICAgcmV0dXJuXG4gICAgJGlvbmljSGlzdG9yeS5uZXh0Vmlld09wdGlvbnMoe1xuICAgICAgZGlzYWJsZUJhY2s6IHRydWVcbiAgICB9KTsgIFxuICAgICRzdGF0ZS5nbyAnZXBpc29kZS5maW5pc2gnXG4gICRzY29wZS51cGxvYWRfY291bnQgPSAwXG4iLCJhcHAuY29udHJvbGxlciAnRmluaXNoQ29udHJvbGxlcicsICgkc2NvcGUsICRpb25pY0hpc3RvcnkpIC0+IFxuIiwiYXBwLmNvbnRyb2xsZXIgJ0hvbWVDb250cm9sbGVyJywgKCRzY29wZSwgJHN0YXRlLCAkaW9uaWNIaXN0b3J5LCAkaW9uaWNQb3B1cCkgLT4gXG4gIGlmKCEkc2NvcGUucG9kY2FzdC5jb2RlKVxuICAgIG15UG9wdXAgPSAkaW9uaWNQb3B1cC5zaG93KFxuICAgICAgdGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBuZy1tb2RlbD1cInBvZGNhc3QuY29kZVwiPidcbiAgICAgIHRpdGxlOiAnRW50ZXIgU2hvdyBDb2RlJ1xuICAgICAgc3ViVGl0bGU6ICdJbiBvcmRlciB0byB1c2UgdGhpcyBiZXRhIGFwcCwgeW91IG11c3QgaGF2ZSBhIFNob3cgQ29kZS4gR2V0IG9uZSBmcm9tIEJlbiB2aWEgRmFjZWJvb2suJ1xuICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJzxiPlNhdmU8L2I+J1xuICAgICAgICAgIHR5cGU6ICdidXR0b24tcG9zaXRpdmUnXG4gICAgICAgICAgb25UYXA6IChlKSAtPlxuICAgICAgICAgICAgaWYgISRzY29wZS5wb2RjYXN0LmNvZGVcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAkc2NvcGUucG9kY2FzdC5jb2RlID0gJHNjb3BlLnBvZGNhc3QuY29kZS50cmltKCkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgJHNjb3BlLnNhdmVfc3RhdGUoKVxuICAgICAgICB9XG4gICAgICBdXG4gICAgKS50aGVuIC0+XG4gICAgICAkaW9uaWNQb3B1cC5hbGVydChcbiAgICAgICAgdGl0bGU6ICdJbnB1dCBTaG93IEluZm8nXG4gICAgICAgIHRlbXBsYXRlOiAnU2luY2UgdGhpcyBpcyB5b3VyIGZpcnN0IHRpbWUgZ2V0dGluZyBzdGFydGVkLCBlbnRlciB5b3VyIHNob3cgaW5mb3JtYXRpb24gbmV4dC4nXG4gICAgICApLnRoZW4gKChyZXMpIC0+XG4gICAgICAgICRpb25pY0hpc3RvcnkubmV4dFZpZXdPcHRpb25zKHtcbiAgICAgICAgICBkaXNhYmxlQmFjazogdHJ1ZVxuICAgICAgICB9KTsgIFxuICAgICAgICAkc3RhdGUuZ28gJ3NldHRpbmdzLnBvZGNhc3QnXG4gICAgICApXG4iLCJhcHAuY29udHJvbGxlciAnUG9kY2FzdFNldHRpbmdzQ29udHJvbGxlcicsIChcbiAgJHNjb3BlLCBcbiAgJGlvbmljSGlzdG9yeSwgXG4gICRpb25pY1BvcHVwLCBcbiAgJGlvbmljTmF2QmFyRGVsZWdhdGUsIFxuICAkaW9uaWNBY3Rpb25TaGVldCxcbiAgJGpyQ3JvcCxcbiAgJGNvcmRvdmFJbWFnZVBpY2tlcixcbiAgJGNvcmRvdmFGaWxlXG4pIC0+XG4gIFxuICBjYXRzID0gW11cbiAgZm9yIGNhdCxzdWJjYXRzIG9mIGNhdGVnb3JpZXNcbiAgICBpZiBzdWJjYXRzLmxlbmd0aD09MFxuICAgICAgY2F0cy5wdXNoXG4gICAgICAgIGtleTogY2F0XG4gICAgICAgIG5hbWU6IGNhdFxuICAgIGVsc2VcbiAgICAgIGZvciBzdWJjYXQgaW4gc3ViY2F0c1xuICAgICAgICBjYXRzLnB1c2hcbiAgICAgICAgICBrZXk6IHNwcmludGYoXCIlc3wlc1wiLCBjYXQsIHN1YmNhdClcbiAgICAgICAgICBuYW1lOiBzcHJpbnRmKFwiJXMgLSAlc1wiLCBjYXQsIHN1YmNhdClcblxuICAkc2NvcGUuY2F0cyA9IGNhdHNcbiAgXG4gICRzY29wZS5kb19sb2dvID0gLT5cbiAgICBvcHRpb25zID0gXG4gICAgICBtYXhpbXVtSW1hZ2VzQ291bnQ6IDFcblxuICAgICRjb3Jkb3ZhSW1hZ2VQaWNrZXIuZ2V0UGljdHVyZXMob3B0aW9ucylcbiAgICAgIC50aGVuICggKChyZXN1bHRzKSAtPlxuICAgICAgICAkanJDcm9wLmNyb3AoXG4gICAgICAgICAgdXJsOiByZXN1bHRzWzBdXG4gICAgICAgICAgdGl0bGU6ICdNb3ZlIGFuZCBTY2FsZSdcbiAgICAgICAgICB3aWR0aDogMzAwXG4gICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgKS50aGVuKCAoY2FudmFzKS0+XG4gICAgICAgICAgX2Jhc2U2NFRvQXJyYXlCdWZmZXIgPSAoYmFzZTY0KSAtPlxuICAgICAgICAgICAgYmluYXJ5X3N0cmluZyA9IHdpbmRvdy5hdG9iKGJhc2U2NC5yZXBsYWNlKC9cXHMvZywgJycpKVxuICAgICAgICAgICAgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGhcbiAgICAgICAgICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKVxuICAgICAgICAgICAgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIGkgPCBsZW5cbiAgICAgICAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlfc3RyaW5nLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBieXRlcy5idWZmZXJcbiAgICAgICAgICByZXNpemUgPSAoc3JjX2NhbnZhcywgZHN0X25hbWUsIGQsY2IgPSBudWxsKS0+XG4gICAgICAgICAgICBDYW1hbihzcmNfY2FudmFzLCAtPlxuICAgICAgICAgICAgICBAcmVzaXplXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGRcbiAgICAgICAgICAgICAgQHJlbmRlciA9PlxuICAgICAgICAgICAgICAgIGRhdGFfdXJsID0gQHRvQmFzZTY0KCdqcGVnJylcbiAgICAgICAgICAgICAgICBiNjQgPSBkYXRhX3VybC5yZXBsYWNlKC9eZGF0YTouKz87YmFzZTY0LC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFfdXJsLnN1YnN0cmluZygwLDUwKSlcbiAgICAgICAgICAgICAgICBkYXRhID0gX2Jhc2U2NFRvQXJyYXlCdWZmZXIoYjY0KVxuICAgICAgICAgICAgICAgICRjb3Jkb3ZhRmlsZS53cml0ZUZpbGUoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksIGRzdF9uYW1lLCBkYXRhLCB0cnVlKS50aGVuKC0+XG4gICAgICAgICAgICAgICAgICBpZiBjYlxuICAgICAgICAgICAgICAgICAgICBjYigkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSsgZHN0X25hbWUsIGRhdGFfdXJsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgQHJlc2V0KClcbiAgICAgICAgICAgIClcbiAgICAgICAgICByZXNpemUoY2FudmFzLCAnbG9nby10aHVtYi5qcGcnLCA3NSwgKHBhdGgsIGRhdGFfdXJsKS0+XG4gICAgICAgICAgICAkc2NvcGUuc2hvdy5sb2dvX3BhdGggPSBwYXRoXG4gICAgICAgICAgICAkc2NvcGUubG9nb19zcmMgPSBkYXRhX3VybFxuICAgICAgICAgIClcbiAgICAgICAgICByZXNpemUoY2FudmFzLCAnbG9nby5qcGcnLCAxNDAwLCAocGF0aCwgZGF0YV91cmwpLT5cbiAgICAgICAgICAgIG5ldyBVcGxvYWRXb3JrZXIoXG4gICAgICAgICAgICAgIGNvZGU6ICRzY29wZS5wb2RjYXN0LmNvZGVcbiAgICAgICAgICAgICAgdHlwZTogJ2xvZ28nXG4gICAgICAgICAgICAgIG1pbWU6ICdpbWFnZS9qcGVnJ1xuICAgICAgICAgICAgICBzcmM6IHBhdGhcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICkpLCAoZXJyb3IpLT5cbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIFxuICBnZXRiNjQgPSAoY2R2X3BhdGgsIGNiKSAtPlxuICAgIHJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoY2R2X3BhdGgsIChlbnRyeSktPlxuICAgICAgcGF0aCA9IGVudHJ5LnRvVVJMKClcbiAgICAgIHdpbmRvdy5wbHVnaW5zLkJhc2U2NC5lbmNvZGVGaWxlKHBhdGgsIChiYXNlNjQpLT5cbiAgICAgICAgY29uc29sZS5sb2coYmFzZTY0LnN1YnN0cmluZygwLDUwKSlcbiAgICAgICAgY2IoYmFzZTY0KVxuICAgICAgKTtcbiAgICApXG5cbiAgJHNjb3BlLnNob3cgPSBcbiAgICB0aXRsZTogJydcbiAgICBzdWJ0aXRsZTogJydcbiAgICBhdXRob3I6ICcnXG4gICAgZGVzY3JpcHRpb246ICcnXG4gICAgcHJpbWFyeV9jYXRlZ29yeTogJydcbiAgICBzZWNvbmRhcnlfY2F0ZWdvcnk6ICcnXG4gICAgaXNfZXhwbGljaXQ6IGZhbHNlXG4gICAgbG9nb19wYXRoOiBudWxsXG4gICAgXG4gIGZvciBrLHYgb2YgJHNjb3BlLnNob3dcbiAgICBpZigkc2NvcGUucG9kY2FzdFtrXT8pXG4gICAgICAkc2NvcGUuc2hvd1trXSA9ICRzY29wZS5wb2RjYXN0W2tdXG4gIFxuICBpZigkc2NvcGUuc2hvdy5sb2dvX3BhdGgpXG4gICAgZ2V0YjY0KCAkc2NvcGUuc2hvdy5sb2dvX3BhdGgsIChiNjQpLT5cbiAgICAgICRzY29wZS5sb2dvX3NyYyA9IGI2NDtcbiAgICApXG4gICAgICBcbiAgY29uc29sZS5sb2coJHNjb3BlLnNob3cpXG4gIG9yaWdpbmFsID0gYW5ndWxhci5jb3B5KCRzY29wZS5zaG93KVxuICBcbiAgJHNjb3BlLmhhc19jaGFuZ2VzID0gZmFsc2VcbiAgJHNjb3BlLiR3YXRjaCAnc2hvdycsICgobmV3VmFsdWUsIG9sZFZhbHVlKSAtPlxuICAgICRzY29wZS5oYXNfY2hhbmdlcyA9ICFhbmd1bGFyLmVxdWFscyhvcmlnaW5hbCwgbmV3VmFsdWUpXG4gICAgJGlvbmljTmF2QmFyRGVsZWdhdGUuc2hvd0JhY2tCdXR0b24gISRzY29wZS5oYXNfY2hhbmdlc1xuICApLCB0cnVlXG4gICAgICBcbiAgJHNjb3BlLnNhdmUgPSAtPlxuICAgIHZhbGlkYXRlID1cbiAgICAgIHRpdGxlOiAnYSB0aXRsZSdcbiAgICAgIGxvZ29fcGF0aDogJ2NvdmVyIGFydCdcbiAgICAgIHN1YnRpdGxlOiAnYSBzdWJ0aXRsZSdcbiAgICAgIGF1dGhvcjogJ2FuIGF1dGhvcidcbiAgICAgIGRlc2NyaXB0aW9uOiAnYSBkZXNjcmlwdGlvbidcbiAgICAgIHByaW1hcnlfY2F0ZWdvcnk6ICdwcmltYXJ5IGNhdGVnb3J5J1xuICAgICAgc2Vjb25kYXJ5X2NhdGVnb3J5OiAnc2Vjb25kYXJ5IGNhdGVnb3J5J1xuICAgIGZvciBrLHYgb2YgdmFsaWRhdGVcbiAgICAgIGlmKCEoJHNjb3BlLnNob3dba10/KSlcbiAgICAgICAgJGlvbmljUG9wdXAuYWxlcnQoXG4gICAgICAgICAgdGl0bGU6ICdSZXF1aXJlZCdcbiAgICAgICAgICB0ZW1wbGF0ZTogXCJQbGVhc2Ugc3VwcGx5ICN7dn0uXCJcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgICRzY29wZS5zaG93W2tdID0gJHNjb3BlLnNob3dba10udHJpbSgpXG4gICAgZm9yIGssdiBvZiAkc2NvcGUuc2hvd1xuICAgICAgJHNjb3BlLnBvZGNhc3Rba10gPSAkc2NvcGUuc2hvd1trXVxuICAgICRzY29wZS5zYXZlX3N0YXRlKClcbiAgICBpZigkc2NvcGUuaGFzX2NoYW5nZXMpXG4gICAgICByc3MgPSBGYXN0Q2FzdC50ZW1wbGF0ZXMucnNzXG4gICAgICAgIHBvZGNhc3Q6ICRzY29wZS5wb2RjYXN0XG4gICAgICAkY29yZG92YUZpbGUud3JpdGVGaWxlKCRzY29wZS5vdXRwdXRfZGlyZWN0b3J5LCAkc2NvcGUucG9kY2FzdC5jb2RlKycucnNzJywgcnNzLCB0cnVlKS50aGVuICgocmVzdWx0KSAtPlxuICAgICAgICBuZXcgVXBsb2FkV29ya2VyKFxuICAgICAgICAgIGNvZGU6ICRzY29wZS5wb2RjYXN0LmNvZGVcbiAgICAgICAgICB0eXBlOiAncnNzJ1xuICAgICAgICAgIG1pbWU6ICdhcHBsaWNhdGlvbi9yc3MreG1sJ1xuICAgICAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUucG9kY2FzdC5jb2RlKycucnNzJ1xuICAgICAgICApXG4gICAgICApXG4gICAgJHNjb3BlLmhvbWUoKVxuXG4gICRzY29wZS5jYW5jZWwgPSAtPlxuICAgIGhpZGVTaGVldCA9ICRpb25pY0FjdGlvblNoZWV0LnNob3coXG4gICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdEaXNjYXJkIENoYW5nZXMnXG4gICAgICB0aXRsZVRleHQ6ICdEaXNjYXJkIGNoYW5nZXMnXG4gICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAkc2NvcGUuaG9tZSgpXG4gICAgKVxuICBcbiAgJGpyQ3JvcC5kZWZhdWx0T3B0aW9ucy50ZW1wbGF0ZSA9ICRqckNyb3AuZGVmYXVsdE9wdGlvbnMudGVtcGxhdGUucmVwbGFjZSgve3svZywgJzwlJykucmVwbGFjZSgvfX0vZywgJyU+JylcbiIsImFwcC5jb250cm9sbGVyICdSZWNvcmRDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNIaXN0b3J5LCAkaW9uaWNQb3B1cCwgJGlvbmljTmF2QmFyRGVsZWdhdGUpIC0+XG4gICRzY29wZS4kcGFyZW50LiRvbiAnJGlvbmljVmlldy5iZWZvcmVMZWF2ZScsIC0+XG4gICAgY29uc29sZS5sb2coJ2JlZm9yZUxlYXZlJylcbiAgICByZWMuc3RvcCgpXG5cbiAgcmVjID0gbmV3IFJlY29yZGVyKFxuICAgICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcubTRhJyxcbiAgICBvblNjcnViVXBkYXRlOiAobXMpLT5cbiAgICAgICRzY29wZS5zY3J1Yl9wb2ludF9tcyA9IG1zXG4gICAgb25EdXJhdGlvblVwZGF0ZTogKG1zKS0+XG4gICAgICAkc2NvcGUuZHVyYXRpb25fbXMgPSBtc1xuICAgICAgJHNjb3BlLmVwaXNvZGUuZHVyYXRpb25fbXMgPSBtc1xuICAgIG9uQXVkaW9FcnJvcjogLT5cbiAgICAgICRpb25pY1BvcHVwLmFsZXJ0KFxuICAgICAgICB0aXRsZTogJ0F1ZGlvIEVycm9yJ1xuICAgICAgICB0ZW1wbGF0ZTogJ1RoZSBhdWRpbyBzeXN0ZW0gaGFzIGZhaWxlZC4gUGxlYXNlIHJlcG9ydCB0aGlzLidcbiAgICAgICkudGhlbiAoKHJlcykgLT5cbiAgICAgICAgJHNjb3BlLmhvbWUoKVxuICAgICAgKVxuICAgIG9uUGxheVN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmlzX3BsYXlpbmcgPSB0cnVlXG4gICAgb25QbGF5U3RvcDogLT5cbiAgICAgICRzY29wZS5pc19wbGF5aW5nID0gZmFsc2VcbiAgICBvblJlY29yZFN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmhhc19jaGFuZ2VzID0gdHJ1ZVxuICAgICAgJGlvbmljTmF2QmFyRGVsZWdhdGUuc2hvd0JhY2tCdXR0b24gZmFsc2VcbiAgICAgICRpb25pY0hpc3RvcnkuY2xlYXJIaXN0b3J5KClcbiAgICAgICRzY29wZS5pc19yZWNvcmRpbmcgPSB0cnVlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuZXBpc29kZS5yZWNvcmRlZF9hdCA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgb25SZWNvcmRTdG9wOiAtPlxuICAgICAgJHNjb3BlLmlzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IHRydWVcbiAgICBvbkV2ZW50OiAtPlxuICAgICAgJHNjb3BlLiRhcHBseUFzeW5jKClcbiAgICAgIFxuICApXG5cbiAgaG9sZF9wcm9taXNlID0gbnVsbFxuICAkc2NvcGUuaG9sZCA9IChtcykgLT5cbiAgICBpZiAhbXNcbiAgICAgICRpbnRlcnZhbC5jYW5jZWwgaG9sZF9wcm9taXNlXG4gICAgICByZXR1cm5cbiAgICBob2xkX3Byb21pc2UgPSAkaW50ZXJ2YWwoKC0+XG4gICAgICByZWMuc3RlcChtcylcbiAgICApLCAxMDApXG5cbiAgJHNjb3BlLnNlZWsgPSAobXMpIC0+XG4gICAgY29uc29sZS5sb2cgJ3NlZWsnLCBtc1xuICAgIHJlYy5zZWVrKG1zKVxuXG4gICRzY29wZS5zdGVwID0gKG1zKSAtPlxuICAgIGNvbnNvbGUubG9nICdzdGVwJywgbXNcbiAgICByZWMuc3RlcChtcylcblxuICAkc2NvcGUucGxheSA9IC0+XG4gICAgcmVjLnBsYXkoKVxuXG4gICRzY29wZS5zdG9wX3BsYXlpbmcgPSAtPlxuICAgIHJlYy5zdG9wKClcbiAgICBcbiAgJHNjb3BlLnN0b3BfcmVjb3JkaW5nID0gLT5cbiAgICByZWMuc3RvcCgpXG4gICAgXG4gICRzY29wZS5yZWNvcmQgPSAtPlxuICAgIGlmICRzY29wZS5oYXNfcmVjb3JkaW5nXG4gICAgICBoaWRlU2hlZXQgPSAkaW9uaWNBY3Rpb25TaGVldC5zaG93KFxuICAgICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdTY3JhcCBhbmQgUmUtUmVjb3JkJ1xuICAgICAgICB0aXRsZVRleHQ6ICdSZS1yZWNvcmQgZXBpc29kZSdcbiAgICAgICAgY2FuY2VsVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAgIGhpZGVTaGVldCgpXG4gICAgICAgICAgcmVjLnJlY29yZCgpXG4gICAgICApXG4gICAgZWxzZVxuICAgICAgcmVjLnJlY29yZCgpXG4iLCJhcHAuY29udHJvbGxlciAnU2V0dGluZ3NDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNOYXZCYXJEZWxlZ2F0ZSwgJGlvbmljUG9wdXApIC0+XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
