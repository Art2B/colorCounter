'use strict';

/**
 * @ngdoc function
 * @name colorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('MainCtrl', ['$rootScope','$scope', '$firebase', 
    function ($rootScope, $scope, $firebase) {
        $scope.counterLoaded = false;

        var ref = new Firebase('https://'+fireName+'.firebaseio.com/counters');
        var sync = $firebase(ref);
        $rootScope.lastColor = '';
        $rootScope.counters = sync.$asObject();
        $rootScope.counters.$loaded().then(function(){
            $scope.counterLoaded = true;
            angular.forEach($rootScope.counters, function(value, key) {
                $rootScope.lastColor = getSingleColor(value.color);
            });
        });
        $scope.counterLoaded = false;

        $scope.addCounter = function(name) {
            ref.once('value', function(dataSnapshot) {
              if (dataSnapshot.numChildren()>0){
                createOtherCounter(ref, name);
              }
              else {
                createCounter(ref, name, Please.make_color({saturation: 0.7, value: 0.9}));
              }
            });
            $rootScope.lastColor = getSingleColor($rootScope.lastColor);
            $scope.name = '';
        }
        
        $scope.increaseCounter = function(obj){
            var objRef = ref.child(obj.id);
            obj.value++;
            objRef.update(obj);
        }
    }
]); 