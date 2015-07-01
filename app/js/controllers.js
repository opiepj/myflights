'use strict';

var myflightControllers = angular.module('myflightControllers', []);

// TODO: Consider a dashboard page, with user login functionality

myflightControllers.controller('FlightListCtrl', ['$scope', 'Database',
  function ($scope, Database) {
    $scope.data = Database.query();
    // TODO: filter with earliest to oldest
    // TODO : allow the user to change the filter properties via click event.
    $scope.orderProp = 'date';
  }]);

myflightControllers.controller('FlightDetailCtrl', ['$scope', '$routeParams', 'Database',
  function ($scope, $routeParams, Database) {
    $scope.data = Database.get({flightId: $routeParams.flightId});
  }]);