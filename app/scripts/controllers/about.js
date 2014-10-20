'use strict';

/**
 * @ngdoc function
 * @name colorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the colorApp
 */
angular.module('colorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
