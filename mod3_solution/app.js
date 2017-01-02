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
        var narrow = this;

        narrow.found = MenuSearchService.getfoundItems();

        // var promise = MenuSearchService.getMatchedMenuItems("pork");
        // promise.then(function (response) {
        //   narrow.found = response.data;
        //   console.log(response.data);
        // })
        // .catch(function (error) {
        //   console.log("Something went terribly wrong.");
        // });

        //narrowCtrl.found = [];
        narrow.title = "Title";
        narrow.searchTerm = "";
        //narrowCtrl.found = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
        //narrowCtrl.found = MenuSearchService.getfoundItems();
        narrow.narrowDown = function() {
          //console.log(narrow.searchTerm);
          //narrow.found = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
          MenuSearchService.getMatchedMenuItems(narrow.searchTerm);

          // var promise = MenuSearchService.getMatchedMenuItems("pork");
          // promise.then(function (response) {
          //   narrow.found = response.data.menu_items;
          //   console.log(response.data.menu_items);
          // })
          // .catch(function (error) {
          //   console.log("Something went terribly wrong.");
          // });

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

            //items = [];
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

        // service.getMatchedMenuItems = function(searchTerm) {
        //     var response = $http({
        //         method: "GET",
        //         url: (ApiBasePath + "/menu_items.json")
        //     }).then(function(result) {
        //         // process result and only keep items that match
        //         var foundItems = result.data;
        //
        //         console.log(foundItems.menu_items);
        //
        //         // return processed items
        //         return foundItems.menu_items;
        //     });
        //
        //     return response;
        // };

        service.removeItem = function(index) {
          items.splice(index, 1);
        };
        service.getfoundItems = function() {
            return items;
        };
    }


    // MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    // function MenuSearchService($http, ApiBasePath) {
    //     //
    //     // The URL for the REST Endpoint is https://davids-restaurant.herokuapp.com/menu_items.json
    //     //
    //     var service = this;
    //
    //     // List of bought items
    //     //var foundItems = [];
    //
    //     // getMatchedMenuItems(searchTerm)
    //     service.getMatchedMenuItems = function(searchTerm) {
    //
    //         var response = $http({
    //             method: "GET",
    //             url: (ApiBasePath + "/menu_items.json")
    //         });
    //
    //         return response;
    //     };
    //
    //     // service.getMatchedMenuItems = function(searchTerm) {
    //     //     var response = $http({
    //     //         method: "GET",
    //     //         url: (ApiBasePath + "/menu_items.json")
    //     //     }).then(function(result) {
    //     //         // process result and only keep items that match
    //     //         var foundItems = result.data;
    //     //
    //     //         console.log(foundItems.menu_items);
    //     //
    //     //         // return processed items
    //     //         return foundItems.menu_items;
    //     //     });
    //     //
    //     //     return response;
    //     // };
    //
    //     service.removeItem = function(itemIdex) {
    //         foundItems.splice(itemIdex, 1);
    //     };
    //     service.getfoundItems = function() {
    //         return foundItems;
    //     };
    // }

})();
