'use strict';

/**
 * @ngdoc directive
 * @name classifiedApp.directive:search
 * @description
 * # search
 */
angular.module('classifiedApp')
	.factory('search',function($window,$rootScope){
		return function(scope){
			_.extend(scope,{
				courses_map:$window.courses,
				fancy:function(){return scope.selected_set;},
				not_found:[],
				courses:_.values($window.courses),
				results:_.values($window.courses),
				selected_set:{}
			});

	  	scope.setSelectedCourses = function(crs){
	  		console.log('setSelectedCourses');
	  		this.selected_courses=crs;
	  		return this;
	  	};


	  	scope.find = function(s){
	  		console.log('find');
	  		return scope.courses_map[s];
	  	};

	  	scope.fad = function(arr){
	  		console.log('fad');
	  		scope.not_found=[];

	  		_.each(_.uniq(arr),function(c){
	  			c=angular.lowercase(c).replace(/[-]/g,'');
	  			var v = scope.courses_map[c];

	  			if(v!==null){
	  				console.log('',v);
		  			// scope.selected_courses.push(v);
		        scope.selected_set[c]=v;
	  				// $window.courses[c].active=true;
	  			}
	  			else{
	  				scope.not_found.push(c);
	  			}
	  			console.log('Set',scope.selected_set);

	  		});
	  		scope.selected_courses=_.union(scope.selected_courses,_.values(scope.selected_set));
	  		console.log(scope.fancy());
	  	};
	    /**
	     * Search for categories.
	     */
	    scope.querySearch = function (query) {

	    	if(query && query.length<2)return 'at least 2 characters';
	    	// var results = Fuzz.filter(query,scope.allCategories,{extract:_.partial(_.property,_,'name')}) || [];
				var self=this;
				var results=[];
				if(query){
					var param={};

					var q=new RegExp('.*'+angular.lowercase(query).replace(/[-]/g,'')+'.*');
					param['name']=q;
					param['number']=q;
					results=_.findOr(scope.courses,param);
				}

	      this.results=results;
	      return results;
	    };

	    scope.itemChanged = function(chip){
	      console.log('Selected courses, chip',this.courses,this.selected_courses,chip);
	    	if(_.isPlainObject(chip)){
	        if(!scope.selected_set[chip.number]){

		        scope.selected_courses.push(chip);
		        scope.selected_set[chip.number]=chip;

	        }
	        // console.log(_.remove(scope.courses,_.matches(chip)));
	        _.remove(scope.courses,_.matches(chip));

	      }
	    };

	    /**
	     * Create filter this.for = function a query string
	     */
	    function createFilterFor(query) {
	      var lowercaseQuery = angular.lowercase(query).replace(/[-]/g,'');

	      return function filterFor(s) {
	        return (!scope.selected_set[s.number] && (angular.lowercase(s.name).indexOf(lowercaseQuery) !== -1 ||(s.number+'').indexOf(lowercaseQuery) !== -1) );
	      };
	    }

			scope.update=scope.itemChanged;
			scope.search=scope;
		};
	});
