'use strict';
/*globals Firebase, fireName */
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

        var ref = new Firebase('https://'+fireName+'.firebaseio.com/messages');
        $scope.sendMessage = function(message){
            message.date = String(new Date());
            ref.push(message);
            $scope.message = {};
        };
    }
]);