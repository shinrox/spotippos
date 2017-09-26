var angular = require('angular');

var mainModule = require('./app/spotippo/index');
require('angular-ui-router');
require('angular-input-masks');
require('angular-paging');
require('angular-loading-bar');
var routesConfig = require('./routes');
var loadingConfig = require('./config/loadingBar/config');

var main = require('./app/main');
var header = require('./app/components/header/component');

require('./index.scss');

angular
  .module('app', [mainModule, 'ui.router', 'ui.utils.masks', 'bw.paging', 'angular-loading-bar'])
  .config(routesConfig)
  .config(loadingConfig)
  .component('app', main)
  .component('spotippoHeader', header);

angular.bootstrap(document, ['app']);
