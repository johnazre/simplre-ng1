angular.module('simplreApp').controller('ListingModalCtrl', function($scope, $timeout, ClientSvc, ListingSvc, listing) {

  $scope.getClients = function() {
    ClientSvc.getClients().then(function(res) {
      $scope.clients = res.data;
      $scope.listing.client = listing.client;
      // console.log($scope.clients)
    });
  }();

  $scope.postListing = function(ev, client, address, status, source, listPrice, salePrice, commission, units, gci, companyDollar, royalty, referralPaid, eo, mortgageCompany, titleEscrowCompany) {
    console.log(ev);
    console.log(client, address, status, source, listPrice, salePrice, commission, units, gci, companyDollar, royalty, referralPaid, eo, mortgageCompany, titleEscrowCompany);

    ListingSvc.postListing(client, address, status, source, listPrice, salePrice, commission, units, gci, companyDollar, royalty, referralPaid, eo, mortgageCompany, titleEscrowCompany).then(function(res) {
      console.log(res);
    });
  };

  $scope.listing = listing;

});
