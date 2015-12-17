angular.module('simplreApp').controller('ClientModalCtrl', function($scope, ClientSvc, clients, UserSvc) {


  $scope.editClientFields = function () {
    document.getElementById('editClientAttr').hasAttribute('readonly') ? document.getElementById('editClientAttr').removeAttribute('readonly') : document.getElementById('editClientAttr').setAttribute('readonly');
  };
  $scope.editBuyerFields = function () {
    document.getElementById('editBuyerAttr').hasAttribute('disabled') ? document.getElementById('editBuyerAttr').removeAttribute('disabled') : document.getElementById('editBuyerAttr').setAttribute('disabled', true);
  };
  $scope.editListingFields = function () {
    document.getElementById('editListAttr').hasAttribute('disabled') ? document.getElementById('editListAttr').removeAttribute('disabled') : document.getElementById('editListAttr').setAttribute('disabled', true);
  };


  $scope.postClient = function(ev, user, name, email, phone, type, buyerStatus, sellerStatus, source) {
    console.log(ev);
    ClientSvc.postClients(user, name, email, phone, type, buyerStatus, sellerStatus, source).then(function(res) {
      console.log(res);
    });
  };

  $scope.putClient = function (ev, id, name, email, phone, type, buyerStatus, sellerStatus, source) {
    console.log(ev);

    ClientSvc.editClient(id, name, email, phone, type, buyerStatus, sellerStatus, source).then(function(res){
      console.log(res);
    });
  };


  $scope.clients = clients;

  $scope.getUserData = function () {
    UserSvc.getUserData().then(function(res) {
      $scope.user = res.data;
      console.log($scope.user);
    })
  }();





});
