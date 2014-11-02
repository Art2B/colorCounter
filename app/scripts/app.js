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
  .controller('AppCtrl', ['$rootScope', '$scope', 
    function($rootScope, $scope){
      $scope.$on('$routeChangeStart', function(next, current) { 
        console.log("salut");
      });
    }
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
      .otherwise({
        redirectTo: '/'
      });
  });
