(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['menuCategories'];
function InfoController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}


})();
