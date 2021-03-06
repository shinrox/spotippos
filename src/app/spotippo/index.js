var angular = require('angular');
var property = require('./property');
var moduleName = 'spotippo';
var spoLink = require('../components/spo-link/component');
var service = require('./service');

module.exports = moduleName;

angular
  .module(moduleName, [])
  .component('spoLink', spoLink)
  .component('property', property)
  .factory('propertyService', service);
