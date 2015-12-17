angular.module('simplreApp').controller('ClientCtrl', function($scope, $mdDialog, $mdMedia, ClientSvc, UserSvc) {


  $scope.getClients = function() {
    ClientSvc.getClients().then(function(res) {
      console.log(res)
      $scope.clients = res.data;
    });
  };
  //
  // $scope.getOneClient = function(id) {
  //   ClientSvc.getOneClient(id).then(function(response) {
  //     $scope.singleClient = response.data;
  //   });
  // };

  $scope.getClients();

  $scope.postClient = function(ev, user, name, email, phone, type, buyerStatus, sellerStatus, source) {
    console.log(ev);
    ClientSvc.postClients(user, name, email, phone, type, buyerStatus, sellerStatus, source).then(function(res) {
      console.log(res);
    });
    $scope.getClients();
  };

  $scope.putClient = function (ev, id, name, email, phone, type, buyerStatus, sellerStatus, source) {
    console.log(ev);

    ClientSvc.putClient(id, name, email, phone, type, buyerStatus, sellerStatus, source).then(function(res){
      console.log(res);
    });
  };


  //------------ Opens hamburger menu on the top-right --------------//
  var originatorEv;
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

  //------------ Opens the modal --------------//
  $scope.addClientModal = function(ev) {
    $mdDialog.show({
      controller: 'ClientCtrl',
      templateUrl: 'Templates/clientInputForm.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
    });
    console.log(ev);
  };

  $scope.clientDetailModal = function(ev, thisClient) {
    $mdDialog.show({
      controller: 'ClientModalCtrl',
      templateUrl: 'Templates/clientDetailModal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        clients: thisClient
      }
    })
  };

  $scope.getUserData = function () {
    UserSvc.getUserData().then(function(res) {
      $scope.user = res.data;
      console.log($scope.user);
    })
  }();



});
