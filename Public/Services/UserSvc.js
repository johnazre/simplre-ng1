angular.module('simplreApp').service('UserSvc', function($http, $q) {

   var defer = $q.defer();

   var success = function(response){
       defer.resolve(response);
   };
   
   var error = function(error){
       console.log(error);
   };

  this.getUserData = function () {

    $http({
      method: "GET",
      url: "/me"
    }).then(success, error);

    return defer.promise;
  };

  this.editUserData = function (id, name, email) {

    $http({
      method: "PUT",
      url: "/api/user/" + id,
      data: {
        facebook : {
          name: name,
          email: email
        }
      }
    }).then(success, error);

    return defer.promise;
  };

});
