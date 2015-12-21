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
  .config(function ($stateProvider) {
      $stateProvider.state("Modal", {
          views: {
              "modal": {
                  templateUrl: "modal.html"
              }
          },
          abstract: true
      });
      
      $stateProvider.state("Modal.confirmAddToCart", {
          views: {
              "modal": {
                  templateUrl: "modals/confirm.html"
              }
          }
      });
});