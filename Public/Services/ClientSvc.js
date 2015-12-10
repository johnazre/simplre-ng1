angular.module('simplreApp').service('ClientSvc', function ($http) {

  this.getClients = function () {
    return $http({
      method: "GET",
      url: "/api/client"
    });

  }

  this.getOneClient = function (id) {
    return $http({
      method: "GET",
      url: "/api/client/" + id
    });
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
