var angular = require('angular');

var spotippoModule = require('./app/spotippo/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/components/header/component');
var footer = require('./app/components/footer/component');

require('./index.scss');

angular
  .module('app', [spotippoModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('spotippoHeader', header)
  .component('spotippoFooter', footer);

angular.bootstrap(document, ['app']);
