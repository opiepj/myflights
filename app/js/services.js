'use strict';

var myflightServices = angular.module('myflightServices', ['ngResource']);

myflightServices.factory('Database', ['$resource',
  function ($resource) {
    return $resource('fixtures/:flightId.json', {}, {
      query: {method: 'GET', params: {flightId: 'flights'}, isArray: true}
    });
  }]);

myflightServices.factory('Airlines', ['$resource',
  function ($resource) {
    return $resource('fixtures/airlines.json', {}, {
      query: {method: 'GET', isArray: true}
    });
  }]);