var angular = require('angular');
require('angular-mocks');
var link = require('./component');

describe('footer component', function () {
  beforeEach(function () {
    angular
      .module('spotippoLink', ['app/components/spo-link/component.html'])
      .component('spoLink', link);
    angular.mock.module('spotippoLink');
  });

  it('should render \'link\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<spo-link text="Teste"></spo-link>')($rootScope);
    $rootScope.$digest();
    var link = element.find('span');
    expect(link.html().trim()).toEqual('Teste');
  }));
});
