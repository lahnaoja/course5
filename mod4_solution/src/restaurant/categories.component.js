(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/restaurant/templates/categories.component.template.html',
  //controller: CategoriesComponentController,
  bindings: {
    items: '<'
  }
});

/*
CategoriesComponentController.$inject = ['$rootScope']
function CategoriesComponentController($rootScope) {
  var $ctrl = this;
}
*/

})();
