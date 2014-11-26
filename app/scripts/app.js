'use strict';

/**
 * @ngdoc overview
 * @name colorApp
 * @description
 * # colorApp
 *
 * Main module of the application.
 */
angular
  .module('colorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/sign-up', {
        templateUrl: 'views/sign.html',
        controller: 'SignCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });