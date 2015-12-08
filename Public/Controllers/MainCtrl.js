angular.module('simplreApp').controller('MainCtrl', function($scope, MainSvc, $mdDialog, $mdMedia) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.menu = [{
    link: 'user.dashboard',
    title: 'Dashboard'
  }, {
    link: 'user.goals',
    title: 'My Goals',
  }, {
    link: 'user.inventory',
    title: 'Inventory',
  }];
  $scope.admin = [{
    link: '',
    title: 'My Account',
  }, {
    link: 'showListBottomSheet($event)',
    title: 'Log Out',
  }];



  $scope.listings = [{
    address: '123 Main Street, Tucson, AZ 85701',
    listPrice: '$324,500',
    sellerName: 'Jimmy McKenna',
    notes: " I'll be in your neighborhood doing errands"
  }, {
    address: '456 Main Street, Tucson, AZ 85701',
    listPrice: '$120,000',
    sellerName: 'James Taylor',
    notes: " I'll be in your neighborhood doing errands"
  }, {
    address: '789 Main Street, Tucson, AZ 85701',
    listPrice: '$250,000',
    sellerName: 'Eliza Smith',
    notes: " I'll be in your neighborhood doing errands"
  }];

  var originatorEv;
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('sm');



  $scope.ShowInventoryModal = function(ev) {
    $mdDialog.show({
        controller: DialogController,
        templateUrl: 'Templates/inventoryModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

});

function DialogController($scope, $mdDialog, $mdMedia) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };

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


};
