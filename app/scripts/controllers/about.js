'use strict';

/**
 * @ngdoc function
 * @name colorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('AboutCtrl', ['$rootScope', '$scope',
    function ($rootScope, $scope) {
        $rootScope.counterLoaded = true;
        $scope.message = 'About controller';
    }
]);