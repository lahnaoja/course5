(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsComponentController', ItemsComponentController);

ItemsComponentController.$inject = ['items', 'params'];
function ItemsComponentController(items, params) {
  var itemsCtrl = this;
  itemsCtrl.items = items.data.menu_items;
  itemsCtrl.short_name = params.itemId;
}

})();
