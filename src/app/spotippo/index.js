var angular = require('angular');
// var spotippo = require('./spotippo');
var moduleName = 'spotippo';
var spoButton = require('../components/spo-button/component');

module.exports = moduleName;

angular
  .module(moduleName, [])
  .component('spoButton', spoButton);
