'use strict';

angular.module('calendrierApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/event/',{
            templateUrl: 'views/event.html',
            controller: 'DetailCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
