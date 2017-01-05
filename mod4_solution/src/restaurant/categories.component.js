(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/restaurant/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
