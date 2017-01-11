(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/restaurant/templates/items.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
