angular.module('simplreApp').service('ListingSvc', function ($http) {

    this.getListing = function () {
      return $http({
        method: "GET",
        url: "/api/listing"
      }).then( function success (response) {
        console.log(response);
      }).catch( function (err) {
        console.log(err);
      });

    }

    this.getOneListing = function (id) {
      return $http({
        method: "GET",
        url: "/api/listing/" + id
      }).then( function success (response) {
        console.log(response);
      }).catch( function (err) {
        console.log(err);
      });
    }

    this.postListing = function () {
      return $http({
        method: "POST",
        url: "/api/listing",
        data: {}
      }).then( function success (response) {
        console.log(response);
      }).catch( function (err) {
        console.log(err);
      });
    };

});
