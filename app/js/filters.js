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

myflightFilters.filter('capitalize', function () {
  return function (input) {
    return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
  };
});