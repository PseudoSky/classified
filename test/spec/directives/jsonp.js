'use strict';

describe('Directive: jsonp', function () {

  // load the directive's module
  beforeEach(module('classifiedApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jsonp></jsonp>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jsonp directive');
  }));
});
