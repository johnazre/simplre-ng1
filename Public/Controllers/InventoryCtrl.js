angular.module('simplreApp').controller('InventoryCtrl', function ($scope, MainSvc, $mdDialog, $mdMedia) {


  var originatorEv;
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };


  $scope.ShowClosedModal = function(ev) {
    $mdDialog.show({
        controller: "ModalController",
        templateUrl: 'Templates/closedDetailModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

  $scope.ShowListingModal = function(ev) {
    $mdDialog.show({
        controller: "ModalController",
        templateUrl: 'Templates/listingDetailModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

  $scope.showAddListingModal = function(ev) {
    $mdDialog.show({
        controller: "ModalController",
        templateUrl: 'Templates/listingInputForm.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

  $scope.showAddBuyerModal = function(ev) {
    $mdDialog.show({
        controller: 'ModalController',
        templateUrl: 'Templates/buyerInputForm.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

  $scope.showBuyerModal = function(ev) {
    $mdDialog.show({
        controller: 'ModalController',
        templateUrl: 'Templates/buyerDetailModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

});

function DialogController($scope, $mdDialog, $mdMedia) {

  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('sm');
  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
      .parent(angular.element(document.querySelector('#popupContainer')))
      .clickOutsideToClose(true)
      .title('This is an alert title')
      .textContent('You can specify some description text in here.')
      .ariaLabel('Alert Dialog Demo')
      .ok('Got it!')
      .targetEvent(ev)
    );
  }
}
