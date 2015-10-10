'use strict';

/**
 * @ngdoc function
 * @name classifiedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the classifiedApp
 */
angular.module('classifiedApp')
  .controller('MainCtrl', function ($scope, $rootScope,search) {
    $rootScope.search=search($scope);

  	$rootScope.selected_courses=[];
    $scope.selected_courses=$rootScope.selected_courses;

    $scope.itemChanged=$scope.itemChanged;
    $scope.chips=[];

    $scope.searchText='';
    $scope.querySearch = $scope.querySearch;

    $scope.filterSelected = true;



  });
