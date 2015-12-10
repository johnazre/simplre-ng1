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

  this.getOneClient = function (id) {
    // var deferred = $q.defer();
    return $http({
      method: "GET",
      url: "/api/client/" + id
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

  this.postClients = function (name, email, phone, type, buyerStatus, sellerStatus, source) {
    return $http({
      method: "POST",
      url: "/api/client",
      data: {name:name, email:email, phone:phone, type:type, buyerStatus:buyerStatus, sellerStatus:sellerStatus, source:source}
    }).then( function success (response) {
      console.log(response);
    }).catch( function (err) {
      console.log(err);
    });
  };

});
