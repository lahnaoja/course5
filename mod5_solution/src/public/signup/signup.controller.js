(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['menuCategories', 'MenuService', 'StorageService'];
function SignupController(menuCategories, MenuService, StorageService) {
  var $ctrl = this;

  $ctrl.completed = false;
  $ctrl.favoriteNotValid = false;
  $ctrl.infoSaved = false;
  $ctrl.menuItem = {}

  $ctrl.submit = function () {
      $ctrl.completed = true;
      $ctrl.checkItem($ctrl.user.favorite);
    };

  $ctrl.checkItem = function(favorite) {
    var promise = MenuService.getMenuItem(favorite);
    promise.then(function (response) {
      //console.log("Item: ", response);
      $ctrl.menuItem = response;
      $ctrl.favoriteNotValid = false;

      StorageService.storeUserData($ctrl.menuItem);
      $ctrl.infoSaved = true;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
      $ctrl.favoriteNotValid = true;
    });

  }


  /* Experimental stuff */
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
