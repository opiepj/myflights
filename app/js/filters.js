'use strict';

var myflightFilters = angular.module('myflightFilters', []);

myflightFilters.filter('airline', ['Airlines', function (Airlines) {
  return function (input) {
    var data = Airlines.query();
    if (!data[input]) {
      return 'unknown-airline';
    }
    return data[input];
  };
}]);