'use strict';




var csvImport = angular.module('classifiedApp');

csvImport.directive('extracto', function() {
	return {
		restrict: 'EA',
		transclude: true,
		replace: true,
		scope:false,

		templateUrl: 'views/extracto.html',
		link: function(scope, element,$rootScope) {
			element.on('keyup', function(e){
				if ( scope.content != null ) {
					var content = {
						csv: scope.content,
						header: scope.header,
						separator: e.target.value
					};
					scope.result = fileToJSON(content);
					scope.$apply();
				}
			});

			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
				if(!onChangeEvent.target.files[0]) return false;
				scope.filename = onChangeEvent.target.files[0].name;
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						var content = {
							data: onLoadEvent.target.result.replace(/\r\n|\r/g,'\n'),
							header: scope.header,
							separator: scope.separator
						};
						console.log('DATA',content.data.split('\n'));
						scope.content = content;
						scope.result = fileToJSON(content);
						scope.result.filename = scope.filename;
						// scope.selected_courses=scope.result;
						console.log(scope.search.fad);
						scope.search.fad(scope.result);
					});
				};

				if ( (onChangeEvent.target.type === "file") && (onChangeEvent.target.files != null || onChangeEvent.srcElement.files != null) )  {
					reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
				} else {
					if ( scope.content != null ) {
						var content = {
							csv: scope.content,
							header: !scope.header,
							separator: scope.separator
						};
						scope.result = fileToJSON(content);

					}
				}
			});
		  scope.toPrettyJSON = function (json, tabWidth) {
		  	console.log(json);
				var objStr = JSON.stringify(json);
				var obj = null;
				try {
					obj = $parse(objStr)({});
				} catch(e){
					// eat $parse error
					return _lastGoodResult;
				}

				var result = JSON.stringify(obj, null, Number(tabWidth));
				_lastGoodResult = result;

				return result;
		  };

			var fileToJSON = function(content) {
				var lines=content.data.split('\n');
				var result = [];
				var start = 0;
				var columnCount = lines[0].split(content.separator).length;

				var headers = [];
				if (content.header) {
					headers=lines[0].split(content.separator||',').map(_.trim).map(function(s){return s.toLowerCase()});

					console.log(headers,typeof headers);
					start = 1;
				}else{
					headers.push('courses');
				}
				console.log('H',headers);
				for (var i=start; i<lines.length; i++) {
					var obj = {};
					var currentline=lines[i].split(new RegExp(content.separator+'(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)'));
					if ( currentline.length === columnCount ) {

							for (var j=0; j<headers.length; j++) {
								obj[(headers[j]||(j+'')).toLowerCase()] = _.trim(currentline[j]).replace(/\'/g,'');
							}

						result.push(obj);
					}
				}

				return _.pluck(result,'courses');
			};
		}
	};
});

csvImport.directive("dropzone", function() {
    return {
        restrict : "A",
        link: function (scope, elem) {
            elem.bind('drop', function(evt) {
                evt.stopPropagation();
                evt.preventDefault();

                var files = evt.dataTransfer.files;
                for (var i = 0, f; f = files[i]; i++) {
                    var reader = new FileReader();
                    reader.readAsArrayBuffer(f);

                    reader.onload = (function(theFile) {
                        return function(e) {
                            var newFile = { name : theFile.name,
                                type : theFile.type,
                                size : theFile.size,
                                lastModifiedDate : theFile.lastModifiedDate
                            };

                            scope.addfile(newFile);
                        };
                    })(f);
                }
            });
        }
    };
});