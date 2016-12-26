(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
           .controller('ToBuyController', ToBuyController)
           .controller('AlreadyBoughtController', AlreadyBoughtController)
           .service('ShoppingListCheckOffService', ShoppingListService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.itemName = "";
        toBuy.itemQuantity = "";

        toBuy.bought = function() {
            ShoppingListCheckOffService.bought( itemIndex );
        }

        toBuy.addItem = function() {
            ShoppingListCheckOffService.addItem(toBuy.itemName, toBuy.itemQuantity);
        }
        toBuy.isEmpty = function() {
          var ret = true;
          ret = (toBuy.items.length == 0 ? true : false);
          console.log(ret);
          return ret;
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

        alreadyBought.itemName = "";
        alreadyBought.itemQuantity = "";

        alreadyBought.addItem = function() {
            ShoppingListCheckOffService.addItem(alreadyBought.itemName, alreadyBought.itemQuantity);
        }
    }



    function ShoppingListService() {
        var service = this;

        // List of shopping items
        var toBuyItems = [
          { name: "cookies1", quantity: 10 },
          { name: "cookies2", quantity: 20 },
          { name: "cookies3", quantity: 30 },
          { name: "cookies4", quantity: 40 },
          { name: "cookies5", quantity: 50 }
        ];
        var boughtItems = [];

        service.bought = function( itemIndex) {
          var item = toBuyItems[itemIndex];
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        service.removeItem = function(itemIdex) {
            items.splice(itemIdex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };
        service.getBoughtItems = function() {
            return boughtItems;
        };
    }



})();
