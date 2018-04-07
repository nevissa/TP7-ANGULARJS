'use strict';

/**
 * @ngdoc overview
 * @name tp7AngularjsApp
 * @description
 * # tp7AngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('tp7AngularjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'home',
        controllerAs: 'home'

      })

      .when('/person', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
      // route for the contact page




  ;


