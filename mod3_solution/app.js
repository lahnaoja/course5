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
                buttonPressed: '<',
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

        list.listEmpty = function() {
            var ret = false;
            if( list.buttonPressed ) {
              if( list.found.length == 0 ) {
                ret = true;
              }
            }
            return ret;
        };
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrow = this;

        narrow.buttonPressed = false;
        narrow.found = MenuSearchService.getfoundItems();

        narrow.title = "Title";
        narrow.searchTerm = "";

        narrow.narrowDown = function() {
          MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
          narrow.buttonPressed = true;
        };

        narrow.removeItem = function(index) {
          MenuSearchService.removeItem(index);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        // The URL for the REST Endpoint is https://davids-restaurant.herokuapp.com/menu_items.json
        var service = this;
        var items = [];

        service.getMatchedMenuItems = function(searchTerm) {
            // First, do empty the old list of items
            while(items.length > 0) {
              items.pop();
            }

            $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(result) {
              // process result and only keep items that match
              var foundItems = result.data.menu_items;
              for(var i = 0; i < foundItems.length; i++) {
                var item = foundItems[i];
                if (item["description"].toLowerCase().indexOf( searchTerm ) > -1) {
                  items.push(item);
                }
              }
              //console.log(foundItems.menu_items);
            }, function (errorResponse) {
              console.log(errorResponse.message);
            });
        };

        service.removeItem = function(index) {
          items.splice(index, 1);
        };
        service.getfoundItems = function() {
            return items;
        };
    }

})();
