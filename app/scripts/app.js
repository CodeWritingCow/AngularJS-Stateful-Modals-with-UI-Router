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
      $stateProvider.state("Default", {});

      $stateProvider.state("Modal", {
          views: {
              "modal": {
                  templateUrl: "modal.html"
              }
          },
          // Closes modal if user clicks outside or presses ESC
          onEnter: ["$state", function($state) {
              $(document).on("keyup", function(e) {
                  if(e.keyCode == 27) {
                      $(document).off("keyup");
                      $state.go("Default");
                  }
              });

              $(document).on("click", ".Modal-backdrop, .Modal-holder", function(){
                  $state.go("Default");
              });

              // Prevents modal from closing if user clicks inside
              $(document).on("click", ".Modal-box, .Modal-box *", function(e){
                  e.stopPropagation();
              });
          }],
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