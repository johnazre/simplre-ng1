angular.module('simplreApp').controller('ListingModalCtrl', function($scope, ClientSvc, ListingSvc, listing, UserSvc) {

  $scope.getClients = function() {
    ClientSvc.getClients().then(function(res) {
      $scope.clients = res.data;
      // $scope.listing.client = listing.client;
      // console.log($scope.clients)
    });
  }();

  $scope.putListing = function (client, address, status, source, listPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, mortgageCompany, titleEscrowCompany) {

    ListingSvc.putListing(client, address, status, source, listPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, mortgageCompany, titleEscrowCompany).then(function(res){
      console.log(res);
    });
  };

  console.log(listing);
  $scope.listing = listing;

  $scope.listing.contractDate = new Date();
  $scope.listing.projectedCloseDate = new Date();
  $scope.listing.actualCloseDate = new Date();
  $scope.listing.appraisalDate = new Date;

  $scope.getUserData = function () {
    UserSvc.getUserData().then(function(res) {
      $scope.user = res.data;
      console.log($scope.user);
    })
  }();


});
