var app = angular.module('simplreApp', ['ui.router', 'ngMaterial']);


app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {

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
            resolve: {
              checkLogin: function (MainSvc) {
                return MainSvc.checkLoggedin;
              }
            }
        })
        .state('user.dashboard', {
            url: '/dashboard',
            templateUrl: 'Templates/dashboard.html',
            controller: 'MainCtrl',
            resolve: {
              checkLogin: function (MainSvc) {
                return MainSvc.checkLoggedin;
              }
            }
        })
        .state('user.clients', {
            url: '/clients',
            templateUrl: 'Templates/clients.html',
            controller: 'ClientCtrl',
            resolve: {
              checkLogin: function (MainSvc) {
                return MainSvc.checkLoggedin;
              }
            }
        })
        .state('user.inventory', {
            url: '/inventory',
            templateUrl: 'Templates/inventory.html',
            controller: 'InventoryCtrl',
            resolve: {
              checkLogin: function (MainSvc) {
                return MainSvc.checkLoggedin;
              }
            }
        })
        .state('user.profile', {
            url: '/profile',
            templateUrl: 'Templates/userProfile.html',
            controller: 'MainCtrl',
            resolve: {
              checkLogin: function (MainSvc) {
                return MainSvc.checkLoggedin;
              }
            }
        });


    $urlRouterProvider
        .otherwise('/login');

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
