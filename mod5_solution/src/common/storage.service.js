(function () {
"use strict";

angular.module('common')
.service('StorageService', StorageService);

StorageService.$inject = ['$http', 'ApiPath'];
function StorageService($http, ApiPath) {
  var service = this;

  service.userData = {};

  service.storeUserData = function(data) {
    service.userData = data;

    // https://lahnaoja-course5.herokuapp.com/images/L1.jpg
    service.userData.image_url = ApiPath + '/images/' + data.short_name + '.jpg';
    console.log(service.userData);
  }

  service.getUserData = function() {
    console.log("GET ... ");
    console.log(service.userData);
    return service.userData;
  }

}

})();
