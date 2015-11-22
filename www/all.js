(function() {
  window.is_app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;

  window.app = angular.module('fastcast', ['ionic', 'ngCordova', 'ngIOS9UIWebViewPatch', 'jrCrop']).config(function($interpolateProvider, $ionicConfigProvider) {
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
  app.controller('AppController', function($scope, $http, $interval, $cordovaFile, $state, $cordovaFileTransfer, $q, $ionicHistory, $ionicSideMenuDelegate) {
    var load_state, next_episode_number;
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
      var e, error, k;
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
      guid = sprintf('fc-%s-%d', $scope.podcast.code(t));
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
  app.controller('HomeController', function($scope, $ionicHistory) {});

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
      code: '',
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
      $scope.show.code = $scope.show.code.toLowerCase();
      $scope.has_changes = !angular.equals(original, newValue);
      return $ionicNavBarDelegate.showBackButton(!$scope.has_changes);
    }), true);
    $scope.save = function() {
      var ref1, rss, validate;
      validate = {
        code: 'a show code',
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvYXBwLmNvZmZlZSIsIi9zb3VyY2UvYm9vdHN0cmFwLmNvZmZlZSIsImpzdC5qcyIsIi9zb3VyY2Uvc3RhdGljX2NhdGVnb3JpZXMuY29mZmVlIiwiL3NvdXJjZS9zdGF0aWNfcG9kY2FzdHMuY29mZmVlIiwiL3NvdXJjZS91dGlsLmNvZmZlZSIsIi9zb3VyY2UvY2xhc3Nlcy9jbGFzc2VzL1JlY29yZGVyLmNvZmZlZSIsIi9zb3VyY2UvY2xhc3Nlcy9jbGFzc2VzL1VwbG9hZFdvcmtlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9FcGlzb2RlQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0ZpbmFsaXplQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0ZpbmlzaENvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9Ib21lQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL1BvZGNhc3RTZXR0aW5nc0NvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9SZWNvcmRDb250cm9sbGVyLmNvZmZlZSIsIi9zb3VyY2UvY29udHJvbGxlcnMvY29udHJvbGxlcnMvU2V0dGluZ3NDb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBYixDQUFxQixTQUFyQixDQUFBLEtBQW1DLENBQUMsQ0FBcEMsSUFBMEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFiLENBQXFCLFVBQXJCLENBQUEsS0FBb0Ms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QWlELGlCQUFqRCxFQUFvRSxvQkFBcEUsRUFBMEYsV0FBMUYsR0FBQSxDQUFyQztBQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5pc19hcHAgPSBkb2N1bWVudC5VUkwuaW5kZXhPZignaHR0cDovLycpID09IC0xIGFuZCBkb2N1bWVudC5VUkwuaW5kZXhPZignaHR0cHM6Ly8nKSA9PSAtMVxuXG53aW5kb3cuYXBwID0gYW5ndWxhci5tb2R1bGUoJ2Zhc3RjYXN0JywgW1xuICAnaW9uaWMnXG4gICduZ0NvcmRvdmEnLFxuICAnbmdJT1M5VUlXZWJWaWV3UGF0Y2gnLFxuICAnanJDcm9wJyxcbl0pXG5cbi5jb25maWcoKCRpbnRlcnBvbGF0ZVByb3ZpZGVyLCAkaW9uaWNDb25maWdQcm92aWRlcikgLT5cbiAgJGludGVycG9sYXRlUHJvdmlkZXIuc3RhcnRTeW1ib2woJzwlJykuZW5kU3ltYm9sICclPidcbiAgJGlvbmljQ29uZmlnUHJvdmlkZXIudmlld3Muc3dpcGVCYWNrRW5hYmxlZChmYWxzZSlcbilcblxuLnJ1bigoJGlvbmljUGxhdGZvcm0pIC0+XG4gICRpb25pY1BsYXRmb3JtLnJlYWR5IC0+XG4gICAgIyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgIyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgd2luZG93LmNvcmRvdmEgYW5kIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmRcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIgdHJ1ZVxuICAgIGlmIHdpbmRvdy5TdGF0dXNCYXJcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKVxuKVxuXG4uZmlsdGVyKCdudW1iZXJGaXhlZExlbicsIC0+XG4gIChuLCBsZW4pIC0+XG4gICAgc3ByaW50ZiAnJTAnICsgbGVuICsgJ2QnLCBuXG4pXG5cbi5maWx0ZXIoJ29yZGVyQnlNYWdpYycsIC0+IFxuICAoZXBpc29kZXMpIC0+XG4gICAgb3JkZXJCeU1hZ2ljKGVwaXNvZGVzKVxuKVxuXG4uY29uZmlnKCgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSAtPlxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsXG4gICAgdXJsOiAnLydcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCdcbiAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInKVxuICAuc3RhdGUoJ2VwaXNvZGUnLFxuICAgIGNhY2hlOiBmYWxzZVxuICAgIHVybDogJy9lcGlzb2RlJ1xuICAgIHRlbXBsYXRlOiAnPGlvbi1uYXYtdmlldz48L2lvbi1uYXYtdmlldz4nXG4gICAgY29udHJvbGxlcjogJ0VwaXNvZGVDb250cm9sbGVyJ1xuICAgIGFic3RyYWN0OiB0cnVlKVxuICAgIC5zdGF0ZSgnZXBpc29kZS5yZWNvcmQnLFxuICAgICAgdXJsOiAnL3JlY29yZCdcbiAgICAgIHRlbXBsYXRlVXJsOiAnZXBpc29kZS9yZWNvcmQuaHRtbCdcbiAgICAgIGNvbnRyb2xsZXI6ICdSZWNvcmRDb250cm9sbGVyJ1xuICAgICAgcGFyZW50OiAnZXBpc29kZScpXG4gICAgLnN0YXRlKCdlcGlzb2RlLmZpbmFsaXplJyxcbiAgICAgIHVybDogJy9maW5hbGl6ZSdcbiAgICAgIHRlbXBsYXRlVXJsOiAnZXBpc29kZS9maW5hbGl6ZS5odG1sJ1xuICAgICAgY29udHJvbGxlcjogJ0ZpbmFsaXplQ29udHJvbGxlcidcbiAgICAgIHBhcmVudDogJ2VwaXNvZGUnKVxuICAgIC5zdGF0ZSgnZXBpc29kZS5maW5pc2gnLFxuICAgICAgdXJsOiAnL2ZpbmlzaCdcbiAgICAgIHRlbXBsYXRlVXJsOiAnZXBpc29kZS9maW5pc2guaHRtbCdcbiAgICAgIGNvbnRyb2xsZXI6ICdGaW5pc2hDb250cm9sbGVyJ1xuICAgICAgcGFyZW50OiAnZXBpc29kZScpXG4gIC5zdGF0ZSgnc2V0dGluZ3MnLFxuICAgIHVybDogJy9zZXR0aW5ncydcbiAgICB0ZW1wbGF0ZTogJzxpb24tbmF2LXZpZXc+PC9pb24tbmF2LXZpZXc+J1xuICAgIGNvbnRyb2xsZXI6ICdTZXR0aW5nc0NvbnRyb2xsZXInXG4gICAgYWJzdHJhY3Q6IHRydWUpXG4gICAgLnN0YXRlKCdzZXR0aW5ncy5wb2RjYXN0JyxcbiAgICAgIHVybDogJy9wb2RjYXN0J1xuICAgICAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy9wb2RjYXN0Lmh0bWwnXG4gICAgICBjb250cm9sbGVyOiAnUG9kY2FzdFNldHRpbmdzQ29udHJvbGxlcidcbiAgICAgIHBhcmVudDogJ3NldHRpbmdzJylcbiAgICBcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSAnLydcbilcbiIsImJvb3RfYW5ndWxhciA9IC0+XG4gIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpXG4gIGFuZ3VsYXIuYm9vdHN0cmFwIGRvbUVsZW1lbnQsIFsgJ2Zhc3RjYXN0JyBdXG4gIFxuaWYgaXNfYXBwXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ2RldmljZXJlYWR5JywgYm9vdF9hbmd1bGFyLCBmYWxzZVxuZWxzZVxuICAkIC0+IGJvb3RfYW5ndWxhcigpXG4iLCJ0aGlzW1wiRmFzdENhc3RcIl0gPSB0aGlzW1wiRmFzdENhc3RcIl0gfHwge307XG50aGlzW1wiRmFzdENhc3RcIl1bXCJ0ZW1wbGF0ZXNcIl0gPSB0aGlzW1wiRmFzdENhc3RcIl1bXCJ0ZW1wbGF0ZXNcIl0gfHwge307XG50aGlzW1wiRmFzdENhc3RcIl1bXCJ0ZW1wbGF0ZXNcIl1bXCJlcGlzb2RlXCJdID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnLCBfX2UgPSBfLmVzY2FwZTtcbndpdGggKG9iaikge1xuX19wICs9ICc8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVwiZW5cIj5cXG5cXG48aGVhZD5cXG5cXG4gICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiPlxcbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cXG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiPlxcbiAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlwiPlxcblxcbiAgICA8dGl0bGU+QWdlbmN5IC0gU3RhcnQgQm9vdHN0cmFwIFRoZW1lPC90aXRsZT5cXG5cXG4gICAgPCEtLSBCb290c3RyYXAgQ29yZSBDU1MgLS0+XFxuICAgIDxsaW5rIGhyZWY9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPlxcblxcbiAgICA8IS0tIEN1c3RvbSBDU1MgLS0+XFxuICAgIDxsaW5rIGhyZWY9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvY3NzL2FnZW5jeS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+XFxuXFxuICAgIDwhLS0gQ3VzdG9tIEZvbnRzIC0tPlxcbiAgICA8bGluayBocmVmPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCI+XFxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxcbiAgICA8bGluayBocmVmPVxcJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXVzaGFuK1NjcmlwdFxcJyByZWw9XFwnc3R5bGVzaGVldFxcJyB0eXBlPVxcJ3RleHQvY3NzXFwnPlxcbiAgICA8bGluayBocmVmPVxcJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ecm9pZCtTZXJpZjo0MDAsNzAwLDQwMGl0YWxpYyw3MDBpdGFsaWNcXCcgcmVsPVxcJ3N0eWxlc2hlZXRcXCcgdHlwZT1cXCd0ZXh0L2Nzc1xcJz5cXG4gICAgPGxpbmsgaHJlZj1cXCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK1NsYWI6NDAwLDEwMCwzMDAsNzAwXFwnIHJlbD1cXCdzdHlsZXNoZWV0XFwnIHR5cGU9XFwndGV4dC9jc3NcXCc+XFxuXFxuICAgIDwhLS0gSFRNTDUgU2hpbSBhbmQgUmVzcG9uZC5qcyBJRTggc3VwcG9ydCBvZiBIVE1MNSBlbGVtZW50cyBhbmQgbWVkaWEgcXVlcmllcyAtLT5cXG4gICAgPCEtLSBXQVJOSU5HOiBSZXNwb25kLmpzIGRvZXNuXFwndCB3b3JrIGlmIHlvdSB2aWV3IHRoZSBwYWdlIHZpYSBmaWxlOi8vIC0tPlxcbiAgICA8IS0tW2lmIGx0IElFIDldPlxcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL29zcy5tYXhjZG4uY29tL2xpYnMvaHRtbDVzaGl2LzMuNy4wL2h0bWw1c2hpdi5qc1wiPjwvc2NyaXB0PlxcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL29zcy5tYXhjZG4uY29tL2xpYnMvcmVzcG9uZC5qcy8xLjQuMi9yZXNwb25kLm1pbi5qc1wiPjwvc2NyaXB0PlxcbiAgICA8IVtlbmRpZl0tLT5cXG5cXG48L2hlYWQ+XFxuXFxuPGJvZHkgaWQ9XCJwYWdlLXRvcFwiIGNsYXNzPVwiaW5kZXhcIj5cXG5cXG4gICAgPCEtLSBOYXZpZ2F0aW9uIC0tPlxcbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3BcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICA8IS0tIEJyYW5kIGFuZCB0b2dnbGUgZ2V0IGdyb3VwZWQgZm9yIGJldHRlciBtb2JpbGUgZGlzcGxheSAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlciBwYWdlLXNjcm9sbFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZCBwYWdlLXNjcm9sbFwiIGhyZWY9XCIjcGFnZS10b3BcIj5TdGFydCBCb290c3RyYXA8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPCEtLSBDb2xsZWN0IHRoZSBuYXYgbGlua3MsIGZvcm1zLCBhbmQgb3RoZXIgY29udGVudCBmb3IgdG9nZ2xpbmcgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcGFnZS10b3BcIj48L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1zY3JvbGxcIiBocmVmPVwiI3NlcnZpY2VzXCI+U2VydmljZXM8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1zY3JvbGxcIiBocmVmPVwiI3BvcnRmb2xpb1wiPlBvcnRmb2xpbzwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLXNjcm9sbFwiIGhyZWY9XCIjYWJvdXRcIj5BYm91dDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLXNjcm9sbFwiIGhyZWY9XCIjdGVhbVwiPlRlYW08L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1zY3JvbGxcIiBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8IS0tIC8ubmF2YmFyLWNvbGxhcHNlIC0tPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIC8uY29udGFpbmVyLWZsdWlkIC0tPlxcbiAgICA8L25hdj5cXG5cXG4gICAgPCEtLSBIZWFkZXIgLS0+XFxuICAgIDxoZWFkZXI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLXRleHRcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWxlYWQtaW5cIj5XZWxjb21lIFRvIE91ciBTdHVkaW8hPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1oZWFkaW5nXCI+VGhpcyBpcyBhbiBFcGlzb2RlITwvZGl2PlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3NlcnZpY2VzXCIgY2xhc3M9XCJwYWdlLXNjcm9sbCBidG4gYnRuLXhsXCI+VGVsbCBNZSBNb3JlPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICA8IS0tIFNlcnZpY2VzIFNlY3Rpb24gLS0+XFxuICAgIDxzZWN0aW9uIGlkPVwic2VydmljZXNcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPlNlcnZpY2VzPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb24tc3ViaGVhZGluZyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9oMz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEtc3RhY2sgZmEtNHhcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNpcmNsZSBmYS1zdGFjay0yeCB0ZXh0LXByaW1hcnlcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zaG9wcGluZy1jYXJ0IGZhLXN0YWNrLTF4IGZhLWludmVyc2VcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzZXJ2aWNlLWhlYWRpbmdcIj5FLUNvbW1lcmNlPC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNaW5pbWEgbWF4aW1lIHF1YW0gYXJjaGl0ZWN0byBxdW8gaW52ZW50b3JlIGhhcnVtIGV4IG1hZ25pLCBkaWN0YSBpbXBlZGl0LjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYS1zdGFjayBmYS00eFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlIGZhLXN0YWNrLTJ4IHRleHQtcHJpbWFyeVwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxhcHRvcCBmYS1zdGFjay0xeCBmYS1pbnZlcnNlXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic2VydmljZS1oZWFkaW5nXCI+UmVzcG9uc2l2ZSBEZXNpZ248L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1pbmltYSBtYXhpbWUgcXVhbSBhcmNoaXRlY3RvIHF1byBpbnZlbnRvcmUgaGFydW0gZXggbWFnbmksIGRpY3RhIGltcGVkaXQuPC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhLXN0YWNrIGZhLTR4XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaXJjbGUgZmEtc3RhY2stMnggdGV4dC1wcmltYXJ5XCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbG9jayBmYS1zdGFjay0xeCBmYS1pbnZlcnNlXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic2VydmljZS1oZWFkaW5nXCI+V2ViIFNlY3VyaXR5PC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNaW5pbWEgbWF4aW1lIHF1YW0gYXJjaGl0ZWN0byBxdW8gaW52ZW50b3JlIGhhcnVtIGV4IG1hZ25pLCBkaWN0YSBpbXBlZGl0LjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8IS0tIFBvcnRmb2xpbyBHcmlkIFNlY3Rpb24gLS0+XFxuICAgIDxzZWN0aW9uIGlkPVwicG9ydGZvbGlvXCIgY2xhc3M9XCJiZy1saWdodC1ncmF5XCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5Qb3J0Zm9saW88L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi1zdWJoZWFkaW5nIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L2gzPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtc20tNiBwb3J0Zm9saW8taXRlbVwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9Nb2RhbDFcIiBjbGFzcz1cInBvcnRmb2xpby1saW5rXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3Zlci1jb250ZW50XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMgZmEtM3hcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vcm91bmRpY29ucy5wbmdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWNhcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Um91bmQgSWNvbnM8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkdyYXBoaWMgRGVzaWduPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgcG9ydGZvbGlvLWl0ZW1cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvTW9kYWwyXCIgY2xhc3M9XCJwb3J0Zm9saW8tbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXItY29udGVudFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzIGZhLTN4XCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL3N0YXJ0dXAtZnJhbWV3b3JrLnBuZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tY2FwdGlvblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TdGFydHVwIEZyYW1ld29yazwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+V2Vic2l0ZSBEZXNpZ248L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtc20tNiBwb3J0Zm9saW8taXRlbVwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9Nb2RhbDNcIiBjbGFzcz1cInBvcnRmb2xpby1saW5rXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3Zlci1jb250ZW50XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMgZmEtM3hcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vdHJlZWhvdXNlLnBuZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tY2FwdGlvblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5UcmVlaG91c2U8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPldlYnNpdGUgRGVzaWduPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgcG9ydGZvbGlvLWl0ZW1cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvTW9kYWw0XCIgY2xhc3M9XCJwb3J0Zm9saW8tbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXItY29udGVudFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzIGZhLTN4XCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL2dvbGRlbi5wbmdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWNhcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R29sZGVuPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5XZWJzaXRlIERlc2lnbjwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IHBvcnRmb2xpby1pdGVtXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb01vZGFsNVwiIGNsYXNzPVwicG9ydGZvbGlvLWxpbmtcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3ZlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cyBmYS0zeFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9lc2NhcGUucG5nXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1jYXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkVzY2FwZTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+V2Vic2l0ZSBEZXNpZ248L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtc20tNiBwb3J0Zm9saW8taXRlbVwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9Nb2RhbDZcIiBjbGFzcz1cInBvcnRmb2xpby1saW5rXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3Zlci1jb250ZW50XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMgZmEtM3hcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vZHJlYW1zLnBuZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tY2FwdGlvblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EcmVhbXM8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPldlYnNpdGUgRGVzaWduPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPCEtLSBBYm91dCBTZWN0aW9uIC0tPlxcbiAgICA8c2VjdGlvbiBpZD1cImFib3V0XCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5BYm91dDwvaDI+XFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJzZWN0aW9uLXN1YmhlYWRpbmcgdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvaDM+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidGltZWxpbmVcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1pbWFnZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1jaXJjbGUgaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL2Fib3V0LzEuanBnXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtcGFuZWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1oZWFkaW5nXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjIwMDktMjAxMTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic3ViaGVhZGluZ1wiPk91ciBIdW1ibGUgQmVnaW5uaW5nczwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdXQgdm9sdXB0YXR1bSBlaXVzIHNhcGllbnRlLCB0b3RhbSByZWljaWVuZGlzIHRlbXBvcmlidXMgcXVpIHF1aWJ1c2RhbSwgcmVjdXNhbmRhZSBzaXQgdmVybyB1bmRlLCBzZWQsIGluY2lkdW50IGV0IGVhIHF1byBkb2xvcmUgbGF1ZGFudGl1bSBjb25zZWN0ZXR1ciE8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0aW1lbGluZS1pbnZlcnRlZFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaW1hZ2VcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctY2lyY2xlIGltZy1yZXNwb25zaXZlXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9hYm91dC8yLmpwZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLXBhbmVsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaGVhZGluZ1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5NYXJjaCAyMDExPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzdWJoZWFkaW5nXCI+QW4gQWdlbmN5IGlzIEJvcm48L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50IHV0IHZvbHVwdGF0dW0gZWl1cyBzYXBpZW50ZSwgdG90YW0gcmVpY2llbmRpcyB0ZW1wb3JpYnVzIHF1aSBxdWlidXNkYW0sIHJlY3VzYW5kYWUgc2l0IHZlcm8gdW5kZSwgc2VkLCBpbmNpZHVudCBldCBlYSBxdW8gZG9sb3JlIGxhdWRhbnRpdW0gY29uc2VjdGV0dXIhPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaW1hZ2VcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctY2lyY2xlIGltZy1yZXNwb25zaXZlXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9hYm91dC8zLmpwZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLXBhbmVsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaGVhZGluZ1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EZWNlbWJlciAyMDEyPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzdWJoZWFkaW5nXCI+VHJhbnNpdGlvbiB0byBGdWxsIFNlcnZpY2U8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50IHV0IHZvbHVwdGF0dW0gZWl1cyBzYXBpZW50ZSwgdG90YW0gcmVpY2llbmRpcyB0ZW1wb3JpYnVzIHF1aSBxdWlidXNkYW0sIHJlY3VzYW5kYWUgc2l0IHZlcm8gdW5kZSwgc2VkLCBpbmNpZHVudCBldCBlYSBxdW8gZG9sb3JlIGxhdWRhbnRpdW0gY29uc2VjdGV0dXIhPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGltZWxpbmUtaW52ZXJ0ZWRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWltYWdlXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWNpcmNsZSBpbWctcmVzcG9uc2l2ZVwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvYWJvdXQvNC5qcGdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1wYW5lbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWhlYWRpbmdcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SnVseSAyMDE0PC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzdWJoZWFkaW5nXCI+UGhhc2UgVHdvIEV4cGFuc2lvbjwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFN1bnQgdXQgdm9sdXB0YXR1bSBlaXVzIHNhcGllbnRlLCB0b3RhbSByZWljaWVuZGlzIHRlbXBvcmlidXMgcXVpIHF1aWJ1c2RhbSwgcmVjdXNhbmRhZSBzaXQgdmVybyB1bmRlLCBzZWQsIGluY2lkdW50IGV0IGVhIHF1byBkb2xvcmUgbGF1ZGFudGl1bSBjb25zZWN0ZXR1ciE8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0aW1lbGluZS1pbnZlcnRlZFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaW1hZ2VcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5CZSBQYXJ0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPk9mIE91clxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5TdG9yeSE8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8IS0tIFRlYW0gU2VjdGlvbiAtLT5cXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZWFtXCIgY2xhc3M9XCJiZy1saWdodC1ncmF5XCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5PdXIgQW1hemluZyBUZWFtPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb24tc3ViaGVhZGluZyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9oMz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLW1lbWJlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy90ZWFtLzEuanBnXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PktheSBHYXJsYW5kPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5MZWFkIERlc2lnbmVyPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIHNvY2lhbC1idXR0b25zXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWxpbmtlZGluXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLW1lbWJlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy90ZWFtLzIuanBnXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkxhcnJ5IFBhcmtlcjwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TGVhZCBNYXJrZXRlcjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSBzb2NpYWwtYnV0dG9uc1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWZhY2Vib29rXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS1saW5rZWRpblwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1tZW1iZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvdGVhbS8zLmpwZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNpcmNsZVwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EaWFuYSBQZXJ0ZXJzZW48L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxlYWQgRGV2ZWxvcGVyPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIHNvY2lhbC1idXR0b25zXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWxpbmtlZGluXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMiB0ZXh0LWNlbnRlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYXJnZSB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF1dCBlYXF1ZSwgbGFib3Jpb3NhbSB2ZXJpdGF0aXMsIHF1b3Mgbm9uIHF1aXMgYWQgcGVyc3BpY2lhdGlzLCB0b3RhbSBjb3Jwb3JpcyBlYSwgYWxpYXMgdXQgdW5kZS48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPCEtLSBDbGllbnRzIEFzaWRlIC0tPlxcbiAgICA8YXNpZGUgY2xhc3M9XCJjbGllbnRzXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLXNtLTZcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL2xvZ29zL2VudmF0by5qcGdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC1zbS02XCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9sb2dvcy9kZXNpZ25tb2RvLmpwZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLXNtLTZcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL2xvZ29zL3RoZW1lZm9yZXN0LmpwZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLXNtLTZcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL2xvZ29zL2NyZWF0aXZlLW1hcmtldC5qcGdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2FzaWRlPlxcbiAgICBcXG4gICAgPCEtLSBDb250YWN0IFNlY3Rpb24gLS0+XFxuICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+Q29udGFjdCBVczwvaDI+XFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJzZWN0aW9uLXN1YmhlYWRpbmcgdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvaDM+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gbmFtZT1cInNlbnRNZXNzYWdlXCIgaWQ9XCJjb250YWN0Rm9ybVwiIG5vdmFsaWRhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZSAqXCIgaWQ9XCJuYW1lXCIgcmVxdWlyZWQgZGF0YS12YWxpZGF0aW9uLXJlcXVpcmVkLW1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lLlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlclwiPjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgKlwiIGlkPVwiZW1haWxcIiByZXF1aXJlZCBkYXRhLXZhbGlkYXRpb24tcmVxdWlyZWQtbWVzc2FnZT1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MuXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyXCI+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgUGhvbmUgKlwiIGlkPVwicGhvbmVcIiByZXF1aXJlZCBkYXRhLXZhbGlkYXRpb24tcmVxdWlyZWQtbWVzc2FnZT1cIlBsZWFzZSBlbnRlciB5b3VyIHBob25lIG51bWJlci5cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2sgdGV4dC1kYW5nZXJcIj48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZSAqXCIgaWQ9XCJtZXNzYWdlXCIgcmVxdWlyZWQgZGF0YS12YWxpZGF0aW9uLXJlcXVpcmVkLW1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgYSBtZXNzYWdlLlwiPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyXCI+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi14bFwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8Zm9vdGVyPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvcHlyaWdodFwiPkNvcHlyaWdodCAmY29weTsgWW91ciBXZWJzaXRlIDIwMTQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIHNvY2lhbC1idXR0b25zXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS10d2l0dGVyXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS1saW5rZWRpblwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIHF1aWNrbGlua3NcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcml2YWN5IFBvbGljeTwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlRlcm1zIG9mIFVzZTwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9mb290ZXI+XFxuXFxuICAgIDwhLS0gUG9ydGZvbGlvIE1vZGFscyAtLT5cXG4gICAgPCEtLSBVc2UgdGhlIG1vZGFscyBiZWxvdyB0byBzaG93Y2FzZSBkZXRhaWxzIGFib3V0IHlvdXIgcG9ydGZvbGlvIHByb2plY3RzISAtLT5cXG5cXG4gICAgPCEtLSBQb3J0Zm9saW8gTW9kYWwgMSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1tb2RhbCBtb2RhbCBmYWRlXCIgaWQ9XCJwb3J0Zm9saW9Nb2RhbDFcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtbW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibHJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJybFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUHJvamVjdCBEZXRhaWxzIEdvIEhlcmUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9qZWN0IE5hbWU8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0taW50cm8gdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL3JvdW5kaWNvbnMtZnJlZS5wbmdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VXNlIHRoaXMgYXJlYSB0byBkZXNjcmliZSB5b3VyIHByb2plY3QuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFc3QgYmxhbmRpdGlpcyBkb2xvcmVtIGN1bHBhIGluY2lkdW50IG1pbnVzIGRpZ25pc3NpbW9zIGRlc2VydW50IHJlcGVsbGF0IGFwZXJpYW0gcXVhc2kgc3VudCBvZmZpY2lhIGV4cGVkaXRhIGJlYXRhZSBjdXBpZGl0YXRlLCBtYWlvcmVzIHJlcHVkaWFuZGFlLCBub3N0cnVtLCByZWljaWVuZGlzIGZhY2VyZSBuZW1vITwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPldhbnQgdGhlc2UgaWNvbnMgaW4gdGhpcyBwb3J0Zm9saW8gaXRlbSBzYW1wbGU/PC9zdHJvbmc+WW91IGNhbiBkb3dubG9hZCA2MCBvZiB0aGVtIGZvciBmcmVlLCBjb3VydGVzeSBvZiA8YSBocmVmPVwiaHR0cHM6Ly9nZXRkcGQuY29tL2NhcnQvaG9wbGluay8xODA3Nj9yZWZlcnJlcj1idmJvNGtheDVrOG9nY1wiPlJvdW5kSWNvbnMuY29tPC9hPiwgb3IgeW91IGNhbiBwdXJjaGFzZSB0aGUgMTUwMCBpY29uIHNldCA8YSBocmVmPVwiaHR0cHM6Ly9nZXRkcGQuY29tL2NhcnQvaG9wbGluay8xODA3Nj9yZWZlcnJlcj1idmJvNGtheDVrOG9nY1wiPmhlcmU8L2E+LjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmVcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EYXRlOiBKdWx5IDIwMTQ8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNsaWVudDogUm91bmQgSWNvbnM8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNhdGVnb3J5OiBHcmFwaGljIERlc2lnbjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPiBDbG9zZSBQcm9qZWN0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0gUG9ydGZvbGlvIE1vZGFsIDIgLS0+XFxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tbW9kYWwgbW9kYWwgZmFkZVwiIGlkPVwicG9ydGZvbGlvTW9kYWwyXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLW1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbGctb2Zmc2V0LTJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdCBIZWFkaW5nPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWludHJvIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9zdGFydHVwLWZyYW1ld29yay1wcmV2aWV3LnBuZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiaHR0cDovL2Rlc2lnbm1vZG8uY29tL3N0YXJ0dXAvP3U9Nzg3XCI+U3RhcnR1cCBGcmFtZXdvcms8L2E+IGlzIGEgd2Vic2l0ZSBidWlsZGVyIGZvciBwcm9mZXNzaW9uYWxzLiBTdGFydHVwIEZyYW1ld29yayBjb250YWlucyBjb21wb25lbnRzIGFuZCBjb21wbGV4IGJsb2NrcyAoUFNEK0hUTUwgQm9vdHN0cmFwIHRoZW1lcyBhbmQgdGVtcGxhdGVzKSB3aGljaCBjYW4gZWFzaWx5IGJlIGludGVncmF0ZWQgaW50byBhbG1vc3QgYW55IGRlc2lnbi4gQWxsIG9mIHRoZXNlIGNvbXBvbmVudHMgYXJlIG1hZGUgaW4gdGhlIHNhbWUgc3R5bGUsIGFuZCBjYW4gZWFzaWx5IGJlIGludGVncmF0ZWQgaW50byBwcm9qZWN0cywgYWxsb3dpbmcgeW91IHRvIGNyZWF0ZSBodW5kcmVkcyBvZiBzb2x1dGlvbnMgZm9yIHlvdXIgZnV0dXJlIHByb2plY3RzLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IGNhbiBwcmV2aWV3IFN0YXJ0dXAgRnJhbWV3b3JrIDxhIGhyZWY9XCJodHRwOi8vZGVzaWdubW9kby5jb20vc3RhcnR1cC8/dT03ODdcIj5oZXJlPC9hPi48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPiBDbG9zZSBQcm9qZWN0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0gUG9ydGZvbGlvIE1vZGFsIDMgLS0+XFxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tbW9kYWwgbW9kYWwgZmFkZVwiIGlkPVwicG9ydGZvbGlvTW9kYWwzXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLW1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbGctb2Zmc2V0LTJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFByb2plY3QgRGV0YWlscyBHbyBIZXJlIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdCBOYW1lPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWludHJvIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby90cmVlaG91c2UtcHJldmlldy5wbmdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHJlZWhvdXNlIGlzIGEgZnJlZSBQU0Qgd2ViIHRlbXBsYXRlIGJ1aWx0IGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9NYXRoYXZhbkpheWFcIj5NYXRoYXZhbiBKYXlhPC9hPi4gVGhpcyBpcyBicmlnaHQgYW5kIHNwYWNpb3VzIGRlc2lnbiBwZXJmZWN0IGZvciBwZW9wbGUgb3Igc3RhcnR1cCBjb21wYW5pZXMgbG9va2luZyB0byBzaG93Y2FzZSB0aGVpciBhcHBzIG9yIG90aGVyIHByb2plY3RzLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IGNhbiBkb3dubG9hZCB0aGUgUFNEIHRlbXBsYXRlIGluIHRoaXMgcG9ydGZvbGlvIHNhbXBsZSBpdGVtIGF0IDxhIGhyZWY9XCJodHRwOi8vZnJlZWJpZXN4cHJlc3MuY29tL2dhbGxlcnkvdHJlZWhvdXNlLWZyZWUtcHNkLXdlYi10ZW1wbGF0ZS9cIj5GcmVlYmllc1hwcmVzcy5jb208L2E+LjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+IENsb3NlIFByb2plY3Q8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPCEtLSBQb3J0Zm9saW8gTW9kYWwgNCAtLT5cXG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1tb2RhbCBtb2RhbCBmYWRlXCIgaWQ9XCJwb3J0Zm9saW9Nb2RhbDRcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtbW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibHJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJybFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUHJvamVjdCBEZXRhaWxzIEdvIEhlcmUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9qZWN0IE5hbWU8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0taW50cm8gdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL2dvbGRlbi1wcmV2aWV3LnBuZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdGFydCBCb290c3RyYXBcXCdzIEFnZW5jeSB0aGVtZSBpcyBiYXNlZCBvbiBHb2xkZW4sIGEgZnJlZSBQU0Qgd2Vic2l0ZSB0ZW1wbGF0ZSBidWlsdCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvTWF0aGF2YW5KYXlhXCI+TWF0aGF2YW4gSmF5YTwvYT4uIEdvbGRlbiBpcyBhIG1vZGVybiBhbmQgY2xlYW4gb25lIHBhZ2Ugd2ViIHRlbXBsYXRlIHRoYXQgd2FzIG1hZGUgZXhjbHVzaXZlbHkgZm9yIEJlc3QgUFNEIEZyZWViaWVzLiBUaGlzIHRlbXBsYXRlIGhhcyBhIGdyZWF0IHBvcnRmb2xpbywgdGltZWxpbmUsIGFuZCBtZWV0IHlvdXIgdGVhbSBzZWN0aW9ucyB0aGF0IGNhbiBiZSBlYXNpbHkgbW9kaWZpZWQgdG8gZml0IHlvdXIgbmVlZHMuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGRvd25sb2FkIHRoZSBQU0QgdGVtcGxhdGUgaW4gdGhpcyBwb3J0Zm9saW8gc2FtcGxlIGl0ZW0gYXQgPGEgaHJlZj1cImh0dHA6Ly9mcmVlYmllc3hwcmVzcy5jb20vZ2FsbGVyeS9nb2xkZW4tZnJlZS1vbmUtcGFnZS13ZWItdGVtcGxhdGUvXCI+RnJlZWJpZXNYcHJlc3MuY29tPC9hPi48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPiBDbG9zZSBQcm9qZWN0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0gUG9ydGZvbGlvIE1vZGFsIDUgLS0+XFxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tbW9kYWwgbW9kYWwgZmFkZVwiIGlkPVwicG9ydGZvbGlvTW9kYWw1XCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLW1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbGctb2Zmc2V0LTJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFByb2plY3QgRGV0YWlscyBHbyBIZXJlIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdCBOYW1lPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWludHJvIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9lc2NhcGUtcHJldmlldy5wbmdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXNjYXBlIGlzIGEgZnJlZSBQU0Qgd2ViIHRlbXBsYXRlIGJ1aWx0IGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9NYXRoYXZhbkpheWFcIj5NYXRoYXZhbiBKYXlhPC9hPi4gRXNjYXBlIGlzIGEgb25lIHBhZ2Ugd2ViIHRlbXBsYXRlIHRoYXQgd2FzIGRlc2lnbmVkIHdpdGggYWdlbmNpZXMgaW4gbWluZC4gVGhpcyB0ZW1wbGF0ZSBpcyBpZGVhbCBmb3IgdGhvc2UgbG9va2luZyBmb3IgYSBzaW1wbGUgb25lIHBhZ2Ugc29sdXRpb24gdG8gZGVzY3JpYmUgeW91ciBidXNpbmVzcyBhbmQgb2ZmZXIgeW91ciBzZXJ2aWNlcy48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gZG93bmxvYWQgdGhlIFBTRCB0ZW1wbGF0ZSBpbiB0aGlzIHBvcnRmb2xpbyBzYW1wbGUgaXRlbSBhdCA8YSBocmVmPVwiaHR0cDovL2ZyZWViaWVzeHByZXNzLmNvbS9nYWxsZXJ5L2VzY2FwZS1vbmUtcGFnZS1wc2Qtd2ViLXRlbXBsYXRlL1wiPkZyZWViaWVzWHByZXNzLmNvbTwvYT4uPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4gQ2xvc2UgUHJvamVjdDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIFBvcnRmb2xpbyBNb2RhbCA2IC0tPlxcbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLW1vZGFsIG1vZGFsIGZhZGVcIiBpZD1cInBvcnRmb2xpb01vZGFsNlwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1tb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJsXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQcm9qZWN0IERldGFpbHMgR28gSGVyZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlByb2plY3QgTmFtZTwvaDI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1pbnRybyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vZHJlYW1zLXByZXZpZXcucG5nXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRyZWFtcyBpcyBhIGZyZWUgUFNEIHdlYiB0ZW1wbGF0ZSBidWlsdCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvTWF0aGF2YW5KYXlhXCI+TWF0aGF2YW4gSmF5YTwvYT4uIERyZWFtcyBpcyBhIG1vZGVybiBvbmUgcGFnZSB3ZWIgdGVtcGxhdGUgZGVzaWduZWQgZm9yIGFsbW9zdCBhbnkgcHVycG9zZS4gSXTigJlzIGEgYmVhdXRpZnVsIHRlbXBsYXRlIHRoYXTigJlzIGRlc2lnbmVkIHdpdGggdGhlIEJvb3RzdHJhcCBmcmFtZXdvcmsgaW4gbWluZC48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gZG93bmxvYWQgdGhlIFBTRCB0ZW1wbGF0ZSBpbiB0aGlzIHBvcnRmb2xpbyBzYW1wbGUgaXRlbSBhdCA8YSBocmVmPVwiaHR0cDovL2ZyZWViaWVzeHByZXNzLmNvbS9nYWxsZXJ5L2RyZWFtcy1mcmVlLW9uZS1wYWdlLXdlYi10ZW1wbGF0ZS9cIj5GcmVlYmllc1hwcmVzcy5jb208L2E+LjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+IENsb3NlIFByb2plY3Q8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPCEtLSBqUXVlcnkgLS0+XFxuICAgIDxzY3JpcHQgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2pzL2pxdWVyeS5qc1wiPjwvc2NyaXB0PlxcblxcbiAgICA8IS0tIEJvb3RzdHJhcCBDb3JlIEphdmFTY3JpcHQgLS0+XFxuICAgIDxzY3JpcHQgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cXG5cXG4gICAgPCEtLSBQbHVnaW4gSmF2YVNjcmlwdCAtLT5cXG4gICAgPHNjcmlwdCBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvanMvanF1ZXJ5LmVhc2luZy5taW4uanNcIj48L3NjcmlwdD5cXG4gICAgPHNjcmlwdCBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvanMvY2xhc3NpZS5qc1wiPjwvc2NyaXB0PlxcbiAgICA8c2NyaXB0IHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9qcy9jYnBBbmltYXRlZEhlYWRlci5qc1wiPjwvc2NyaXB0PlxcblxcbiAgICA8IS0tIENvbnRhY3QgRm9ybSBKYXZhU2NyaXB0IC0tPlxcbiAgICA8c2NyaXB0IHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9qcy9qcUJvb3RzdHJhcFZhbGlkYXRpb24uanNcIj48L3NjcmlwdD5cXG4gICAgPHNjcmlwdCBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvanMvY29udGFjdF9tZS5qc1wiPjwvc2NyaXB0PlxcblxcbiAgICA8IS0tIEN1c3RvbSBUaGVtZSBKYXZhU2NyaXB0IC0tPlxcbiAgICA8c2NyaXB0IHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9qcy9hZ2VuY3kuanNcIj48L3NjcmlwdD5cXG5cXG48L2JvZHk+XFxuXFxuPC9odG1sPlxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn07XG50aGlzW1wiRmFzdENhc3RcIl1bXCJ0ZW1wbGF0ZXNcIl1bXCJyc3NcIl0gPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJycsIF9fZSA9IF8uZXNjYXBlLCBfX2ogPSBBcnJheS5wcm90b3R5cGUuam9pbjtcbmZ1bmN0aW9uIHByaW50KCkgeyBfX3AgKz0gX19qLmNhbGwoYXJndW1lbnRzLCAnJykgfVxud2l0aCAob2JqKSB7XG5fX3AgKz0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxyc3MgeG1sbnM6YXRvbT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDUvQXRvbVwiIHhtbG5zOml0dW5lcz1cImh0dHA6Ly93d3cuaXR1bmVzLmNvbS9kdGRzL3BvZGNhc3QtMS4wLmR0ZFwiIHZlcnNpb249XCIyLjBcIj5cXG4gIDxjaGFubmVsPlxcbiAgICA8YXRvbTpsaW5rIGhyZWY9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvZmVlZC5yc3NcIiByZWw9XCJzZWxmXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIi8+XFxuICAgIDx0aXRsZT4nICtcbl9fZSggcG9kY2FzdC50aXRsZSApICtcbic8L3RpdGxlPlxcbiAgICA8bGluaz5odHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvaW5kZXguaHRtbDwvbGluaz5cXG4gICAgPHB1YkRhdGU+JyArXG5fX2UoIHJmYzI4MjIoKSApICtcbic8L3B1YkRhdGU+XFxuICAgIDxsYXN0QnVpbGREYXRlPicgK1xuX19lKCByZmMyODIyKCkgKSArXG4nPC9sYXN0QnVpbGREYXRlPlxcbiAgICA8dHRsPjYwPC90dGw+XFxuICAgIDxsYW5ndWFnZT5lbjwvbGFuZ3VhZ2U+XFxuICAgIDxjb3B5cmlnaHQ+QWxsIHJpZ2h0cyByZXNlcnZlZDwvY29weXJpZ2h0PlxcbiAgICA8d2ViTWFzdGVyPicgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nQGZhc3QtY2FzdC5uZXQgKCcgK1xuX19lKCBwb2RjYXN0LmF1dGhvciApICtcbicpPC93ZWJNYXN0ZXI+XFxuICAgIDxkZXNjcmlwdGlvbj4nICtcbl9fZSggcG9kY2FzdC5kZXNjcmlwdGlvbiApICtcbic8L2Rlc2NyaXB0aW9uPlxcbiAgICA8aXR1bmVzOm5ldy1mZWVkLXVybD5odHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvZmVlZC5yc3M8L2l0dW5lczpuZXctZmVlZC11cmw+XFxuICAgIDxpdHVuZXM6c3VidGl0bGU+JyArXG5fX2UoIHBvZGNhc3Quc3VidGl0bGUgKSArXG4nPC9pdHVuZXM6c3VidGl0bGU+XFxuICAgIDxpdHVuZXM6b3duZXI+XFxuICAgICAgPGl0dW5lczpuYW1lPicgK1xuX19lKCBwb2RjYXN0LmF1dGhvciApICtcbic8L2l0dW5lczpuYW1lPlxcbiAgICAgIDxpdHVuZXM6ZW1haWw+JyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbidAZmFzdC1jYXN0Lm5ldDwvaXR1bmVzOmVtYWlsPlxcbiAgICA8L2l0dW5lczpvd25lcj5cXG4gICAgPGl0dW5lczphdXRob3I+JyArXG5fX2UoIHBvZGNhc3QuYXV0aG9yICkgK1xuJzwvaXR1bmVzOmF1dGhvcj5cXG4gICAgPGl0dW5lczpleHBsaWNpdD4nICtcbl9fZSggcG9kY2FzdC5pc19leHBsaWNpdCA/ICd5ZXMnIDogJ25vJyApICtcbic8L2l0dW5lczpleHBsaWNpdD5cXG4gICAgPGl0dW5lczppbWFnZSBocmVmPVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2xvZ28uanBnXCIvPlxcbiAgICA8aW1hZ2U+XFxuICAgICAgPHVybD5odHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvbG9nby5qcGc8L3VybD5cXG4gICAgICA8dGl0bGU+JyArXG5fX2UoIHBvZGNhc3QudGl0bGUgKSArXG4nPC90aXRsZT5cXG4gICAgICA8bGluaz5odHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvaW5kZXguaHRtbDwvbGluaz5cXG4gICAgPC9pbWFnZT5cXG4gICAgJztcbiBfLmVhY2goWydwcmltYXJ5X2NhdGVnb3J5JywgJ3NlY29uZGFyeV9jYXRlZ29yeSddLCBmdW5jdGlvbihrKSB7IDtcbl9fcCArPSAnXFxuICAgICAgJztcbiB2YXIgcGFydHMgPSBwb2RjYXN0W2tdLnNwbGl0KC9cXHwvKTsgO1xuX19wICs9ICdcXG4gIFxcdFxcdDxpdHVuZXM6Y2F0ZWdvcnkgdGV4dD1cIicgK1xuX19lKCBwYXJ0c1swXSApICtcbidcIj5cXG4gIFxcdFxcdFxcdCc7XG4gaWYocGFydHMubGVuZ3RoPjEpIHsgO1xuX19wICs9ICdcXG4gIFxcdFxcdFxcdFxcdDxpdHVuZXM6Y2F0ZWdvcnkgdGV4dD1cIicgK1xuX19lKCBwYXJ0c1sxXSApICtcbidcIi8+XFxuICBcXHRcXHRcXHQnO1xuIH0gO1xuX19wICs9ICdcXG4gIFxcdFxcdDwvaXR1bmVzOmNhdGVnb3J5PlxcbiAgICAnO1xuIH0pIDtcbl9fcCArPSAnXFxuXFx0XFx0JztcbiBfLmVhY2gob3JkZXJCeU1hZ2ljKHBvZGNhc3QuZXBpc29kZXMpLCBmdW5jdGlvbihlcGlzb2RlKSB7XG4gICAgICAgIGlmKCFlcGlzb2RlLnB1Ymxpc2hlZF9hdCkgcmV0dXJuO1xuICAgICAgICA7XG5fX3AgKz0gJ1xcblxcdFxcdCAgICA8aXRlbT5cXG5cXHRcXHQgICAgICA8Z3VpZCBpc1Blcm1hTGluaz1cImZhbHNlXCI+JyArXG5fX2UoIGVwaXNvZGUuZ3VpZCApICtcbic8L2d1aWQ+XFxuXFx0XFx0ICAgICAgPHRpdGxlPicgK1xuX19lKCBzcHJpbnRmKFwiJTAzZFwiLCBlcGlzb2RlLm51bWJlcikgKSArXG4nIC0gJyArXG5fX2UoIGVwaXNvZGUudGl0bGUgKSArXG4nPC90aXRsZT5cXG5cXHRcXHQgICAgICA8cHViRGF0ZT4nICtcbl9fZSggcmZjMjgyMihlcGlzb2RlLnB1Ymxpc2hlZF9hdCkgKSArXG4nPC9wdWJEYXRlPlxcblxcdFxcdCAgICAgIDxsaW5rPmh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9lcGlzb2Rlcy8nICtcbl9fZSggZXBpc29kZS5zbHVnICkgK1xuJzwvbGluaz5cXG5cXHRcXHQgICAgICA8aXR1bmVzOmR1cmF0aW9uPicgK1xuX19lKCBlcGlzb2RlLmR1cmF0aW9uX21zLnRvSEhNTVNTKCkgKSArXG4nPC9pdHVuZXM6ZHVyYXRpb24+XFxuXFx0XFx0ICAgICAgPGl0dW5lczphdXRob3I+QmVuIEFsbGZyZWU8L2l0dW5lczphdXRob3I+XFxuXFx0XFx0ICAgICAgPGl0dW5lczpleHBsaWNpdD55ZXM8L2l0dW5lczpleHBsaWNpdD5cXG5cXHRcXHQgICAgICA8aXR1bmVzOnN1bW1hcnk+JyArXG5fX2UoIGVwaXNvZGUuZGVzY3JpcHRpb24gKSArXG4nPC9pdHVuZXM6c3VtbWFyeT5cXG5cXHRcXHQgICAgICA8aXR1bmVzOnN1YnRpdGxlPicgK1xuX19lKCBlcGlzb2RlLmRlc2NyaXB0aW9uICkgK1xuJzwvaXR1bmVzOnN1YnRpdGxlPlxcblxcdFxcdCAgICAgIDxkZXNjcmlwdGlvbj4nICtcbl9fZSggZXBpc29kZS5kZXNjcmlwdGlvbiApICtcbic8L2Rlc2NyaXB0aW9uPlxcblxcdFxcdCAgICAgIDxlbmNsb3N1cmUgdHlwZT1cImF1ZGlvL21wNFwiIHVybD1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9lcGlzb2Rlcy8nICtcbl9fZSggZXBpc29kZS5zbHVnICkgK1xuJy8nICtcbl9fZSggZXBpc29kZS5zbHVnICkgK1xuJy5tNGFcIiBsZW5ndGg9XCInICtcbl9fZSggZXBpc29kZS5sZW5ndGhfYnl0ZXMgKSArXG4nXCIvPlxcblxcdFxcdCAgICAgIDxpdHVuZXM6aW1hZ2UgaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9sb2dvLmpwZ1wiLz5cXG5cXHRcXHQgICAgPC9pdGVtPlxcblxcdFxcdCc7XG4gfSkgO1xuX19wICs9ICdcXG4gIDwvY2hhbm5lbD5cXG48L3Jzcz4nO1xuXG59XG5yZXR1cm4gX19wXG59OyIsIndpbmRvdy5jYXRlZ29yaWVzID1cbiAgXCJBcnRzXCI6W1xuICAgIFwiRGVzaWduXCJcbiAgICBcIkZhc2hpb24gJiBCZWF1dHlcIlxuICAgIFwiRm9vZFwiXG4gICAgXCJMaXRlcmF0dXJlXCJcbiAgICBcIlBlcmZvcm1pbmcgQXJ0c1wiXG4gICAgXCJWaXN1YWwgQXJ0c1wiXVxuICBcIkJ1c2luZXNzXCI6W1xuICAgIFwiQnVzaW5lc3MgTmV3c1wiXG4gICAgXCJDYXJlZXJzXCJcbiAgICBcIkludmVzdGluZ1wiXG4gICAgXCJNYW5hZ2VtZW50ICYgTWFya2V0aW5nXCJcbiAgICBcIlNob3BwaW5nXCJdXG4gIFwiQ29tZWR5XCI6W11cbiAgXCJFZHVjYXRpb25cIjpbXG4gICAgXCJFZHVjYXRpb25hbCBUZWNobm9sb2d5XCJcbiAgICBcIkhpZ2hlciBFZHVjYXRpb25cIlxuICAgIFwiSy0xMlwiXG4gICAgXCJMYW5ndWFnZSBDb3Vyc2VzXCJcbiAgICBcIlRyYWluaW5nXCJdXG4gIFwiR2FtZXMgJiBIb2JiaWVzXCI6W1xuICAgIFwiQXV0b21vdGl2ZVwiXG4gICAgXCJBdmlhdGlvblwiXG4gICAgXCJIb2JiaWVzXCJcbiAgICBcIk90aGVyIEdhbWVzXCJcbiAgICBcIlZpZGVvIEdhbWVzXCJdXG4gIFwiR292ZXJubWVudCAmIE9yZ2FuaXphdGlvbnNcIjpbXG4gICAgXCJMb2NhbFwiXG4gICAgXCJOYXRpb25hbFwiXG4gICAgXCJOb24tUHJvZml0XCJcbiAgICBcIlJlZ2lvbmFsXCJdXG4gIFwiSGVhbHRoXCI6W1xuICAgIFwiQWx0ZXJuYXRpdmUgSGVhbHRoXCJcbiAgICBcIkZpdG5lc3MgJiBOdXRyaXRpb25cIlxuICAgIFwiU2VsZi1IZWxwXCJcbiAgICBcIlNleHVhbGl0eVwiXVxuICBcIktpZHMgJiBGYW1pbHlcIjpbXVxuICBcIk11c2ljXCI6W11cbiAgXCJOZXdzICYgUG9saXRpY3NcIjpbXVxuICBcIlJlbGlnaW9uICYgU3Bpcml0dWFsaXR5XCI6W1xuICAgIFwiQnVkZGhpc21cIlxuICAgIFwiQ2hyaXN0aWFuaXR5XCJcbiAgICBcIkhpbmR1aXNtXCJcbiAgICBcIklzbGFtXCJcbiAgICBcIkp1ZGFpc21cIlxuICAgIFwiT3RoZXJcIlxuICAgIFwiU3Bpcml0dWFsaXR5XCJdXG4gIFwiU2NpZW5jZSAmIE1lZGljaW5lXCI6W1xuICAgIFwiTWVkaWNpbmVcIlxuICAgIFwiTmF0dXJhbCBTY2llbmNlc1wiXG4gICAgXCJTb2NpYWwgU2NpZW5jZXNcIl1cbiAgXCJTb2NpZXR5ICYgQ3VsdHVyZVwiOltcbiAgICBcIkhpc3RvcnlcIlxuICAgIFwiUGVyc29uYWwgSm91cm5hbHNcIlxuICAgIFwiUGhpbG9zb3BoeVwiXG4gICAgXCJQbGFjZXMgJiBUcmF2ZWxcIl1cbiAgXCJTcG9ydHMgJiBSZWNyZWF0aW9uXCI6W1xuICAgIFwiQW1hdGV1clwiXG4gICAgXCJDb2xsZWdlICYgSGlnaCBTY2hvb2xcIlxuICAgIFwiT3V0ZG9vclwiXG4gICAgXCJQcm9mZXNzaW9uYWxcIl1cbiAgXCJUZWNobm9sb2d5XCI6W1xuICAgIFwiR2FkZ2V0c1wiXG4gICAgXCJUZWNoIE5ld3NcIlxuICAgIFwiUG9kY2FzdGluZ1wiXG4gICAgXCJTb2Z0d2FyZSBIb3ctVG9cIl1cbiAgXCJUViAmIEZpbG1cIjpbXVxuICAgICIsIndpbmRvdy5zdGF0aWNfZXBpc29kZXMgPSBcbiAgJ2ZjLXRnaS0xNDQ0NjcxNDIwMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDQ2NzE0MjAwMDAnXG4gICAgc2x1ZzogJzAwMS1hc3Nhc3NpbnMnXG4gICAgdGl0bGU6ICdBc3Nhc3NpbnMnXG4gICAgZGVzY3JpcHRpb246ICdUaGUgYWdlLW9sZCBnYW1lIG9mIEFzc2Fzc2lucywgcmUtaW1hZ2luZWQgYXMgYSBnZW8gYXBwLidcbiAgICBudW1iZXI6IDFcbiAgICBwdWJsaXNoZWRfYXQ6IDE0NDQ2NzE0MjAwMDBcbiAgICByZWNvcmRlZF9hdDogMTQ0NDY3MTQyMDAwMFxuICAgIGR1cmF0aW9uX21zOiA1ICogNjAgKiAxMDAwICsgNSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDQwMjk1NjJcbiAgJ2ZjLXRnaS0xNDQ1MDAxMjQwMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDUwMDEyNDAwMDAnXG4gICAgc2x1ZzogJzAwMi1zb2NpYWwtY2FyLXZhbHVlcydcbiAgICB0aXRsZTogJ1NvY2lhbCBDYXIgVmFsdWVzJ1xuICAgIGRlc2NyaXB0aW9uOiAnTmVlZCB0byBrbm93IHdoYXQgeW91ciBjYXIgaXMgcmVhbGx5IHdvcnRoPyBUaGlzIGlkZWEgbWlnaHQganVzdCBkbyBpdC4nXG4gICAgbnVtYmVyOiAyXG4gICAgcHVibGlzaGVkX2F0OiAxNDQ1MDAxMjQwMDAwXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDUwMDEyNDAwMDBcbiAgICBkdXJhdGlvbl9tczogKDIyICogNjAgKyAzNCkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAzMjUwNTY4OFxuICAnZmMtdGdpLTE0NDUyODg1ODAwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTI4ODU4MDAwMCdcbiAgICBzbHVnOiAnMDAzLWNyb3dkLWZ1bmRlZC1hcHBzJ1xuICAgIHRpdGxlOiAnQ3Jvd2QgRnVuZGVkIEFwcHMnXG4gICAgZGVzY3JpcHRpb246ICdBIG1hcmtldHBsYWNlIHRvIGZpbmQgdGFsZW50IHRvIGhlbHAgeW91IGJ1aWxkIHlvdXIgbmV3IGFwcC1iYXNlZCBzdGFydHVwLidcbiAgICBudW1iZXI6IDNcbiAgICBwdWJsaXNoZWRfYXQ6IDE0NDUyODg1ODAwMDBcbiAgICByZWNvcmRlZF9hdDogMTQ0NTI4ODU4MDAwMFxuICAgIGR1cmF0aW9uX21zOiAoMzIgKiA2MCArIDUxKSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDU1MzQyOTYxXG4gICdmYy10Z2ktMTQ0NTM3NjYwMDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1Mzc2NjAwMDAwJ1xuICAgIHNsdWc6ICcwMDQtdHJ1c3RseSdcbiAgICB0aXRsZTogJ1RydXN0bHknXG4gICAgZGVzY3JpcHRpb246ICdBbiBpZGVudGl0eSB2ZXJpZmljYXRpb24gc2VydmljZSB0byBjaGFuZ2UgdGhlIHdvcmxkLidcbiAgICBudW1iZXI6IDRcbiAgICBwdWJsaXNoZWRfYXQ6IDE0NDUzNzY2MDAwMDBcbiAgICByZWNvcmRlZF9hdDogMTQ0NTM3NjYwMDAwMFxuICAgIGR1cmF0aW9uX21zOiAoNzkgKiA2MCArIDU3KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDExNDYxOTY4MFxuICAnZmMtdGdpLTE0NDU0NDY0NDAwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0NjQ0MDAwMCdcbiAgICBzbHVnOiAnMDA1LXBpY2stY29vbCdcbiAgICB0aXRsZTogJ1BpY2suQ29vbCdcbiAgICBkZXNjcmlwdGlvbjogJ0Egc29jaWFsIHZvdGluZyBwbGF0Zm9ybSB3aXRoIGNvbW11bml0eSBhcyBpdHMgZm9jdXMuJ1xuICAgIG51bWJlcjogNVxuICAgIHB1Ymxpc2hlZF9hdDogMTQ0NTQ0NjQ0MDAwMFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ2NDQwMDAwXG4gICAgZHVyYXRpb25fbXM6ICg1OSAqIDYwICsgMzYpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMTA0NTU0OTk1XG4gICdmYy10Z2ktMTQ0NTUxMzA0MDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NTEzMDQwMDAwJ1xuICAgIHNsdWc6ICcwMDYtdHVybmtleS1uaWNoZS1zaXRlcydcbiAgICB0aXRsZTogJ1R1cm5rZXkgTmljaGUgU2l0ZXMnXG4gICAgZGVzY3JpcHRpb246ICdHcmFiIG9uIHRvIHRoYXQgbG9uZyB0YWlsIGJ5IGJlY29taW5nIGEgbmljaGUgc2l0ZSBob3N0LidcbiAgICBudW1iZXI6IDZcbiAgICBwdWJsaXNoZWRfYXQ6IDE0NDU1MTMwNDAwMDBcbiAgICByZWNvcmRlZF9hdDogMTQ0NTUxMzA0MDAwMFxuICAgIGR1cmF0aW9uX21zOiAoNTQgKiA2MCArIDU1KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDI2NjUyMTMwXG4gICdmYy10Z2ktMTQ0NTQ0ODYyODAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjI4MDAwJ1xuICAgIHNsdWc6ICcwMDctZmFzdGNhc3QnXG4gICAgdGl0bGU6ICdGYXN0Q2FzdCdcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBvbmUgY2xpY2sgemVybyB0byBoZXJvIHBvZGNhc3RpbmcgcGxhdGZvcm0uJ1xuICAgIG51bWJlcjogN1xuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjI4MDAwXG4gICAgZHVyYXRpb25fbXM6ICg2OSAqIDYwICsgMjgpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMzM3MDg0ODBcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjM1MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2MzUwMDAnXG4gICAgc2x1ZzogJzAwNy1wYXJ0LTItc29jaWFsLXJlbGV2YW5jZS1lbmdpbmUnXG4gICAgdGl0bGU6ICdQYXJ0IDI6IFNvY2lhbCBSZWxldmFuY2UgRW5naW5lJ1xuICAgIGRlc2NyaXB0aW9uOiAnQSB3YXkgdG8gdHJhY2sgaG93IHlvdXIgY29udGVudCBpcyBwZXJmb3JtaW5nIG9uIHNvY2lhbCBzaXRlcy4nXG4gICAgbnVtYmVyOiA3XG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDg2MzUwMDBcbiAgICBkdXJhdGlvbl9tczogKDQ0ICogNjAgKyAzKSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDIxMzc4MzUwXG4gICdmYy10Z2ktMTQ0NTQ0ODYzNzAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjM3MDAwJ1xuICAgIHNsdWc6ICcwMDgtcG9kY2FzdC1uZXR3b3JrJ1xuICAgIHRpdGxlOiAnUG9kY2FzdCBOZXR3b3JrJ1xuICAgIGRlc2NyaXB0aW9uOiAnQSBwb2RjYXN0aW5nIG5ldHdvcmsgdGhhdCBoZWxwcyB5b3UgYnVpbGQgYW4gYXVkaWVuY2UuJ1xuICAgIG51bWJlcjogOFxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjM3MDAwXG4gICAgZHVyYXRpb25fbXM6ICg0OCAqIDYwICsgNCkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAyMzQ1MzQwNVxuICAnZmMtdGdpLTE0NDU0NDg2MzkwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODYzOTAwMCdcbiAgICBzbHVnOiAnMDA5LWFmZmlsaWF0ZS1zaXRlcydcbiAgICB0aXRsZTogJ0FmZmlsaWF0ZSBTaXRlcydcbiAgICBkZXNjcmlwdGlvbjogJ0hvdyB0byBidWlsZCBhIGJ1c2luZXNzIGp1c3QgYnkgaGVscGluZyByZXRhaWxlcnMgbWFya2V0IHRoZWlyIGdvb2RzLidcbiAgICBudW1iZXI6IDlcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODYzOTAwMFxuICAgIGR1cmF0aW9uX21zOiAoNTYgKiA2MCArIDU5KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDI3ODAzNDk4XG4gICdmYy10Z2ktMTQ0NTQ0ODY0MTAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjQxMDAwJ1xuICAgIHNsdWc6ICcwMTAtanVuZ2xlZmlyZSdcbiAgICB0aXRsZTogJ0p1bmdsZUZpcmUnXG4gICAgZGVzY3JpcHRpb246ICdBIGJ1c2luZXNzIHN1cHBseWluZyBwbHVtYmluZyBmb3Igb3RoZXIgYnVzaW5lc3Nlcy4nXG4gICAgbnVtYmVyOiAxMFxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjQxMDAwXG4gICAgZHVyYXRpb25fbXM6ICg2OCAqIDYwICsgMzIpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMzM2MDk0MDlcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjQ2MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2NDYwMDAnXG4gICAgc2x1ZzogJzAxMS1pbG9va2dvb2QnXG4gICAgdGl0bGU6ICdpTG9va0dvb2QnXG4gICAgZGVzY3JpcHRpb246ICdBIGZhc2hpb24gc2hhcmluZyBhbmQgYWR2aWNlIG1hcmtldHBsYWNlLidcbiAgICBudW1iZXI6IDExXG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDg2NDYwMDBcbiAgICBkdXJhdGlvbl9tczogKDk0ICogNjAgKyAxMCkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiA0NTY5MzIyNVxuICAnZmMtdGdpLTE0NDU0NDg2NDkwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODY0OTAwMCdcbiAgICBzbHVnOiAnMDEyLWxpZmVib29rJ1xuICAgIHRpdGxlOiAnTGlmZUJvb2snXG4gICAgZGVzY3JpcHRpb246ICdBbiBhcHAgdG8gaGVscCBmb3N0ZXIga2lkcyBjYXB0dXJlIHRoZWlyIHlvdXRoLidcbiAgICBudW1iZXI6IDEyXG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDg2NDkwMDBcbiAgICBkdXJhdGlvbl9tczogKDg3ICogNjAgKyAzNikgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiA0MjUxMDY4N1xuICAnZmMtdGdpLTE0NDU0NDg2NTIwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODY1MjAwMCdcbiAgICBzbHVnOiAnMDEzLXRpbWUtYm9tYidcbiAgICB0aXRsZTogJ1RpbWUgQm9tYidcbiAgICBkZXNjcmlwdGlvbjogJ0EgbXVsdGlwbGF5ZXIgYWxpZW4gcHV6emxlIGdhbWUgdGhhdCBraWxscy4nXG4gICAgbnVtYmVyOiAxM1xuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjUyMDAwXG4gICAgZHVyYXRpb25fbXM6ICgzNCAqIDYwICsgMjcpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMTY3MTkxNzNcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjU0MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2NTQwMDAnXG4gICAgc2x1ZzogJzAxNC1raXRjaGVuLWluZ3JlZGllbnQtdHJhY2tlcidcbiAgICB0aXRsZTogJ0tpdGNoZW4gSW5ncmVkaWVudCBUcmFja2VyJ1xuICAgIGRlc2NyaXB0aW9uOiAnQW4gYXBwIHRoYXQga2VlcHMgeW91ciBjdXBib2FyZHMgZnVsbD8gWWVzIHBsZWFzZS4nXG4gICAgbnVtYmVyOiAxNFxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjU0MDAwXG4gICAgZHVyYXRpb25fbXM6ICg3OCAqIDYwICsgOSkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAzODg5MDY2NlxuICAnZmMtdGdpLTE0NDU0NDg2NTgwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODY1ODAwMCdcbiAgICBzbHVnOiAnMDE1LWVwaydcbiAgICB0aXRsZTogJ0VQSydcbiAgICBkZXNjcmlwdGlvbjogJ0FuIGFwcCBmb3IgdG91cmluZyBtdXNpY2lhbnMgYW5kIHRoZSB2ZW51ZXMgd2hvIGxvdmUgdGhlbS4nXG4gICAgbnVtYmVyOiAxNVxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjU4MDAwXG4gICAgZHVyYXRpb25fbXM6ICg2OSAqIDYwICsgMjApICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMzQwMDM3MDdcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjgwMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2ODAwMDAnXG4gICAgc2x1ZzogJzAxNi1jYXRjaGVyJ1xuICAgIHRpdGxlOiAnQ2F0Y2hlcidcbiAgICBkZXNjcmlwdGlvbjogJ0EgUG9rw6ltb24gbWFya2V0cGxhY2UuJ1xuICAgIG51bWJlcjogMTZcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY4MDAwMFxuICAgIGR1cmF0aW9uX21zOiAoNDggKiA2MCArIDE3KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDIzNTYyNjc2XG4gICdmYy10Z2ktMTQ0NTQ0ODY4MjAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjgyMDAwJ1xuICAgIHNsdWc6ICcwMTctZmFuYnJhaW4nXG4gICAgdGl0bGU6ICdGYW5CcmFpbidcbiAgICBkZXNjcmlwdGlvbjogJ1Nwb3J0cyBtZW50b3JpbmcgZm9yIHRoZSBtYXNzZXMuJ1xuICAgIG51bWJlcjogMTdcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY4MjAwMFxuICAgIGR1cmF0aW9uX21zOiAoNzMgKiA2MCArIDApICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMzU3OTc5MjhcbiAgJ2ZjLXRnaS0xNDQ1NDQ4Njg4MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2ODgwMDAnXG4gICAgc2x1ZzogJzAxOC1xdWlja2RyYXcnXG4gICAgdGl0bGU6ICdRdWlja0RyYXcnXG4gICAgZGVzY3JpcHRpb246ICdCZSB0aGUgZmFzdGVzdCBkcmF3IGluIHRoZSB3b3JsZC4uLm9yIGRpZS4nXG4gICAgbnVtYmVyOiAxOFxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4Njg4MDAwXG4gICAgZHVyYXRpb25fbXM6ICg1MiAqIDYwICsgMTUpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMjU0OTU0NzBcbiAgJ2ZjLXRnaS0xNDQ1NDQ1OTkwMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDU5OTAwMDAnXG4gICAgc2x1ZzogJzAxOS1zY2FwZXNlYXJjaCdcbiAgICB0aXRsZTogJ1NjYXBlU2VhcmNoJ1xuICAgIGRlc2NyaXB0aW9uOiAnSGF2aW5nIHRyb3VibGUgZmluZGluZyBhIGxhbmRzY2FwZXI/IE1lIG5laXRoZXIuJ1xuICAgIG51bWJlcjogMTlcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0NTk5MDAwMFxuICAgIGR1cmF0aW9uX21zOiAoMzcgKiA2MCArIDM4KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDcyMDYyMTFcbiAgJ2ZjLXRnaS0xNDQ1NTI3ODM0MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU1Mjc4MzQwMDAnXG4gICAgc2x1ZzogJzAyMC1mYXN0Y2FzdC11cGRhdGUnXG4gICAgdGl0bGU6ICdGYXN0Q2FzdCBVcGRhdGUnXG4gICAgZGVzY3JpcHRpb246IFwiVG9kYXkncyBGYXN0Q2FzdCB1cGRhdGUuXCJcbiAgICBudW1iZXI6IDIwXG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU1Mjc4MzQwMDBcbiAgICBkdXJhdGlvbl9tczogKDIxICogNjAgKyAzNikgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiA0MDY3NTkwXG4gICdmYy10Z2ktMTQ0NTU1NDA1ODAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NTU0MDU4MDAwJ1xuICAgIHNsdWc6ICcwMjEtcXVpY2thdXRob3JpdHknXG4gICAgdGl0bGU6ICdRdWlja0F1dGhvcml0eSdcbiAgICBkZXNjcmlwdGlvbjogXCJUdXJua2V5IGF1dGhvcml0eSBzaXRlcy5cIlxuICAgIG51bWJlcjogMjFcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTU1NDA1ODAwMFxuICAgIGR1cmF0aW9uX21zOiAoMjQgKiA2MCArIDUpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogNDgxODE5NiIsIlN0cmluZzo6c2x1Z2lmeSA9IC0+XG4gIEB0b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC9bXlxcd1xcLV0rL2csICcnKS5yZXBsYWNlKC9cXC1cXC0rL2csICctJykucmVwbGFjZSgvXi0rLywgJycpLnJlcGxhY2UgLy0rJC8sICcnXG4gICMgVHJpbSAtIGZyb20gZW5kIG9mIHRleHRcblxuTnVtYmVyOjp0b0hITU1TUyA9IC0+XG4gIHNob3dfbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCBhbmQgYXJndW1lbnRzWzBdXG4gIG1zX251bSA9IE1hdGguZmxvb3IodGhpcylcbiAgaG91cnMgPSBNYXRoLmZsb29yKG1zX251bSAvIDM2MDAwMDApXG4gIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSkgLyA2MDAwMClcbiAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG1zX251bSAtIChob3VycyAqIDM2MDAwMDApIC0gKG1pbnV0ZXMgKiA2MDAwMCkpIC8gMTAwMClcbiAgbXMgPSBtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSAtIChtaW51dGVzICogNjAwMDApIC0gKHNlY29uZHMgKiAxMDAwKVxuICB0aW1lID0gc3ByaW50ZignJTAyZDolMDJkOiUwMmQnLCBob3VycywgbWludXRlcywgc2Vjb25kcylcbiAgaWYgc2hvd19tc1xuICAgIHRpbWUgKz0gc3ByaW50ZignLiUwM2QnLCBtcylcbiAgdGltZVxuXG5OdW1iZXI6Omh1bWFuaXplID0gLT5cbiAgbXNfbnVtID0gTWF0aC5mbG9vcih0aGlzKVxuICBob3VycyA9IE1hdGguZmxvb3IobXNfbnVtIC8gMzYwMDAwMClcbiAgbWludXRlcyA9IE1hdGguZmxvb3IoKG1zX251bSAtIChob3VycyAqIDM2MDAwMDApKSAvIDYwMDAwKVxuICBzZWNvbmRzID0gTWF0aC5mbG9vcigobXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkgLSAobWludXRlcyAqIDYwMDAwKSkgLyAxMDAwKVxuICBtcyA9IG1zX251bSAtIChob3VycyAqIDM2MDAwMDApIC0gKG1pbnV0ZXMgKiA2MDAwMCkgLSAoc2Vjb25kcyAqIDEwMDApXG4gIHRpbWUgPSAnJ1xuICBpZiBob3Vyc1xuICAgIHRpbWUgPSBzcHJpbnRmKCclZGgnLCBob3VycylcbiAgaWYgbWludXRlc1xuICAgIHRpbWUgKz0gc3ByaW50ZignJWRtJywgbWludXRlcylcbiAgdGltZSArPSBzcHJpbnRmKCclZHMnLCBNYXRoLmNlaWwoc2Vjb25kcyArIG1zIC8gMTAwMC4wKSlcbiAgdGltZVxuXG5TdHJpbmc6OnNwcmludGYgPSAtPlxuICBzcHJpbnRmLmFwcGx5IHRoaXMsIHRoaXMsIGFyZ3VtZW50c1xuXG53aW5kb3cucmZjMjgyMiA9IChkYXRlKS0+XG4gIGRhdGUgPSBpZiAhZGF0ZSBvciBkYXRlLm5hbWUgPT0gJ2RhdGV0aW1lJyB0aGVuIG1vbWVudCgpIGVsc2UgZGF0ZVxuICBtb21lbnQoZGF0ZSkuZm9ybWF0ICdkZGQsIEREIE1NTSBZWVlZIEhIOm1tOnNzIFpaJ1xuICBcbndpbmRvdy5vcmRlckJ5TWFnaWMgPSAoaGFzaCkgLT5cbiAgYXJyYXkgPSBbXVxuICBPYmplY3Qua2V5cyhoYXNoKS5mb3JFYWNoIChrZXkpIC0+XG4gICAgYXJyYXkucHVzaCBoYXNoW2tleV1cbiAgICByZXR1cm5cbiAgIyBhcHBseSBhIGN1c3RvbSBzb3J0aW5nIGZ1bmN0aW9uXG4gIGFycmF5LnNvcnQgKGEsIGIpIC0+XG4gICAgaWYgYS5wdWJsaXNoZWRfYXQgYW5kICFiLnB1Ymxpc2hlZF9hdFxuICAgICAgcmV0dXJuIDFcbiAgICBpZiAhYS5wdWJsaXNoZWRfYXQgYW5kIGIucHVibGlzaGVkX2F0XG4gICAgICByZXR1cm4gLTFcbiAgICAjIEVpdGhlciBib3RoIGFyZSBwdWJsaXNoZWQgb3IgbmVpdGhlciBpcyBwdWJsaXNoZWRcbiAgICBpZiBhLnB1Ymxpc2hlZF9hdCBhbmQgYi5wdWJsaXNoZWRfYXRcbiAgICAgIHJldHVybiBpZiBhLnB1Ymxpc2hlZF9hdCA+IGIucHVibGlzaGVkX2F0IHRoZW4gLTEgZWxzZSAxXG4gICAgaWYgYS5yZWNvcmRlZF9hdCA+IGIucmVjb3JkZWRfYXQgdGhlbiAtMSBlbHNlIDFcbiAgYXJyYXlcbiAgIiwiY2xhc3MgUmVjb3JkZXJcbiAgY29uc3RydWN0b3I6IChAZm5hbWUsIG9wdGlvbnMpLT5cbiAgICBkZWZhdWx0X29wdGlvbnMgPVxuICAgICAgb25TY3J1YlVwZGF0ZTogKG1zKS0+XG4gICAgICBvbkR1cmF0aW9uVXBkYXRlOiAobXMpLT5cbiAgICAgIG9uUmVjb3JkU3RhcnQ6IC0+XG4gICAgICBvblJlY29yZFN0b3A6IC0+XG4gICAgICBvbkF1ZGlvRXJyb3I6IC0+XG4gICAgICBvblBsYXlTdGFydDogLT5cbiAgICAgIG9uUGxheVN0b3A6IC0+XG4gICAgICBvbkV2ZW50OiAobmFtZSxhcmdzLi4uKS0+XG4gICAgICBkZWJ1ZzogZmFsc2VcbiAgICBAb3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKGRlZmF1bHRfb3B0aW9ucywgb3B0aW9ucylcbiAgICBAc2NydWJfcG9pbnRfbXMgPSAwXG4gICAgQHN0b3AoKVxuICAgIEBnZXRfZHVyYXRpb24oKVxuICAgIFxuICBsb2c6IChhcmdzLi4uKT0+XG4gICAgcmV0dXJuIHVubGVzcyBAb3B0aW9ucy5kZWJ1Z1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KEAsIGFyZ3MpXG5cbiAgZXZlbnQ6IChuYW1lLGFyZ3MuLi4pID0+XG4gICAgQGxvZyhcImV2ZW50XCIsIG5hbWUsIGFyZ3MpXG4gICAgQG9wdGlvbnNbbmFtZV0uYXBwbHkoQCxhcmdzKVxuICAgIEBvcHRpb25zLm9uRXZlbnQobmFtZSwgYXJncylcblxuICBuZXdfbWVkaWE6IChyZWFkeV9jYiwgc3RhdHVzX2NiLCBlcnJvcl9jYikgPT5cbiAgICBzdGF0dXMgPSB7fVxuICAgIHN0YXR1c1tNZWRpYS5NRURJQV9OT05FXSA9ICdOb25lJ1xuICAgIHN0YXR1c1tNZWRpYS5NRURJQV9TVEFSVElOR10gPSAnU3RhcnRpbmcnXG4gICAgc3RhdHVzW01lZGlhLk1FRElBX1JVTk5JTkddID0gJ1J1bm5pbmcnXG4gICAgc3RhdHVzW01lZGlhLk1FRElBX1BBVVNFRF0gPSAnUGF1c2VkJ1xuICAgIHN0YXR1c1tNZWRpYS5NRURJQV9TVE9QUEVEXSA9ICdTdG9wcGVkJ1xuICAgIFxuICAgIG1lZGlhID0gbmV3IE1lZGlhKFxuICAgICAgQGZuYW1lLCBcbiAgICAgICgoKT0+XG4gICAgICAgIEBsb2coXCJTdWNjZXNzZnVsbHkgY29tcGxldGVkIGFjdGlvbiBcIiwgQGZuYW1lKVxuICAgICAgKSwgXG4gICAgICAoKGVycikgPT5cbiAgICAgICAgQGxvZyAnQXVkaW8gRXJyb3I6ICcgKyBlcnIuY29kZVxuICAgICAgICBAbG9nIGVyclxuICAgICAgICBlcnJvcl9jYihtZWRpYSxlcnIpXG4gICAgICApLCBcbiAgICAgICgoc3RhdCk9PlxuICAgICAgICBAbG9nKFwiTWVkaWEgc3RhdHVzXCIsIHN0YXQsIHN0YXR1c1tzdGF0XSlcbiAgICAgICAgc3RhdHVzX2NiKG1lZGlhLHN0YXQpXG4gICAgICApXG4gICAgKVxuICAgIHJlYWR5X2NiKG1lZGlhKVxuICAgIG1lZGlhXG5cbiAgZ2V0X2R1cmF0aW9uOiAoY2IpID0+XG4gICAgIyBHZXQgdGhlIGZpbmFsIGR1cmF0aW9uIHNpbmNlIGl0IGRvZXNuJ3QgcmVnaXN0ZXIgZHVyaW5nIHJlY29yZGluZ1xuICAgIEBuZXdfbWVkaWEoXG4gICAgICAoKG1lZGlhKT0+ICMgcmVhZHlcbiAgICAgICAgbWVkaWEuc2V0Vm9sdW1lKDApXG4gICAgICAgIG1lZGlhLnBsYXkoKVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsc3RhdHVzKSA9PiAjIHN0YXR1c1xuICAgICAgICBpZiBzdGF0dXM9PU1lZGlhLk1FRElBX1JVTk5JTkdcbiAgICAgICAgICBtZWRpYS5zdG9wKClcbiAgICAgICAgICBAZHVyYXRpb25fbXMgPSBtZWRpYS5nZXREdXJhdGlvbigpKjEwMDBcbiAgICAgICAgICBAZXZlbnQoJ29uRHVyYXRpb25VcGRhdGUnLCBAZHVyYXRpb25fbXMpXG4gICAgICAgICAgaWYgY2JcbiAgICAgICAgICAgIGNiKEBkdXJhdGlvbl9tcylcbiAgICAgICAgaWYgc3RhdHVzPT1NZWRpYS5NRURJQV9TVE9QUEVEXG4gICAgICAgICAgbWVkaWEucmVsZWFzZSgpXG4gICAgICApLFxuICAgICAgKChtZWRpYSxlcnJvcik9PiAjZXJyb3JcbiAgICAgIClcbiAgICApXG4gICAgICAgICBcbiAgcmVjb3JkOiA9PlxuICAgIEBuZXdfbWVkaWEoXG4gICAgICAoKG1lZGlhKT0+ICMgcmVhZHlcbiAgICAgICAgbWVkaWEuc3RhcnRSZWNvcmQoKVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsc3RhdHVzKT0+ICMgc3RhdHVzXG4gICAgICAgIGlmIHN0YXR1cyA9PSBNZWRpYS5NRURJQV9SVU5OSU5HXG4gICAgICAgICAgQGxvZygncmVjb3JkaW5nJylcbiAgICAgICAgICBAaXNfcmVjb3JkaW5nID0gdHJ1ZVxuICAgICAgICAgIEBkdXJhdGlvbl9tcyA9IDBcbiAgICAgICAgICBzdGFydF90aW1lX21zID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICAgICAgICB1cGRhdGVfcmVjb3JkID0gPT5cbiAgICAgICAgICAgIEBsb2coJ3JlY29yZGluZyBjaGVjaycpXG4gICAgICAgICAgICBpZiAhQGlzX3JlY29yZGluZ1xuICAgICAgICAgICAgICBtZWRpYS5zdG9wUmVjb3JkKClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICBjdXJyZW50X21zID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICAgICAgICAgIEBkdXJhdGlvbl9tcyA9IGN1cnJlbnRfbXMgLSBzdGFydF90aW1lX21zXG4gICAgICAgICAgICBAc2NydWJfcG9pbnRfbXMgPSBAZHVyYXRpb25fbXNcbiAgICAgICAgICAgIEBldmVudCgnb25EdXJhdGlvblVwZGF0ZScsIEBkdXJhdGlvbl9tcylcbiAgICAgICAgICAgIEBldmVudCgnb25TY3J1YlVwZGF0ZScsIEBkdXJhdGlvbl9tcylcbiAgICAgICAgICAgIHNldFRpbWVvdXQodXBkYXRlX3JlY29yZCwgMTAwKVxuICAgICAgICAgIHVwZGF0ZV9yZWNvcmQoKVxuICAgICAgICAgIEBldmVudCgnb25SZWNvcmRTdGFydCcpXG4gICAgICAgICAgXG4gICAgICAgIGlmIHN0YXR1cyA9PSBNZWRpYS5NRURJQV9TVE9QUEVEXG4gICAgICAgICAgQGlzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAgICAgbWVkaWEucmVsZWFzZSgpXG4gICAgICAgICAgQGdldF9kdXJhdGlvbigobXMpPT5cbiAgICAgICAgICAgIEBzY3J1Yl9wb2ludF9tcyA9IG1zXG4gICAgICAgICAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBtcylcbiAgICAgICAgICAgIEBldmVudCgnb25SZWNvcmRTdG9wJylcbiAgICAgICAgICApXG4gICAgICApLFxuICAgICAgKChtZWRpYSxlcnIpPT4gI2Vycm9yXG4gICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICBAZXZlbnQoJ29uQXVkaW9FcnJvcicpXG4gICAgICApXG4gICAgKVxuICAgIFxuICBzdGVwOiAobXMpID0+XG4gICAgQHNlZWsoQHNjcnViX3BvaW50X21zICsgbXMpXG4gICAgXG4gIHNlZWs6IChtcykgPT5cbiAgICBpZiBtcz09LTFcbiAgICAgIG1zID0gTnVtYmVyLk1BWF9WQUxVRVxuICAgIEBzY3J1Yl9wb2ludF9tcyA9IE1hdGgubWluKEBkdXJhdGlvbl9tcywgTWF0aC5tYXgoMCwgbXMpKVxuICAgIEBldmVudCgnb25TY3J1YlVwZGF0ZScsIEBzY3J1Yl9wb2ludF9tcylcbiAgICBpZiBAaXNfcGxheWluZ1xuICAgICAgQG1lZGlhLnNlZWtUbyBAc2NydWJfcG9pbnRfbXNcbiAgICBcbiAgcGxheTogPT5cbiAgICBpZiBAc2NydWJfcG9pbnRfbXMgPj0gQGR1cmF0aW9uX21zXG4gICAgICBAc2NydWJfcG9pbnRfbXMgPSAwXG4gICAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAc2NydWJfcG9pbnRfbXMpXG4gICAgXG4gICAgQG1lZGlhID0gQG5ld19tZWRpYShcbiAgICAgICgobWVkaWEpPT4gICAgIyByZWFkeVxuICAgICAgICBtZWRpYS5wbGF5KClcbiAgICAgICAgbWVkaWEuc2Vla1RvKEBzY3J1Yl9wb2ludF9tcylcbiAgICAgICksXG4gICAgICAoKG1lZGlhLHN0YXR1cyk9PiAjIFN0YXR1c1xuICAgICAgICBpZiBzdGF0dXMgPT0gTWVkaWEuTUVESUFfUlVOTklOR1xuICAgICAgICAgIEBpc19wbGF5aW5nID0gdHJ1ZVxuICAgICAgICAgIHBsYXlfdXBkYXRlID0gPT5cbiAgICAgICAgICAgIG1lZGlhLmdldEN1cnJlbnRQb3NpdGlvbiAocG9zKT0+XG4gICAgICAgICAgICAgIGlmIHBvcz09LTFcbiAgICAgICAgICAgICAgICBAc2NydWJfcG9pbnRfbXMgPSBAZHVyYXRpb25fbXNcbiAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICBAc2NydWJfcG9pbnRfbXMgPSBwb3MgKiAxMDAwXG4gICAgICAgICAgICAgIEBldmVudCgnb25TY3J1YlVwZGF0ZScsIEBzY3J1Yl9wb2ludF9tcylcbiAgICAgICAgICAgICAgaWYgIUBpc19wbGF5aW5nXG4gICAgICAgICAgICAgICAgbWVkaWEuc3RvcCgpXG4gICAgICAgICAgICAgICAgbWVkaWEucmVsZWFzZSgpXG4gICAgICAgICAgICAgICAgQGV2ZW50KCdvblBsYXlTdG9wJylcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgc2V0VGltZW91dChwbGF5X3VwZGF0ZSwxMDApXG4gICAgICAgICAgcGxheV91cGRhdGUoKVxuICAgICAgICAgIEBldmVudCgnb25QbGF5U3RhcnQnKVxuICAgICAgICBpZiBzdGF0dXMgPT0gTWVkaWEuTUVESUFfU1RPUFBFRFxuICAgICAgICAgIEBpc19wbGF5aW5nID0gZmFsc2VcbiAgICAgICksXG4gICAgICAoKG1lZGlhLGVycik9PiAjRXJyb3JcbiAgICAgICAgbWVkaWEucmVsZWFzZSgpXG4gICAgICAgIEBldmVudCgnb25BdWRpb0Vycm9yJylcbiAgICAgIClcbiAgICApXG4gIFxuICBzdG9wOiA9PlxuICAgIEBpc19wbGF5aW5nID0gZmFsc2VcbiAgICBAaXNfcmVjb3JkaW5nID0gZmFsc2Vcblxud2luZG93LlJlY29yZGVyID0gUmVjb3JkZXIiLCJjbGFzcyBVcGxvYWRXb3JrZXJcbiAgY29uc3RydWN0b3I6IChAaXRlbSwgb3B0aW9ucyA9IHt9KS0+XG4gICAgZGVmYXVsdF9vcHRpb25zID1cbiAgICAgIG9uU3RhcnQ6IC0+XG4gICAgICBvblN1Y2Nlc3M6IC0+XG4gICAgICBvbkZhaWx1cmU6IChlcnIpLT5cbiAgICAgIG9uUHJvZ3Jlc3M6IChwcm9ncmVzcyktPlxuICAgICAgb25FdmVudDogKG5hbWUsYXJncy4uLiktPlxuICAgICAgZGVidWc6IHRydWVcbiAgICBAb3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKGRlZmF1bHRfb3B0aW9ucywgb3B0aW9ucylcbiAgICBAdXBsb2FkX2NvdW50ID0gMFxuICAgIEBsb2coXCJVcGxvYWQgV29ya2VyIHN0YXJ0ZWRcIiwgQGl0ZW0pXG4gICAgc2V0VGltZW91dChAc3RhcnQsIDApICMgRmlyZSBzdGFydCBhc3luYyBzbyBwcm9taXNlcyBhcmUgcHJvY2Vzc2VkXG4gICAgXG4gIGxvZzogKGFyZ3MuLi4pPT5cbiAgICByZXR1cm4gdW5sZXNzIEBvcHRpb25zLmRlYnVnXG4gICAgY29uc29sZS5sb2cuYXBwbHkoQCwgYXJncylcblxuICBldmVudDogKG5hbWUsYXJncy4uLikgPT5cbiAgICBAbG9nKFwiZXZlbnRcIiwgbmFtZSwgYXJncylcbiAgICBAb3B0aW9uc1tuYW1lXS5hcHBseShALGFyZ3MpXG4gICAgQG9wdGlvbnMub25FdmVudChuYW1lLCBhcmdzKVxuICAgIFxuICBzdGFydGVkOiAoY2IpPT5cbiAgICBAb3B0aW9ucy5vblN0YXJ0ID0gY2JcbiAgICBAXG4gIFxuICBwcm9ncmVzczogKGNiKT0+XG4gICAgQG9wdGlvbnMub25Qcm9ncmVzcyA9IGNiXG4gICAgQFxuICBcbiAgZmluaXNoZWQ6IChjYik9PlxuICAgIEBvcHRpb25zLm9uU3VjY2VzcyA9IGNiXG4gICAgQFxuICBcbiAgZmFpbGVkOiAoY2IpPT5cbiAgICBAb3B0aW9ucy5vbkZhaWx1cmUgPSBjYlxuICAgIEBcbiAgICBcbiAgc3RhcnQ6ID0+XG4gICAgQGV2ZW50KCdvblN0YXJ0JylcbiAgICBAcHJvZ3Jlc3MgPSAwXG4gICAgJGh0dHAgPSBhbmd1bGFyLmluamVjdG9yKFtcIm5nXCJdKS5nZXQoXCIkaHR0cFwiKVxuICAgICRodHRwLmdldCgnaHR0cDovL2FwaS5mYXN0LWNhc3QubmV0JywgcGFyYW1zOlxuICAgICAgc2x1ZzogQGl0ZW0uc2x1Z1xuICAgICAgdHlwZTogQGl0ZW0udHlwZVxuICAgICkudGhlbiAoKHJlc3BvbnNlKSA9PlxuICAgICAgQGl0ZW0ucHJvZ3Jlc3MgPSAxMFxuICAgICAgQGV2ZW50KCdvblByb2dyZXNzJywgQGl0ZW0ucHJvZ3Jlc3MpXG4gICAgICB1cmwgPSByZXNwb25zZS5kYXRhXG4gICAgICBmdCA9IG5ldyBGaWxlVHJhbnNmZXJcbiAgICAgIGZ0Lm9ucHJvZ3Jlc3MgPSAocGUpID0+XG4gICAgICAgIEBpdGVtLnByb2dyZXNzID0gcGUubG9hZGVkIC8gcGUudG90YWwgKiA5MCArIDEwXG4gICAgICAgIEBldmVudCgnb25Qcm9ncmVzcycsIEBpdGVtLnByb2dyZXNzKVxuICAgICAgXG4gICAgICB1cGxvYWRfb3B0aW9ucyA9IG5ldyBGaWxlVXBsb2FkT3B0aW9uc1xuICAgICAgdXBsb2FkX29wdGlvbnMuZmlsZU5hbWUgPSBAaXRlbS5zcmNcbiAgICAgIHVwbG9hZF9vcHRpb25zLm1pbWVUeXBlID0gQGl0ZW0ubWltZVxuICAgICAgdXBsb2FkX29wdGlvbnMuY2h1bmtlZE1vZGUgPSBmYWxzZVxuICAgICAgdXBsb2FkX29wdGlvbnMuaHR0cE1ldGhvZCA9ICdQVVQnXG4gICAgICB1cGxvYWRfb3B0aW9ucy5oZWFkZXJzID0gJ0NvbnRlbnQtVHlwZSc6IEBpdGVtLm1pbWVcbiAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkaW5nXCIsIEBpdGVtLnNyYywgdXJsKVxuICAgICAgZnQudXBsb2FkKFxuICAgICAgICBAaXRlbS5zcmMsIFxuICAgICAgICB1cmwsIFxuICAgICAgICAoPT4gIyBzdWNjZXNzXG4gICAgICAgICAgQGV2ZW50KCdvblN1Y2Nlc3MnKVxuICAgICAgICApLFxuICAgICAgICAoKGVycik9PiAjIEVycm9yXG4gICAgICAgICAgQGV2ZW50KCdvbkZhaWx1cmUnLCBlcnIpXG4gICAgICAgICksXG4gICAgICAgIHVwbG9hZF9vcHRpb25zXG4gICAgICApXG4gICAgKSwgKGVycik9PiAjIEZhaWx1cmVcbiAgICAgIEBldmVudCgnb25GYWlsdXJlJywgZXJyKSAgICBcblxud2luZG93LlVwbG9hZFdvcmtlciA9IFVwbG9hZFdvcmtlciIsImFwcC5jb250cm9sbGVyICdBcHBDb250cm9sbGVyJywgKFxuICAkc2NvcGUsIFxuICAkaHR0cCwgXG4gICRpbnRlcnZhbCwgXG4gICRjb3Jkb3ZhRmlsZSwgXG4gICRzdGF0ZSwgXG4gICRjb3Jkb3ZhRmlsZVRyYW5zZmVyLCBcbiAgJHEsIFxuICAkaW9uaWNIaXN0b3J5LCBcbiAgJGlvbmljU2lkZU1lbnVEZWxlZ2F0ZVxuICApIC0+XG5cblxuICAkc2NvcGUuc2V0dGluZ3MgPSAtPlxuICAgICRzdGF0ZS5nbyAnc2V0dGluZ3MucG9kY2FzdCdcbiAgICBcbiAgJHNjb3BlLnRvZ2dsZUxlZnQgPSAtPlxuICAgICRpb25pY1NpZGVNZW51RGVsZWdhdGUudG9nZ2xlTGVmdCgpXG4gIFxuICAkc2NvcGUuaG9tZSA9IC0+XG4gICAgJGlvbmljSGlzdG9yeS5uZXh0Vmlld09wdGlvbnMoe1xuICAgICAgZGlzYWJsZUJhY2s6IHRydWVcbiAgICB9KTsgIFxuICAgICRzdGF0ZS5nbyAnaG9tZSdcbiAgICBcbiAgbG9hZF9zdGF0ZSA9IC0+XG4gICAgJHNjb3BlLnBvZGNhc3QgPSBudWxsXG4gICAgdHJ5XG4gICAgICAkc2NvcGUucG9kY2FzdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb2RjYXN0JykpXG4gICAgY2F0Y2ggZVxuICAgICAgY29uc29sZS5sb2cgJ0Vycm9yIGxvYWRpbmcgc3RhdGUnLCBlXG4gICAgICBcbiAgICAjIEZpeCB1cCB2ZXJzaW9uIG51bWJlclxuICAgIGlmICEkc2NvcGUucG9kY2FzdCBvciAhJHNjb3BlLnBvZGNhc3QudmVyc2lvblxuICAgICAgJHNjb3BlLnBvZGNhc3QgPVxuICAgICAgICB2ZXJzaW9uOiAxXG4gICAgICAgIGVwaXNvZGVzOiB7fVxuICAgICAgJHNjb3BlLnNhdmVfc3RhdGUoKVxuICAgICAgXG4gICAgIyBGaXggdXAgbWlzc2luZyBHVUlEc1xuICAgIGZvciBrIG9mICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzXG4gICAgICAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1trXS5ndWlkID0ga1xuICAgICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNba10uaXNfc3luY2luZyA9IGZhbHNlXG4gICAgICBcbiAgICAjIEZpeCB1cCBtaXNzaW5nIGVwaXNvZGVzXG4gICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXMgPSBhbmd1bGFyLm1lcmdlKHt9LCBzdGF0aWNfZXBpc29kZXMsICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzKTtcbiAgICAjIGZvciBndWlkIG9mIHN0YXRpY19lcGlzb2Rlc1xuICAgICMgICBlcGlzb2RlID0gc3RhdGljX2VwaXNvZGVzW2d1aWRdXG4gICAgIyAgICNpZiAhKGd1aWQgb2YgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXMpXG4gICAgIyAgICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW2d1aWRdID0gZXBpc29kZVxuXG4gIG5leHRfZXBpc29kZV9udW1iZXIgPSAtPlxuICAgIG4gPSAwXG4gICAgZm9yIHNsdWcgb2YgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNcbiAgICAgIGVwaXNvZGUgPSAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1tzbHVnXVxuICAgICAgbiA9IE1hdGgubWF4KG4sIGVwaXNvZGUubnVtYmVyKVxuICAgIG4gKyAxXG5cbiAgJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgPSAnY2R2ZmlsZTovL2xvY2FsaG9zdC9wZXJzaXN0ZW50LydcbiAgXG4gIHJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksIChlbnRyeSktPlxuICAgICRzY29wZS5uYXRpdmVfb3V0cHV0X2RpcmVjdG9yeSA9IGVudHJ5LnRvVVJMKClcbiAgKVxuICBcbiAgJHNjb3BlLnNhdmVfc3RhdGUgPSAtPlxuICAgIGpzb24gPSBhbmd1bGFyLnRvSnNvbigkc2NvcGUucG9kY2FzdClcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0gJ3BvZGNhc3QnLCBhbmd1bGFyLnRvSnNvbigkc2NvcGUucG9kY2FzdClcbiAgICAkY29yZG92YUZpbGUud3JpdGVGaWxlKCRzY29wZS5vdXRwdXRfZGlyZWN0b3J5LCAnZGF0YS5qc29uJywganNvbiwgdHJ1ZSkudGhlbiAoKHJlc3VsdCkgLT5cbiAgICAgIChuZXcgVXBsb2FkV29ya2VyKFxuICAgICAgICB0eXBlOiAnanNvbidcbiAgICAgICAgbWltZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAnZGF0YS5qc29uJ1xuICAgICAgKSlcbiAgICApXG4gICAgXG5cbiAgbG9hZF9zdGF0ZSgpXG5cbiAgJHNjb3BlLm5ldyA9IC0+XG4gICAgdCA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgZ3VpZCA9IHNwcmludGYoJ2ZjLSVzLSVkJywgJHNjb3BlLnBvZGNhc3QuY29kZSB0KVxuICAgICRzY29wZS5lcGlzb2RlID1cbiAgICAgIGd1aWQ6IGd1aWRcbiAgICAgIG51bWJlcjogbmV4dF9lcGlzb2RlX251bWJlcigpXG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcblxuICAkc2NvcGUuZ28gPSAoZ3VpZCkgLT5cbiAgICAkc2NvcGUuZXBpc29kZSA9IGFuZ3VsYXIuY29weSgkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1tndWlkXSlcbiAgICAkc2NvcGUuZXBpc29kZS5pc19wdWJsaXNoZWQgPSAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXQ/XG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcbiIsImFwcC5jb250cm9sbGVyICdFcGlzb2RlQ29udHJvbGxlcicsIChcbiAgJHNjb3BlLCBcbiAgJGlvbmljU2lkZU1lbnVEZWxlZ2F0ZVxuICAkaW9uaWNBY3Rpb25TaGVldFxuICApIC0+XG4gICAgXG4gICRzY29wZS4kb24gJyRpb25pY1ZpZXcuZW50ZXInLCAtPlxuICAgICRpb25pY1NpZGVNZW51RGVsZWdhdGUuY2FuRHJhZ0NvbnRlbnQgZmFsc2VcblxuICAkc2NvcGUuJG9uICckaW9uaWNWaWV3LmxlYXZlJywgLT5cbiAgICAkaW9uaWNTaWRlTWVudURlbGVnYXRlLmNhbkRyYWdDb250ZW50IHRydWVcblxuICB0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgXG4gICRzY29wZS5oYXNfcmVjb3JkaW5nID0gJHNjb3BlLmVwaXNvZGUucmVjb3JkZWRfYXQ/XG4gICRzY29wZS5pc191cGxvYWRpbmcgPSBmYWxzZVxuICAkc2NvcGUuaXNfcGxheWluZyA9IGZhbHNlXG4gICRzY29wZS5pc19yZWNvcmRpbmcgPSBmYWxzZVxuICAkc2NvcGUuZHVyYXRpb25fbXMgPSAkc2NvcGUuZXBpc29kZS5kdXJhdGlvbl9tcyBvciAwXG4gICRzY29wZS5zY3J1Yl9wb2ludF9tcyA9IDBcbiAgJHNjb3BlLmhhc19jaGFuZ2VzID0gZmFsc2VcbiAgXG4gICRzY29wZS4kd2F0Y2ggJ2VwaXNvZGUnLCAoKG5ld09iaiwgb2xkT2JqKSAtPlxuICAgICRzY29wZS5oYXNfY2hhbmdlcyA9ICFhbmd1bGFyLmVxdWFscyhvbGRPYmosIG5ld09iailcbiAgKSwgdHJ1ZVxuXG4gICRzY29wZS5jYW5jZWwgPSAtPlxuICAgIGhpZGVTaGVldCA9ICRpb25pY0FjdGlvblNoZWV0LnNob3coXG4gICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdEaXNjYXJkIENoYW5nZXMnXG4gICAgICB0aXRsZVRleHQ6ICdEaXNjYXJkIGNoYW5nZXMnXG4gICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAkc2NvcGUuaG9tZSgpXG4gICAgKVxuIiwiYXBwLmNvbnRyb2xsZXIgJ0ZpbmFsaXplQ29udHJvbGxlcicsICgkc2NvcGUsICRodHRwLCAkaW50ZXJ2YWwsICRjb3Jkb3ZhRmlsZSwgJHN0YXRlLCAkaW9uaWNBY3Rpb25TaGVldCwgJGlvbmljTmF2QmFyRGVsZWdhdGUsICRpb25pY0hpc3RvcnkpIC0+XG4gICRpb25pY05hdkJhckRlbGVnYXRlLnNob3dCYWNrQnV0dG9uIHRydWVcblxuICB1cGxvYWRfcnNzID0gLT5cbiAgICByc3MgPSBGYXN0Q2FzdC50ZW1wbGF0ZXMucnNzXG4gICAgICBwb2RjYXN0OiAkc2NvcGUucG9kY2FzdFxuICAgICRjb3Jkb3ZhRmlsZS53cml0ZUZpbGUoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksICRzY29wZS5wb2RjYXN0LmNvZGUrJy5yc3MnLCByc3MsIHRydWUpLnRoZW4gKChyZXN1bHQpIC0+XG4gICAgICB1cGxvYWRcbiAgICAgICAgdHlwZTogJ3JzcydcbiAgICAgICAgbWltZTogJ2FwcGxpY2F0aW9uL3Jzcyt4bWwnXG4gICAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUucG9kY2FzdC5jb2RlICsgJy5yc3MnXG4gICAgKSwgKGVycikgLT5cbiAgICAgIGNvbnNvbGUubG9nICdmaWxlIHdyaXRlIGVycm9yJywgZXJyXG4gICAgXG4gIHVwbG9hZF9odG1sID0gLT5cbiAgICBodG1sID0gRmFzdENhc3QudGVtcGxhdGVzLmVwaXNvZGVcbiAgICAgIGVwaXNvZGU6ICRzY29wZS5lcGlzb2RlXG4gICAgJGNvcmRvdmFGaWxlLndyaXRlRmlsZSgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcuaHRtbCcsIGh0bWwsIHRydWUpLnRoZW4gKChyZXN1bHQpIC0+XG4gICAgICB1cGxvYWRcbiAgICAgICAgc2x1ZzogJHNjb3BlLmVwaXNvZGUuc2x1Z1xuICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgbWltZTogJ3RleHQvaHRtbCdcbiAgICAgICAgc3JjOiAkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSArICRzY29wZS5lcGlzb2RlLmd1aWQgKyAnLmh0bWwnXG4gICAgKSwgKGVycikgLT5cbiAgICAgIGNvbnNvbGUubG9nICdmaWxlIHdyaXRlIGVycm9yJywgZXJyXG5cbiAgdXBsb2FkX2F1ZGlvID0gLT5cbiAgICB1cGxvYWRcbiAgICAgIHNsdWc6ICRzY29wZS5lcGlzb2RlLnNsdWdcbiAgICAgIHR5cGU6ICdhdWRpbydcbiAgICAgIG1pbWU6ICdhdWRpby9tcDQnXG4gICAgICBzcmM6ICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcubTRhJ1xuXG4gIHVwbG9hZCA9IChpdGVtKSAtPlxuICAgIChuZXcgVXBsb2FkV29ya2VyKGl0ZW0pKVxuICAgICAgLnN0YXJ0ZWQgLT5cbiAgICAgICAgJHNjb3BlLnVwbG9hZF9jb3VudCsrXG4gICAgICAgICRzY29wZS51cGxvYWRzW2l0ZW0udHlwZV0gPSAwXG4gICAgICAuZmluaXNoZWQgLT5cbiAgICAgICAgc2V0VGltZW91dCAoLT5cbiAgICAgICAgICBkZWxldGUgJHNjb3BlLnVwbG9hZHNbaXRlbS50eXBlXVxuICAgICAgICAgICRzY29wZS51cGxvYWRfY291bnQtLVxuICAgICAgICAgIGlmICRzY29wZS51cGxvYWRfY291bnQgPT0gMFxuICAgICAgICAgICAgJHNjb3BlLmlzX3VwbG9hZGluZ19maW5pc2hlZCA9IHRydWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KClcbiAgICAgICAgKSwgMTAwMFxuICAgICAgLnByb2dyZXNzIChwcm9ncmVzcyktPlxuICAgICAgICAkc2NvcGUudXBsb2Fkc1tpdGVtLnR5cGVdID0gcHJvZ3Jlc3NcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCcjcHJvZ3Jlc3NfJyArIGl0ZW0udHlwZSkudmFsIHByb2dyZXNzXG4gICAgICAgICRzY29wZS4kYXBwbHkoKVxuICAgICAgXG5cbiAgJHNjb3BlLmlzX3VwbG9hZGluZyA9IGZhbHNlXG4gICRzY29wZS51cGxvYWRzID0ge31cblxuICAkc2NvcGUuYmFjayA9IC0+XG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcblxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX3N0YXJ0ZWQgPSBmYWxzZVxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX2ZpbmlzaGVkID0gZmFsc2VcblxuICAkc2NvcGUucHVibGlzaCA9IC0+XG4gICAgaWYgISRzY29wZS5lcGlzb2RlLm51bWJlclxuICAgICAgYWxlcnQgJ1BsZWFzZSBzdXBwbHkgYW4gZXBpc29kZSBudW1iZXIuJ1xuICAgICRzY29wZS5lcGlzb2RlLnB1Ymxpc2hlZF9hdCA9IG51bGxcbiAgICBpZiAkc2NvcGUuZXBpc29kZS5pc19wdWJsaXNoZWRcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS50aXRsZVxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIHRpdGxlLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5kZXNjcmlwdGlvblxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIGRlc2NyaXB0aW9uLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgJHNjb3BlLmVwaXNvZGUucHVibGlzaGVkX2F0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICBlbHNlXG4gICAgICAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXQgPSBudWxsXG4gICAgJHNjb3BlLmlzX3VwbG9hZGluZ19zdGFydGVkID0gdHJ1ZVxuICAgICRzY29wZS5lcGlzb2RlLnNsdWcgPSBzcHJpbnRmKCclMDNkIC0gJXMnLCAkc2NvcGUuZXBpc29kZS5udW1iZXIsICRzY29wZS5lcGlzb2RlLnRpdGxlKS5zbHVnaWZ5KClcbiAgICBpZighJHNjb3BlLmVwaXNvZGUubGVuZ3RoX2J5dGVzKVxuICAgICAgd2luZG93LnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwgJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUuZXBpc29kZS5ndWlkICsgJy5tNGEnLCAoKGZpbGVFbnRyeSkgLT5cbiAgICAgICAgZmlsZUVudHJ5LmZpbGUgKGZpbGUpIC0+XG4gICAgICAgICAgY29uc29sZS5sb2cgXCJnb3QgYnl0ZSBzaXplXCIsIGZpbGVcbiAgICAgICAgICAkc2NvcGUuZXBpc29kZS5sZW5ndGhfYnl0ZXMgPSBmaWxlLnNpemVcbiAgICAgICAgICAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1skc2NvcGUuZXBpc29kZS5ndWlkXSA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZXBpc29kZSlcbiAgICAgICAgICBpZiAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgICAgIHVwbG9hZF9yc3MoKVxuICAgICAgICAgICRzY29wZS5zYXZlX3N0YXRlKClcbiAgICAgICAgICBjb25zb2xlLmxvZyBmaWxlXG4gICAgICApLCAoZXJyKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgZ2V0dGluZyBmaWxlIHNpemUnXG4gICAgZWxzZVxuICAgICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNbJHNjb3BlLmVwaXNvZGUuZ3VpZF0gPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVwaXNvZGUpXG4gICAgICBpZiAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgdXBsb2FkX3JzcygpXG4gICAgICAkc2NvcGUuc2F2ZV9zdGF0ZSgpXG4gICAgaWYgJHNjb3BlLmVwaXNvZGUucHVibGlzaGVkX2F0XG4gICAgICB1cGxvYWRfaHRtbCgpXG4gICAgdXBsb2FkX2F1ZGlvKClcblxuICAkc2NvcGUuJHdhdGNoICdpc191cGxvYWRpbmdfZmluaXNoZWQnLCAodikgLT5cbiAgICBpZiAhdlxuICAgICAgcmV0dXJuXG4gICAgJGlvbmljSGlzdG9yeS5uZXh0Vmlld09wdGlvbnMoe1xuICAgICAgZGlzYWJsZUJhY2s6IHRydWVcbiAgICB9KTsgIFxuICAgICRzdGF0ZS5nbyAnZXBpc29kZS5maW5pc2gnXG4gICRzY29wZS51cGxvYWRfY291bnQgPSAwXG4iLCJhcHAuY29udHJvbGxlciAnRmluaXNoQ29udHJvbGxlcicsICgkc2NvcGUsICRpb25pY0hpc3RvcnkpIC0+IFxuIiwiYXBwLmNvbnRyb2xsZXIgJ0hvbWVDb250cm9sbGVyJywgKCRzY29wZSwgJGlvbmljSGlzdG9yeSkgLT4gXG4iLCJhcHAuY29udHJvbGxlciAnUG9kY2FzdFNldHRpbmdzQ29udHJvbGxlcicsIChcbiAgJHNjb3BlLCBcbiAgJGlvbmljSGlzdG9yeSwgXG4gICRpb25pY1BvcHVwLCBcbiAgJGlvbmljTmF2QmFyRGVsZWdhdGUsIFxuICAkaW9uaWNBY3Rpb25TaGVldCxcbiAgJGpyQ3JvcCxcbiAgJGNvcmRvdmFJbWFnZVBpY2tlcixcbiAgJGNvcmRvdmFGaWxlXG4pIC0+XG4gIFxuICBjYXRzID0gW11cbiAgZm9yIGNhdCxzdWJjYXRzIG9mIGNhdGVnb3JpZXNcbiAgICBpZiBzdWJjYXRzLmxlbmd0aD09MFxuICAgICAgY2F0cy5wdXNoXG4gICAgICAgIGtleTogY2F0XG4gICAgICAgIG5hbWU6IGNhdFxuICAgIGVsc2VcbiAgICAgIGZvciBzdWJjYXQgaW4gc3ViY2F0c1xuICAgICAgICBjYXRzLnB1c2hcbiAgICAgICAgICBrZXk6IHNwcmludGYoXCIlc3wlc1wiLCBjYXQsIHN1YmNhdClcbiAgICAgICAgICBuYW1lOiBzcHJpbnRmKFwiJXMgLSAlc1wiLCBjYXQsIHN1YmNhdClcblxuICAkc2NvcGUuY2F0cyA9IGNhdHNcbiAgXG4gICRzY29wZS5kb19sb2dvID0gLT5cbiAgICBvcHRpb25zID0gXG4gICAgICBtYXhpbXVtSW1hZ2VzQ291bnQ6IDFcblxuICAgICRjb3Jkb3ZhSW1hZ2VQaWNrZXIuZ2V0UGljdHVyZXMob3B0aW9ucylcbiAgICAgIC50aGVuICggKChyZXN1bHRzKSAtPlxuICAgICAgICAkanJDcm9wLmNyb3AoXG4gICAgICAgICAgdXJsOiByZXN1bHRzWzBdXG4gICAgICAgICAgdGl0bGU6ICdNb3ZlIGFuZCBTY2FsZSdcbiAgICAgICAgICB3aWR0aDogMzAwXG4gICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgKS50aGVuKCAoY2FudmFzKS0+XG4gICAgICAgICAgX2Jhc2U2NFRvQXJyYXlCdWZmZXIgPSAoYmFzZTY0KSAtPlxuICAgICAgICAgICAgYmluYXJ5X3N0cmluZyA9IHdpbmRvdy5hdG9iKGJhc2U2NC5yZXBsYWNlKC9cXHMvZywgJycpKVxuICAgICAgICAgICAgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGhcbiAgICAgICAgICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKVxuICAgICAgICAgICAgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIGkgPCBsZW5cbiAgICAgICAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlfc3RyaW5nLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBieXRlcy5idWZmZXJcbiAgICAgICAgICByZXNpemUgPSAoc3JjX2NhbnZhcywgZHN0X25hbWUsIGQsY2IgPSBudWxsKS0+XG4gICAgICAgICAgICBDYW1hbihzcmNfY2FudmFzLCAtPlxuICAgICAgICAgICAgICBAcmVzaXplXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGRcbiAgICAgICAgICAgICAgQHJlbmRlciA9PlxuICAgICAgICAgICAgICAgIGRhdGFfdXJsID0gQHRvQmFzZTY0KCdqcGVnJylcbiAgICAgICAgICAgICAgICBiNjQgPSBkYXRhX3VybC5yZXBsYWNlKC9eZGF0YTouKz87YmFzZTY0LC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFfdXJsLnN1YnN0cmluZygwLDUwKSlcbiAgICAgICAgICAgICAgICBkYXRhID0gX2Jhc2U2NFRvQXJyYXlCdWZmZXIoYjY0KVxuICAgICAgICAgICAgICAgICRjb3Jkb3ZhRmlsZS53cml0ZUZpbGUoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksIGRzdF9uYW1lLCBkYXRhLCB0cnVlKS50aGVuKC0+XG4gICAgICAgICAgICAgICAgICBpZiBjYlxuICAgICAgICAgICAgICAgICAgICBjYigkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSsgZHN0X25hbWUsIGRhdGFfdXJsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgQHJlc2V0KClcbiAgICAgICAgICAgIClcbiAgICAgICAgICByZXNpemUoY2FudmFzLCAnbG9nby10aHVtYi5qcGcnLCA3NSwgKHBhdGgsIGRhdGFfdXJsKS0+XG4gICAgICAgICAgICAkc2NvcGUuc2hvdy5sb2dvX3BhdGggPSBwYXRoXG4gICAgICAgICAgICAkc2NvcGUubG9nb19zcmMgPSBkYXRhX3VybFxuICAgICAgICAgIClcbiAgICAgICAgICByZXNpemUoY2FudmFzLCAnbG9nby5qcGcnLCAxNDAwLCAocGF0aCwgZGF0YV91cmwpLT5cbiAgICAgICAgICAgIG5ldyBVcGxvYWRXb3JrZXIoXG4gICAgICAgICAgICAgIHR5cGU6ICdsb2dvJ1xuICAgICAgICAgICAgICBtaW1lOiAnaW1hZ2UvanBlZydcbiAgICAgICAgICAgICAgc3JjOiBwYXRoXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApKSwgKGVycm9yKS0+XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICBcbiAgZ2V0YjY0ID0gKGNkdl9wYXRoLCBjYikgLT5cbiAgICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGNkdl9wYXRoLCAoZW50cnkpLT5cbiAgICAgIHBhdGggPSBlbnRyeS50b1VSTCgpXG4gICAgICB3aW5kb3cucGx1Z2lucy5CYXNlNjQuZW5jb2RlRmlsZShwYXRoLCAoYmFzZTY0KS0+XG4gICAgICAgIGNvbnNvbGUubG9nKGJhc2U2NC5zdWJzdHJpbmcoMCw1MCkpXG4gICAgICAgIGNiKGJhc2U2NClcbiAgICAgICk7XG4gICAgKVxuXG4gICRzY29wZS5zaG93ID0gXG4gICAgY29kZTogJydcbiAgICB0aXRsZTogJydcbiAgICBzdWJ0aXRsZTogJydcbiAgICBhdXRob3I6ICcnXG4gICAgZGVzY3JpcHRpb246ICcnXG4gICAgcHJpbWFyeV9jYXRlZ29yeTogJydcbiAgICBzZWNvbmRhcnlfY2F0ZWdvcnk6ICcnXG4gICAgaXNfZXhwbGljaXQ6IGZhbHNlXG4gICAgbG9nb19wYXRoOiBudWxsXG4gICAgXG4gIGZvciBrLHYgb2YgJHNjb3BlLnNob3dcbiAgICBpZigkc2NvcGUucG9kY2FzdFtrXT8pXG4gICAgICAkc2NvcGUuc2hvd1trXSA9ICRzY29wZS5wb2RjYXN0W2tdXG4gIFxuICBpZigkc2NvcGUuc2hvdy5sb2dvX3BhdGgpXG4gICAgZ2V0YjY0KCAkc2NvcGUuc2hvdy5sb2dvX3BhdGgsIChiNjQpLT5cbiAgICAgICRzY29wZS5sb2dvX3NyYyA9IGI2NDtcbiAgICApXG4gICAgICBcbiAgY29uc29sZS5sb2coJHNjb3BlLnNob3cpXG4gIG9yaWdpbmFsID0gYW5ndWxhci5jb3B5KCRzY29wZS5zaG93KVxuICBcbiAgJHNjb3BlLmhhc19jaGFuZ2VzID0gZmFsc2VcbiAgJHNjb3BlLiR3YXRjaCAnc2hvdycsICgobmV3VmFsdWUsIG9sZFZhbHVlKSAtPlxuICAgICRzY29wZS5zaG93LmNvZGUgPSAkc2NvcGUuc2hvdy5jb2RlLnRvTG93ZXJDYXNlKClcbiAgICAkc2NvcGUuaGFzX2NoYW5nZXMgPSAhYW5ndWxhci5lcXVhbHMob3JpZ2luYWwsIG5ld1ZhbHVlKVxuICAgICRpb25pY05hdkJhckRlbGVnYXRlLnNob3dCYWNrQnV0dG9uICEkc2NvcGUuaGFzX2NoYW5nZXNcbiAgKSwgdHJ1ZVxuICAgICAgXG4gICRzY29wZS5zYXZlID0gLT5cbiAgICB2YWxpZGF0ZSA9XG4gICAgICBjb2RlOiAnYSBzaG93IGNvZGUnXG4gICAgICB0aXRsZTogJ2EgdGl0bGUnXG4gICAgICBsb2dvX3BhdGg6ICdjb3ZlciBhcnQnXG4gICAgICBzdWJ0aXRsZTogJ2Egc3VidGl0bGUnXG4gICAgICBhdXRob3I6ICdhbiBhdXRob3InXG4gICAgICBkZXNjcmlwdGlvbjogJ2EgZGVzY3JpcHRpb24nXG4gICAgICBwcmltYXJ5X2NhdGVnb3J5OiAncHJpbWFyeSBjYXRlZ29yeSdcbiAgICAgIHNlY29uZGFyeV9jYXRlZ29yeTogJ3NlY29uZGFyeSBjYXRlZ29yeSdcbiAgICBmb3Igayx2IG9mIHZhbGlkYXRlXG4gICAgICBpZighKCRzY29wZS5zaG93W2tdPykpXG4gICAgICAgICRpb25pY1BvcHVwLmFsZXJ0KFxuICAgICAgICAgIHRpdGxlOiAnUmVxdWlyZWQnXG4gICAgICAgICAgdGVtcGxhdGU6IFwiUGxlYXNlIHN1cHBseSAje3Z9LlwiXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICAkc2NvcGUuc2hvd1trXSA9ICRzY29wZS5zaG93W2tdLnRyaW0oKVxuICAgIGZvciBrLHYgb2YgJHNjb3BlLnNob3dcbiAgICAgICRzY29wZS5wb2RjYXN0W2tdID0gJHNjb3BlLnNob3dba11cbiAgICAkc2NvcGUuc2F2ZV9zdGF0ZSgpXG4gICAgaWYoJHNjb3BlLmhhc19jaGFuZ2VzKVxuICAgICAgcnNzID0gRmFzdENhc3QudGVtcGxhdGVzLnJzc1xuICAgICAgICBwb2RjYXN0OiAkc2NvcGUucG9kY2FzdFxuICAgICAgJGNvcmRvdmFGaWxlLndyaXRlRmlsZSgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgJHNjb3BlLnBvZGNhc3QuY29kZSsnLnJzcycsIHJzcywgdHJ1ZSkudGhlbiAoKHJlc3VsdCkgLT5cbiAgICAgICAgbmV3IFVwbG9hZFdvcmtlcihcbiAgICAgICAgICB0eXBlOiAncnNzJ1xuICAgICAgICAgIG1pbWU6ICdhcHBsaWNhdGlvbi9yc3MreG1sJ1xuICAgICAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUucG9kY2FzdC5jb2RlKycucnNzJ1xuICAgICAgICApXG4gICAgICApXG4gICAgJHNjb3BlLmhvbWUoKVxuXG4gICRzY29wZS5jYW5jZWwgPSAtPlxuICAgIGhpZGVTaGVldCA9ICRpb25pY0FjdGlvblNoZWV0LnNob3coXG4gICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdEaXNjYXJkIENoYW5nZXMnXG4gICAgICB0aXRsZVRleHQ6ICdEaXNjYXJkIGNoYW5nZXMnXG4gICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAkc2NvcGUuaG9tZSgpXG4gICAgKVxuICBcbiAgJGpyQ3JvcC5kZWZhdWx0T3B0aW9ucy50ZW1wbGF0ZSA9ICRqckNyb3AuZGVmYXVsdE9wdGlvbnMudGVtcGxhdGUucmVwbGFjZSgve3svZywgJzwlJykucmVwbGFjZSgvfX0vZywgJyU+JylcbiIsImFwcC5jb250cm9sbGVyICdSZWNvcmRDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNIaXN0b3J5LCAkaW9uaWNQb3B1cCwgJGlvbmljTmF2QmFyRGVsZWdhdGUpIC0+XG4gICRzY29wZS4kcGFyZW50LiRvbiAnJGlvbmljVmlldy5iZWZvcmVMZWF2ZScsIC0+XG4gICAgY29uc29sZS5sb2coJ2JlZm9yZUxlYXZlJylcbiAgICByZWMuc3RvcCgpXG5cbiAgcmVjID0gbmV3IFJlY29yZGVyKFxuICAgICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcubTRhJyxcbiAgICBvblNjcnViVXBkYXRlOiAobXMpLT5cbiAgICAgICRzY29wZS5zY3J1Yl9wb2ludF9tcyA9IG1zXG4gICAgb25EdXJhdGlvblVwZGF0ZTogKG1zKS0+XG4gICAgICAkc2NvcGUuZHVyYXRpb25fbXMgPSBtc1xuICAgICAgJHNjb3BlLmVwaXNvZGUuZHVyYXRpb25fbXMgPSBtc1xuICAgIG9uQXVkaW9FcnJvcjogLT5cbiAgICAgICRpb25pY1BvcHVwLmFsZXJ0KFxuICAgICAgICB0aXRsZTogJ0F1ZGlvIEVycm9yJ1xuICAgICAgICB0ZW1wbGF0ZTogJ1RoZSBhdWRpbyBzeXN0ZW0gaGFzIGZhaWxlZC4gUGxlYXNlIHJlcG9ydCB0aGlzLidcbiAgICAgICkudGhlbiAoKHJlcykgLT5cbiAgICAgICAgJHNjb3BlLmhvbWUoKVxuICAgICAgKVxuICAgIG9uUGxheVN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmlzX3BsYXlpbmcgPSB0cnVlXG4gICAgb25QbGF5U3RvcDogLT5cbiAgICAgICRzY29wZS5pc19wbGF5aW5nID0gZmFsc2VcbiAgICBvblJlY29yZFN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmhhc19jaGFuZ2VzID0gdHJ1ZVxuICAgICAgJGlvbmljTmF2QmFyRGVsZWdhdGUuc2hvd0JhY2tCdXR0b24gZmFsc2VcbiAgICAgICRpb25pY0hpc3RvcnkuY2xlYXJIaXN0b3J5KClcbiAgICAgICRzY29wZS5pc19yZWNvcmRpbmcgPSB0cnVlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuZXBpc29kZS5yZWNvcmRlZF9hdCA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgb25SZWNvcmRTdG9wOiAtPlxuICAgICAgJHNjb3BlLmlzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IHRydWVcbiAgICBvbkV2ZW50OiAtPlxuICAgICAgJHNjb3BlLiRhcHBseUFzeW5jKClcbiAgICAgIFxuICApXG5cbiAgaG9sZF9wcm9taXNlID0gbnVsbFxuICAkc2NvcGUuaG9sZCA9IChtcykgLT5cbiAgICBpZiAhbXNcbiAgICAgICRpbnRlcnZhbC5jYW5jZWwgaG9sZF9wcm9taXNlXG4gICAgICByZXR1cm5cbiAgICBob2xkX3Byb21pc2UgPSAkaW50ZXJ2YWwoKC0+XG4gICAgICByZWMuc3RlcChtcylcbiAgICApLCAxMDApXG5cbiAgJHNjb3BlLnNlZWsgPSAobXMpIC0+XG4gICAgY29uc29sZS5sb2cgJ3NlZWsnLCBtc1xuICAgIHJlYy5zZWVrKG1zKVxuXG4gICRzY29wZS5zdGVwID0gKG1zKSAtPlxuICAgIGNvbnNvbGUubG9nICdzdGVwJywgbXNcbiAgICByZWMuc3RlcChtcylcblxuICAkc2NvcGUucGxheSA9IC0+XG4gICAgcmVjLnBsYXkoKVxuXG4gICRzY29wZS5zdG9wX3BsYXlpbmcgPSAtPlxuICAgIHJlYy5zdG9wKClcbiAgICBcbiAgJHNjb3BlLnN0b3BfcmVjb3JkaW5nID0gLT5cbiAgICByZWMuc3RvcCgpXG4gICAgXG4gICRzY29wZS5yZWNvcmQgPSAtPlxuICAgIGlmICRzY29wZS5oYXNfcmVjb3JkaW5nXG4gICAgICBoaWRlU2hlZXQgPSAkaW9uaWNBY3Rpb25TaGVldC5zaG93KFxuICAgICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdTY3JhcCBhbmQgUmUtUmVjb3JkJ1xuICAgICAgICB0aXRsZVRleHQ6ICdSZS1yZWNvcmQgZXBpc29kZSdcbiAgICAgICAgY2FuY2VsVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAgIGhpZGVTaGVldCgpXG4gICAgICAgICAgcmVjLnJlY29yZCgpXG4gICAgICApXG4gICAgZWxzZVxuICAgICAgcmVjLnJlY29yZCgpXG4iLCJhcHAuY29udHJvbGxlciAnU2V0dGluZ3NDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNOYXZCYXJEZWxlZ2F0ZSwgJGlvbmljUG9wdXApIC0+XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
