'use strict';
/*globals Firebase, fireName, getSingleColor, createOtherCounter, createCounter, Please */

/**
 * @ngdoc function
 * @name colorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('MainCtrl', ['$rootScope','$scope', '$firebase', 
    function ($rootScope, $scope, $firebase) {
        $rootScope.counterLoaded = false;

        var ref = new Firebase('https://'+fireName+'.firebaseio.com/counters');
        var sync = $firebase(ref);
        $rootScope.lastColor = '';
        $rootScope.counters = sync.$asObject();
        $rootScope.counters.$loaded().then(function(){
            $rootScope.counterLoaded = true;
            angular.forEach($rootScope.counters, function(value) {
                $rootScope.lastColor = getSingleColor(value.color);
            });
        });

        $scope.addCounter = function(name) {
            ref.once('value', function(dataSnapshot) {
              if (dataSnapshot.numChildren()>0){
                createOtherCounter(ref, name);
              }
              else {
                createCounter(ref, name, Please.make_color({saturation: 0.7, value: 0.9})); // jshint ignore:line
              }
            });
            $rootScope.lastColor = getSingleColor($rootScope.lastColor);
            $scope.name = '';
        };
        
        $scope.increaseCounter = function(obj){
            var objRef = ref.child(obj.id);
            obj.value++;
            objRef.update(obj);
        };
    }
]);