'use strict';

/**
 * @ngdoc function
 * @name classifiedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classifiedApp
 */
angular.module('classifiedApp')
  .controller('Results', function ($scope,$rootScope) {
		var degree = [ '67306',
		  '67353',
		  '76272',
		  '67370',
		  '70342',
		  '70455',
		  '70465',
		  '70449',
		  '16311',
		  '60415',
		  '67442',
		  '73372',
		  '19403',
		  '79318',
		  '67362',
		  '36217',
		  '73363',
		  '15112',
		  '15121',
		  '21111',
		  '21256',
		  '67262',
		  '67272',
		  '67373',
		  '67475' ];

		var me=['21120',
						'21122',
						'36201',
						'15121',
						'67250',
						'67272',
						'67371',
						'67373',
						'67475',
						'67308',
						'36315',
						'79104',
						'21257',
						'33104',
						'15122',
						'51262',
						'15112',
						'99101',
						'80104',
						'05435',
						'15294',
						'16375',
						'16456',
						'21240',
						'67100',
						'67101',
						'67103',
						'67390',
						'70160',
						'79301',
						'36217'];
		 $scope.difference=function(){
		 	console.log(_.pluck($rootScope.me,'number'));
		 	console.log(_.difference(_.pluck($rootScope.me,'number')),degree);
		 };

		 $scope.delta=$scope.difference;
  });
