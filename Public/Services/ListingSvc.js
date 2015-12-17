angular.module('simplreApp').service('ListingSvc', function ($http, $q) {

  this.getListings = function () {
    var defer = $q.defer();

    $http({
      method: "GET",
      url: "/api/listing"
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;

  }

  this.getOneListing = function (id) {
    var defer = $q.defer();

    $http({
      method: "GET",
      url: "/api/listing/" + id
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;
  }

  this.postListing = function (user, client, address, status, source, listPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, mortgageCompany, titleEscrowCompany) {
    var defer = $q.defer();

    $http({
      method: "POST",
      url: "/api/listing",
      data: {createdBy:user, client:client, address:address, status:status, source:source, listPrice:listPrice, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;
  };

  this.putListing = function (id, client, address, status, source, listPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, mortgageCompany, titleEscrowCompany) {
    var defer = $q.defer();

    $http({
      method: "PUT",
      url: "/api/listing/" + id,
      data: {client:client, address:address, status:status, source:source, listPrice:listPrice, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;
  };


  this.deleteListing = function (id) {
    var defer = $q.defer();

    $http({
      method: "DELETE",
      url: "/api/listing/" + id
    }).then(function(response) {
      defer.resolve(response);
    }, function (error) {
      console.log(error);
    });

    return defer.promise;
  };

});
