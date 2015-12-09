angular.module('simplreApp').controller('ModalController', function($scope, MainSvc, $mdDialog, $mdMedia) {


  $scope.editClientFields = function () {
    document.getElementById('editClientAttr').hasAttribute('disabled') ? document.getElementById('editClientAttr').removeAttribute('disabled') : document.getElementById('editClientAttr').setAttribute('disabled', true);
  };




});
