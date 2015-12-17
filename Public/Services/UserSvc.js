angular.module('simplreApp').service('UserSvc', function($http, $q) {

  this.getUserData = function () {

    var defer = $q.defer();

    $http({
      method: "GET",
      url: "/me"
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;
  };

});
