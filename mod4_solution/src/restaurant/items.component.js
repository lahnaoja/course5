(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/restaurant/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
