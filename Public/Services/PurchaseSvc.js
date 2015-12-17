angular.module('simplreApp').service('PurchaseSvc', function ($http, $q) {

    this.getPurchases = function () {
        var defer = $q.defer();

        $http({
        method: "GET",
        url: "/api/purchase"
      }).then(function(response) {
        defer.resolve(response);
      }, function (error) {
        console.log(error);
      });

      return defer.promise;;
    }

    this.getOnePurchase = function (id) {
        var defer = $q.defer();

        $http({
        method: "GET",
        url: "/api/purchase/" + id
      }).then(function(response) {
        defer.resolve(response);
      }, function (error) {
        console.log(error);
      });

      return defer.promise;;
    }

    this.postPurchase = function (user, client, address, status, listPrice, offerPrice, contractDate, projectedCloseDate, actualCloseDate, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, appraisalDate, mortgageCompany, titleEscrowCompany) {

      var defer = $q.defer();

      $http({
        method: "POST",
        url: "/api/purchase",
        data: {user:user, client:client, address:address, status:status, listPrice:listPrice, offerPrice:offerPrice, contractDate:contractDate, projectedCloseDate:projectedCloseDate, actualCloseDate:actualCloseDate, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, appraisalDate:appraisalDate, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
      }).then(function(response) {
        defer.resolve(response);
      }, function (error) {
        console.log(error);
      });

      return defer.promise;
    };

    this.putPurchase = function (id, client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany) {

      var defer = $q.defer();

      $http({
        method: "PUT",
        url: "/api/purchase/" + id,
        data: {client:client, address:address, status:status, listPrice:listPrice, offerPrice:offerPrice, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, inspectionDate:inspectionDate, appraisalDate:appraisalDate, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
      }).then(function(response) {
        defer.resolve(response);
      }, function (error) {
        console.log(error);
      });

      return defer.promise;;
    };

    this.deletePurchase = function (id) {

      var defer = $q.defer();

      $http({
        method: "DELETE",
        url: "/api/purchase/" + id
      }).then(function(response) {
        defer.resolve(response);
      }, function (error) {
        console.log(error);
      });

      return defer.promise;;
    };


});
