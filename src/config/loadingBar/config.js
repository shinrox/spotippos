module.exports = config;

/** @ngInject */
function config(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}
