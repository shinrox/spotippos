var angular = require('angular');

var spotippo = require('./spotippo');

var spotippoModule = 'spotippo';

module.exports = spotippoModule;

angular
  .module(spotippoModule, [])
  .component('spotippo', spotippo);
