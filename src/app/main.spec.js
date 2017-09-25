var angular = require('angular');
require('angular-mocks');
var main = require('./main');
var service = require('./spotippo/service');

var properties = {
  properties: [
    {
      id: 1,
      title: 'Imóvel código 1, com 3 quartos e 2 banheiros.',
      price: 643000,
      description: 'Laboris quis quis elit commodo eiusmod qui exercitation. In laborum fugiat quis minim occaecat id.',
      lat: 1257,
      long: 928,
      beds: 3,
      baths: 2,
      squareMeters: 61
    },
    {
      id: 2,
      title: 'Imóvel código 2, com 4 quartos e 3 banheiros.',
      price: 949000,
      description: 'Anim mollit aliqua adipisicing labore magna pariatur aute nulla. Amet veniam ut voluptate aliquip esse officia adipisicing ipsum.',
      lat: 679,
      long: 680,
      beds: 4,
      baths: 3,
      squareMeters: 94
    }
  ]
};

describe('main component', function () {
  beforeEach(function () {
    angular
      .module('app', ['app/main.html'])
      .component('app', main)
      .factory('propertyService', service);
    angular.mock.module('app');
  });

  it('should render the header and property', angular.mock.inject(function ($rootScope, $compile, $httpBackend, $log) {
    $httpBackend.when('GET', '/api/properties').respond(properties);

    var element = $compile('<app>Loading...</app>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    $log.log(element);
    expect(element.find('spotippo-header').length).toEqual(1);
    expect(element.find('property').length).toEqual(2);
  }));
});
