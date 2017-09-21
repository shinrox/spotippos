var angular = require('angular');
require('angular-mocks');
var spotippo = require('./spotippo');

var spotippoJson = {
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

describe('spotippo component', function () {
  beforeEach(function () {
    angular
    .module('spotippo', ['app/spotippo/spotippo.html'])
    .component('spotippo', spotippo);
    angular.mock.module('spotippo');
  });

  it('should render 3 elements <li>', angular.mock.inject(function ($rootScope, $compile, $httpBackend) {
    $httpBackend.when('GET', '/api/properties').respond(spotippoJson);
    var element = $compile('<spotippo></spotippo>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    var spotippo = element.find('li');
    expect(spotippo.length).toEqual(2);
  }));
});
