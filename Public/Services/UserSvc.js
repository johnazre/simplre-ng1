angular.module('simplreApp').service('UserSvc', function($http) {

  this.getUserData = function () {

    return $http({
      method: "GET",
      url: "/me"
    });
  };

});
