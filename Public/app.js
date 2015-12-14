var app = angular.module('simplreApp', ['ui.router', 'ngMaterial']);


app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'Templates/home.html',
            controller: 'MainCtrl'
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
        .state('user_state', {
            url: '/user_state',
            templateUrl: 'Templates/user_state.html',
            controller: 'MainCtrl'
        })
        .state('user_state.dashboard', {
            url: '/dashboard',
            templateUrl: 'Templates/dashboard.html',
            controller: 'MainCtrl'
        })
        .state('user_state.clients', {
            url: '/clients',
            templateUrl: 'Templates/clients.html',
            controller: 'ClientCtrl'
        })
        .state('user_state.inventory', {
            url: '/inventory',
            templateUrl: 'Templates/inventory.html',
            controller: 'InventoryCtrl'
        });

        // $locationProvider.html5Mode({
        //   enabled: true,
        //   requireBase: false
        // });

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
