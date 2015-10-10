'use strict';

/**
 * @ngdoc filter
 * @name classifiedApp.filter:trim
 * @function
 * @description
 * # trim
 * Filter in the classifiedApp.
 */
angular.module('classifiedApp')
  .filter('trim', function () {
    return function (input) {
      return _.trunc(input,80).replace(/[-]/g,'')+'...';
    };
  });
