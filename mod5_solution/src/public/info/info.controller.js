(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['menuCategories', 'StorageService'];
function InfoController(menuCategories, StorageService) {
  var $ctrl = this;

  $ctrl.menuCategories = menuCategories;

  $ctrl.menuItem = StorageService.getUserData();
}


})();
