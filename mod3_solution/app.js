(function() {
    'use strict';

    /*
    https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment3/Assignment-3.md

    */

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                myTitle: '@title',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var list = this;

        list.cookiesInList = function() {
            for (var i = 0; i < list.items.length; i++) {
                var name = list.items[i].name;
                if (name.toLowerCase().indexOf("cookie") !== -1) {
                    return true;
                }
            }
            return false;
        };
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;

        narrowCtrl.found = [];
        narrowCtrl.title = "Title";
        narrowCtrl.searchTerm = "";
        //narrowCtrl.found = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
        //narrowCtrl.found = MenuSearchService.getfoundItems();
        narrowCtrl.narrowDown = function() {
          console.log(narrowCtrl.searchTerm);
          narrowCtrl.found = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
        };

        narrowCtrl.removeItem = function(index) {
          MenuSearchService.removeItem(index);
        };
    }


    MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath'];
    function MenuSearchService($q, $http, ApiBasePath) {
        //
        // The URL for the REST Endpoint is https://davids-restaurant.herokuapp.com/menu_items.json
        //
        var service = this;

        // List of bought items
        var foundItems = [];

        // getMatchedMenuItems(searchTerm)
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(result) {
                // process result and only keep items that match
                var foundItems = result.data;

                console.log(foundItems.menu_items);

                // return processed items
                return foundItems.menu_items;
            });
        };

        service.removeItem = function(itemIdex) {
            foundItems.splice(itemIdex, 1);
        };
        service.getfoundItems = function() {
            return foundItems;
        };
    }

})();
