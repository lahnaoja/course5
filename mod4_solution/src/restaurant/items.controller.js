(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsComponentController', ItemsComponentController);


ItemsComponentController.$inject = ['items'];
function ItemsComponentController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
}

})();
