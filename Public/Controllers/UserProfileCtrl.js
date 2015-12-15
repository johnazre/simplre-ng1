angular.module('simplreApp').controller('UserProfileCtrl', function($scope, $mdDialog, $mdMedia, UserSvc) {


  $scope.getUserData = function () {
    UserSvc.getUserData().then(function(res) {
      $scope.user = res.data;
      console.log($scope.user);
    })
  }();


});
