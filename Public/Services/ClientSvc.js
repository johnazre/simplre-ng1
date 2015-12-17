angular.module('simplreApp').service('ClientSvc', function ($http, $q) {

  this.getClients = function () {

    var defer = $q.defer();

    $http({
      method: "GET",
      url: "/api/client"
    }).then(function(response) {
      console.log(response);
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;
  }

  this.getOneClient = function (id) {

    var defer = $q.defer();

    $http({
      method: "GET",
      url: "/api/client/" + id
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;
  }

  this.postClients = function (user, name, email, phone, type, buyerStatus, sellerStatus, source) {
    var defer = $q.defer();

    $http({
      method: "POST",
      url: "/api/client",
      data: {user:user, name:name, email:email, phone:phone, type:type, buyerStatus:buyerStatus, sellerStatus:sellerStatus, source:source}
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;
  };

  this.editClient = function (id, name, email, phone, type, buyerStatus, sellerStatus, source) {
    var defer = $q.defer();

    $http({
      method: "PUT",
      url: "/api/client/" + id,
      data: {name:name, email:email, phone:phone, type:type, buyerStatus:buyerStatus, sellerStatus:sellerStatus, source:source}
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;
  };

  this.deleteClients = function (id) {
    var defer = $q.defer();

    $http({
      method: "DELETE",
      url: "/api/client/" + id
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;;
  };

});
