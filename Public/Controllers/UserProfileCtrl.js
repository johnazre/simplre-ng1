angular.module('simplreApp').controller('UserProfileCtrl', function($scope, $mdDialog, $mdMedia, UserSvc) {


  $scope.getUserData = function () {
    UserSvc.getUserData().then(function(res) {
      $scope.user = res.data;
      console.log($scope.user);
    })
  }();

  $scope.editUserData = function (ev, user, name, email) {
    console.log(ev);

    UserSvc.editUserData(user, name, email).then(function(res){
      console.log(res);
    });
  };

});
