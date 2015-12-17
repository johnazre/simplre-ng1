angular.module('simplreApp').controller('PurchaseModalCtrl', function($scope, PurchaseSvc, ClientSvc, purchase, UserSvc, $mdDialog, PurchaseSvc) {


  $scope.getClients = function() {
    ClientSvc.getClients().then(function(res) {
      $scope.clients = res.data;
    });
  }();


  $scope.putPurchase = function (ev, user, id, client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany) {
    console.log(ev);

    PurchaseSvc.putPurchase(id, user, client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany).then(function(res){
      console.log(res);
    });
  };




  $scope.purchases = purchase;
  console.log($scope.purchases);

  $scope.purchases.contractDate = new Date();
  $scope.purchases.projectedCloseDate = new Date();
  $scope.purchases.actualCloseDate = new Date();
  $scope.purchases.appraisalDate = new Date;

  $scope.getUserData = function () {
    UserSvc.getUserData().then(function(res) {
      $scope.user = res.data;
      console.log($scope.user);
    })
  }();

  $scope.closeDialog = function() {
         $mdDialog.hide();
  }

});
