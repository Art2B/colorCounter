'use strict';

/**
 * @ngdoc function
 * @name colorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('NavCtrl', ['$rootScope', '$scope', '$firebase',
    function ($rootScope, $scope, $firebase) {
        var ref = new Firebase('https://'+fireName+'.firebaseio.com/counters');

        $scope.changeColor = function(){
            console.log("Change the colors :)");
            var newBaseColor = Please.make_color({saturation: 0.7, value: 0.9});
            angular.forEach($rootScope.counters, function(value, key) {
                var valueRef = ref.child(key);
                value.color = getSingleColor(newBaseColor);
                newBaseColor = value.color;
                valueRef.update(value);
            });
        }
    }
]);
