angular.module('simplreApp').controller('ClientCtrl', function($scope, $mdDialog, $mdMedia, ClientSvc) {


  $scope.getClients = function() {
    ClientSvc.getClients().then(function(res) {
      console.log(res)
      $scope.clients = res.data;
    });
  };

  $scope.getOneClient = function(id) {
    ClientSvc.getOneClient(id).then(function(response) {
      $scope.clients = response.data;
    });
  };

  $scope.getClients();

  $scope.postClient = function(ev, name, email, phone, type, buyerStatus, sellerStatus, source) {
    console.log(ev);
    ClientSvc.postClients(name, email, phone, type, buyerStatus, sellerStatus, source).then(function(res) {
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
      controller: 'ModalController',
      templateUrl: 'Templates/clientDetailModal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      locals: {
        client: thisClient
      }
    })
  };





});
