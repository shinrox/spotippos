var angular = require('angular');

var mainModule = require('./app/spotippo/index');
require('angular-ui-router');
require('angular-input-masks');
require('angular-paging');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/components/header/component');

require('./index.scss');

angular
  .module('app', [mainModule, 'ui.router', 'ui.utils.masks', 'bw.paging'])
  .config(routesConfig)
  .component('app', main)
  .component('spotippoHeader', header);

angular.bootstrap(document, ['app']);
