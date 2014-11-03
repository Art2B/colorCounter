'use strict';

/**
 * @ngdoc function
 * @name colorApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('ContactCtrl', ['$rootScope','$scope', '$firebase',
    function ($rootScope, $scope, $firebase) {
        $rootScope.counterLoaded = true;

        var ref = new Firebase('https://'+fireName+'.firebaseio.com/messages');
        $scope.sendMessage = function(message){
            var item = {
                'date': new Date(),
                'from': message.sender,
                'mail': message.mail,
                'message': message.message
            }
            ref.push(item);
            $scope.message = {};
        }
    }
]);