'use strict';

/**
 * @ngdoc overview
 * @name angularJsStatefulModalsWithUiRouterApp
 * @description
 * # angularJsStatefulModalsWithUiRouterApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsStatefulModalsWithUiRouterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
