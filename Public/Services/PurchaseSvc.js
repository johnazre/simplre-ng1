angular.module('simplreApp').service('PurchaseSvc', function ($http) {

    this.getPurchase = function () {
      return $http({
        method: "GET",
        url: "/api/purchase"
      }).then( function success (response) {
        console.log(response);
      }).catch( function (err) {
        console.log(err);
      });

    }

    this.getOnePurchase = function (id) {
      return $http({
        method: "GET",
        url: "/api/purchase/" + id
      }).then( function success (response) {
        console.log(response);
      }).catch( function (err) {
        console.log(err);
      });
    }

    this.postPurchase = function () {
      return $http({
        method: "POST",
        url: "/api/purchase",
        data: {}
      }).then( function success (response) {
        console.log(response);
      }).catch( function (err) {
        console.log(err);
      });
    };

});
