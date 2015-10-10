'use strict';

describe('Filter: groups', function () {

  // load the filter's module
  beforeEach(module('classifiedApp'));

  // initialize a new instance of the filter before each test
  var groups;
  beforeEach(inject(function ($filter) {
    groups = $filter('groups');
  }));

  it('should return the input prefixed with "groups filter:"', function () {
    var text = 'angularjs';
    expect(groups(text)).toBe('groups filter: ' + text);
  });

});
