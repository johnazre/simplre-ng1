angular.module('simplreApp').service('MainSvc', function () {

  // this.checkLoggedin = function($q, $http, $location){
  //   // Initialize a new promise
  //   var deferred = $q.defer();
  //
  //   // Make an AJAX call to check if the user is logged in
  //   $http.get('/checklogged').success(function(user){
  //     // Authenticated
  //     if (user !== '0'){
  //       console.log(user);
  //       deferred.resolve();
  //     }
  //     // Not Authenticated
  //     else {
  //       console.log('no workie');
  //       deferred.reject();
  //       $location.url('/#/login');
  //     }
  //   });
  //
  //   return deferred.promise;
  // };

});
