angular.module('simplreApp').controller('ClientCtrl', function ($scope, $mdDialog, $mdMedia, ClientSvc) {

  // $scope.clients = [
  //   {
  //     name: "John Doe",
  //     email: "john@doe.com",
  //     phone: "555-555-5555",
  //     type: 'Seller',
  //     sellerStatus: "Intereted",
  //     source: "Friend"
  //   },
  //   {
  //     name: "John Does",
  //     email: "john@doe.com",
  //     phone: "555-555-5555",
  //     type: 'Seller',
  //     sellerStatus: "Intereted",
  //     source: "Friend"
  //   },
  //   {
  //     name: "John Doe",
  //     email: "john@doe.com",
  //     phone: "555-555-5555",
  //     type: 'Seller',
  //     sellerStatus: "Intereted",
  //     source: "Friend"
  //   },
  //   {
  //     name: "John Doe",
  //     email: "john@doe.com",
  //     phone: "555-555-5555",
  //     type: 'Seller',
  //     sellerStatus: "Intereted",
  //     source: "Friend"
  //   },
  // ];

  $scope.getClients = function() {
      ClientSvc.getClients().then(function(response){
        $scope.clients = response.data;
      });
  };

  $scope.getClients();


  //------------ Opens hamburger menu on the top-right --------------//
  var originatorEv;
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

  //------------ Opens the modal --------------//
  $scope.addClientModal = function(ev) {
    $mdDialog.show({
        controller: 'ModalController',
        templateUrl: 'Templates/clientInputForm.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

  $scope.clientDetailModal = function(ev) {
    $mdDialog.show({
        controller: 'ModalController',
        templateUrl: 'Templates/clientDetailModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
  };

});

function DialogController($scope, $mdDialog, $mdMedia) {

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
}
