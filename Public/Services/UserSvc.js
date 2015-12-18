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

  this.editUserData = function (id, name, email) {

    var defer = $q.defer();

    $http({
      method: "PUT",
      url: "/api/user/" + id,
      data: {
        facebook : {
          name: name,
          email: email
        }
      }
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;;
  };

});
