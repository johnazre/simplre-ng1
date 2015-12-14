var app = angular.module('simplreApp', ['ui.router', 'ngMaterial']);


app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {

  var checkLoggedin = function($q, $http, $location){
    // Initialize a new promise
    var deferred = $q.defer();
    // Make an AJAX call to check if the user is logged in

    $http.get('/checklogged').success(function(user){
      // Authenticated
      if (user !== '0') deferred.resolve();
      // Not Authenticated
      else {
        deferred.reject();
        $location.url('/#/login');
      }
    });

    return deferred.promise;
  };

  $httpProvider.interceptors.push(function($q, $location) {
    return {
      response: function(response) {
        // do something on success
        return response;
      },

      responseError: function(response) {
        if (response.status === 401){
          $location.url('/#/login');
        }
        return $q.reject(response);
      }
    };
  });

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'Templates/home.html',
            controller: 'MainCtrl',
        })
        .state('register', {
            url: '/register',
            templateUrl: 'Templates/register.html',
            controller: 'RegisterCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'Templates/userlogin.html',
            controller: 'RegisterCtrl'
        })
        .state('logout', {
            url: '/logout',
            templateUrl: 'Templates/loggedout.html',
            controller: 'RegisterCtrl'
        })
        .state('user', {
            url: '/user',
            templateUrl: 'Templates/user.html',
            controller: 'MainCtrl',

        })
        .state('user.dashboard', {
            url: '/dashboard',
            templateUrl: 'Templates/dashboard.html',
            controller: 'MainCtrl',
            resolve: {
              checkAuth: checkLoggedin
            }

        })
        .state('user.clients', {
            url: '/clients',
            templateUrl: 'Templates/clients.html',
            controller: 'ClientCtrl',
            resolve: {
              checkAuth: checkLoggedin
            }

        })
        .state('user.inventory', {
            url: '/inventory',
            templateUrl: 'Templates/inventory.html',
            controller: 'InventoryCtrl',
            resolve: {
              checkAuth: checkLoggedin
            }

        })
        .state('user.profile', {
            url: '/profile',
            templateUrl: 'Templates/userProfile.html',
            controller: 'MainCtrl',
            resolve: {
              checkAuth: checkLoggedin
            }

        });


    $urlRouterProvider
        .otherwise('/home');

    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('grey')



});
