'use strict';

var dfs = require('../../utils/algorithms');

var myflightControllers = angular.module('myflightControllers', []);

// TODO: Consider a dashboard page, with user login functionality

myflightControllers.controller('FlightListCtrl', ['$scope', 'Flights', 'Airports',
  function ($scope, Flights, Airports) {
    $scope.flights = Flights.query();
    $scope.airports = Airports.query();
    // TODO: filter with earliest to oldest
    // TODO : allow the user to change the filter properties via click event.
    $scope.orderProp = 'date';
  }]);

myflightControllers.controller('FlightDetailCtrl', ['$scope', '$filter', '$routeParams', 'Flights', 'Airports',
  function ($scope, $filter, $routeParams, Flights, Airports) {
    // TODO: Fix my confidence on this
    $scope.flights = Flights.query();
    $scope.airports = Airports.query();
    $scope.Math = window.Math;
    $scope.taxRate = 0.8;
    $scope.fee = 4.0;

    $scope.flightPoints = function(startLocation, endLocation) {
      for(var airport in airports) {
        if (airports.hasOwnProperty(airport)){
          for(var i = 0; i < airport.length; i++) {
            if (airport.city == startLocation){
              var origin = airport;
            }
            if(airport.city == endLocation) {
              var destination = airport;
            }
            if(origin && destination) {
              return {
                'origin': origin,
                'destination': destination
              };
            }
          }
        }
      }
    }

    var routes = function(flightPoints) {
      var directFlights = [];
      var originFlights = [];
      var destinationFlights = [];
      for(var i = 0; i < flights.length; i++) {
        if(flights[i].origin == flightPoints.origin && 
          flights[i].destination == flightPoints.destination) {
          directFlights.push(flights[i]);
          continue;
        }
        if(flights[i].origin == flightPoints.origin) {
          originFlights.push(flights[i]);
        }
        if(flights[i].destination == flightPoints.destination) {
          destinationFlights.push(flights[i]);
        }
      } 
      return {
        "directFlights": directFlights,
        "originFlights": originFlights,
        "destinationFlights": destinationFlights
      };
    }

    $scope.flightRoutes = function () {
      var froutes = [];
      for (var l = 0; l < routes.directFlights.length; l++) {
        froutes.push(directFlights[l]);
      }
      for (var i = 0; i < routes.originFlights.length; i++) {
        // TODO: Check this out, this might not fire correcly (wrong comparrisons)
        froutes.push(bfs(routes.originFlights[i]), routes.destinationFlights);
      }
      return froutes;
    }

    });
  }]);