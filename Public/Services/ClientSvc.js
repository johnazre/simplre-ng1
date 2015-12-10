angular.module('simplreApp').service('ClientSvc', function ($http) {

  this.getClients = function () {
    // var deferred = $q.defer();
    return $http({
      method: "GET",
      url: "/api/client"
    });
    // .then( function(response) {
    //   deferred.resolve(response);
    // })
    // .catch( function (err) {
    //   // console.log(err);
    // });
    //
    // return deferred.promise;
  }

  this.postClients = function (name, email, phone, type, source) {
    return $http({
      method: "POST",
      url: "/api/client",
      data: {name:name, email:email, phone:phone, type:type, source:source}
    }).then( function success (response) {
      console.log(response);
    });
  };

});
