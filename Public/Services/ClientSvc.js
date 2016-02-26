angular.module('simplreApp').service('ClientSvc', function ($http, $q) {

    var defer = $q.defer();

    var success = function(response){
       defer.resolve(response);
   };
   
   var error = function(error){
       console.log(error);
   };

  this.getClients = function () {
    $http({
      method: "GET",
      url: "/api/client"
    }).then(success, error);

    return defer.promise;
  };

  this.getOneClient = function (id) {
    $http({
      method: "GET",
      url: "/api/client/" + id
    }).then(success, error);

    return defer.promise;
  };

  this.postClients = function (user, name, email, phone, type, buyerStatus, sellerStatus, source) {

    $http({
      method: "POST",
      url: "/api/client",
      data: {user:user, name:name, email:email, phone:phone, type:type, buyerStatus:buyerStatus, sellerStatus:sellerStatus, source:source}
    }).then(success, error);

    return defer.promise;
  };

  this.editClient = function (id, name, email, phone, type, buyerStatus, sellerStatus, source) {

    $http({
      method: "PUT",
      url: "/api/client/" + id,
      data: {name:name, email:email, phone:phone, type:type, buyerStatus:buyerStatus, sellerStatus:sellerStatus, source:source}
    }).then(success, error);

    return defer.promise;
  };

  this.deleteClients = function (id) {

    $http({
      method: "DELETE",
      url: "/api/client/" + id
    }).then(success, error);

    return defer.promise;
  };

});
