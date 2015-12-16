angular.module('simplreApp').controller('ListingModalCtrl', function($scope, ClientSvc, ListingSvc, listing, UserSvc) {

  $scope.getClients = function() {
    ClientSvc.getClients().then(function(res) {
      $scope.clients = res.data;
      // $scope.listing.client = listing.client;
      // console.log($scope.clients)
    });
  }();

  $scope.postListing = function(ev, user, client, address, status, source, listPrice, salePrice, commission, units, gci, companyDollar, royalty, referralPaid, eo, mortgageCompany, titleEscrowCompany) {
    console.log(ev);
    console.log(user, client, address, status, source, listPrice, salePrice, commission, units, gci, companyDollar, royalty, referralPaid, eo, mortgageCompany, titleEscrowCompany);

    ListingSvc.postListing(user, client, address, status, source, listPrice, salePrice, commission, units, gci, companyDollar, royalty, referralPaid, eo, mortgageCompany, titleEscrowCompany).then(function(res) {
      console.log(res);
    });
  };

  $scope.putListing = function (client, address, status, source, listPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, mortgageCompany, titleEscrowCompany) {

    ListingSvc.putListing(client, address, status, source, listPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, mortgageCompany, titleEscrowCompany).then(function(res){
      console.log(res);
    });
  };

  console.log(listing);
  $scope.listing = listing;

  $scope.getUserData = function () {
    UserSvc.getUserData().then(function(res) {
      $scope.user = res.data;
      console.log($scope.user);
    })
  }();


});
