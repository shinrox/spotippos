module.exports = {
  template: require('./spotippo.html'),
  bindings: {
    tech: '<'
  },
  controller: Controller,
  controllerAs: 'vm'
};

/** @ngInject */
function Controller($http, $log) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/properties'
  }).then(function (res) {
    vm.data = res.data;
    $log.log(res.data);
  });
}
