angular.module('simplreApp').controller('DashboardCtrl', function($scope, $mdDialog, $mdMedia, UserSvc, TaskSvc) {

  $scope.taskDate = new Date();
  $scope.newTask = {};

  $scope.getTask = function () {
    TaskSvc.getTasks().then(function(res){
      console.log(res.data);
      $scope.taskList = res.data;
    })
  };

  $scope.getTask();

  $scope.addTask = function (newTask) {
    TaskSvc.postTask(newTask).then(function(res){
      console.log(res.data);
    })
  };

  console.log(Date.now())


  // $scope.noteCounter = 0;
  // $scope.createNotification = function () {
  //   $scope.noteCounter++;
  //   console.log($scope.noteCounter);
  // };
  // $scope.clearNotification = function () {
  //   $scope.noteCounter = 0;
  // };

});
