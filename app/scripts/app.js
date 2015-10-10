'use strict';

/**
 * @ngdoc overview
 * @name classifiedApp
 * @description
 * # classifiedApp
 *
 * Main module of the application.
 */

angular.module('extracto', []);
angular
  .module('classifiedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngTouch',
    'angular.filter',
    'extracto'
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
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'AboutCtrl',
        controllerAs: 'result'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
})
