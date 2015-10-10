'use strict';

/**
 * @ngdoc filter
 * @name classifiedApp.filter:groups
 * @function
 * @description
 * # groups
 * Filter in the classifiedApp.
 */
angular.module('classifiedApp')
  .filter('groups', function () {
    return function (input) {
      return _.groupBy(input,function(d){console.log(d);return d.number.substr(0,2);});
    };
  });
