var angular = require('angular');
require('angular-mocks');
var property = require('./property');

var propertyJson = {
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

function findIn(element, selector) {
  return angular.element(element[0].querySelector(selector));
}

describe('property component', function () {
  beforeEach(function() {
    angular
    .module('property', ['app/spotippo/property.html'])
    .component('property', property);
    angular.mock.module('property');
  });

  it('should render 3 component', angular.mock.inject(function ($rootScope, $compile) {
    var scope = $rootScope.$new();
    scope.property = propertyJson;
    var element = $compile('<property property="property"></property>')(scope);
    scope.$digest();

    var id = findIn(element, 'p.property-id span');
    expect(Number(id.html().trim())).toEqual(propertyJson.id);

    var description = findIn(element, 'p.description');
    expect(description.html().trim()).toEqual(propertyJson.description);

    var area = findIn(element, '.area span');
    expect(Number(area.html().trim())).toEqual(propertyJson.squareMeters);

    var baths = findIn(element, '.baths span');
    expect(Number(baths.html().trim())).toEqual(propertyJson.baths);

    var beds = findIn(element, '.beds span');
    expect(Number(beds.html().trim())).toEqual(propertyJson.beds);
  }));
});
