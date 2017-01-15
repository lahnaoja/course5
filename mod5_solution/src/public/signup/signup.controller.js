(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['menuCategories', 'MenuService'];
function SignupController(menuCategories, MenuService) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;

  $ctrl.submit = function () {
      $ctrl.completed = true;

      $ctrl.check();

    };

  $ctrl.check = function() {
    var promise = MenuService.getMenuItems('A');
    promise.then(function (response) {
      console.log("Item: ", response.menu_items);
      $ctrl.item = response.menu_items;
      $ctrl.verify()
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }

  $ctrl.verify = function() {
    for(var i = 0; i < $ctrl.item.length; i++) {
      console.log($ctrl.item[i].short_name);
    }
  }


}


})();
