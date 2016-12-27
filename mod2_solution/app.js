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

        toBuy.bought = function(index) {
            ShoppingListCheckOffService.bought(index);
        }
        toBuy.isEmpty = function() {
            return (toBuy.items.length == 0 ? true : false);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

        alreadyBought.isEmpty = function() {
            return (alreadyBought.items.length == 0 ? true : false);
        }
    }

    function ShoppingListService() {
        var service = this;

        // List of shopping items
        var toBuyItems = [{
            name: "cookies",
            quantity: 10
        }, {
            name: "brown cookies",
            quantity: 20
        }, {
            name: "water bottles",
            quantity: 30
        }, {
            name: "tea bags",
            quantity: 40
        }, {
            name: "ice creams",
            quantity: 5
        }, {
            name: "breads",
            quantity: 6
        }
      ];
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
