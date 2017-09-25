var angular = require('angular');
require('angular-mocks');
var property = require('./property');

var json = {
  id: 1,
  title: 'Imóvel código 1, com 3 quartos e 2 banheiros.',
  price: 643000,
  description: 'Laboris quis quis elit commodo eiusmod qui exercitation. In laborum fugiat quis minim occaecat id.',
  lat: 1257,
  long: 928,
  beds: 3,
  baths: 2,
  squareMeters: 61
};

describe('property component', function () {
  beforeEach(function () {
    angular
    .module('property', ['app/spotippo/property.html'])
    .component('property', property);
    angular.mock.module('property');
  });

  it('should render 3 elements <li>', angular.mock.inject(function ($rootScope, $compile, $httpBackend) {
    $httpBackend.when('GET', '/api/properties').respond(properties);
    var element = $compile('<property property="json"></property>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    var property = element.find('li');
    expect(property.length).toEqual(2);
  }));
});
