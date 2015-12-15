angular.module('simplreApp').controller('PurchaseModalCtrl', function($scope, PurchaseSvc, ClientSvc, purchase) {


  $scope.getClients = function() {
    ClientSvc.getClients().then(function(res) {
      $scope.clients = res.data;
    });
  }();

  $scope.postPurchase = function(ev, id, client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany) {
    console.log(ev);
    // console.log(client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany);

    PurchaseSvc.postPurchase(id, client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany).then(function(res) {
      console.log(res);
    });
  };

  $scope.putPurchase = function (ev, id, client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany) {
    console.log(ev);

    PurchaseSvc.putPurchase(id, client, address, status, listPrice, offerPrice, salePrice, commissionPercentage, units, gci, companyDollar, royalty, referralPaid, eAndO, inspectionDate, appraisalDate, mortgageCompany, titleEscrowCompany).then(function(res){
      console.log(res);
    });
  };

  $scope.purchases = purchase;
  console.log($scope.purchases);

});
