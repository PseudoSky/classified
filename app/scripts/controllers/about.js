'use strict';

/**
 * @ngdoc function
 * @name classifiedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classifiedApp
 */
angular.module('classifiedApp')
  .controller('AboutCtrl', function ($scope,$window,$rootScope) {
	var is_degree = [ '67306',
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

		var me=[
						'21120',
						'05435',
						'15112',
						'15121',
						'15122',
						'15294',
						'16375',
						'16456',
						'21122',
						'21240',
						'21257',
						'33104',
						'36201',
						'36315',
						'51262',
						'67100',
						'67101',
						'67103',
						'67250',
						'67272',
						'67308',
						'67371',
						'67373',
						'67390',
						'67475',
						'70160',
						'79104',
						'79301',
						'80104',
						'99101',
						'36217'
			];

		 $scope.difference=function(){


		 	return _.difference(is_degree,me);
		 };
		 $window.courses['16375']={name:'Robotics for Creative Practice'};
		$window.courses['67371']={name:'Fundamentals Of System Development'};
		$window.courses['67103']={name:'Fundamentals of Web Design'};
		$window.courses['16456']={name:'Reality Computing'};
		$scope.delta=$scope.difference();
		console.log($scope.delta);

		 $scope.me=me;
		 $scope.degree=is_degree;
		 $scope.degrees=$window.degrees;
		 $scope.dat={};
		 _.each(me,function(k){$scope.dat[k]=$window.courses[k];});
  });
