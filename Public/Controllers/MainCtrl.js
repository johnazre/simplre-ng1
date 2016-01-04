angular.module('simplreApp').controller('MainCtrl', function($scope, MainSvc, $mdDialog, $mdMedia, UserSvc) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.menu = [{
    link: 'user.dashboard',
    title: 'Dashboard'
  }, {
    link: '#',
    title: 'Leads (Coming Soon)',
  }, {
    link: 'user.clients',
    title: 'Clients',
  }, {
    link: 'user.inventory',
    title: 'Inventory',
  },];
  $scope.admin = [{
    link: '#',
    title: 'My Yearly Goals (Coming Soon)',
  },{
    link: 'user.profile',
    title: 'My Profile',
  }];


  $scope.getUserData = function () {
    UserSvc.getUserData().then(function(res) {
      $scope.user = res.data;
    });
  }();

  var originatorEv;
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

});
