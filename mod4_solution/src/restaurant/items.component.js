(function () {
'use strict';

angular.module('Restaurant')
.component('items', {
  templateUrl: 'src/shoppinglist/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
