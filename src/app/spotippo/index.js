var angular = require('angular');
var property = require('./property');
var moduleName = 'spotippo';
var spoButton = require('../components/spo-button/component');

module.exports = moduleName;

angular
  .module(moduleName, [])
  .component('spoButton', spoButton)
  .component('property', property);
