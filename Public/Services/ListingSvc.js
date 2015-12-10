angular.module('simplreApp').service('ListingSvc', function ($http) {

    this.getListings = function () {
      return $http({
        method: "GET",
        url: "/api/listing"
      });

    }

    this.getOneListing = function (id) {
      return $http({
        method: "GET",
        url: "/api/listing/" + id
      });
    }

    this.postListing = function (client, address, status, source, listPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, mortgageCompany, titleEscrowCompany) {
      return $http({
        method: "POST",
        url: "/api/listing",
        data: {client:client, address:address, status:status, source:source, listPrice:listPrice, salePrice:salePrice, commissionPercentage:commissionPercentage, units:units, gci:gci, companyDollar:companyDollar, royalty:royalty, referralPaid:referralPaid, eAndO:eAndO, mortgageCompany:mortgageCompany, titleEscrowCompany:titleEscrowCompany}
      });
    };

});
