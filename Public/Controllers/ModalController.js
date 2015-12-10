angular.module('simplreApp').controller('ModalController', function($scope) {


  $scope.editClientFields = function () {
    document.getElementById('editClientAttr').hasAttribute('disabled') ? document.getElementById('editClientAttr').removeAttribute('disabled') : document.getElementById('editClientAttr').setAttribute('disabled', true);
  };
  $scope.editBuyerFields = function () {
    document.getElementById('editBuyerAttr').hasAttribute('disabled') ? document.getElementById('editBuyerAttr').removeAttribute('disabled') : document.getElementById('editBuyerAttr').setAttribute('disabled', true);
  };
  $scope.editListingFields = function () {
    document.getElementById('editListAttr').hasAttribute('disabled') ? document.getElementById('editListAttr').removeAttribute('disabled') : document.getElementById('editListAttr').setAttribute('disabled', true);
  };




});
