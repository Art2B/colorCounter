'use strict';

/**
 * @ngdoc function
 * @name colorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('MainCtrl', function ($scope) {
    $scope.colors = getScheme(3);
    $scope.count = $scope.colors.length;

    $scope.addCounter = function() {
        $scope.count++;
        $scope.colors.push(getSingleColor($scope.colors));
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
    var colorToSlice = 6 - (nbr%6);
    scheme.splice(-colorToSlice, colorToSlice);
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
function getSingleColor(scheme){
    return getSingleScheme(scheme.slice(-1)[0])[0];
}