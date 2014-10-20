'use strict';

/**
 * @ngdoc function
 * @name colorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('MainCtrl', function ($scope) {
    $scope.baseColor = Please.make_color();
    $scope.colors = getScheme(100);
    $scope.count = 0;

    $scope.addCounter = function() {
        $scope.count++;
    }
});

function getScheme(nbr){
    var color = Please.make_color({
        saturation: .7,
        value: .9
    });
    var scheme = [];

    scheme.push(color);

    var nbInterations = Math.ceil(nbr/6);
    for(var i = 1; i<=nbInterations; i++){
        var item = getSingleScheme(scheme.slice(-1)[0]);
        for(var j=0; j<item.length; j++){
            scheme.push(item[j]);
        }
    }
    return scheme;
}
function getSingleScheme(hsbColor){
    var color = Please.HEX_to_HSV(hsbColor);
    var scheme = [];

    scheme = Please.make_scheme({
        h: color.h,
        s: color.s,
        v: color.v
    },{
        scheme_type: 'analogous',
        format: 'hex'
    });
    scheme.splice(0, 1);
    return scheme;
}