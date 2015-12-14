angular.module('simplreApp').controller('MainCtrl', function($scope, MainSvc, $mdDialog, $mdMedia) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.menu = [{
    link: 'user_state.dashboard',
    title: 'Dashboard'
  }, {
    link: 'user_state.clients',
    title: 'Clients',
  }, {
    link: 'user_state.inventory',
    title: 'Inventory',
  }];
  $scope.admin = [{
    link: 'user_state.clients',
    title: 'My Account',
  }];

  $scope.getValue = function () {
    console.log($scope.user.listingSigned);
  }

});
