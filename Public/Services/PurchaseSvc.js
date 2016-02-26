angular.module('simplreApp').service('PurchaseSvc', function ($http, $q) {

    var defer = $q.defer();

    var success = function(response){
       defer.resolve(response);
   };
   
   var error = function(error){
       console.log(error);
   };

    this.getPurchases = function () {

        $http({
        method: "GET",
        url: "/api/purchase"
      }).then(success, error);

      return defer.promise;
    };

    this.getOnePurchase = function (id) {

        $http({
        method: "GET",
        url: "/api/purchase/" + id
      }).then(success, error);

      return defer.promise;
    }
;
    this.postPurchase = function (user, client, address, status, listPrice, offerPrice, contractDate, projectedCloseDate, actualCloseDate, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, appraisalDate, mortgageCompany, titleEscrowCompany) {

      $http({
        method: "POST",
        url: "/api/purchase",
        data: {user:user, client:client, address:address, status:status, listPrice:listPrice, offerPrice:offerPrice, contractDate:contractDate, projectedCloseDate:projectedCloseDate, actualCloseDate:actualCloseDate, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, appraisalDate:appraisalDate, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
      }).then(success, error);

      return defer.promise;
    };

    this.putPurchase = function (id, client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany) {

      $http({
        method: "PUT",
        url: "/api/purchase/" + id,
        data: {client:client, address:address, status:status, listPrice:listPrice, offerPrice:offerPrice, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, inspectionDate:inspectionDate, appraisalDate:appraisalDate, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
      }).then(success, error);

      return defer.promise;
    };

    this.deletePurchase = function (id) {

      $http({
        method: "DELETE",
        url: "/api/purchase/" + id
      }).then(success, error);

      return defer.promise;
    };


});
