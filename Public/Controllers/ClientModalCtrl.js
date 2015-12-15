angular.module('simplreApp').controller('ClientModalCtrl', function($scope, ClientSvc, client) {


  $scope.editClientFields = function () {
    document.getElementById('editClientAttr').hasAttribute('readonly') ? document.getElementById('editClientAttr').removeAttribute('readonly') : document.getElementById('editClientAttr').setAttribute('readonly');
  };
  $scope.editBuyerFields = function () {
    document.getElementById('editBuyerAttr').hasAttribute('disabled') ? document.getElementById('editBuyerAttr').removeAttribute('disabled') : document.getElementById('editBuyerAttr').setAttribute('disabled', true);
  };
  $scope.editListingFields = function () {
    document.getElementById('editListAttr').hasAttribute('disabled') ? document.getElementById('editListAttr').removeAttribute('disabled') : document.getElementById('editListAttr').setAttribute('disabled', true);
  };

  $scope.clients = client;
  console.log(client);


  $scope.postClient = function (name, email, phone, type, buyerStatus, sellerStatus, source) {
    ClientSvc.postClients(name, email, phone, type, buyerStatus, sellerStatus, source).then( function (res) {
      console.log(res);
    });
  };










});
