'use strict';

/**
 * @ngdoc function
 * @name colorApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('ContactCtrl', ['$rootScope','$scope', 
    function ($rootScope, $scope) {
        $rootScope.counterLoaded = true;
        console.log($rootScope.counterLoaded);
    }
    
]);