var angular = require('angular');
var property = require('./property');
var moduleName = 'spotippo';
var spoLink = require('../components/spo-link/component');

module.exports = moduleName;

angular
  .module(moduleName, [])
  .component('spoLink', spoLink)
  .component('property', property);
