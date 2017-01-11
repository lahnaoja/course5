(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items', 'params'];
function ItemsController(items, params) {
  var itemsCtrl = this;
  itemsCtrl.items = items.data.menu_items;
  itemsCtrl.short_name = params.itemId;
}

})();
