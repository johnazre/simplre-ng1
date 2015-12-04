var app = angular.module('simplreApp', ['ui.router', 'ngMaterial']);

app.config(function ($stateProvider, $urlRouterProvider) {

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
            url: 'login',
            templateUrl: 'Templates/login.html',
            controller: 'RegisterCtrl'
        });

    $urlRouterProvider
        .otherwise('/');
});
