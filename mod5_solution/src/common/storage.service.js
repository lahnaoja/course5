(function () {
"use strict";

angular.module('common')
.service('StorageService', StorageService);

StorageService.$inject = ['$http', 'ApiPath'];
function StorageService($http, ApiPath) {
  var service = this;

  var userData = {};

  service.storeUserData = function(data) {
    //console.log(data);

    userData.id = data.id;
    userData.description = data.description;
    userData.name = data.name;
    userData.short_name = data.short_name;

    // https://lahnaoja-course5.herokuapp.com/images/L1.jpg
    userData.image_url = ApiPath + '/images/' + data.short_name + '.jpg';
  }

  service.getUserData = function() {
    return userData;
  }

}

})();
