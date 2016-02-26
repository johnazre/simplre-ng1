angular.module('simplreApp').service('ListingSvc', function ($http, $q) {

    var defer = $q.defer();
    
    var success = function(response){
       defer.resolve(response);
   };
   
   var error = function(error){
       console.log(error);
   };

  this.getListings = function () {

    $http({
      method: "GET",
      url: "/api/listing"
    }).then(success, error);

    return defer.promise;

  };

  this.getOneListing = function (id) {

    $http({
      method: "GET",
      url: "/api/listing/" + id
    }).then(success, error);

    return defer.promise;
  };

  this.postListing = function (user, client, address, status, source, listPrice, salePrice, contractDate, projectedCloseDate, actualCloseDate, appraisalDate, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, mortgageCompany, titleEscrowCompany) {

    $http({
      method: "POST",
      url: "/api/listing",
      data: {user:user, client:client, address:address, status:status, source:source, listPrice:listPrice, salePrice:salePrice, contractDate:contractDate, projectedCloseDate:projectedCloseDate, actualCloseDateListing:actualCloseDate, appraisalDate:appraisalDate, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
    }).then(success, error);

    return defer.promise;
  };

  this.putListing = function (id, client, address, status, source, listPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, mortgageCompany, titleEscrowCompany) {

    $http({
      method: "PUT",
      url: "/api/listing/" + id,
      data: {client:client, address:address, status:status, source:source, listPrice:listPrice, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
    }).then(success, error);

    return defer.promise;
  };


  this.deleteListing = function (id) {

    $http({
      method: "DELETE",
      url: "/api/listing/" + id
    }).then(success, error);

    return defer.promise;
  };

});
