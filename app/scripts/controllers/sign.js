'use strict';

/**
 * @ngdoc function
 * @name colorApp.controller:SignCtrl
 * @description
 * # SignCtrl
 * Controller of the colorApp
 */
angular.module('colorApp').controller('SignCtrl', ['$rootScope','$scope', '$firebase',
    function ($rootScope, $scope, $firebase) {
        $rootScope.counterLoaded = true;

        var ref = new Firebase('https://'+fireName+'.firebaseio.com/users');
        $scope.dataState = {
            pseudo: false,
            mail: false,
            password: false
        }
        $scope.state = {};

        $scope.signUp = function(user){
            var newUser = {
                name: user.pseudo,
                mail: user.mail,
            };
            newUser.inscription= String(new Date());
            newUser.password = crypPass(user.password);
            newUser.role = "member";
            ref.push(newUser);
            $scope.user = {};
            $scope.state = {};

        };
        $scope.checkPseudo = function(pseudo){
            var isValid = true;
            console.log(pseudo);
            ref.once('value', function(data) {
                data.forEach(function(child) {
                  var item = child.val();
                    if(pseudo == item.name){
                        isValid = false;
                    }
                    if(!pseudo){
                        isValid = 2;
                    }
                });
                if(isValid) {
                    $scope.$apply(function(){
                        $scope.dataState.pseudo = true;
                        $scope.state.pseudo = 'Super pseudo :)';
                    });
                } else {
                    $scope.$apply(function(){ //let angular know the changes
                        $scope.dataState.pseudo = false;
                        $scope.state.pseudo = "Ce pseudo est déjà pris";
                    });
                }
                if(isValid == 2){
                    $scope.$apply(function(){ //let angular know the changes
                        $scope.state.pseudo = '';
                    });
                }
            });
        };
        $scope.checkMail = function(mail){
            var regFullMail = new RegExp(/([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)|([0-9]{1,3}\.{3}[0-9]{1,3}))/);
            var regWithAt = new RegExp(/([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9])/);

            if(regFullMail.test(mail)){
                $scope.state.mail = 'Probably the best email adress I\'ve seen so far';
                $scope.dataState.mail = true;
            } else if(regWithAt.test(mail)){
                $scope.state.mail = 'Wow, much better';
            } else if(mail != undefined) {
                $scope.state.mail = 'Looks nice. Go on !';
            } else {
                $scope.state.mail = '';
            }
        };
        $scope.checkPassword = function(user){
            if(user.password === user.passwordVerif){
                $scope.dataState.password = true;
                $scope.state.password = "The password match";
            } else {
                $scope.state.password = "The password doesn't match";
            }
        };
    }
]);