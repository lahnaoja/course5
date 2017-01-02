(function() {
    'use strict';

    /*
    https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment3/Assignment-3.md

    */

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.bought = function(index) {
            ShoppingListCheckOffService.bought(index);
        }
        toBuy.isEmpty = function() {
            return (toBuy.items.length == 0 ? true : false);
        }
    }



    function ShoppingListService() {
      //
      // The URL for the REST Endpoint is https://davids-restaurant.herokuapp.com/menu_items.json
      //
        var service = this;


        // List of bought items
        var boughtItems = [];

        service.bought = function(itemIndex) {
            var item = toBuyItems[itemIndex];
            boughtItems.push(item);
            service.removeItem(itemIndex);
        };
        service.removeItem = function(itemIdex) {
            toBuyItems.splice(itemIdex, 1);
        };
        service.getToBuyItems = function() {
            return toBuyItems;
        };
        service.getBoughtItems = function() {
            return boughtItems;
        };
    }

})();
