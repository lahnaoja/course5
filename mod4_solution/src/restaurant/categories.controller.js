(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['cats'];
function CategoriesController(cats) {
  var cat = this;
  cat.cats = cats.data;
}

})();
