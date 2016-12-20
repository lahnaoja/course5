(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope', '$filter'];

    function LunchController($scope, $filter) {
        $scope.customStyle = {};

        $scope.lunchMessage = "Enjoy!";
        $scope.lunch = "potatoes, fish";

        $scope.checkLunch = function() {
            var arrayOfFood = $scope.lunch.split(",");

            var nonEmptyItems = 0;
            for (var i = 0; i < arrayOfFood.length; i++) {
                if (arrayOfFood[i].length > 0) {
                    nonEmptyItems++;
                }
            }
            //console.log("I: " + nonEmptyItems);

            if (nonEmptyItems === 0) {
                $scope.lunchMessage = "Please enter data first";
                $scope.customStyle.colorClass = "red";
            }
            else if(nonEmptyItems < 4) {
                $scope.lunchMessage = "Enjoy!";
                $scope.customStyle.colorClass = "green";
            } else {
                $scope.lunchMessage = "Too much!";
                $scope.customStyle.colorClass = "green";
            }

        };

    }

})();
