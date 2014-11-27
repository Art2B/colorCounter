'use strict';
/*globals Firebase, fireName, Please, getSingleColor */
/**
 * @ngdoc function
 * @name colorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('NavCtrl', ['$rootScope', '$scope',
    function ($rootScope, $scope) {
        var ref = new Firebase('https://'+fireName+'.firebaseio.com/counters');
        $rootScope.menuShowed = false;

        $scope.changeColor = function(){
            var newBaseColor = Please.make_color({saturation: 0.7, value: 0.9}); // jshint ignore:line
            angular.forEach($rootScope.counters, function(value, key) {
                var valueRef = ref.child(key);
                value.color = getSingleColor(newBaseColor);
                $rootScope.lastColor = getSingleColor(value.color);
                newBaseColor = value.color;
                valueRef.update(value);
            });
        };
        $scope.showMenu = function(){
            $rootScope.menuShowed = !$rootScope.menuShowed;
        };
    }
]);
