var angular = require('angular');
require('angular-mocks');
var header = require('./component.js');

describe('title component', function () {
  beforeEach(function () {
    angular
      .module('spotippoHeader', ['app/components/header/component.html'])
      .component('spotippoHeader', header);
    angular.mock.module('spotippoHeader');
  });

  it('should render \'Fountain Generator\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<spotippo-header title="\'Header\'"></spotippo-header>')($rootScope);
    $rootScope.$digest();
    var header = element.find('h3');
    expect(header.html().trim()).toEqual('Header');
  }));
});
