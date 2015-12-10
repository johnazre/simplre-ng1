angular.module('simplreApp').controller('ModalController', function($scope, ClientSvc) {


  $scope.editClientFields = function () {
    document.getElementById('editClientAttr').hasAttribute('readonly') ? document.getElementById('editClientAttr').removeAttribute('readonly') : document.getElementById('editClientAttr').setAttribute('readonly');
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
