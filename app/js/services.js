'use strict';

var myflightServices = angular.module('myflightServices', ['ngResource']);

myflightServices.factory('Flights', ['$resource',
  function ($resource) {
    return $resource('fixtures/flights.json', {}, {
      query: {method: 'GET', params: {flightId: 'flights'}, isArray: true}
    });
  }]);

myflightServices.factory('Airports', ['$resource',
  function ($resource) {
    return $resource('fixtures/airports.json', {}, {
      query: {method: 'GET', params: {airportId: 'airports'}, isArray: true}
    });
  }]);