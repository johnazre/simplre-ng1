angular.module('simplreApp').controller('MainCtrl', function($scope, MainSvc, $mdDialog, $mdMedia) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.menu = [{
    link: 'user.dashboard',
    title: 'Dashboard'
  }, {
    link: 'user.clients',
    title: 'Clients',
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

  $scope.getValue = function () {
    console.log($scope.user.listingSigned);
  }

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

});
