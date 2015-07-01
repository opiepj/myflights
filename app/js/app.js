'use strict';

var myflightApp = angular.module('myflightApp', [
  'ngRoute',
  'myflightControllers',
  'myflightServices'
]);

myflightApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/flights', {
        templateUrl: 'partials/flight-list.html',
        controller: 'FlightListCtrl'
      }).
      when('/flights/:flightId', {
        templateUrl: 'partials/flight-detail.html',
        controller: 'FlightDetailCtrl'
      }).
      otherwise({
        redirectTo: '/flights'
      });
  }]);
