angular.module('simplreApp').controller('InventoryCtrl', function ($scope, MainSvc, $mdDialog, $mdMedia) {


  var originatorEv;
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };


  $scope.ShowClosedModal = function(ev) {
    $mdDialog.show({
        controller: "ClosedModalCtrl",
        templateUrl: 'Templates/closedDetailModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

  $scope.showAddListingModal = function(ev) {
    $mdDialog.show({
        controller: "InventoryCtrl",
        templateUrl: 'Templates/listingInputForm.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

  $scope.showAddBuyerModal = function(ev) {
    $mdDialog.show({
        controller: 'InventoryCtrl',
        templateUrl: 'Templates/buyerInputForm.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

    $scope.ShowListingModal = function(ev) {
      $mdDialog.show({
        controller: "ListingModalCtrl",
        templateUrl: 'Templates/listingDetailModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
    };

  $scope.showBuyerModal = function(ev) {
    $mdDialog.show({
        controller: 'PurchaseModalCtrl',
        templateUrl: 'Templates/buyerDetailModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

});
