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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvYXBwLmNvZmZlZSIsIi9zb3VyY2UvYm9vdHN0cmFwLmNvZmZlZSIsImpzdC5qcyIsIi9zb3VyY2Uvc3RhdGljX2NhdGVnb3JpZXMuY29mZmVlIiwiL3NvdXJjZS9zdGF0aWNfcG9kY2FzdHMuY29mZmVlIiwiL3NvdXJjZS91dGlsLmNvZmZlZSIsIi9zb3VyY2UvY2xhc3Nlcy9jbGFzc2VzL1JlY29yZGVyLmNvZmZlZSIsIi9zb3VyY2UvY2xhc3Nlcy9jbGFzc2VzL1VwbG9hZFdvcmtlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9FcGlzb2RlQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0ZpbmFsaXplQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL0ZpbmlzaENvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9Ib21lQ29udHJvbGxlci5jb2ZmZWUiLCIvc291cmNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXJzL1BvZGNhc3RTZXR0aW5nc0NvbnRyb2xsZXIuY29mZmVlIiwiL3NvdXJjZS9jb250cm9sbGVycy9jb250cm9sbGVycy9SZWNvcmRDb250cm9sbGVyLmNvZmZlZSIsIi9zb3VyY2UvY29udHJvbGxlcnMvY29udHJvbGxlcnMvU2V0dGluZ3NDb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBYixDQUFxQixTQUFyQixDQUFBLEtBQW1DLENBQUMsQ0FBcEMsSUFBMEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFiLENBQXFCLFVBQXJCLENBQUEsS0FBb0Ms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QUEyQixZQUEzQixFQUF5QyxNQUF6QyxFQUFpRCxpQkFBakQsRUFBb0Usb0JBQXBFLEVBQTBGLFdBQTFGLEdBQUEsQ0FBckM7QUFBQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuaXNfYXBwID0gZG9jdW1lbnQuVVJMLmluZGV4T2YoJ2h0dHA6Ly8nKSA9PSAtMSBhbmQgZG9jdW1lbnQuVVJMLmluZGV4T2YoJ2h0dHBzOi8vJykgPT0gLTFcblxud2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdmYXN0Y2FzdCcsIFtcbiAgJ2lvbmljJ1xuICAnbmdDb3Jkb3ZhJyxcbiAgJ25nSU9TOVVJV2ViVmlld1BhdGNoJyxcbiAgJ2pyQ3JvcCcsXG5dKVxuXG4uY29uZmlnKCgkaW50ZXJwb2xhdGVQcm92aWRlciwgJGlvbmljQ29uZmlnUHJvdmlkZXIpIC0+XG4gICRpbnRlcnBvbGF0ZVByb3ZpZGVyLnN0YXJ0U3ltYm9sKCc8JScpLmVuZFN5bWJvbCAnJT4nXG4gICRpb25pY0NvbmZpZ1Byb3ZpZGVyLnZpZXdzLnN3aXBlQmFja0VuYWJsZWQoZmFsc2UpXG4pXG5cbi5ydW4oKCRpb25pY1BsYXRmb3JtKSAtPlxuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeSAtPlxuICAgICMgSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgICMgZm9yIGZvcm0gaW5wdXRzKVxuICAgIGlmIHdpbmRvdy5jb3Jkb3ZhIGFuZCB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkXG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyIHRydWVcbiAgICBpZiB3aW5kb3cuU3RhdHVzQmFyXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KClcbilcblxuLmZpbHRlcignbnVtYmVyRml4ZWRMZW4nLCAtPlxuICAobiwgbGVuKSAtPlxuICAgIHNwcmludGYgJyUwJyArIGxlbiArICdkJywgblxuKVxuXG4uZmlsdGVyKCdvcmRlckJ5TWFnaWMnLCAtPiBcbiAgKGVwaXNvZGVzKSAtPlxuICAgIG9yZGVyQnlNYWdpYyhlcGlzb2RlcylcbilcblxuLmNvbmZpZygoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hvbWUnLFxuICAgIHVybDogJy8nXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnXG4gICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJylcbiAgLnN0YXRlKCdlcGlzb2RlJyxcbiAgICBjYWNoZTogZmFsc2VcbiAgICB1cmw6ICcvZXBpc29kZSdcbiAgICB0ZW1wbGF0ZTogJzxpb24tbmF2LXZpZXc+PC9pb24tbmF2LXZpZXc+J1xuICAgIGNvbnRyb2xsZXI6ICdFcGlzb2RlQ29udHJvbGxlcidcbiAgICBhYnN0cmFjdDogdHJ1ZSlcbiAgICAuc3RhdGUoJ2VwaXNvZGUucmVjb3JkJyxcbiAgICAgIHVybDogJy9yZWNvcmQnXG4gICAgICB0ZW1wbGF0ZVVybDogJ2VwaXNvZGUvcmVjb3JkLmh0bWwnXG4gICAgICBjb250cm9sbGVyOiAnUmVjb3JkQ29udHJvbGxlcidcbiAgICAgIHBhcmVudDogJ2VwaXNvZGUnKVxuICAgIC5zdGF0ZSgnZXBpc29kZS5maW5hbGl6ZScsXG4gICAgICB1cmw6ICcvZmluYWxpemUnXG4gICAgICB0ZW1wbGF0ZVVybDogJ2VwaXNvZGUvZmluYWxpemUuaHRtbCdcbiAgICAgIGNvbnRyb2xsZXI6ICdGaW5hbGl6ZUNvbnRyb2xsZXInXG4gICAgICBwYXJlbnQ6ICdlcGlzb2RlJylcbiAgICAuc3RhdGUoJ2VwaXNvZGUuZmluaXNoJyxcbiAgICAgIHVybDogJy9maW5pc2gnXG4gICAgICB0ZW1wbGF0ZVVybDogJ2VwaXNvZGUvZmluaXNoLmh0bWwnXG4gICAgICBjb250cm9sbGVyOiAnRmluaXNoQ29udHJvbGxlcidcbiAgICAgIHBhcmVudDogJ2VwaXNvZGUnKVxuICAuc3RhdGUoJ3NldHRpbmdzJyxcbiAgICB1cmw6ICcvc2V0dGluZ3MnXG4gICAgdGVtcGxhdGU6ICc8aW9uLW5hdi12aWV3PjwvaW9uLW5hdi12aWV3PidcbiAgICBjb250cm9sbGVyOiAnU2V0dGluZ3NDb250cm9sbGVyJ1xuICAgIGFic3RyYWN0OiB0cnVlKVxuICAgIC5zdGF0ZSgnc2V0dGluZ3MucG9kY2FzdCcsXG4gICAgICB1cmw6ICcvcG9kY2FzdCdcbiAgICAgIHRlbXBsYXRlVXJsOiAnc2V0dGluZ3MvcG9kY2FzdC5odG1sJ1xuICAgICAgY29udHJvbGxlcjogJ1BvZGNhc3RTZXR0aW5nc0NvbnRyb2xsZXInXG4gICAgICBwYXJlbnQ6ICdzZXR0aW5ncycpXG4gICAgXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgJy8nXG4pXG4iLCJib290X2FuZ3VsYXIgPSAtPlxuICBkb21FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKVxuICBhbmd1bGFyLmJvb3RzdHJhcCBkb21FbGVtZW50LCBbICdmYXN0Y2FzdCcgXVxuICBcbmlmIGlzX2FwcFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdkZXZpY2VyZWFkeScsIGJvb3RfYW5ndWxhciwgZmFsc2VcbmVsc2VcbiAgJCAtPiBib290X2FuZ3VsYXIoKVxuIiwidGhpc1tcIkZhc3RDYXN0XCJdID0gdGhpc1tcIkZhc3RDYXN0XCJdIHx8IHt9O1xudGhpc1tcIkZhc3RDYXN0XCJdW1widGVtcGxhdGVzXCJdID0gdGhpc1tcIkZhc3RDYXN0XCJdW1widGVtcGxhdGVzXCJdIHx8IHt9O1xudGhpc1tcIkZhc3RDYXN0XCJdW1widGVtcGxhdGVzXCJdW1wiZXBpc29kZVwiXSA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJywgX19lID0gXy5lc2NhcGU7XG53aXRoIChvYmopIHtcbl9fcCArPSAnPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cImVuXCI+XFxuXFxuPGhlYWQ+XFxuXFxuICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIj5cXG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XFxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIj5cXG4gICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJcIj5cXG5cXG4gICAgPHRpdGxlPkFnZW5jeSAtIFN0YXJ0IEJvb3RzdHJhcCBUaGVtZTwvdGl0bGU+XFxuXFxuICAgIDwhLS0gQm9vdHN0cmFwIENvcmUgQ1NTIC0tPlxcbiAgICA8bGluayBocmVmPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cXG5cXG4gICAgPCEtLSBDdXN0b20gQ1NTIC0tPlxcbiAgICA8bGluayBocmVmPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2Nzcy9hZ2VuY3kuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPlxcblxcbiAgICA8IS0tIEN1c3RvbSBGb250cyAtLT5cXG4gICAgPGxpbmsgaHJlZj1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxcbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIj5cXG4gICAgPGxpbmsgaHJlZj1cXCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHRcXCcgcmVsPVxcJ3N0eWxlc2hlZXRcXCcgdHlwZT1cXCd0ZXh0L2Nzc1xcJz5cXG4gICAgPGxpbmsgaHJlZj1cXCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RHJvaWQrU2VyaWY6NDAwLDcwMCw0MDBpdGFsaWMsNzAwaXRhbGljXFwnIHJlbD1cXCdzdHlsZXNoZWV0XFwnIHR5cGU9XFwndGV4dC9jc3NcXCc+XFxuICAgIDxsaW5rIGhyZWY9XFwnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytTbGFiOjQwMCwxMDAsMzAwLDcwMFxcJyByZWw9XFwnc3R5bGVzaGVldFxcJyB0eXBlPVxcJ3RleHQvY3NzXFwnPlxcblxcbiAgICA8IS0tIEhUTUw1IFNoaW0gYW5kIFJlc3BvbmQuanMgSUU4IHN1cHBvcnQgb2YgSFRNTDUgZWxlbWVudHMgYW5kIG1lZGlhIHF1ZXJpZXMgLS0+XFxuICAgIDwhLS0gV0FSTklORzogUmVzcG9uZC5qcyBkb2VzblxcJ3Qgd29yayBpZiB5b3UgdmlldyB0aGUgcGFnZSB2aWEgZmlsZTovLyAtLT5cXG4gICAgPCEtLVtpZiBsdCBJRSA5XT5cXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9vc3MubWF4Y2RuLmNvbS9saWJzL2h0bWw1c2hpdi8zLjcuMC9odG1sNXNoaXYuanNcIj48L3NjcmlwdD5cXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9vc3MubWF4Y2RuLmNvbS9saWJzL3Jlc3BvbmQuanMvMS40LjIvcmVzcG9uZC5taW4uanNcIj48L3NjcmlwdD5cXG4gICAgPCFbZW5kaWZdLS0+XFxuXFxuPC9oZWFkPlxcblxcbjxib2R5IGlkPVwicGFnZS10b3BcIiBjbGFzcz1cImluZGV4XCI+XFxuXFxuICAgIDwhLS0gTmF2aWdhdGlvbiAtLT5cXG4gICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWQtdG9wXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPCEtLSBCcmFuZCBhbmQgdG9nZ2xlIGdldCBncm91cGVkIGZvciBiZXR0ZXIgbW9iaWxlIGRpc3BsYXkgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXIgcGFnZS1zY3JvbGxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2JzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmQgcGFnZS1zY3JvbGxcIiBocmVmPVwiI3BhZ2UtdG9wXCI+U3RhcnQgQm9vdHN0cmFwPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDwhLS0gQ29sbGVjdCB0aGUgbmF2IGxpbmtzLCBmb3JtcywgYW5kIG90aGVyIGNvbnRlbnQgZm9yIHRvZ2dsaW5nIC0tPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW5cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BhZ2UtdG9wXCI+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2Utc2Nyb2xsXCIgaHJlZj1cIiNzZXJ2aWNlc1wiPlNlcnZpY2VzPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2Utc2Nyb2xsXCIgaHJlZj1cIiNwb3J0Zm9saW9cIj5Qb3J0Zm9saW88L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1zY3JvbGxcIiBocmVmPVwiI2Fib3V0XCI+QWJvdXQ8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1zY3JvbGxcIiBocmVmPVwiI3RlYW1cIj5UZWFtPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2Utc2Nyb2xsXCIgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSAvLm5hdmJhci1jb2xsYXBzZSAtLT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLSAvLmNvbnRhaW5lci1mbHVpZCAtLT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIDwhLS0gSGVhZGVyIC0tPlxcbiAgICA8aGVhZGVyPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby10ZXh0XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1sZWFkLWluXCI+V2VsY29tZSBUbyBPdXIgU3R1ZGlvITwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8taGVhZGluZ1wiPlRoaXMgaXMgYW4gRXBpc29kZSE8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNzZXJ2aWNlc1wiIGNsYXNzPVwicGFnZS1zY3JvbGwgYnRuIGJ0bi14bFwiPlRlbGwgTWUgTW9yZTwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAgPCEtLSBTZXJ2aWNlcyBTZWN0aW9uIC0tPlxcbiAgICA8c2VjdGlvbiBpZD1cInNlcnZpY2VzXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtY2VudGVyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5TZXJ2aWNlczwvaDI+XFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJzZWN0aW9uLXN1YmhlYWRpbmcgdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvaDM+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdGV4dC1jZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhLXN0YWNrIGZhLTR4XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaXJjbGUgZmEtc3RhY2stMnggdGV4dC1wcmltYXJ5XCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2hvcHBpbmctY2FydCBmYS1zdGFjay0xeCBmYS1pbnZlcnNlXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic2VydmljZS1oZWFkaW5nXCI+RS1Db21tZXJjZTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWluaW1hIG1heGltZSBxdWFtIGFyY2hpdGVjdG8gcXVvIGludmVudG9yZSBoYXJ1bSBleCBtYWduaSwgZGljdGEgaW1wZWRpdC48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEtc3RhY2sgZmEtNHhcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNpcmNsZSBmYS1zdGFjay0yeCB0ZXh0LXByaW1hcnlcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1sYXB0b3AgZmEtc3RhY2stMXggZmEtaW52ZXJzZVwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInNlcnZpY2UtaGVhZGluZ1wiPlJlc3BvbnNpdmUgRGVzaWduPC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNaW5pbWEgbWF4aW1lIHF1YW0gYXJjaGl0ZWN0byBxdW8gaW52ZW50b3JlIGhhcnVtIGV4IG1hZ25pLCBkaWN0YSBpbXBlZGl0LjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYS1zdGFjayBmYS00eFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlIGZhLXN0YWNrLTJ4IHRleHQtcHJpbWFyeVwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxvY2sgZmEtc3RhY2stMXggZmEtaW52ZXJzZVwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInNlcnZpY2UtaGVhZGluZ1wiPldlYiBTZWN1cml0eTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWluaW1hIG1heGltZSBxdWFtIGFyY2hpdGVjdG8gcXVvIGludmVudG9yZSBoYXJ1bSBleCBtYWduaSwgZGljdGEgaW1wZWRpdC48L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPCEtLSBQb3J0Zm9saW8gR3JpZCBTZWN0aW9uIC0tPlxcbiAgICA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzPVwiYmctbGlnaHQtZ3JheVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+UG9ydGZvbGlvPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb24tc3ViaGVhZGluZyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9oMz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgcG9ydGZvbGlvLWl0ZW1cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvTW9kYWwxXCIgY2xhc3M9XCJwb3J0Zm9saW8tbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXItY29udGVudFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzIGZhLTN4XCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL3JvdW5kaWNvbnMucG5nXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1jYXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlJvdW5kIEljb25zPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5HcmFwaGljIERlc2lnbjwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IHBvcnRmb2xpby1pdGVtXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb01vZGFsMlwiIGNsYXNzPVwicG9ydGZvbGlvLWxpbmtcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3ZlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cyBmYS0zeFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9zdGFydHVwLWZyYW1ld29yay5wbmdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWNhcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U3RhcnR1cCBGcmFtZXdvcms8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPldlYnNpdGUgRGVzaWduPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgcG9ydGZvbGlvLWl0ZW1cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvTW9kYWwzXCIgY2xhc3M9XCJwb3J0Zm9saW8tbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXItY29udGVudFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzIGZhLTN4XCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL3RyZWVob3VzZS5wbmdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWNhcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VHJlZWhvdXNlPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5XZWJzaXRlIERlc2lnbjwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1zbS02IHBvcnRmb2xpby1pdGVtXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb01vZGFsNFwiIGNsYXNzPVwicG9ydGZvbGlvLWxpbmtcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3ZlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cyBmYS0zeFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9nb2xkZW4ucG5nXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1jYXB0aW9uXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkdvbGRlbjwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+V2Vic2l0ZSBEZXNpZ248L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtc20tNiBwb3J0Zm9saW8taXRlbVwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9Nb2RhbDVcIiBjbGFzcz1cInBvcnRmb2xpby1saW5rXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1ob3Zlci1jb250ZW50XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMgZmEtM3hcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vZXNjYXBlLnBuZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tY2FwdGlvblwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Fc2NhcGU8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPldlYnNpdGUgRGVzaWduPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXNtLTYgcG9ydGZvbGlvLWl0ZW1cIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvTW9kYWw2XCIgY2xhc3M9XCJwb3J0Zm9saW8tbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWhvdmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8taG92ZXItY29udGVudFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzIGZhLTN4XCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL2RyZWFtcy5wbmdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLWNhcHRpb25cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RHJlYW1zPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5XZWJzaXRlIERlc2lnbjwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDwhLS0gQWJvdXQgU2VjdGlvbiAtLT5cXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+QWJvdXQ8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi1zdWJoZWFkaW5nIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L2gzPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInRpbWVsaW5lXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaW1hZ2VcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctY2lyY2xlIGltZy1yZXNwb25zaXZlXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9hYm91dC8xLmpwZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLXBhbmVsXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaGVhZGluZ1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4yMDA5LTIwMTE8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInN1YmhlYWRpbmdcIj5PdXIgSHVtYmxlIEJlZ2lubmluZ3M8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50IHV0IHZvbHVwdGF0dW0gZWl1cyBzYXBpZW50ZSwgdG90YW0gcmVpY2llbmRpcyB0ZW1wb3JpYnVzIHF1aSBxdWlidXNkYW0sIHJlY3VzYW5kYWUgc2l0IHZlcm8gdW5kZSwgc2VkLCBpbmNpZHVudCBldCBlYSBxdW8gZG9sb3JlIGxhdWRhbnRpdW0gY29uc2VjdGV0dXIhPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGltZWxpbmUtaW52ZXJ0ZWRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWltYWdlXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWNpcmNsZSBpbWctcmVzcG9uc2l2ZVwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvYWJvdXQvMi5qcGdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1wYW5lbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWhlYWRpbmdcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TWFyY2ggMjAxMTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic3ViaGVhZGluZ1wiPkFuIEFnZW5jeSBpcyBCb3JuPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VudCB1dCB2b2x1cHRhdHVtIGVpdXMgc2FwaWVudGUsIHRvdGFtIHJlaWNpZW5kaXMgdGVtcG9yaWJ1cyBxdWkgcXVpYnVzZGFtLCByZWN1c2FuZGFlIHNpdCB2ZXJvIHVuZGUsIHNlZCwgaW5jaWR1bnQgZXQgZWEgcXVvIGRvbG9yZSBsYXVkYW50aXVtIGNvbnNlY3RldHVyITwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWltYWdlXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWNpcmNsZSBpbWctcmVzcG9uc2l2ZVwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvYWJvdXQvMy5qcGdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1wYW5lbFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWhlYWRpbmdcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RGVjZW1iZXIgMjAxMjwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic3ViaGVhZGluZ1wiPlRyYW5zaXRpb24gdG8gRnVsbCBTZXJ2aWNlPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU3VudCB1dCB2b2x1cHRhdHVtIGVpdXMgc2FwaWVudGUsIHRvdGFtIHJlaWNpZW5kaXMgdGVtcG9yaWJ1cyBxdWkgcXVpYnVzZGFtLCByZWN1c2FuZGFlIHNpdCB2ZXJvIHVuZGUsIHNlZCwgaW5jaWR1bnQgZXQgZWEgcXVvIGRvbG9yZSBsYXVkYW50aXVtIGNvbnNlY3RldHVyITwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWludmVydGVkXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1pbWFnZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1jaXJjbGUgaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL2Fib3V0LzQuanBnXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtcGFuZWxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1oZWFkaW5nXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pkp1bHkgMjAxNDwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic3ViaGVhZGluZ1wiPlBoYXNlIFR3byBFeHBhbnNpb248L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50IHV0IHZvbHVwdGF0dW0gZWl1cyBzYXBpZW50ZSwgdG90YW0gcmVpY2llbmRpcyB0ZW1wb3JpYnVzIHF1aSBxdWlidXNkYW0sIHJlY3VzYW5kYWUgc2l0IHZlcm8gdW5kZSwgc2VkLCBpbmNpZHVudCBldCBlYSBxdW8gZG9sb3JlIGxhdWRhbnRpdW0gY29uc2VjdGV0dXIhPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGltZWxpbmUtaW52ZXJ0ZWRcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWltYWdlXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+QmUgUGFydFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5PZiBPdXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+U3RvcnkhPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPCEtLSBUZWFtIFNlY3Rpb24gLS0+XFxuICAgIDxzZWN0aW9uIGlkPVwidGVhbVwiIGNsYXNzPVwiYmctbGlnaHQtZ3JheVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+T3VyIEFtYXppbmcgVGVhbTwvaDI+XFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJzZWN0aW9uLXN1YmhlYWRpbmcgdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvaDM+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1tZW1iZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvdGVhbS8xLmpwZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNpcmNsZVwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5LYXkgR2FybGFuZDwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TGVhZCBEZXNpZ25lcjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSBzb2NpYWwtYnV0dG9uc1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWZhY2Vib29rXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS1saW5rZWRpblwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1tZW1iZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvdGVhbS8yLmpwZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNpcmNsZVwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5MYXJyeSBQYXJrZXI8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZFwiPkxlYWQgTWFya2V0ZXI8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgc29jaWFsLWJ1dHRvbnNcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS10d2l0dGVyXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtbGlua2VkaW5cIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlYW0tbWVtYmVyXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3RlYW0vMy5qcGdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGVcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RGlhbmEgUGVydGVyc2VuPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5MZWFkIERldmVsb3BlcjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSBzb2NpYWwtYnV0dG9uc1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWZhY2Vib29rXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYSBmYS1saW5rZWRpblwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbGctb2Zmc2V0LTIgdGV4dC1jZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFyZ2UgdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXQgZWFxdWUsIGxhYm9yaW9zYW0gdmVyaXRhdGlzLCBxdW9zIG5vbiBxdWlzIGFkIHBlcnNwaWNpYXRpcywgdG90YW0gY29ycG9yaXMgZWEsIGFsaWFzIHV0IHVuZGUuPC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDwhLS0gQ2xpZW50cyBBc2lkZSAtLT5cXG4gICAgPGFzaWRlIGNsYXNzPVwiY2xpZW50c1wiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC1zbS02XCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9sb2dvcy9lbnZhdG8uanBnXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtc20tNlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvbG9nb3MvZGVzaWdubW9kby5qcGdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC1zbS02XCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9sb2dvcy90aGVtZWZvcmVzdC5qcGdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC1zbS02XCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9sb2dvcy9jcmVhdGl2ZS1tYXJrZXQuanBnXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9hc2lkZT5cXG4gICAgXFxuICAgIDwhLS0gQ29udGFjdCBTZWN0aW9uIC0tPlxcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPkNvbnRhY3QgVXM8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbi1zdWJoZWFkaW5nIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L2gzPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XCJzZW50TWVzc2FnZVwiIGlkPVwiY29udGFjdEZvcm1cIiBub3ZhbGlkYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWUgKlwiIGlkPVwibmFtZVwiIHJlcXVpcmVkIGRhdGEtdmFsaWRhdGlvbi1yZXF1aXJlZC1tZXNzYWdlPVwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZS5cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2sgdGV4dC1kYW5nZXJcIj48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsICpcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQgZGF0YS12YWxpZGF0aW9uLXJlcXVpcmVkLW1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzLlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlclwiPjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIFBob25lICpcIiBpZD1cInBob25lXCIgcmVxdWlyZWQgZGF0YS12YWxpZGF0aW9uLXJlcXVpcmVkLW1lc3NhZ2U9XCJQbGVhc2UgZW50ZXIgeW91ciBwaG9uZSBudW1iZXIuXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrIHRleHQtZGFuZ2VyXCI+PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2UgKlwiIGlkPVwibWVzc2FnZVwiIHJlcXVpcmVkIGRhdGEtdmFsaWRhdGlvbi1yZXF1aXJlZC1tZXNzYWdlPVwiUGxlYXNlIGVudGVyIGEgbWVzc2FnZS5cIj48L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlclwiPjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdWNjZXNzXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4teGxcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPGZvb3Rlcj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgJmNvcHk7IFlvdXIgV2Vic2l0ZSAyMDE0PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSBzb2NpYWwtYnV0dG9uc1wiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhIGZhLWZhY2Vib29rXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmEgZmEtbGlua2VkaW5cIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWlubGluZSBxdWlja2xpbmtzXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5UZXJtcyBvZiBVc2U8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZm9vdGVyPlxcblxcbiAgICA8IS0tIFBvcnRmb2xpbyBNb2RhbHMgLS0+XFxuICAgIDwhLS0gVXNlIHRoZSBtb2RhbHMgYmVsb3cgdG8gc2hvd2Nhc2UgZGV0YWlscyBhYm91dCB5b3VyIHBvcnRmb2xpbyBwcm9qZWN0cyEgLS0+XFxuXFxuICAgIDwhLS0gUG9ydGZvbGlvIE1vZGFsIDEgLS0+XFxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tbW9kYWwgbW9kYWwgZmFkZVwiIGlkPVwicG9ydGZvbGlvTW9kYWwxXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLW1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbGctb2Zmc2V0LTJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFByb2plY3QgRGV0YWlscyBHbyBIZXJlIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdCBOYW1lPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWludHJvIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9yb3VuZGljb25zLWZyZWUucG5nXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzZSB0aGlzIGFyZWEgdG8gZGVzY3JpYmUgeW91ciBwcm9qZWN0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXN0IGJsYW5kaXRpaXMgZG9sb3JlbSBjdWxwYSBpbmNpZHVudCBtaW51cyBkaWduaXNzaW1vcyBkZXNlcnVudCByZXBlbGxhdCBhcGVyaWFtIHF1YXNpIHN1bnQgb2ZmaWNpYSBleHBlZGl0YSBiZWF0YWUgY3VwaWRpdGF0ZSwgbWFpb3JlcyByZXB1ZGlhbmRhZSwgbm9zdHJ1bSwgcmVpY2llbmRpcyBmYWNlcmUgbmVtbyE8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XYW50IHRoZXNlIGljb25zIGluIHRoaXMgcG9ydGZvbGlvIGl0ZW0gc2FtcGxlPzwvc3Ryb25nPllvdSBjYW4gZG93bmxvYWQgNjAgb2YgdGhlbSBmb3IgZnJlZSwgY291cnRlc3kgb2YgPGEgaHJlZj1cImh0dHBzOi8vZ2V0ZHBkLmNvbS9jYXJ0L2hvcGxpbmsvMTgwNzY/cmVmZXJyZXI9YnZibzRrYXg1azhvZ2NcIj5Sb3VuZEljb25zLmNvbTwvYT4sIG9yIHlvdSBjYW4gcHVyY2hhc2UgdGhlIDE1MDAgaWNvbiBzZXQgPGEgaHJlZj1cImh0dHBzOi8vZ2V0ZHBkLmNvbS9jYXJ0L2hvcGxpbmsvMTgwNzY/cmVmZXJyZXI9YnZibzRrYXg1azhvZ2NcIj5oZXJlPC9hPi48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGF0ZTogSnVseSAyMDE0PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DbGllbnQ6IFJvdW5kIEljb25zPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DYXRlZ29yeTogR3JhcGhpYyBEZXNpZ248L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4gQ2xvc2UgUHJvamVjdDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIFBvcnRmb2xpbyBNb2RhbCAyIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLW1vZGFsIG1vZGFsIGZhZGVcIiBpZD1cInBvcnRmb2xpb01vZGFsMlwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1tb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJsXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlByb2plY3QgSGVhZGluZzwvaDI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1pbnRybyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vc3RhcnR1cC1mcmFtZXdvcmstcHJldmlldy5wbmdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cImh0dHA6Ly9kZXNpZ25tb2RvLmNvbS9zdGFydHVwLz91PTc4N1wiPlN0YXJ0dXAgRnJhbWV3b3JrPC9hPiBpcyBhIHdlYnNpdGUgYnVpbGRlciBmb3IgcHJvZmVzc2lvbmFscy4gU3RhcnR1cCBGcmFtZXdvcmsgY29udGFpbnMgY29tcG9uZW50cyBhbmQgY29tcGxleCBibG9ja3MgKFBTRCtIVE1MIEJvb3RzdHJhcCB0aGVtZXMgYW5kIHRlbXBsYXRlcykgd2hpY2ggY2FuIGVhc2lseSBiZSBpbnRlZ3JhdGVkIGludG8gYWxtb3N0IGFueSBkZXNpZ24uIEFsbCBvZiB0aGVzZSBjb21wb25lbnRzIGFyZSBtYWRlIGluIHRoZSBzYW1lIHN0eWxlLCBhbmQgY2FuIGVhc2lseSBiZSBpbnRlZ3JhdGVkIGludG8gcHJvamVjdHMsIGFsbG93aW5nIHlvdSB0byBjcmVhdGUgaHVuZHJlZHMgb2Ygc29sdXRpb25zIGZvciB5b3VyIGZ1dHVyZSBwcm9qZWN0cy48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gcHJldmlldyBTdGFydHVwIEZyYW1ld29yayA8YSBocmVmPVwiaHR0cDovL2Rlc2lnbm1vZG8uY29tL3N0YXJ0dXAvP3U9Nzg3XCI+aGVyZTwvYT4uPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4gQ2xvc2UgUHJvamVjdDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIFBvcnRmb2xpbyBNb2RhbCAzIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLW1vZGFsIG1vZGFsIGZhZGVcIiBpZD1cInBvcnRmb2xpb01vZGFsM1wiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1tb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJsXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQcm9qZWN0IERldGFpbHMgR28gSGVyZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlByb2plY3QgTmFtZTwvaDI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1pbnRybyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vdHJlZWhvdXNlLXByZXZpZXcucG5nXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRyZWVob3VzZSBpcyBhIGZyZWUgUFNEIHdlYiB0ZW1wbGF0ZSBidWlsdCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvTWF0aGF2YW5KYXlhXCI+TWF0aGF2YW4gSmF5YTwvYT4uIFRoaXMgaXMgYnJpZ2h0IGFuZCBzcGFjaW91cyBkZXNpZ24gcGVyZmVjdCBmb3IgcGVvcGxlIG9yIHN0YXJ0dXAgY29tcGFuaWVzIGxvb2tpbmcgdG8gc2hvd2Nhc2UgdGhlaXIgYXBwcyBvciBvdGhlciBwcm9qZWN0cy48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gZG93bmxvYWQgdGhlIFBTRCB0ZW1wbGF0ZSBpbiB0aGlzIHBvcnRmb2xpbyBzYW1wbGUgaXRlbSBhdCA8YSBocmVmPVwiaHR0cDovL2ZyZWViaWVzeHByZXNzLmNvbS9nYWxsZXJ5L3RyZWVob3VzZS1mcmVlLXBzZC13ZWItdGVtcGxhdGUvXCI+RnJlZWJpZXNYcHJlc3MuY29tPC9hPi48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPiBDbG9zZSBQcm9qZWN0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0gUG9ydGZvbGlvIE1vZGFsIDQgLS0+XFxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW8tbW9kYWwgbW9kYWwgZmFkZVwiIGlkPVwicG9ydGZvbGlvTW9kYWw0XCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLW1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxyXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbGctb2Zmc2V0LTJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFByb2plY3QgRGV0YWlscyBHbyBIZXJlIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvamVjdCBOYW1lPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWludHJvIHRleHQtbXV0ZWRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2VudGVyZWRcIiBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvaW1nL3BvcnRmb2xpby9nb2xkZW4tcHJldmlldy5wbmdcIiBhbHQ9XCJcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3RhcnQgQm9vdHN0cmFwXFwncyBBZ2VuY3kgdGhlbWUgaXMgYmFzZWQgb24gR29sZGVuLCBhIGZyZWUgUFNEIHdlYnNpdGUgdGVtcGxhdGUgYnVpbHQgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L01hdGhhdmFuSmF5YVwiPk1hdGhhdmFuIEpheWE8L2E+LiBHb2xkZW4gaXMgYSBtb2Rlcm4gYW5kIGNsZWFuIG9uZSBwYWdlIHdlYiB0ZW1wbGF0ZSB0aGF0IHdhcyBtYWRlIGV4Y2x1c2l2ZWx5IGZvciBCZXN0IFBTRCBGcmVlYmllcy4gVGhpcyB0ZW1wbGF0ZSBoYXMgYSBncmVhdCBwb3J0Zm9saW8sIHRpbWVsaW5lLCBhbmQgbWVldCB5b3VyIHRlYW0gc2VjdGlvbnMgdGhhdCBjYW4gYmUgZWFzaWx5IG1vZGlmaWVkIHRvIGZpdCB5b3VyIG5lZWRzLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IGNhbiBkb3dubG9hZCB0aGUgUFNEIHRlbXBsYXRlIGluIHRoaXMgcG9ydGZvbGlvIHNhbXBsZSBpdGVtIGF0IDxhIGhyZWY9XCJodHRwOi8vZnJlZWJpZXN4cHJlc3MuY29tL2dhbGxlcnkvZ29sZGVuLWZyZWUtb25lLXBhZ2Utd2ViLXRlbXBsYXRlL1wiPkZyZWViaWVzWHByZXNzLmNvbTwvYT4uPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4gQ2xvc2UgUHJvamVjdDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIFBvcnRmb2xpbyBNb2RhbCA1IC0tPlxcbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvLW1vZGFsIG1vZGFsIGZhZGVcIiBpZD1cInBvcnRmb2xpb01vZGFsNVwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1tb2RhbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsclwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJsXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBQcm9qZWN0IERldGFpbHMgR28gSGVyZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlByb2plY3QgTmFtZTwvaDI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1pbnRybyB0ZXh0LW11dGVkXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2ltZy9wb3J0Zm9saW8vZXNjYXBlLXByZXZpZXcucG5nXCIgYWx0PVwiXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVzY2FwZSBpcyBhIGZyZWUgUFNEIHdlYiB0ZW1wbGF0ZSBidWlsdCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvTWF0aGF2YW5KYXlhXCI+TWF0aGF2YW4gSmF5YTwvYT4uIEVzY2FwZSBpcyBhIG9uZSBwYWdlIHdlYiB0ZW1wbGF0ZSB0aGF0IHdhcyBkZXNpZ25lZCB3aXRoIGFnZW5jaWVzIGluIG1pbmQuIFRoaXMgdGVtcGxhdGUgaXMgaWRlYWwgZm9yIHRob3NlIGxvb2tpbmcgZm9yIGEgc2ltcGxlIG9uZSBwYWdlIHNvbHV0aW9uIHRvIGRlc2NyaWJlIHlvdXIgYnVzaW5lc3MgYW5kIG9mZmVyIHlvdXIgc2VydmljZXMuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGRvd25sb2FkIHRoZSBQU0QgdGVtcGxhdGUgaW4gdGhpcyBwb3J0Zm9saW8gc2FtcGxlIGl0ZW0gYXQgPGEgaHJlZj1cImh0dHA6Ly9mcmVlYmllc3hwcmVzcy5jb20vZ2FsbGVyeS9lc2NhcGUtb25lLXBhZ2UtcHNkLXdlYi10ZW1wbGF0ZS9cIj5GcmVlYmllc1hwcmVzcy5jb208L2E+LjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+IENsb3NlIFByb2plY3Q8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPCEtLSBQb3J0Zm9saW8gTW9kYWwgNiAtLT5cXG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpby1tb2RhbCBtb2RhbCBmYWRlXCIgaWQ9XCJwb3J0Zm9saW9Nb2RhbDZcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtbW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibHJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJybFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUHJvamVjdCBEZXRhaWxzIEdvIEhlcmUgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9qZWN0IE5hbWU8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0taW50cm8gdGV4dC1tdXRlZFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9pbWcvcG9ydGZvbGlvL2RyZWFtcy1wcmV2aWV3LnBuZ1wiIGFsdD1cIlwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EcmVhbXMgaXMgYSBmcmVlIFBTRCB3ZWIgdGVtcGxhdGUgYnVpbHQgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L01hdGhhdmFuSmF5YVwiPk1hdGhhdmFuIEpheWE8L2E+LiBEcmVhbXMgaXMgYSBtb2Rlcm4gb25lIHBhZ2Ugd2ViIHRlbXBsYXRlIGRlc2lnbmVkIGZvciBhbG1vc3QgYW55IHB1cnBvc2UuIEl04oCZcyBhIGJlYXV0aWZ1bCB0ZW1wbGF0ZSB0aGF04oCZcyBkZXNpZ25lZCB3aXRoIHRoZSBCb290c3RyYXAgZnJhbWV3b3JrIGluIG1pbmQuPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGRvd25sb2FkIHRoZSBQU0QgdGVtcGxhdGUgaW4gdGhpcyBwb3J0Zm9saW8gc2FtcGxlIGl0ZW0gYXQgPGEgaHJlZj1cImh0dHA6Ly9mcmVlYmllc3hwcmVzcy5jb20vZ2FsbGVyeS9kcmVhbXMtZnJlZS1vbmUtcGFnZS13ZWItdGVtcGxhdGUvXCI+RnJlZWJpZXNYcHJlc3MuY29tPC9hPi48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPiBDbG9zZSBQcm9qZWN0PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0galF1ZXJ5IC0tPlxcbiAgICA8c2NyaXB0IHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9qcy9qcXVlcnkuanNcIj48L3NjcmlwdD5cXG5cXG4gICAgPCEtLSBCb290c3RyYXAgQ29yZSBKYXZhU2NyaXB0IC0tPlxcbiAgICA8c2NyaXB0IHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy92MS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XFxuXFxuICAgIDwhLS0gUGx1Z2luIEphdmFTY3JpcHQgLS0+XFxuICAgIDxzY3JpcHQgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2pzL2pxdWVyeS5lYXNpbmcubWluLmpzXCI+PC9zY3JpcHQ+XFxuICAgIDxzY3JpcHQgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2pzL2NsYXNzaWUuanNcIj48L3NjcmlwdD5cXG4gICAgPHNjcmlwdCBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvanMvY2JwQW5pbWF0ZWRIZWFkZXIuanNcIj48L3NjcmlwdD5cXG5cXG4gICAgPCEtLSBDb250YWN0IEZvcm0gSmF2YVNjcmlwdCAtLT5cXG4gICAgPHNjcmlwdCBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvanMvanFCb290c3RyYXBWYWxpZGF0aW9uLmpzXCI+PC9zY3JpcHQ+XFxuICAgIDxzY3JpcHQgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3YxL2pzL2NvbnRhY3RfbWUuanNcIj48L3NjcmlwdD5cXG5cXG4gICAgPCEtLSBDdXN0b20gVGhlbWUgSmF2YVNjcmlwdCAtLT5cXG4gICAgPHNjcmlwdCBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvdjEvanMvYWdlbmN5LmpzXCI+PC9zY3JpcHQ+XFxuXFxuPC9ib2R5PlxcblxcbjwvaHRtbD5cXG4nO1xuXG59XG5yZXR1cm4gX19wXG59O1xudGhpc1tcIkZhc3RDYXN0XCJdW1widGVtcGxhdGVzXCJdW1wicnNzXCJdID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnLCBfX2UgPSBfLmVzY2FwZSwgX19qID0gQXJyYXkucHJvdG90eXBlLmpvaW47XG5mdW5jdGlvbiBwcmludCgpIHsgX19wICs9IF9fai5jYWxsKGFyZ3VtZW50cywgJycpIH1cbndpdGggKG9iaikge1xuX19wICs9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48cnNzIHhtbG5zOmF0b209XCJodHRwOi8vd3d3LnczLm9yZy8yMDA1L0F0b21cIiB4bWxuczppdHVuZXM9XCJodHRwOi8vd3d3Lml0dW5lcy5jb20vZHRkcy9wb2RjYXN0LTEuMC5kdGRcIiB2ZXJzaW9uPVwiMi4wXCI+XFxuICA8Y2hhbm5lbD5cXG4gICAgPGF0b206bGluayBocmVmPVwiaHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2ZlZWQucnNzXCIgcmVsPVwic2VsZlwiIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCIvPlxcbiAgICA8dGl0bGU+JyArXG5fX2UoIHBvZGNhc3QudGl0bGUgKSArXG4nPC90aXRsZT5cXG4gICAgPGxpbms+aHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2luZGV4Lmh0bWw8L2xpbms+XFxuICAgIDxwdWJEYXRlPicgK1xuX19lKCByZmMyODIyKCkgKSArXG4nPC9wdWJEYXRlPlxcbiAgICA8bGFzdEJ1aWxkRGF0ZT4nICtcbl9fZSggcmZjMjgyMigpICkgK1xuJzwvbGFzdEJ1aWxkRGF0ZT5cXG4gICAgPHR0bD42MDwvdHRsPlxcbiAgICA8bGFuZ3VhZ2U+ZW48L2xhbmd1YWdlPlxcbiAgICA8Y29weXJpZ2h0PkFsbCByaWdodHMgcmVzZXJ2ZWQ8L2NvcHlyaWdodD5cXG4gICAgPHdlYk1hc3Rlcj4nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJ0BmYXN0LWNhc3QubmV0ICgnICtcbl9fZSggcG9kY2FzdC5hdXRob3IgKSArXG4nKTwvd2ViTWFzdGVyPlxcbiAgICA8ZGVzY3JpcHRpb24+JyArXG5fX2UoIHBvZGNhc3QuZGVzY3JpcHRpb24gKSArXG4nPC9kZXNjcmlwdGlvbj5cXG4gICAgPGl0dW5lczpuZXctZmVlZC11cmw+aHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2ZlZWQucnNzPC9pdHVuZXM6bmV3LWZlZWQtdXJsPlxcbiAgICA8aXR1bmVzOnN1YnRpdGxlPicgK1xuX19lKCBwb2RjYXN0LnN1YnRpdGxlICkgK1xuJzwvaXR1bmVzOnN1YnRpdGxlPlxcbiAgICA8aXR1bmVzOm93bmVyPlxcbiAgICAgIDxpdHVuZXM6bmFtZT4nICtcbl9fZSggcG9kY2FzdC5hdXRob3IgKSArXG4nPC9pdHVuZXM6bmFtZT5cXG4gICAgICA8aXR1bmVzOmVtYWlsPicgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nQGZhc3QtY2FzdC5uZXQ8L2l0dW5lczplbWFpbD5cXG4gICAgPC9pdHVuZXM6b3duZXI+XFxuICAgIDxpdHVuZXM6YXV0aG9yPicgK1xuX19lKCBwb2RjYXN0LmF1dGhvciApICtcbic8L2l0dW5lczphdXRob3I+XFxuICAgIDxpdHVuZXM6ZXhwbGljaXQ+JyArXG5fX2UoIHBvZGNhc3QuaXNfZXhwbGljaXQgPyAneWVzJyA6ICdubycgKSArXG4nPC9pdHVuZXM6ZXhwbGljaXQ+XFxuICAgIDxpdHVuZXM6aW1hZ2UgaHJlZj1cImh0dHA6Ly93d3cuZmFzdC1jYXN0Lm5ldC9wb2RjYXN0cy8nICtcbl9fZSggcG9kY2FzdC5jb2RlICkgK1xuJy9sb2dvLmpwZ1wiLz5cXG4gICAgPGltYWdlPlxcbiAgICAgIDx1cmw+aHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2xvZ28uanBnPC91cmw+XFxuICAgICAgPHRpdGxlPicgK1xuX19lKCBwb2RjYXN0LnRpdGxlICkgK1xuJzwvdGl0bGU+XFxuICAgICAgPGxpbms+aHR0cDovL3d3dy5mYXN0LWNhc3QubmV0L3BvZGNhc3RzLycgK1xuX19lKCBwb2RjYXN0LmNvZGUgKSArXG4nL2luZGV4Lmh0bWw8L2xpbms+XFxuICAgIDwvaW1hZ2U+XFxuICAgICc7XG4gXy5lYWNoKFsncHJpbWFyeV9jYXRlZ29yeScsICdzZWNvbmRhcnlfY2F0ZWdvcnknXSwgZnVuY3Rpb24oaykgeyA7XG5fX3AgKz0gJ1xcbiAgICAgICc7XG4gdmFyIHBhcnRzID0gcG9kY2FzdFtrXS5zcGxpdCgvXFx8Lyk7IDtcbl9fcCArPSAnXFxuICBcXHRcXHQ8aXR1bmVzOmNhdGVnb3J5IHRleHQ9XCInICtcbl9fZSggcGFydHNbMF0gKSArXG4nXCI+XFxuICBcXHRcXHRcXHQnO1xuIGlmKHBhcnRzLmxlbmd0aD4xKSB7IDtcbl9fcCArPSAnXFxuICBcXHRcXHRcXHRcXHQ8aXR1bmVzOmNhdGVnb3J5IHRleHQ9XCInICtcbl9fZSggcGFydHNbMV0gKSArXG4nXCIvPlxcbiAgXFx0XFx0XFx0JztcbiB9IDtcbl9fcCArPSAnXFxuICBcXHRcXHQ8L2l0dW5lczpjYXRlZ29yeT5cXG4gICAgJztcbiB9KSA7XG5fX3AgKz0gJ1xcblxcdFxcdCc7XG4gXy5lYWNoKG9yZGVyQnlNYWdpYyhwb2RjYXN0LmVwaXNvZGVzKSwgZnVuY3Rpb24oZXBpc29kZSkge1xuICAgICAgICBpZighZXBpc29kZS5wdWJsaXNoZWRfYXQpIHJldHVybjtcbiAgICAgICAgO1xuX19wICs9ICdcXG5cXHRcXHQgICAgPGl0ZW0+XFxuXFx0XFx0ICAgICAgPGd1aWQgaXNQZXJtYUxpbms9XCJmYWxzZVwiPicgK1xuX19lKCBlcGlzb2RlLmd1aWQgKSArXG4nPC9ndWlkPlxcblxcdFxcdCAgICAgIDx0aXRsZT4nICtcbl9fZSggc3ByaW50ZihcIiUwM2RcIiwgZXBpc29kZS5udW1iZXIpICkgK1xuJyAtICcgK1xuX19lKCBlcGlzb2RlLnRpdGxlICkgK1xuJzwvdGl0bGU+XFxuXFx0XFx0ICAgICAgPHB1YkRhdGU+JyArXG5fX2UoIHJmYzI4MjIoZXBpc29kZS5wdWJsaXNoZWRfYXQpICkgK1xuJzwvcHViRGF0ZT5cXG5cXHRcXHQgICAgICA8bGluaz5odHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvZXBpc29kZXMvJyArXG5fX2UoIGVwaXNvZGUuc2x1ZyApICtcbic8L2xpbms+XFxuXFx0XFx0ICAgICAgPGl0dW5lczpkdXJhdGlvbj4nICtcbl9fZSggZXBpc29kZS5kdXJhdGlvbl9tcy50b0hITU1TUygpICkgK1xuJzwvaXR1bmVzOmR1cmF0aW9uPlxcblxcdFxcdCAgICAgIDxpdHVuZXM6YXV0aG9yPkJlbiBBbGxmcmVlPC9pdHVuZXM6YXV0aG9yPlxcblxcdFxcdCAgICAgIDxpdHVuZXM6ZXhwbGljaXQ+eWVzPC9pdHVuZXM6ZXhwbGljaXQ+XFxuXFx0XFx0ICAgICAgPGl0dW5lczpzdW1tYXJ5PicgK1xuX19lKCBlcGlzb2RlLmRlc2NyaXB0aW9uICkgK1xuJzwvaXR1bmVzOnN1bW1hcnk+XFxuXFx0XFx0ICAgICAgPGl0dW5lczpzdWJ0aXRsZT4nICtcbl9fZSggZXBpc29kZS5kZXNjcmlwdGlvbiApICtcbic8L2l0dW5lczpzdWJ0aXRsZT5cXG5cXHRcXHQgICAgICA8ZGVzY3JpcHRpb24+JyArXG5fX2UoIGVwaXNvZGUuZGVzY3JpcHRpb24gKSArXG4nPC9kZXNjcmlwdGlvbj5cXG5cXHRcXHQgICAgICA8ZW5jbG9zdXJlIHR5cGU9XCJhdWRpby9tcDRcIiB1cmw9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvZXBpc29kZXMvJyArXG5fX2UoIGVwaXNvZGUuc2x1ZyApICtcbicvJyArXG5fX2UoIGVwaXNvZGUuc2x1ZyApICtcbicubTRhXCIgbGVuZ3RoPVwiJyArXG5fX2UoIGVwaXNvZGUubGVuZ3RoX2J5dGVzICkgK1xuJ1wiLz5cXG5cXHRcXHQgICAgICA8aXR1bmVzOmltYWdlIGhyZWY9XCJodHRwOi8vd3d3LmZhc3QtY2FzdC5uZXQvcG9kY2FzdHMvJyArXG5fX2UoIHBvZGNhc3QuY29kZSApICtcbicvbG9nby5qcGdcIi8+XFxuXFx0XFx0ICAgIDwvaXRlbT5cXG5cXHRcXHQnO1xuIH0pIDtcbl9fcCArPSAnXFxuICA8L2NoYW5uZWw+XFxuPC9yc3M+JztcblxufVxucmV0dXJuIF9fcFxufTsiLCJ3aW5kb3cuY2F0ZWdvcmllcyA9XG4gIFwiQXJ0c1wiOltcbiAgICBcIkRlc2lnblwiXG4gICAgXCJGYXNoaW9uICYgQmVhdXR5XCJcbiAgICBcIkZvb2RcIlxuICAgIFwiTGl0ZXJhdHVyZVwiXG4gICAgXCJQZXJmb3JtaW5nIEFydHNcIlxuICAgIFwiVmlzdWFsIEFydHNcIl1cbiAgXCJCdXNpbmVzc1wiOltcbiAgICBcIkJ1c2luZXNzIE5ld3NcIlxuICAgIFwiQ2FyZWVyc1wiXG4gICAgXCJJbnZlc3RpbmdcIlxuICAgIFwiTWFuYWdlbWVudCAmIE1hcmtldGluZ1wiXG4gICAgXCJTaG9wcGluZ1wiXVxuICBcIkNvbWVkeVwiOltdXG4gIFwiRWR1Y2F0aW9uXCI6W1xuICAgIFwiRWR1Y2F0aW9uYWwgVGVjaG5vbG9neVwiXG4gICAgXCJIaWdoZXIgRWR1Y2F0aW9uXCJcbiAgICBcIkstMTJcIlxuICAgIFwiTGFuZ3VhZ2UgQ291cnNlc1wiXG4gICAgXCJUcmFpbmluZ1wiXVxuICBcIkdhbWVzICYgSG9iYmllc1wiOltcbiAgICBcIkF1dG9tb3RpdmVcIlxuICAgIFwiQXZpYXRpb25cIlxuICAgIFwiSG9iYmllc1wiXG4gICAgXCJPdGhlciBHYW1lc1wiXG4gICAgXCJWaWRlbyBHYW1lc1wiXVxuICBcIkdvdmVybm1lbnQgJiBPcmdhbml6YXRpb25zXCI6W1xuICAgIFwiTG9jYWxcIlxuICAgIFwiTmF0aW9uYWxcIlxuICAgIFwiTm9uLVByb2ZpdFwiXG4gICAgXCJSZWdpb25hbFwiXVxuICBcIkhlYWx0aFwiOltcbiAgICBcIkFsdGVybmF0aXZlIEhlYWx0aFwiXG4gICAgXCJGaXRuZXNzICYgTnV0cml0aW9uXCJcbiAgICBcIlNlbGYtSGVscFwiXG4gICAgXCJTZXh1YWxpdHlcIl1cbiAgXCJLaWRzICYgRmFtaWx5XCI6W11cbiAgXCJNdXNpY1wiOltdXG4gIFwiTmV3cyAmIFBvbGl0aWNzXCI6W11cbiAgXCJSZWxpZ2lvbiAmIFNwaXJpdHVhbGl0eVwiOltcbiAgICBcIkJ1ZGRoaXNtXCJcbiAgICBcIkNocmlzdGlhbml0eVwiXG4gICAgXCJIaW5kdWlzbVwiXG4gICAgXCJJc2xhbVwiXG4gICAgXCJKdWRhaXNtXCJcbiAgICBcIk90aGVyXCJcbiAgICBcIlNwaXJpdHVhbGl0eVwiXVxuICBcIlNjaWVuY2UgJiBNZWRpY2luZVwiOltcbiAgICBcIk1lZGljaW5lXCJcbiAgICBcIk5hdHVyYWwgU2NpZW5jZXNcIlxuICAgIFwiU29jaWFsIFNjaWVuY2VzXCJdXG4gIFwiU29jaWV0eSAmIEN1bHR1cmVcIjpbXG4gICAgXCJIaXN0b3J5XCJcbiAgICBcIlBlcnNvbmFsIEpvdXJuYWxzXCJcbiAgICBcIlBoaWxvc29waHlcIlxuICAgIFwiUGxhY2VzICYgVHJhdmVsXCJdXG4gIFwiU3BvcnRzICYgUmVjcmVhdGlvblwiOltcbiAgICBcIkFtYXRldXJcIlxuICAgIFwiQ29sbGVnZSAmIEhpZ2ggU2Nob29sXCJcbiAgICBcIk91dGRvb3JcIlxuICAgIFwiUHJvZmVzc2lvbmFsXCJdXG4gIFwiVGVjaG5vbG9neVwiOltcbiAgICBcIkdhZGdldHNcIlxuICAgIFwiVGVjaCBOZXdzXCJcbiAgICBcIlBvZGNhc3RpbmdcIlxuICAgIFwiU29mdHdhcmUgSG93LVRvXCJdXG4gIFwiVFYgJiBGaWxtXCI6W11cbiAgICAiLCJ3aW5kb3cuc3RhdGljX2VwaXNvZGVzID0gXG4gICdmYy10Z2ktMTQ0NDY3MTQyMDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ0NjcxNDIwMDAwJ1xuICAgIHNsdWc6ICcwMDEtYXNzYXNzaW5zJ1xuICAgIHRpdGxlOiAnQXNzYXNzaW5zJ1xuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGFnZS1vbGQgZ2FtZSBvZiBBc3Nhc3NpbnMsIHJlLWltYWdpbmVkIGFzIGEgZ2VvIGFwcC4nXG4gICAgbnVtYmVyOiAxXG4gICAgcHVibGlzaGVkX2F0OiAxNDQ0NjcxNDIwMDAwXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDQ2NzE0MjAwMDBcbiAgICBkdXJhdGlvbl9tczogNSAqIDYwICogMTAwMCArIDUgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiA0MDI5NTYyXG4gICdmYy10Z2ktMTQ0NTAwMTI0MDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1MDAxMjQwMDAwJ1xuICAgIHNsdWc6ICcwMDItc29jaWFsLWNhci12YWx1ZXMnXG4gICAgdGl0bGU6ICdTb2NpYWwgQ2FyIFZhbHVlcydcbiAgICBkZXNjcmlwdGlvbjogJ05lZWQgdG8ga25vdyB3aGF0IHlvdXIgY2FyIGlzIHJlYWxseSB3b3J0aD8gVGhpcyBpZGVhIG1pZ2h0IGp1c3QgZG8gaXQuJ1xuICAgIG51bWJlcjogMlxuICAgIHB1Ymxpc2hlZF9hdDogMTQ0NTAwMTI0MDAwMFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1MDAxMjQwMDAwXG4gICAgZHVyYXRpb25fbXM6ICgyMiAqIDYwICsgMzQpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMzI1MDU2ODhcbiAgJ2ZjLXRnaS0xNDQ1Mjg4NTgwMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDUyODg1ODAwMDAnXG4gICAgc2x1ZzogJzAwMy1jcm93ZC1mdW5kZWQtYXBwcydcbiAgICB0aXRsZTogJ0Nyb3dkIEZ1bmRlZCBBcHBzJ1xuICAgIGRlc2NyaXB0aW9uOiAnQSBtYXJrZXRwbGFjZSB0byBmaW5kIHRhbGVudCB0byBoZWxwIHlvdSBidWlsZCB5b3VyIG5ldyBhcHAtYmFzZWQgc3RhcnR1cC4nXG4gICAgbnVtYmVyOiAzXG4gICAgcHVibGlzaGVkX2F0OiAxNDQ1Mjg4NTgwMDAwXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDUyODg1ODAwMDBcbiAgICBkdXJhdGlvbl9tczogKDMyICogNjAgKyA1MSkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiA1NTM0Mjk2MVxuICAnZmMtdGdpLTE0NDUzNzY2MDAwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTM3NjYwMDAwMCdcbiAgICBzbHVnOiAnMDA0LXRydXN0bHknXG4gICAgdGl0bGU6ICdUcnVzdGx5J1xuICAgIGRlc2NyaXB0aW9uOiAnQW4gaWRlbnRpdHkgdmVyaWZpY2F0aW9uIHNlcnZpY2UgdG8gY2hhbmdlIHRoZSB3b3JsZC4nXG4gICAgbnVtYmVyOiA0XG4gICAgcHVibGlzaGVkX2F0OiAxNDQ1Mzc2NjAwMDAwXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDUzNzY2MDAwMDBcbiAgICBkdXJhdGlvbl9tczogKDc5ICogNjAgKyA1NykgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAxMTQ2MTk2ODBcbiAgJ2ZjLXRnaS0xNDQ1NDQ2NDQwMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDY0NDAwMDAnXG4gICAgc2x1ZzogJzAwNS1waWNrLWNvb2wnXG4gICAgdGl0bGU6ICdQaWNrLkNvb2wnXG4gICAgZGVzY3JpcHRpb246ICdBIHNvY2lhbCB2b3RpbmcgcGxhdGZvcm0gd2l0aCBjb21tdW5pdHkgYXMgaXRzIGZvY3VzLidcbiAgICBudW1iZXI6IDVcbiAgICBwdWJsaXNoZWRfYXQ6IDE0NDU0NDY0NDAwMDBcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0NjQ0MDAwMFxuICAgIGR1cmF0aW9uX21zOiAoNTkgKiA2MCArIDM2KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDEwNDU1NDk5NVxuICAnZmMtdGdpLTE0NDU1MTMwNDAwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTUxMzA0MDAwMCdcbiAgICBzbHVnOiAnMDA2LXR1cm5rZXktbmljaGUtc2l0ZXMnXG4gICAgdGl0bGU6ICdUdXJua2V5IE5pY2hlIFNpdGVzJ1xuICAgIGRlc2NyaXB0aW9uOiAnR3JhYiBvbiB0byB0aGF0IGxvbmcgdGFpbCBieSBiZWNvbWluZyBhIG5pY2hlIHNpdGUgaG9zdC4nXG4gICAgbnVtYmVyOiA2XG4gICAgcHVibGlzaGVkX2F0OiAxNDQ1NTEzMDQwMDAwXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU1MTMwNDAwMDBcbiAgICBkdXJhdGlvbl9tczogKDU0ICogNjAgKyA1NSkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAyNjY1MjEzMFxuICAnZmMtdGdpLTE0NDU0NDg2MjgwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODYyODAwMCdcbiAgICBzbHVnOiAnMDA3LWZhc3RjYXN0J1xuICAgIHRpdGxlOiAnRmFzdENhc3QnXG4gICAgZGVzY3JpcHRpb246ICdUaGUgb25lIGNsaWNrIHplcm8gdG8gaGVybyBwb2RjYXN0aW5nIHBsYXRmb3JtLidcbiAgICBudW1iZXI6IDdcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODYyODAwMFxuICAgIGR1cmF0aW9uX21zOiAoNjkgKiA2MCArIDI4KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDMzNzA4NDgwXG4gICdmYy10Z2ktMTQ0NTQ0ODYzNTAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjM1MDAwJ1xuICAgIHNsdWc6ICcwMDctcGFydC0yLXNvY2lhbC1yZWxldmFuY2UtZW5naW5lJ1xuICAgIHRpdGxlOiAnUGFydCAyOiBTb2NpYWwgUmVsZXZhbmNlIEVuZ2luZSdcbiAgICBkZXNjcmlwdGlvbjogJ0Egd2F5IHRvIHRyYWNrIGhvdyB5b3VyIGNvbnRlbnQgaXMgcGVyZm9ybWluZyBvbiBzb2NpYWwgc2l0ZXMuJ1xuICAgIG51bWJlcjogN1xuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjM1MDAwXG4gICAgZHVyYXRpb25fbXM6ICg0NCAqIDYwICsgMykgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAyMTM3ODM1MFxuICAnZmMtdGdpLTE0NDU0NDg2MzcwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODYzNzAwMCdcbiAgICBzbHVnOiAnMDA4LXBvZGNhc3QtbmV0d29yaydcbiAgICB0aXRsZTogJ1BvZGNhc3QgTmV0d29yaydcbiAgICBkZXNjcmlwdGlvbjogJ0EgcG9kY2FzdGluZyBuZXR3b3JrIHRoYXQgaGVscHMgeW91IGJ1aWxkIGFuIGF1ZGllbmNlLidcbiAgICBudW1iZXI6IDhcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODYzNzAwMFxuICAgIGR1cmF0aW9uX21zOiAoNDggKiA2MCArIDQpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMjM0NTM0MDVcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjM5MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2MzkwMDAnXG4gICAgc2x1ZzogJzAwOS1hZmZpbGlhdGUtc2l0ZXMnXG4gICAgdGl0bGU6ICdBZmZpbGlhdGUgU2l0ZXMnXG4gICAgZGVzY3JpcHRpb246ICdIb3cgdG8gYnVpbGQgYSBidXNpbmVzcyBqdXN0IGJ5IGhlbHBpbmcgcmV0YWlsZXJzIG1hcmtldCB0aGVpciBnb29kcy4nXG4gICAgbnVtYmVyOiA5XG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDg2MzkwMDBcbiAgICBkdXJhdGlvbl9tczogKDU2ICogNjAgKyA1OSkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAyNzgwMzQ5OFxuICAnZmMtdGdpLTE0NDU0NDg2NDEwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODY0MTAwMCdcbiAgICBzbHVnOiAnMDEwLWp1bmdsZWZpcmUnXG4gICAgdGl0bGU6ICdKdW5nbGVGaXJlJ1xuICAgIGRlc2NyaXB0aW9uOiAnQSBidXNpbmVzcyBzdXBwbHlpbmcgcGx1bWJpbmcgZm9yIG90aGVyIGJ1c2luZXNzZXMuJ1xuICAgIG51bWJlcjogMTBcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY0MTAwMFxuICAgIGR1cmF0aW9uX21zOiAoNjggKiA2MCArIDMyKSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDMzNjA5NDA5XG4gICdmYy10Z2ktMTQ0NTQ0ODY0NjAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjQ2MDAwJ1xuICAgIHNsdWc6ICcwMTEtaWxvb2tnb29kJ1xuICAgIHRpdGxlOiAnaUxvb2tHb29kJ1xuICAgIGRlc2NyaXB0aW9uOiAnQSBmYXNoaW9uIHNoYXJpbmcgYW5kIGFkdmljZSBtYXJrZXRwbGFjZS4nXG4gICAgbnVtYmVyOiAxMVxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjQ2MDAwXG4gICAgZHVyYXRpb25fbXM6ICg5NCAqIDYwICsgMTApICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogNDU2OTMyMjVcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjQ5MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2NDkwMDAnXG4gICAgc2x1ZzogJzAxMi1saWZlYm9vaydcbiAgICB0aXRsZTogJ0xpZmVCb29rJ1xuICAgIGRlc2NyaXB0aW9uOiAnQW4gYXBwIHRvIGhlbHAgZm9zdGVyIGtpZHMgY2FwdHVyZSB0aGVpciB5b3V0aC4nXG4gICAgbnVtYmVyOiAxMlxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NDQ4NjQ5MDAwXG4gICAgZHVyYXRpb25fbXM6ICg4NyAqIDYwICsgMzYpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogNDI1MTA2ODdcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjUyMDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2NTIwMDAnXG4gICAgc2x1ZzogJzAxMy10aW1lLWJvbWInXG4gICAgdGl0bGU6ICdUaW1lIEJvbWInXG4gICAgZGVzY3JpcHRpb246ICdBIG11bHRpcGxheWVyIGFsaWVuIHB1enpsZSBnYW1lIHRoYXQga2lsbHMuJ1xuICAgIG51bWJlcjogMTNcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY1MjAwMFxuICAgIGR1cmF0aW9uX21zOiAoMzQgKiA2MCArIDI3KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDE2NzE5MTczXG4gICdmYy10Z2ktMTQ0NTQ0ODY1NDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjU0MDAwJ1xuICAgIHNsdWc6ICcwMTQta2l0Y2hlbi1pbmdyZWRpZW50LXRyYWNrZXInXG4gICAgdGl0bGU6ICdLaXRjaGVuIEluZ3JlZGllbnQgVHJhY2tlcidcbiAgICBkZXNjcmlwdGlvbjogJ0FuIGFwcCB0aGF0IGtlZXBzIHlvdXIgY3VwYm9hcmRzIGZ1bGw/IFllcyBwbGVhc2UuJ1xuICAgIG51bWJlcjogMTRcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY1NDAwMFxuICAgIGR1cmF0aW9uX21zOiAoNzggKiA2MCArIDkpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogMzg4OTA2NjZcbiAgJ2ZjLXRnaS0xNDQ1NDQ4NjU4MDAwJzpcbiAgICBndWlkOiAnZmMtdGdpLTE0NDU0NDg2NTgwMDAnXG4gICAgc2x1ZzogJzAxNS1lcGsnXG4gICAgdGl0bGU6ICdFUEsnXG4gICAgZGVzY3JpcHRpb246ICdBbiBhcHAgZm9yIHRvdXJpbmcgbXVzaWNpYW5zIGFuZCB0aGUgdmVudWVzIHdobyBsb3ZlIHRoZW0uJ1xuICAgIG51bWJlcjogMTVcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY1ODAwMFxuICAgIGR1cmF0aW9uX21zOiAoNjkgKiA2MCArIDIwKSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDM0MDAzNzA3XG4gICdmYy10Z2ktMTQ0NTQ0ODY4MDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4NjgwMDAwJ1xuICAgIHNsdWc6ICcwMTYtY2F0Y2hlcidcbiAgICB0aXRsZTogJ0NhdGNoZXInXG4gICAgZGVzY3JpcHRpb246ICdBIFBva8OpbW9uIG1hcmtldHBsYWNlLidcbiAgICBudW1iZXI6IDE2XG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDg2ODAwMDBcbiAgICBkdXJhdGlvbl9tczogKDQ4ICogNjAgKyAxNykgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiAyMzU2MjY3NlxuICAnZmMtdGdpLTE0NDU0NDg2ODIwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTQ0ODY4MjAwMCdcbiAgICBzbHVnOiAnMDE3LWZhbmJyYWluJ1xuICAgIHRpdGxlOiAnRmFuQnJhaW4nXG4gICAgZGVzY3JpcHRpb246ICdTcG9ydHMgbWVudG9yaW5nIGZvciB0aGUgbWFzc2VzLidcbiAgICBudW1iZXI6IDE3XG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDg2ODIwMDBcbiAgICBkdXJhdGlvbl9tczogKDczICogNjAgKyAwKSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDM1Nzk3OTI4XG4gICdmYy10Z2ktMTQ0NTQ0ODY4ODAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ4Njg4MDAwJ1xuICAgIHNsdWc6ICcwMTgtcXVpY2tkcmF3J1xuICAgIHRpdGxlOiAnUXVpY2tEcmF3J1xuICAgIGRlc2NyaXB0aW9uOiAnQmUgdGhlIGZhc3Rlc3QgZHJhdyBpbiB0aGUgd29ybGQuLi5vciBkaWUuJ1xuICAgIG51bWJlcjogMThcbiAgICBwdWJsaXNoZWRfYXQ6IG51bGxcbiAgICByZWNvcmRlZF9hdDogMTQ0NTQ0ODY4ODAwMFxuICAgIGR1cmF0aW9uX21zOiAoNTIgKiA2MCArIDE1KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDI1NDk1NDcwXG4gICdmYy10Z2ktMTQ0NTQ0NTk5MDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NDQ1OTkwMDAwJ1xuICAgIHNsdWc6ICcwMTktc2NhcGVzZWFyY2gnXG4gICAgdGl0bGU6ICdTY2FwZVNlYXJjaCdcbiAgICBkZXNjcmlwdGlvbjogJ0hhdmluZyB0cm91YmxlIGZpbmRpbmcgYSBsYW5kc2NhcGVyPyBNZSBuZWl0aGVyLidcbiAgICBudW1iZXI6IDE5XG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU0NDU5OTAwMDBcbiAgICBkdXJhdGlvbl9tczogKDM3ICogNjAgKyAzOCkgKiAxMDAwXG4gICAgbGVuZ3RoX2J5dGVzOiA3MjA2MjExXG4gICdmYy10Z2ktMTQ0NTUyNzgzNDAwMCc6XG4gICAgZ3VpZDogJ2ZjLXRnaS0xNDQ1NTI3ODM0MDAwJ1xuICAgIHNsdWc6ICcwMjAtZmFzdGNhc3QtdXBkYXRlJ1xuICAgIHRpdGxlOiAnRmFzdENhc3QgVXBkYXRlJ1xuICAgIGRlc2NyaXB0aW9uOiBcIlRvZGF5J3MgRmFzdENhc3QgdXBkYXRlLlwiXG4gICAgbnVtYmVyOiAyMFxuICAgIHB1Ymxpc2hlZF9hdDogbnVsbFxuICAgIHJlY29yZGVkX2F0OiAxNDQ1NTI3ODM0MDAwXG4gICAgZHVyYXRpb25fbXM6ICgyMSAqIDYwICsgMzYpICogMTAwMFxuICAgIGxlbmd0aF9ieXRlczogNDA2NzU5MFxuICAnZmMtdGdpLTE0NDU1NTQwNTgwMDAnOlxuICAgIGd1aWQ6ICdmYy10Z2ktMTQ0NTU1NDA1ODAwMCdcbiAgICBzbHVnOiAnMDIxLXF1aWNrYXV0aG9yaXR5J1xuICAgIHRpdGxlOiAnUXVpY2tBdXRob3JpdHknXG4gICAgZGVzY3JpcHRpb246IFwiVHVybmtleSBhdXRob3JpdHkgc2l0ZXMuXCJcbiAgICBudW1iZXI6IDIxXG4gICAgcHVibGlzaGVkX2F0OiBudWxsXG4gICAgcmVjb3JkZWRfYXQ6IDE0NDU1NTQwNTgwMDBcbiAgICBkdXJhdGlvbl9tczogKDI0ICogNjAgKyA1KSAqIDEwMDBcbiAgICBsZW5ndGhfYnl0ZXM6IDQ4MTgxOTYiLCJTdHJpbmc6OnNsdWdpZnkgPSAtPlxuICBAdG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJykucmVwbGFjZSgvW15cXHdcXC1dKy9nLCAnJykucmVwbGFjZSgvXFwtXFwtKy9nLCAnLScpLnJlcGxhY2UoL14tKy8sICcnKS5yZXBsYWNlIC8tKyQvLCAnJ1xuICAjIFRyaW0gLSBmcm9tIGVuZCBvZiB0ZXh0XG5cbk51bWJlcjo6dG9ISE1NU1MgPSAtPlxuICBzaG93X21zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgYW5kIGFyZ3VtZW50c1swXVxuICBtc19udW0gPSBNYXRoLmZsb29yKHRoaXMpXG4gIGhvdXJzID0gTWF0aC5mbG9vcihtc19udW0gLyAzNjAwMDAwKVxuICBtaW51dGVzID0gTWF0aC5mbG9vcigobXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkpIC8gNjAwMDApXG4gIHNlY29uZHMgPSBNYXRoLmZsb29yKChtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSAtIChtaW51dGVzICogNjAwMDApKSAvIDEwMDApXG4gIG1zID0gbXNfbnVtIC0gKGhvdXJzICogMzYwMDAwMCkgLSAobWludXRlcyAqIDYwMDAwKSAtIChzZWNvbmRzICogMTAwMClcbiAgdGltZSA9IHNwcmludGYoJyUwMmQ6JTAyZDolMDJkJywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpXG4gIGlmIHNob3dfbXNcbiAgICB0aW1lICs9IHNwcmludGYoJy4lMDNkJywgbXMpXG4gIHRpbWVcblxuTnVtYmVyOjpodW1hbml6ZSA9IC0+XG4gIG1zX251bSA9IE1hdGguZmxvb3IodGhpcylcbiAgaG91cnMgPSBNYXRoLmZsb29yKG1zX251bSAvIDM2MDAwMDApXG4gIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSkgLyA2MDAwMClcbiAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG1zX251bSAtIChob3VycyAqIDM2MDAwMDApIC0gKG1pbnV0ZXMgKiA2MDAwMCkpIC8gMTAwMClcbiAgbXMgPSBtc19udW0gLSAoaG91cnMgKiAzNjAwMDAwKSAtIChtaW51dGVzICogNjAwMDApIC0gKHNlY29uZHMgKiAxMDAwKVxuICB0aW1lID0gJydcbiAgaWYgaG91cnNcbiAgICB0aW1lID0gc3ByaW50ZignJWRoJywgaG91cnMpXG4gIGlmIG1pbnV0ZXNcbiAgICB0aW1lICs9IHNwcmludGYoJyVkbScsIG1pbnV0ZXMpXG4gIHRpbWUgKz0gc3ByaW50ZignJWRzJywgTWF0aC5jZWlsKHNlY29uZHMgKyBtcyAvIDEwMDAuMCkpXG4gIHRpbWVcblxuU3RyaW5nOjpzcHJpbnRmID0gLT5cbiAgc3ByaW50Zi5hcHBseSB0aGlzLCB0aGlzLCBhcmd1bWVudHNcblxud2luZG93LnJmYzI4MjIgPSAoZGF0ZSktPlxuICBkYXRlID0gaWYgIWRhdGUgb3IgZGF0ZS5uYW1lID09ICdkYXRldGltZScgdGhlbiBtb21lbnQoKSBlbHNlIGRhdGVcbiAgbW9tZW50KGRhdGUpLmZvcm1hdCAnZGRkLCBERCBNTU0gWVlZWSBISDptbTpzcyBaWidcbiAgXG53aW5kb3cub3JkZXJCeU1hZ2ljID0gKGhhc2gpIC0+XG4gIGFycmF5ID0gW11cbiAgT2JqZWN0LmtleXMoaGFzaCkuZm9yRWFjaCAoa2V5KSAtPlxuICAgIGFycmF5LnB1c2ggaGFzaFtrZXldXG4gICAgcmV0dXJuXG4gICMgYXBwbHkgYSBjdXN0b20gc29ydGluZyBmdW5jdGlvblxuICBhcnJheS5zb3J0IChhLCBiKSAtPlxuICAgIGlmIGEucHVibGlzaGVkX2F0IGFuZCAhYi5wdWJsaXNoZWRfYXRcbiAgICAgIHJldHVybiAxXG4gICAgaWYgIWEucHVibGlzaGVkX2F0IGFuZCBiLnB1Ymxpc2hlZF9hdFxuICAgICAgcmV0dXJuIC0xXG4gICAgIyBFaXRoZXIgYm90aCBhcmUgcHVibGlzaGVkIG9yIG5laXRoZXIgaXMgcHVibGlzaGVkXG4gICAgaWYgYS5wdWJsaXNoZWRfYXQgYW5kIGIucHVibGlzaGVkX2F0XG4gICAgICByZXR1cm4gaWYgYS5wdWJsaXNoZWRfYXQgPiBiLnB1Ymxpc2hlZF9hdCB0aGVuIC0xIGVsc2UgMVxuICAgIGlmIGEucmVjb3JkZWRfYXQgPiBiLnJlY29yZGVkX2F0IHRoZW4gLTEgZWxzZSAxXG4gIGFycmF5XG4gICIsImNsYXNzIFJlY29yZGVyXG4gIGNvbnN0cnVjdG9yOiAoQGZuYW1lLCBvcHRpb25zKS0+XG4gICAgZGVmYXVsdF9vcHRpb25zID1cbiAgICAgIG9uU2NydWJVcGRhdGU6IChtcyktPlxuICAgICAgb25EdXJhdGlvblVwZGF0ZTogKG1zKS0+XG4gICAgICBvblJlY29yZFN0YXJ0OiAtPlxuICAgICAgb25SZWNvcmRTdG9wOiAtPlxuICAgICAgb25BdWRpb0Vycm9yOiAtPlxuICAgICAgb25QbGF5U3RhcnQ6IC0+XG4gICAgICBvblBsYXlTdG9wOiAtPlxuICAgICAgb25FdmVudDogKG5hbWUsYXJncy4uLiktPlxuICAgICAgZGVidWc6IGZhbHNlXG4gICAgQG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZChkZWZhdWx0X29wdGlvbnMsIG9wdGlvbnMpXG4gICAgQHNjcnViX3BvaW50X21zID0gMFxuICAgIEBzdG9wKClcbiAgICBAZ2V0X2R1cmF0aW9uKClcbiAgICBcbiAgbG9nOiAoYXJncy4uLik9PlxuICAgIHJldHVybiB1bmxlc3MgQG9wdGlvbnMuZGVidWdcbiAgICBjb25zb2xlLmxvZy5hcHBseShALCBhcmdzKVxuXG4gIGV2ZW50OiAobmFtZSxhcmdzLi4uKSA9PlxuICAgIEBsb2coXCJldmVudFwiLCBuYW1lLCBhcmdzKVxuICAgIEBvcHRpb25zW25hbWVdLmFwcGx5KEAsYXJncylcbiAgICBAb3B0aW9ucy5vbkV2ZW50KG5hbWUsIGFyZ3MpXG5cbiAgbmV3X21lZGlhOiAocmVhZHlfY2IsIHN0YXR1c19jYiwgZXJyb3JfY2IpID0+XG4gICAgc3RhdHVzID0ge31cbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfTk9ORV0gPSAnTm9uZSdcbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfU1RBUlRJTkddID0gJ1N0YXJ0aW5nJ1xuICAgIHN0YXR1c1tNZWRpYS5NRURJQV9SVU5OSU5HXSA9ICdSdW5uaW5nJ1xuICAgIHN0YXR1c1tNZWRpYS5NRURJQV9QQVVTRURdID0gJ1BhdXNlZCdcbiAgICBzdGF0dXNbTWVkaWEuTUVESUFfU1RPUFBFRF0gPSAnU3RvcHBlZCdcbiAgICBcbiAgICBtZWRpYSA9IG5ldyBNZWRpYShcbiAgICAgIEBmbmFtZSwgXG4gICAgICAoKCk9PlxuICAgICAgICBAbG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZCBhY3Rpb24gXCIsIEBmbmFtZSlcbiAgICAgICksIFxuICAgICAgKChlcnIpID0+XG4gICAgICAgIEBsb2cgJ0F1ZGlvIEVycm9yOiAnICsgZXJyLmNvZGVcbiAgICAgICAgQGxvZyBlcnJcbiAgICAgICAgZXJyb3JfY2IobWVkaWEsZXJyKVxuICAgICAgKSwgXG4gICAgICAoKHN0YXQpPT5cbiAgICAgICAgQGxvZyhcIk1lZGlhIHN0YXR1c1wiLCBzdGF0LCBzdGF0dXNbc3RhdF0pXG4gICAgICAgIHN0YXR1c19jYihtZWRpYSxzdGF0KVxuICAgICAgKVxuICAgIClcbiAgICByZWFkeV9jYihtZWRpYSlcbiAgICBtZWRpYVxuXG4gIGdldF9kdXJhdGlvbjogKGNiKSA9PlxuICAgICMgR2V0IHRoZSBmaW5hbCBkdXJhdGlvbiBzaW5jZSBpdCBkb2Vzbid0IHJlZ2lzdGVyIGR1cmluZyByZWNvcmRpbmdcbiAgICBAbmV3X21lZGlhKFxuICAgICAgKChtZWRpYSk9PiAjIHJlYWR5XG4gICAgICAgIG1lZGlhLnNldFZvbHVtZSgwKVxuICAgICAgICBtZWRpYS5wbGF5KClcbiAgICAgICksXG4gICAgICAoKG1lZGlhLHN0YXR1cykgPT4gIyBzdGF0dXNcbiAgICAgICAgaWYgc3RhdHVzPT1NZWRpYS5NRURJQV9SVU5OSU5HXG4gICAgICAgICAgbWVkaWEuc3RvcCgpXG4gICAgICAgICAgQGR1cmF0aW9uX21zID0gbWVkaWEuZ2V0RHVyYXRpb24oKSoxMDAwXG4gICAgICAgICAgQGV2ZW50KCdvbkR1cmF0aW9uVXBkYXRlJywgQGR1cmF0aW9uX21zKVxuICAgICAgICAgIGlmIGNiXG4gICAgICAgICAgICBjYihAZHVyYXRpb25fbXMpXG4gICAgICAgIGlmIHN0YXR1cz09TWVkaWEuTUVESUFfU1RPUFBFRFxuICAgICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsZXJyb3IpPT4gI2Vycm9yXG4gICAgICApXG4gICAgKVxuICAgICAgICAgXG4gIHJlY29yZDogPT5cbiAgICBAbmV3X21lZGlhKFxuICAgICAgKChtZWRpYSk9PiAjIHJlYWR5XG4gICAgICAgIG1lZGlhLnN0YXJ0UmVjb3JkKClcbiAgICAgICksXG4gICAgICAoKG1lZGlhLHN0YXR1cyk9PiAjIHN0YXR1c1xuICAgICAgICBpZiBzdGF0dXMgPT0gTWVkaWEuTUVESUFfUlVOTklOR1xuICAgICAgICAgIEBsb2coJ3JlY29yZGluZycpXG4gICAgICAgICAgQGlzX3JlY29yZGluZyA9IHRydWVcbiAgICAgICAgICBAZHVyYXRpb25fbXMgPSAwXG4gICAgICAgICAgc3RhcnRfdGltZV9tcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgICAgdXBkYXRlX3JlY29yZCA9ID0+XG4gICAgICAgICAgICBAbG9nKCdyZWNvcmRpbmcgY2hlY2snKVxuICAgICAgICAgICAgaWYgIUBpc19yZWNvcmRpbmdcbiAgICAgICAgICAgICAgbWVkaWEuc3RvcFJlY29yZCgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgY3VycmVudF9tcyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgICAgICBAZHVyYXRpb25fbXMgPSBjdXJyZW50X21zIC0gc3RhcnRfdGltZV9tc1xuICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gQGR1cmF0aW9uX21zXG4gICAgICAgICAgICBAZXZlbnQoJ29uRHVyYXRpb25VcGRhdGUnLCBAZHVyYXRpb25fbXMpXG4gICAgICAgICAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAZHVyYXRpb25fbXMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZV9yZWNvcmQsIDEwMClcbiAgICAgICAgICB1cGRhdGVfcmVjb3JkKClcbiAgICAgICAgICBAZXZlbnQoJ29uUmVjb3JkU3RhcnQnKVxuICAgICAgICAgIFxuICAgICAgICBpZiBzdGF0dXMgPT0gTWVkaWEuTUVESUFfU1RPUFBFRFxuICAgICAgICAgIEBpc19yZWNvcmRpbmcgPSBmYWxzZVxuICAgICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICAgIEBnZXRfZHVyYXRpb24oKG1zKT0+XG4gICAgICAgICAgICBAc2NydWJfcG9pbnRfbXMgPSBtc1xuICAgICAgICAgICAgQGV2ZW50KCdvblNjcnViVXBkYXRlJywgbXMpXG4gICAgICAgICAgICBAZXZlbnQoJ29uUmVjb3JkU3RvcCcpXG4gICAgICAgICAgKVxuICAgICAgKSxcbiAgICAgICgobWVkaWEsZXJyKT0+ICNlcnJvclxuICAgICAgICBtZWRpYS5yZWxlYXNlKClcbiAgICAgICAgQGV2ZW50KCdvbkF1ZGlvRXJyb3InKVxuICAgICAgKVxuICAgIClcbiAgICBcbiAgc3RlcDogKG1zKSA9PlxuICAgIEBzZWVrKEBzY3J1Yl9wb2ludF9tcyArIG1zKVxuICAgIFxuICBzZWVrOiAobXMpID0+XG4gICAgaWYgbXM9PS0xXG4gICAgICBtcyA9IE51bWJlci5NQVhfVkFMVUVcbiAgICBAc2NydWJfcG9pbnRfbXMgPSBNYXRoLm1pbihAZHVyYXRpb25fbXMsIE1hdGgubWF4KDAsIG1zKSlcbiAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAc2NydWJfcG9pbnRfbXMpXG4gICAgaWYgQGlzX3BsYXlpbmdcbiAgICAgIEBtZWRpYS5zZWVrVG8gQHNjcnViX3BvaW50X21zXG4gICAgXG4gIHBsYXk6ID0+XG4gICAgaWYgQHNjcnViX3BvaW50X21zID49IEBkdXJhdGlvbl9tc1xuICAgICAgQHNjcnViX3BvaW50X21zID0gMFxuICAgICAgQGV2ZW50KCdvblNjcnViVXBkYXRlJywgQHNjcnViX3BvaW50X21zKVxuICAgIFxuICAgIEBtZWRpYSA9IEBuZXdfbWVkaWEoXG4gICAgICAoKG1lZGlhKT0+ICAgICMgcmVhZHlcbiAgICAgICAgbWVkaWEucGxheSgpXG4gICAgICAgIG1lZGlhLnNlZWtUbyhAc2NydWJfcG9pbnRfbXMpXG4gICAgICApLFxuICAgICAgKChtZWRpYSxzdGF0dXMpPT4gIyBTdGF0dXNcbiAgICAgICAgaWYgc3RhdHVzID09IE1lZGlhLk1FRElBX1JVTk5JTkdcbiAgICAgICAgICBAaXNfcGxheWluZyA9IHRydWVcbiAgICAgICAgICBwbGF5X3VwZGF0ZSA9ID0+XG4gICAgICAgICAgICBtZWRpYS5nZXRDdXJyZW50UG9zaXRpb24gKHBvcyk9PlxuICAgICAgICAgICAgICBpZiBwb3M9PS0xXG4gICAgICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gQGR1cmF0aW9uX21zXG4gICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgQHNjcnViX3BvaW50X21zID0gcG9zICogMTAwMFxuICAgICAgICAgICAgICBAZXZlbnQoJ29uU2NydWJVcGRhdGUnLCBAc2NydWJfcG9pbnRfbXMpXG4gICAgICAgICAgICAgIGlmICFAaXNfcGxheWluZ1xuICAgICAgICAgICAgICAgIG1lZGlhLnN0b3AoKVxuICAgICAgICAgICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICAgICAgICAgIEBldmVudCgnb25QbGF5U3RvcCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQocGxheV91cGRhdGUsMTAwKVxuICAgICAgICAgIHBsYXlfdXBkYXRlKClcbiAgICAgICAgICBAZXZlbnQoJ29uUGxheVN0YXJ0JylcbiAgICAgICAgaWYgc3RhdHVzID09IE1lZGlhLk1FRElBX1NUT1BQRURcbiAgICAgICAgICBAaXNfcGxheWluZyA9IGZhbHNlXG4gICAgICApLFxuICAgICAgKChtZWRpYSxlcnIpPT4gI0Vycm9yXG4gICAgICAgIG1lZGlhLnJlbGVhc2UoKVxuICAgICAgICBAZXZlbnQoJ29uQXVkaW9FcnJvcicpXG4gICAgICApXG4gICAgKVxuICBcbiAgc3RvcDogPT5cbiAgICBAaXNfcGxheWluZyA9IGZhbHNlXG4gICAgQGlzX3JlY29yZGluZyA9IGZhbHNlXG5cbndpbmRvdy5SZWNvcmRlciA9IFJlY29yZGVyIiwiY2xhc3MgVXBsb2FkV29ya2VyXG4gIGNvbnN0cnVjdG9yOiAoQGl0ZW0sIG9wdGlvbnMgPSB7fSktPlxuICAgIGRlZmF1bHRfb3B0aW9ucyA9XG4gICAgICBvblN0YXJ0OiAtPlxuICAgICAgb25TdWNjZXNzOiAtPlxuICAgICAgb25GYWlsdXJlOiAoZXJyKS0+XG4gICAgICBvblByb2dyZXNzOiAocHJvZ3Jlc3MpLT5cbiAgICAgIG9uRXZlbnQ6IChuYW1lLGFyZ3MuLi4pLT5cbiAgICAgIGRlYnVnOiB0cnVlXG4gICAgQG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZChkZWZhdWx0X29wdGlvbnMsIG9wdGlvbnMpXG4gICAgQHVwbG9hZF9jb3VudCA9IDBcbiAgICBAbG9nKFwiVXBsb2FkIFdvcmtlciBzdGFydGVkXCIsIEBpdGVtKVxuICAgIHNldFRpbWVvdXQoQHN0YXJ0LCAwKSAjIEZpcmUgc3RhcnQgYXN5bmMgc28gcHJvbWlzZXMgYXJlIHByb2Nlc3NlZFxuICAgIFxuICBsb2c6IChhcmdzLi4uKT0+XG4gICAgcmV0dXJuIHVubGVzcyBAb3B0aW9ucy5kZWJ1Z1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KEAsIGFyZ3MpXG5cbiAgZXZlbnQ6IChuYW1lLGFyZ3MuLi4pID0+XG4gICAgQGxvZyhcImV2ZW50XCIsIG5hbWUsIGFyZ3MpXG4gICAgQG9wdGlvbnNbbmFtZV0uYXBwbHkoQCxhcmdzKVxuICAgIEBvcHRpb25zLm9uRXZlbnQobmFtZSwgYXJncylcbiAgICBcbiAgc3RhcnRlZDogKGNiKT0+XG4gICAgQG9wdGlvbnMub25TdGFydCA9IGNiXG4gICAgQFxuICBcbiAgcHJvZ3Jlc3M6IChjYik9PlxuICAgIEBvcHRpb25zLm9uUHJvZ3Jlc3MgPSBjYlxuICAgIEBcbiAgXG4gIGZpbmlzaGVkOiAoY2IpPT5cbiAgICBAb3B0aW9ucy5vblN1Y2Nlc3MgPSBjYlxuICAgIEBcbiAgXG4gIGZhaWxlZDogKGNiKT0+XG4gICAgQG9wdGlvbnMub25GYWlsdXJlID0gY2JcbiAgICBAXG4gICAgXG4gIHN0YXJ0OiA9PlxuICAgIEBldmVudCgnb25TdGFydCcpXG4gICAgQHByb2dyZXNzID0gMFxuICAgICRodHRwID0gYW5ndWxhci5pbmplY3RvcihbXCJuZ1wiXSkuZ2V0KFwiJGh0dHBcIilcbiAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9hcGkuZmFzdC1jYXN0Lm5ldCcsIHBhcmFtczpcbiAgICAgIHNsdWc6IEBpdGVtLnNsdWdcbiAgICAgIHR5cGU6IEBpdGVtLnR5cGVcbiAgICApLnRoZW4gKChyZXNwb25zZSkgPT5cbiAgICAgIEBpdGVtLnByb2dyZXNzID0gMTBcbiAgICAgIEBldmVudCgnb25Qcm9ncmVzcycsIEBpdGVtLnByb2dyZXNzKVxuICAgICAgdXJsID0gcmVzcG9uc2UuZGF0YVxuICAgICAgZnQgPSBuZXcgRmlsZVRyYW5zZmVyXG4gICAgICBmdC5vbnByb2dyZXNzID0gKHBlKSA9PlxuICAgICAgICBAaXRlbS5wcm9ncmVzcyA9IHBlLmxvYWRlZCAvIHBlLnRvdGFsICogOTAgKyAxMFxuICAgICAgICBAZXZlbnQoJ29uUHJvZ3Jlc3MnLCBAaXRlbS5wcm9ncmVzcylcbiAgICAgIFxuICAgICAgdXBsb2FkX29wdGlvbnMgPSBuZXcgRmlsZVVwbG9hZE9wdGlvbnNcbiAgICAgIHVwbG9hZF9vcHRpb25zLmZpbGVOYW1lID0gQGl0ZW0uc3JjXG4gICAgICB1cGxvYWRfb3B0aW9ucy5taW1lVHlwZSA9IEBpdGVtLm1pbWVcbiAgICAgIHVwbG9hZF9vcHRpb25zLmNodW5rZWRNb2RlID0gZmFsc2VcbiAgICAgIHVwbG9hZF9vcHRpb25zLmh0dHBNZXRob2QgPSAnUFVUJ1xuICAgICAgdXBsb2FkX29wdGlvbnMuaGVhZGVycyA9ICdDb250ZW50LVR5cGUnOiBAaXRlbS5taW1lXG4gICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGluZ1wiLCBAaXRlbS5zcmMsIHVybClcbiAgICAgIGZ0LnVwbG9hZChcbiAgICAgICAgQGl0ZW0uc3JjLCBcbiAgICAgICAgdXJsLCBcbiAgICAgICAgKD0+ICMgc3VjY2Vzc1xuICAgICAgICAgIEBldmVudCgnb25TdWNjZXNzJylcbiAgICAgICAgKSxcbiAgICAgICAgKChlcnIpPT4gIyBFcnJvclxuICAgICAgICAgIEBldmVudCgnb25GYWlsdXJlJywgZXJyKVxuICAgICAgICApLFxuICAgICAgICB1cGxvYWRfb3B0aW9uc1xuICAgICAgKVxuICAgICksIChlcnIpPT4gIyBGYWlsdXJlXG4gICAgICBAZXZlbnQoJ29uRmFpbHVyZScsIGVycikgICAgXG5cbndpbmRvdy5VcGxvYWRXb3JrZXIgPSBVcGxvYWRXb3JrZXIiLCJhcHAuY29udHJvbGxlciAnQXBwQ29udHJvbGxlcicsIChcbiAgJHNjb3BlLCBcbiAgJGh0dHAsIFxuICAkaW50ZXJ2YWwsIFxuICAkY29yZG92YUZpbGUsIFxuICAkc3RhdGUsIFxuICAkY29yZG92YUZpbGVUcmFuc2ZlciwgXG4gICRxLCBcbiAgJGlvbmljSGlzdG9yeSwgXG4gICRpb25pY1NpZGVNZW51RGVsZWdhdGVcbiAgKSAtPlxuICBjb25zb2xlLmxvZygnQXBwQ29udHJvbGxlcicpO1xuXG4gICRzY29wZS5zZXR0aW5ncyA9IC0+XG4gICAgJHN0YXRlLmdvICdzZXR0aW5ncy5wb2RjYXN0J1xuICAgIFxuICAkc2NvcGUudG9nZ2xlTGVmdCA9IC0+XG4gICAgJGlvbmljU2lkZU1lbnVEZWxlZ2F0ZS50b2dnbGVMZWZ0KClcbiAgXG4gICRzY29wZS5ob21lID0gLT5cbiAgICAkaW9uaWNIaXN0b3J5Lm5leHRWaWV3T3B0aW9ucyh7XG4gICAgICBkaXNhYmxlQmFjazogdHJ1ZVxuICAgIH0pOyAgXG4gICAgJHN0YXRlLmdvICdob21lJ1xuICAgIFxuICBsb2FkX3N0YXRlID0gLT5cbiAgICAkc2NvcGUucG9kY2FzdCA9IG51bGxcbiAgICB0cnlcbiAgICAgICRzY29wZS5wb2RjYXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BvZGNhc3QnKSlcbiAgICBjYXRjaCBlXG4gICAgICBjb25zb2xlLmxvZyAnRXJyb3IgbG9hZGluZyBzdGF0ZScsIGVcbiAgICAgIFxuICAgICMgRml4IHVwIHZlcnNpb24gbnVtYmVyXG4gICAgaWYgISRzY29wZS5wb2RjYXN0IG9yICEkc2NvcGUucG9kY2FzdC52ZXJzaW9uXG4gICAgICAkc2NvcGUucG9kY2FzdCA9XG4gICAgICAgIHZlcnNpb246IDFcbiAgICAgICAgZXBpc29kZXM6IHt9XG4gICAgICAkc2NvcGUuc2F2ZV9zdGF0ZSgpXG4gICAgICBcbiAgICAjIEZpeCB1cCBtaXNzaW5nIEdVSURzXG4gICAgZm9yIGsgb2YgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNcbiAgICAgICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW2tdLmd1aWQgPSBrXG4gICAgICAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1trXS5pc19zeW5jaW5nID0gZmFsc2VcbiAgICAgIFxuICAgICMgRml4IHVwIG1pc3NpbmcgZXBpc29kZXNcbiAgICAkc2NvcGUucG9kY2FzdC5lcGlzb2RlcyA9IGFuZ3VsYXIubWVyZ2Uoe30sIHN0YXRpY19lcGlzb2RlcywgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXMpO1xuICAgICMgZm9yIGd1aWQgb2Ygc3RhdGljX2VwaXNvZGVzXG4gICAgIyAgIGVwaXNvZGUgPSBzdGF0aWNfZXBpc29kZXNbZ3VpZF1cbiAgICAjICAgI2lmICEoZ3VpZCBvZiAkc2NvcGUucG9kY2FzdC5lcGlzb2RlcylcbiAgICAjICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNbZ3VpZF0gPSBlcGlzb2RlXG5cbiAgbmV4dF9lcGlzb2RlX251bWJlciA9IC0+XG4gICAgbiA9IDBcbiAgICBmb3Igc2x1ZyBvZiAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1xuICAgICAgZXBpc29kZSA9ICRzY29wZS5wb2RjYXN0LmVwaXNvZGVzW3NsdWddXG4gICAgICBuID0gTWF0aC5tYXgobiwgZXBpc29kZS5udW1iZXIpXG4gICAgbiArIDFcblxuICAkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSA9ICdjZHZmaWxlOi8vbG9jYWxob3N0L3BlcnNpc3RlbnQvJ1xuICBcbiAgcmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgKGVudHJ5KS0+XG4gICAgJHNjb3BlLm5hdGl2ZV9vdXRwdXRfZGlyZWN0b3J5ID0gZW50cnkudG9VUkwoKVxuICApXG4gIFxuICAkc2NvcGUuc2F2ZV9zdGF0ZSA9IC0+XG4gICAganNvbiA9IGFuZ3VsYXIudG9Kc29uKCRzY29wZS5wb2RjYXN0KVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSAncG9kY2FzdCcsIGFuZ3VsYXIudG9Kc29uKCRzY29wZS5wb2RjYXN0KVxuICAgICRjb3Jkb3ZhRmlsZS53cml0ZUZpbGUoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksICdkYXRhLmpzb24nLCBqc29uLCB0cnVlKS50aGVuICgocmVzdWx0KSAtPlxuICAgICAgKG5ldyBVcGxvYWRXb3JrZXIoXG4gICAgICAgIHR5cGU6ICdqc29uJ1xuICAgICAgICBtaW1lOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgc3JjOiAkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSArICdkYXRhLmpzb24nXG4gICAgICApKVxuICAgIClcbiAgICBcblxuICBsb2FkX3N0YXRlKClcblxuICAkc2NvcGUubmV3ID0gLT5cbiAgICB0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICBndWlkID0gc3ByaW50ZignZmMtJXMtJWQnLCAkc2NvcGUucG9kY2FzdC5jb2RlLCB0KVxuICAgICRzY29wZS5lcGlzb2RlID1cbiAgICAgIGd1aWQ6IGd1aWRcbiAgICAgIG51bWJlcjogbmV4dF9lcGlzb2RlX251bWJlcigpXG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcblxuICAkc2NvcGUuZ28gPSAoZ3VpZCkgLT5cbiAgICAkc2NvcGUuZXBpc29kZSA9IGFuZ3VsYXIuY29weSgkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1tndWlkXSlcbiAgICAkc2NvcGUuZXBpc29kZS5pc19wdWJsaXNoZWQgPSAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXQ/XG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcbiIsImFwcC5jb250cm9sbGVyICdFcGlzb2RlQ29udHJvbGxlcicsIChcbiAgJHNjb3BlLCBcbiAgJGlvbmljU2lkZU1lbnVEZWxlZ2F0ZVxuICAkaW9uaWNBY3Rpb25TaGVldFxuICApIC0+XG4gICAgXG4gICRzY29wZS4kb24gJyRpb25pY1ZpZXcuZW50ZXInLCAtPlxuICAgICRpb25pY1NpZGVNZW51RGVsZWdhdGUuY2FuRHJhZ0NvbnRlbnQgZmFsc2VcblxuICAkc2NvcGUuJG9uICckaW9uaWNWaWV3LmxlYXZlJywgLT5cbiAgICAkaW9uaWNTaWRlTWVudURlbGVnYXRlLmNhbkRyYWdDb250ZW50IHRydWVcblxuICB0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgXG4gICRzY29wZS5oYXNfcmVjb3JkaW5nID0gJHNjb3BlLmVwaXNvZGUucmVjb3JkZWRfYXQ/XG4gICRzY29wZS5pc191cGxvYWRpbmcgPSBmYWxzZVxuICAkc2NvcGUuaXNfcGxheWluZyA9IGZhbHNlXG4gICRzY29wZS5pc19yZWNvcmRpbmcgPSBmYWxzZVxuICAkc2NvcGUuZHVyYXRpb25fbXMgPSAkc2NvcGUuZXBpc29kZS5kdXJhdGlvbl9tcyBvciAwXG4gICRzY29wZS5zY3J1Yl9wb2ludF9tcyA9IDBcbiAgJHNjb3BlLmhhc19jaGFuZ2VzID0gZmFsc2VcbiAgXG4gICRzY29wZS4kd2F0Y2ggJ2VwaXNvZGUnLCAoKG5ld09iaiwgb2xkT2JqKSAtPlxuICAgICRzY29wZS5oYXNfY2hhbmdlcyA9ICFhbmd1bGFyLmVxdWFscyhvbGRPYmosIG5ld09iailcbiAgKSwgdHJ1ZVxuXG4gICRzY29wZS5jYW5jZWwgPSAtPlxuICAgIGhpZGVTaGVldCA9ICRpb25pY0FjdGlvblNoZWV0LnNob3coXG4gICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdEaXNjYXJkIENoYW5nZXMnXG4gICAgICB0aXRsZVRleHQ6ICdEaXNjYXJkIGNoYW5nZXMnXG4gICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAkc2NvcGUuaG9tZSgpXG4gICAgKVxuIiwiYXBwLmNvbnRyb2xsZXIgJ0ZpbmFsaXplQ29udHJvbGxlcicsICgkc2NvcGUsICRodHRwLCAkaW50ZXJ2YWwsICRjb3Jkb3ZhRmlsZSwgJHN0YXRlLCAkaW9uaWNBY3Rpb25TaGVldCwgJGlvbmljTmF2QmFyRGVsZWdhdGUsICRpb25pY0hpc3RvcnkpIC0+XG4gICRpb25pY05hdkJhckRlbGVnYXRlLnNob3dCYWNrQnV0dG9uIHRydWVcblxuICB1cGxvYWRfcnNzID0gLT5cbiAgICByc3MgPSBGYXN0Q2FzdC50ZW1wbGF0ZXMucnNzXG4gICAgICBwb2RjYXN0OiAkc2NvcGUucG9kY2FzdFxuICAgICRjb3Jkb3ZhRmlsZS53cml0ZUZpbGUoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksICRzY29wZS5wb2RjYXN0LmNvZGUrJy5yc3MnLCByc3MsIHRydWUpLnRoZW4gKChyZXN1bHQpIC0+XG4gICAgICB1cGxvYWRcbiAgICAgICAgdHlwZTogJ3JzcydcbiAgICAgICAgbWltZTogJ2FwcGxpY2F0aW9uL3Jzcyt4bWwnXG4gICAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUucG9kY2FzdC5jb2RlICsgJy5yc3MnXG4gICAgKSwgKGVycikgLT5cbiAgICAgIGNvbnNvbGUubG9nICdmaWxlIHdyaXRlIGVycm9yJywgZXJyXG4gICAgXG4gIHVwbG9hZF9odG1sID0gLT5cbiAgICBodG1sID0gRmFzdENhc3QudGVtcGxhdGVzLmVwaXNvZGVcbiAgICAgIGVwaXNvZGU6ICRzY29wZS5lcGlzb2RlXG4gICAgJGNvcmRvdmFGaWxlLndyaXRlRmlsZSgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcuaHRtbCcsIGh0bWwsIHRydWUpLnRoZW4gKChyZXN1bHQpIC0+XG4gICAgICB1cGxvYWRcbiAgICAgICAgc2x1ZzogJHNjb3BlLmVwaXNvZGUuc2x1Z1xuICAgICAgICB0eXBlOiAnaHRtbCdcbiAgICAgICAgbWltZTogJ3RleHQvaHRtbCdcbiAgICAgICAgc3JjOiAkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSArICRzY29wZS5lcGlzb2RlLmd1aWQgKyAnLmh0bWwnXG4gICAgKSwgKGVycikgLT5cbiAgICAgIGNvbnNvbGUubG9nICdmaWxlIHdyaXRlIGVycm9yJywgZXJyXG5cbiAgdXBsb2FkX2F1ZGlvID0gLT5cbiAgICB1cGxvYWRcbiAgICAgIHNsdWc6ICRzY29wZS5lcGlzb2RlLnNsdWdcbiAgICAgIHR5cGU6ICdhdWRpbydcbiAgICAgIG1pbWU6ICdhdWRpby9tcDQnXG4gICAgICBzcmM6ICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcubTRhJ1xuXG4gIHVwbG9hZCA9IChpdGVtKSAtPlxuICAgIChuZXcgVXBsb2FkV29ya2VyKGl0ZW0pKVxuICAgICAgLnN0YXJ0ZWQgLT5cbiAgICAgICAgJHNjb3BlLnVwbG9hZF9jb3VudCsrXG4gICAgICAgICRzY29wZS51cGxvYWRzW2l0ZW0udHlwZV0gPSAwXG4gICAgICAuZmluaXNoZWQgLT5cbiAgICAgICAgc2V0VGltZW91dCAoLT5cbiAgICAgICAgICBkZWxldGUgJHNjb3BlLnVwbG9hZHNbaXRlbS50eXBlXVxuICAgICAgICAgICRzY29wZS51cGxvYWRfY291bnQtLVxuICAgICAgICAgIGlmICRzY29wZS51cGxvYWRfY291bnQgPT0gMFxuICAgICAgICAgICAgJHNjb3BlLmlzX3VwbG9hZGluZ19maW5pc2hlZCA9IHRydWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KClcbiAgICAgICAgKSwgMTAwMFxuICAgICAgLnByb2dyZXNzIChwcm9ncmVzcyktPlxuICAgICAgICAkc2NvcGUudXBsb2Fkc1tpdGVtLnR5cGVdID0gcHJvZ3Jlc3NcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCcjcHJvZ3Jlc3NfJyArIGl0ZW0udHlwZSkudmFsIHByb2dyZXNzXG4gICAgICAgICRzY29wZS4kYXBwbHkoKVxuICAgICAgXG5cbiAgJHNjb3BlLmlzX3VwbG9hZGluZyA9IGZhbHNlXG4gICRzY29wZS51cGxvYWRzID0ge31cblxuICAkc2NvcGUuYmFjayA9IC0+XG4gICAgJHN0YXRlLmdvICdlcGlzb2RlLnJlY29yZCdcblxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX3N0YXJ0ZWQgPSBmYWxzZVxuICAkc2NvcGUuaXNfdXBsb2FkaW5nX2ZpbmlzaGVkID0gZmFsc2VcblxuICAkc2NvcGUucHVibGlzaCA9IC0+XG4gICAgaWYgISRzY29wZS5lcGlzb2RlLm51bWJlclxuICAgICAgYWxlcnQgJ1BsZWFzZSBzdXBwbHkgYW4gZXBpc29kZSBudW1iZXIuJ1xuICAgICRzY29wZS5lcGlzb2RlLnB1Ymxpc2hlZF9hdCA9IG51bGxcbiAgICBpZiAkc2NvcGUuZXBpc29kZS5pc19wdWJsaXNoZWRcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS50aXRsZVxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIHRpdGxlLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5kZXNjcmlwdGlvblxuICAgICAgICBhbGVydCAnUGxlYXNlIHN1cHBseSBhbiBlcGlzb2RlIGRlc2NyaXB0aW9uLidcbiAgICAgIGlmICEkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgJHNjb3BlLmVwaXNvZGUucHVibGlzaGVkX2F0ID0gKG5ldyBEYXRlKS5nZXRUaW1lKClcbiAgICBlbHNlXG4gICAgICAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXQgPSBudWxsXG4gICAgJHNjb3BlLmlzX3VwbG9hZGluZ19zdGFydGVkID0gdHJ1ZVxuICAgICRzY29wZS5lcGlzb2RlLnNsdWcgPSBzcHJpbnRmKCclMDNkIC0gJXMnLCAkc2NvcGUuZXBpc29kZS5udW1iZXIsICRzY29wZS5lcGlzb2RlLnRpdGxlKS5zbHVnaWZ5KClcbiAgICBpZighJHNjb3BlLmVwaXNvZGUubGVuZ3RoX2J5dGVzKVxuICAgICAgd2luZG93LnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwgJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUuZXBpc29kZS5ndWlkICsgJy5tNGEnLCAoKGZpbGVFbnRyeSkgLT5cbiAgICAgICAgZmlsZUVudHJ5LmZpbGUgKGZpbGUpIC0+XG4gICAgICAgICAgY29uc29sZS5sb2cgXCJnb3QgYnl0ZSBzaXplXCIsIGZpbGVcbiAgICAgICAgICAkc2NvcGUuZXBpc29kZS5sZW5ndGhfYnl0ZXMgPSBmaWxlLnNpemVcbiAgICAgICAgICAkc2NvcGUucG9kY2FzdC5lcGlzb2Rlc1skc2NvcGUuZXBpc29kZS5ndWlkXSA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZXBpc29kZSlcbiAgICAgICAgICBpZiAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgICAgIHVwbG9hZF9yc3MoKVxuICAgICAgICAgICRzY29wZS5zYXZlX3N0YXRlKClcbiAgICAgICAgICBjb25zb2xlLmxvZyBmaWxlXG4gICAgICApLCAoZXJyKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgZ2V0dGluZyBmaWxlIHNpemUnXG4gICAgZWxzZVxuICAgICAgJHNjb3BlLnBvZGNhc3QuZXBpc29kZXNbJHNjb3BlLmVwaXNvZGUuZ3VpZF0gPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVwaXNvZGUpXG4gICAgICBpZiAkc2NvcGUuZXBpc29kZS5wdWJsaXNoZWRfYXRcbiAgICAgICAgdXBsb2FkX3JzcygpXG4gICAgICAkc2NvcGUuc2F2ZV9zdGF0ZSgpXG4gICAgaWYgJHNjb3BlLmVwaXNvZGUucHVibGlzaGVkX2F0XG4gICAgICB1cGxvYWRfaHRtbCgpXG4gICAgdXBsb2FkX2F1ZGlvKClcblxuICAkc2NvcGUuJHdhdGNoICdpc191cGxvYWRpbmdfZmluaXNoZWQnLCAodikgLT5cbiAgICBpZiAhdlxuICAgICAgcmV0dXJuXG4gICAgJGlvbmljSGlzdG9yeS5uZXh0Vmlld09wdGlvbnMoe1xuICAgICAgZGlzYWJsZUJhY2s6IHRydWVcbiAgICB9KTsgIFxuICAgICRzdGF0ZS5nbyAnZXBpc29kZS5maW5pc2gnXG4gICRzY29wZS51cGxvYWRfY291bnQgPSAwXG4iLCJhcHAuY29udHJvbGxlciAnRmluaXNoQ29udHJvbGxlcicsICgkc2NvcGUsICRpb25pY0hpc3RvcnkpIC0+IFxuIiwiYXBwLmNvbnRyb2xsZXIgJ0hvbWVDb250cm9sbGVyJywgKCRzY29wZSwgJGlvbmljSGlzdG9yeSkgLT4gXG4iLCJhcHAuY29udHJvbGxlciAnUG9kY2FzdFNldHRpbmdzQ29udHJvbGxlcicsIChcbiAgJHNjb3BlLCBcbiAgJGlvbmljSGlzdG9yeSwgXG4gICRpb25pY1BvcHVwLCBcbiAgJGlvbmljTmF2QmFyRGVsZWdhdGUsIFxuICAkaW9uaWNBY3Rpb25TaGVldCxcbiAgJGpyQ3JvcCxcbiAgJGNvcmRvdmFJbWFnZVBpY2tlcixcbiAgJGNvcmRvdmFGaWxlXG4pIC0+XG4gIFxuICBjYXRzID0gW11cbiAgZm9yIGNhdCxzdWJjYXRzIG9mIGNhdGVnb3JpZXNcbiAgICBpZiBzdWJjYXRzLmxlbmd0aD09MFxuICAgICAgY2F0cy5wdXNoXG4gICAgICAgIGtleTogY2F0XG4gICAgICAgIG5hbWU6IGNhdFxuICAgIGVsc2VcbiAgICAgIGZvciBzdWJjYXQgaW4gc3ViY2F0c1xuICAgICAgICBjYXRzLnB1c2hcbiAgICAgICAgICBrZXk6IHNwcmludGYoXCIlc3wlc1wiLCBjYXQsIHN1YmNhdClcbiAgICAgICAgICBuYW1lOiBzcHJpbnRmKFwiJXMgLSAlc1wiLCBjYXQsIHN1YmNhdClcblxuICAkc2NvcGUuY2F0cyA9IGNhdHNcbiAgXG4gICRzY29wZS5kb19sb2dvID0gLT5cbiAgICBvcHRpb25zID0gXG4gICAgICBtYXhpbXVtSW1hZ2VzQ291bnQ6IDFcblxuICAgICRjb3Jkb3ZhSW1hZ2VQaWNrZXIuZ2V0UGljdHVyZXMob3B0aW9ucylcbiAgICAgIC50aGVuICggKChyZXN1bHRzKSAtPlxuICAgICAgICAkanJDcm9wLmNyb3AoXG4gICAgICAgICAgdXJsOiByZXN1bHRzWzBdXG4gICAgICAgICAgdGl0bGU6ICdNb3ZlIGFuZCBTY2FsZSdcbiAgICAgICAgICB3aWR0aDogMzAwXG4gICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgKS50aGVuKCAoY2FudmFzKS0+XG4gICAgICAgICAgX2Jhc2U2NFRvQXJyYXlCdWZmZXIgPSAoYmFzZTY0KSAtPlxuICAgICAgICAgICAgYmluYXJ5X3N0cmluZyA9IHdpbmRvdy5hdG9iKGJhc2U2NC5yZXBsYWNlKC9cXHMvZywgJycpKVxuICAgICAgICAgICAgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGhcbiAgICAgICAgICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKVxuICAgICAgICAgICAgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIGkgPCBsZW5cbiAgICAgICAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlfc3RyaW5nLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBieXRlcy5idWZmZXJcbiAgICAgICAgICByZXNpemUgPSAoc3JjX2NhbnZhcywgZHN0X25hbWUsIGQsY2IgPSBudWxsKS0+XG4gICAgICAgICAgICBDYW1hbihzcmNfY2FudmFzLCAtPlxuICAgICAgICAgICAgICBAcmVzaXplXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGRcbiAgICAgICAgICAgICAgQHJlbmRlciA9PlxuICAgICAgICAgICAgICAgIGRhdGFfdXJsID0gQHRvQmFzZTY0KCdqcGVnJylcbiAgICAgICAgICAgICAgICBiNjQgPSBkYXRhX3VybC5yZXBsYWNlKC9eZGF0YTouKz87YmFzZTY0LC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFfdXJsLnN1YnN0cmluZygwLDUwKSlcbiAgICAgICAgICAgICAgICBkYXRhID0gX2Jhc2U2NFRvQXJyYXlCdWZmZXIoYjY0KVxuICAgICAgICAgICAgICAgICRjb3Jkb3ZhRmlsZS53cml0ZUZpbGUoJHNjb3BlLm91dHB1dF9kaXJlY3RvcnksIGRzdF9uYW1lLCBkYXRhLCB0cnVlKS50aGVuKC0+XG4gICAgICAgICAgICAgICAgICBpZiBjYlxuICAgICAgICAgICAgICAgICAgICBjYigkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSsgZHN0X25hbWUsIGRhdGFfdXJsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgQHJlc2V0KClcbiAgICAgICAgICAgIClcbiAgICAgICAgICByZXNpemUoY2FudmFzLCAnbG9nby10aHVtYi5qcGcnLCA3NSwgKHBhdGgsIGRhdGFfdXJsKS0+XG4gICAgICAgICAgICAkc2NvcGUuc2hvdy5sb2dvX3BhdGggPSBwYXRoXG4gICAgICAgICAgICAkc2NvcGUubG9nb19zcmMgPSBkYXRhX3VybFxuICAgICAgICAgIClcbiAgICAgICAgICByZXNpemUoY2FudmFzLCAnbG9nby5qcGcnLCAxNDAwLCAocGF0aCwgZGF0YV91cmwpLT5cbiAgICAgICAgICAgIG5ldyBVcGxvYWRXb3JrZXIoXG4gICAgICAgICAgICAgIHR5cGU6ICdsb2dvJ1xuICAgICAgICAgICAgICBtaW1lOiAnaW1hZ2UvanBlZydcbiAgICAgICAgICAgICAgc3JjOiBwYXRoXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApKSwgKGVycm9yKS0+XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICBcbiAgZ2V0YjY0ID0gKGNkdl9wYXRoLCBjYikgLT5cbiAgICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGNkdl9wYXRoLCAoZW50cnkpLT5cbiAgICAgIHBhdGggPSBlbnRyeS50b1VSTCgpXG4gICAgICB3aW5kb3cucGx1Z2lucy5CYXNlNjQuZW5jb2RlRmlsZShwYXRoLCAoYmFzZTY0KS0+XG4gICAgICAgIGNvbnNvbGUubG9nKGJhc2U2NC5zdWJzdHJpbmcoMCw1MCkpXG4gICAgICAgIGNiKGJhc2U2NClcbiAgICAgICk7XG4gICAgKVxuXG4gICRzY29wZS5zaG93ID0gXG4gICAgY29kZTogJydcbiAgICB0aXRsZTogJydcbiAgICBzdWJ0aXRsZTogJydcbiAgICBhdXRob3I6ICcnXG4gICAgZGVzY3JpcHRpb246ICcnXG4gICAgcHJpbWFyeV9jYXRlZ29yeTogJydcbiAgICBzZWNvbmRhcnlfY2F0ZWdvcnk6ICcnXG4gICAgaXNfZXhwbGljaXQ6IGZhbHNlXG4gICAgbG9nb19wYXRoOiBudWxsXG4gICAgXG4gIGZvciBrLHYgb2YgJHNjb3BlLnNob3dcbiAgICBpZigkc2NvcGUucG9kY2FzdFtrXT8pXG4gICAgICAkc2NvcGUuc2hvd1trXSA9ICRzY29wZS5wb2RjYXN0W2tdXG4gIFxuICBpZigkc2NvcGUuc2hvdy5sb2dvX3BhdGgpXG4gICAgZ2V0YjY0KCAkc2NvcGUuc2hvdy5sb2dvX3BhdGgsIChiNjQpLT5cbiAgICAgICRzY29wZS5sb2dvX3NyYyA9IGI2NDtcbiAgICApXG4gICAgICBcbiAgY29uc29sZS5sb2coJHNjb3BlLnNob3cpXG4gIG9yaWdpbmFsID0gYW5ndWxhci5jb3B5KCRzY29wZS5zaG93KVxuICBcbiAgJHNjb3BlLmhhc19jaGFuZ2VzID0gZmFsc2VcbiAgJHNjb3BlLiR3YXRjaCAnc2hvdycsICgobmV3VmFsdWUsIG9sZFZhbHVlKSAtPlxuICAgICRzY29wZS5zaG93LmNvZGUgPSAkc2NvcGUuc2hvdy5jb2RlLnRvTG93ZXJDYXNlKClcbiAgICAkc2NvcGUuaGFzX2NoYW5nZXMgPSAhYW5ndWxhci5lcXVhbHMob3JpZ2luYWwsIG5ld1ZhbHVlKVxuICAgICRpb25pY05hdkJhckRlbGVnYXRlLnNob3dCYWNrQnV0dG9uICEkc2NvcGUuaGFzX2NoYW5nZXNcbiAgKSwgdHJ1ZVxuICAgICAgXG4gICRzY29wZS5zYXZlID0gLT5cbiAgICB2YWxpZGF0ZSA9XG4gICAgICBjb2RlOiAnYSBzaG93IGNvZGUnXG4gICAgICB0aXRsZTogJ2EgdGl0bGUnXG4gICAgICBsb2dvX3BhdGg6ICdjb3ZlciBhcnQnXG4gICAgICBzdWJ0aXRsZTogJ2Egc3VidGl0bGUnXG4gICAgICBhdXRob3I6ICdhbiBhdXRob3InXG4gICAgICBkZXNjcmlwdGlvbjogJ2EgZGVzY3JpcHRpb24nXG4gICAgICBwcmltYXJ5X2NhdGVnb3J5OiAncHJpbWFyeSBjYXRlZ29yeSdcbiAgICAgIHNlY29uZGFyeV9jYXRlZ29yeTogJ3NlY29uZGFyeSBjYXRlZ29yeSdcbiAgICBmb3Igayx2IG9mIHZhbGlkYXRlXG4gICAgICBpZighKCRzY29wZS5zaG93W2tdPykpXG4gICAgICAgICRpb25pY1BvcHVwLmFsZXJ0KFxuICAgICAgICAgIHRpdGxlOiAnUmVxdWlyZWQnXG4gICAgICAgICAgdGVtcGxhdGU6IFwiUGxlYXNlIHN1cHBseSAje3Z9LlwiXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICAkc2NvcGUuc2hvd1trXSA9ICRzY29wZS5zaG93W2tdLnRyaW0oKVxuICAgIGZvciBrLHYgb2YgJHNjb3BlLnNob3dcbiAgICAgICRzY29wZS5wb2RjYXN0W2tdID0gJHNjb3BlLnNob3dba11cbiAgICAkc2NvcGUuc2F2ZV9zdGF0ZSgpXG4gICAgaWYoJHNjb3BlLmhhc19jaGFuZ2VzKVxuICAgICAgcnNzID0gRmFzdENhc3QudGVtcGxhdGVzLnJzc1xuICAgICAgICBwb2RjYXN0OiAkc2NvcGUucG9kY2FzdFxuICAgICAgJGNvcmRvdmFGaWxlLndyaXRlRmlsZSgkc2NvcGUub3V0cHV0X2RpcmVjdG9yeSwgJHNjb3BlLnBvZGNhc3QuY29kZSsnLnJzcycsIHJzcywgdHJ1ZSkudGhlbiAoKHJlc3VsdCkgLT5cbiAgICAgICAgbmV3IFVwbG9hZFdvcmtlcihcbiAgICAgICAgICB0eXBlOiAncnNzJ1xuICAgICAgICAgIG1pbWU6ICdhcHBsaWNhdGlvbi9yc3MreG1sJ1xuICAgICAgICAgIHNyYzogJHNjb3BlLm91dHB1dF9kaXJlY3RvcnkgKyAkc2NvcGUucG9kY2FzdC5jb2RlKycucnNzJ1xuICAgICAgICApXG4gICAgICApXG4gICAgJHNjb3BlLmhvbWUoKVxuXG4gICRzY29wZS5jYW5jZWwgPSAtPlxuICAgIGhpZGVTaGVldCA9ICRpb25pY0FjdGlvblNoZWV0LnNob3coXG4gICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdEaXNjYXJkIENoYW5nZXMnXG4gICAgICB0aXRsZVRleHQ6ICdEaXNjYXJkIGNoYW5nZXMnXG4gICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAkc2NvcGUuaG9tZSgpXG4gICAgKVxuICBcbiAgJGpyQ3JvcC5kZWZhdWx0T3B0aW9ucy50ZW1wbGF0ZSA9ICRqckNyb3AuZGVmYXVsdE9wdGlvbnMudGVtcGxhdGUucmVwbGFjZSgve3svZywgJzwlJykucmVwbGFjZSgvfX0vZywgJyU+JylcbiIsImFwcC5jb250cm9sbGVyICdSZWNvcmRDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNIaXN0b3J5LCAkaW9uaWNQb3B1cCwgJGlvbmljTmF2QmFyRGVsZWdhdGUpIC0+XG4gICRzY29wZS4kcGFyZW50LiRvbiAnJGlvbmljVmlldy5iZWZvcmVMZWF2ZScsIC0+XG4gICAgY29uc29sZS5sb2coJ2JlZm9yZUxlYXZlJylcbiAgICByZWMuc3RvcCgpXG5cbiAgcmVjID0gbmV3IFJlY29yZGVyKFxuICAgICRzY29wZS5vdXRwdXRfZGlyZWN0b3J5ICsgJHNjb3BlLmVwaXNvZGUuZ3VpZCArICcubTRhJyxcbiAgICBvblNjcnViVXBkYXRlOiAobXMpLT5cbiAgICAgICRzY29wZS5zY3J1Yl9wb2ludF9tcyA9IG1zXG4gICAgb25EdXJhdGlvblVwZGF0ZTogKG1zKS0+XG4gICAgICAkc2NvcGUuZHVyYXRpb25fbXMgPSBtc1xuICAgICAgJHNjb3BlLmVwaXNvZGUuZHVyYXRpb25fbXMgPSBtc1xuICAgIG9uQXVkaW9FcnJvcjogLT5cbiAgICAgICRpb25pY1BvcHVwLmFsZXJ0KFxuICAgICAgICB0aXRsZTogJ0F1ZGlvIEVycm9yJ1xuICAgICAgICB0ZW1wbGF0ZTogJ1RoZSBhdWRpbyBzeXN0ZW0gaGFzIGZhaWxlZC4gUGxlYXNlIHJlcG9ydCB0aGlzLidcbiAgICAgICkudGhlbiAoKHJlcykgLT5cbiAgICAgICAgJHNjb3BlLmhvbWUoKVxuICAgICAgKVxuICAgIG9uUGxheVN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmlzX3BsYXlpbmcgPSB0cnVlXG4gICAgb25QbGF5U3RvcDogLT5cbiAgICAgICRzY29wZS5pc19wbGF5aW5nID0gZmFsc2VcbiAgICBvblJlY29yZFN0YXJ0OiAtPlxuICAgICAgJHNjb3BlLmhhc19jaGFuZ2VzID0gdHJ1ZVxuICAgICAgJGlvbmljTmF2QmFyRGVsZWdhdGUuc2hvd0JhY2tCdXR0b24gZmFsc2VcbiAgICAgICRpb25pY0hpc3RvcnkuY2xlYXJIaXN0b3J5KClcbiAgICAgICRzY29wZS5pc19yZWNvcmRpbmcgPSB0cnVlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuZXBpc29kZS5yZWNvcmRlZF9hdCA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpXG4gICAgb25SZWNvcmRTdG9wOiAtPlxuICAgICAgJHNjb3BlLmlzX3JlY29yZGluZyA9IGZhbHNlXG4gICAgICAkc2NvcGUuaGFzX3JlY29yZGluZyA9IHRydWVcbiAgICBvbkV2ZW50OiAtPlxuICAgICAgJHNjb3BlLiRhcHBseUFzeW5jKClcbiAgICAgIFxuICApXG5cbiAgaG9sZF9wcm9taXNlID0gbnVsbFxuICAkc2NvcGUuaG9sZCA9IChtcykgLT5cbiAgICBpZiAhbXNcbiAgICAgICRpbnRlcnZhbC5jYW5jZWwgaG9sZF9wcm9taXNlXG4gICAgICByZXR1cm5cbiAgICBob2xkX3Byb21pc2UgPSAkaW50ZXJ2YWwoKC0+XG4gICAgICByZWMuc3RlcChtcylcbiAgICApLCAxMDApXG5cbiAgJHNjb3BlLnNlZWsgPSAobXMpIC0+XG4gICAgY29uc29sZS5sb2cgJ3NlZWsnLCBtc1xuICAgIHJlYy5zZWVrKG1zKVxuXG4gICRzY29wZS5zdGVwID0gKG1zKSAtPlxuICAgIGNvbnNvbGUubG9nICdzdGVwJywgbXNcbiAgICByZWMuc3RlcChtcylcblxuICAkc2NvcGUucGxheSA9IC0+XG4gICAgcmVjLnBsYXkoKVxuXG4gICRzY29wZS5zdG9wX3BsYXlpbmcgPSAtPlxuICAgIHJlYy5zdG9wKClcbiAgICBcbiAgJHNjb3BlLnN0b3BfcmVjb3JkaW5nID0gLT5cbiAgICByZWMuc3RvcCgpXG4gICAgXG4gICRzY29wZS5yZWNvcmQgPSAtPlxuICAgIGlmICRzY29wZS5oYXNfcmVjb3JkaW5nXG4gICAgICBoaWRlU2hlZXQgPSAkaW9uaWNBY3Rpb25TaGVldC5zaG93KFxuICAgICAgICBkZXN0cnVjdGl2ZVRleHQ6ICdTY3JhcCBhbmQgUmUtUmVjb3JkJ1xuICAgICAgICB0aXRsZVRleHQ6ICdSZS1yZWNvcmQgZXBpc29kZSdcbiAgICAgICAgY2FuY2VsVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgZGVzdHJ1Y3RpdmVCdXR0b25DbGlja2VkOiAtPlxuICAgICAgICAgIGhpZGVTaGVldCgpXG4gICAgICAgICAgcmVjLnJlY29yZCgpXG4gICAgICApXG4gICAgZWxzZVxuICAgICAgcmVjLnJlY29yZCgpXG4iLCJhcHAuY29udHJvbGxlciAnU2V0dGluZ3NDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHAsICRpbnRlcnZhbCwgJGNvcmRvdmFGaWxlLCAkc3RhdGUsICRpb25pY0FjdGlvblNoZWV0LCAkaW9uaWNOYXZCYXJEZWxlZ2F0ZSwgJGlvbmljUG9wdXApIC0+XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
