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
    link: 'user.profile',
    title: 'My Profile',
  }];

  $scope.getValue = function () {
    console.log($scope.user.listingSigned);
  }

});
