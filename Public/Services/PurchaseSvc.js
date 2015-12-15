angular.module('simplreApp').service('PurchaseSvc', function ($http) {

    this.getPurchases = function () {
      return $http({
        method: "GET",
        url: "/api/purchase"
      });

    }

    this.getOnePurchase = function (id) {
      return $http({
        method: "GET",
        url: "/api/purchase/" + id
      });
    }

    this.postPurchase = function (client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany) {
      return $http({
        method: "POST",
        url: "/api/purchase",
        data: {client:client, address:address, status:status, listPrice:listPrice, offerPrice:offerPrice, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, inspectionDate:inspectionDate, appraisalDate:appraisalDate, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
      });
    };

    this.putPurchase = function (id, client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany) {
    return $http({
      method: "PUT",
      url: "/api/purchase/" + id,
      data: {client:client, address:address, status:status, listPrice:listPrice, offerPrice:offerPrice, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, inspectionDate:inspectionDate, appraisalDate:appraisalDate, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
    });

    this.deletePurchase = function (id) {
    return $http({
      method: "DELETE",
      url: "/api/purchase/" + id
    }).then(function success (response) {
      console.log(response);
    }, function notSuccess(response) {
      console.log(response)
    });
  };
  };

});
