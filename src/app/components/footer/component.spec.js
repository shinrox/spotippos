var angular = require('angular');
require('angular-mocks');
var footer = require('./component');

describe('footer component', function () {
  beforeEach(function () {
    angular
      .module('spotippoFooter', ['app/components/footer/component.html'])
      .component('spotippoFooter', footer);
    angular.mock.module('spotippoFooter');
  });

  it('should render \'Footer\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<spotippo-footer></spotippo-footer>')($rootScope);
    $rootScope.$digest();
    var footer = element.find('a');
    expect(footer.html().trim()).toEqual('Footer');
  }));
});
