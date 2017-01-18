(function () {
"use strict";

angular.module('common')
.service('StorageService', StorageService);

StorageService.$inject = ['$http', 'ApiPath'];
function StorageService($http, ApiPath) {
  var service = this;

  service.userData = {};

  service.storeUserData = function(data) {
    //console.log(data);

    service.userData.id = data.id;
    service.userData.description = data.description;
    service.userData.name = data.name;
    service.userData.short_name = data.short_name;

    // https://lahnaoja-course5.herokuapp.com/images/L1.jpg
    service.userData.image_url = ApiPath + '/images/' + data.short_name + '.jpg';
    //console.log(service.userData);
  }

  service.getUserData = function() {
    return service.userData;
  }

}

})();
