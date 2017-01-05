(function () {
'use strict';

angular.module('Restaurant')
.component('categoryList', {
  templateUrl: 'src/shoppinglist/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
