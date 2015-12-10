angular.module('simplreApp').controller('ModalController', function($scope, ClientSvc) {


  $scope.editClientFields = function () {
    document.getElementById('editClientAttr').hasAttribute('disabled') ? document.getElementById('editClientAttr').removeAttribute('disabled') : document.getElementById('editClientAttr').setAttribute('disabled', true);
  };
  $scope.editBuyerFields = function () {
    document.getElementById('editBuyerAttr').hasAttribute('disabled') ? document.getElementById('editBuyerAttr').removeAttribute('disabled') : document.getElementById('editBuyerAttr').setAttribute('disabled', true);
  };
  $scope.editListingFields = function () {
    document.getElementById('editListAttr').hasAttribute('disabled') ? document.getElementById('editListAttr').removeAttribute('disabled') : document.getElementById('editListAttr').setAttribute('disabled', true);
  };

  $scope.clients = {};

  $scope.getClients = function() {
      ClientSvc.getClients().then(function(response){
        $scope.clients = response.data;
        console.log(response.data);
      });
  };

  $scope.postClient = function (name, email, phone, type, source) {
    ClientSvc.postClients(name, email, phone, type, source).then( function (res) {
      console.log(res);
    });
  };

  $scope.getClients();


});
