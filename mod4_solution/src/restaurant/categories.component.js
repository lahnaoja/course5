(function () {
'use strict';

angular.module('Restaurant')
.component('categories', {
  templateUrl: 'src/shoppinglist/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
