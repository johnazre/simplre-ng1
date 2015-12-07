var app = angular.module('simplreApp', ['ui.router', 'ngMaterial']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('home', {
            url: '/',
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
            templateUrl: 'Templates/login.html',
            controller: 'RegisterCtrl'
        })
        .state('user', {
            url: '/user',
            templateUrl: 'Templates/user.html',
            controller: 'MainCtrl'
        })
        .state('user.dashboard', {
            url: '/dashboard',
            templateUrl: 'Templates/dashboard.html',
            controller: 'MainCtrl'
        })
        .state('user.goals', {
            url: '/usergoals',
            templateUrl: 'Templates/goals.html',
            controller: 'MainCtrl'
        })
        .state('user.inventory', {
            url: '/inventory',
            templateUrl: 'Templates/inventory.html',
            controller: 'MainCtrl'
        });

        // $locationProvider.html5Mode({
        //   enabled: true,
        //   requireBase: false
        // });

    $urlRouterProvider
        .otherwise('/');
});

app.config(function($mdThemingProvider) {
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
