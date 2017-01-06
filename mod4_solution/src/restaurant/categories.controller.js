(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesComponentController', CategoriesComponentController);

CategoriesComponentController.$inject = ['cats'];
function CategoriesComponentController(cats) {
  var cat = this;
  cat.cats = cats.data;
}

})();
