module.exports = {
  template: require('./main.html'),
  controller: Controller
};

/** @ngInject */
function Controller($http) {
  var $ctrl = this;

  $ctrl.getById = function () {
    if ($ctrl.id > 0) {
      $http({
        method: 'GET',
        url: '/api/properties/' + $ctrl.id
      }).then(function (res) {
        $ctrl.data = res.data;
        $ctrl.properties = [$ctrl.data];
      });
    } else {
      $ctrl.search();
    }
  };

  $ctrl.search = function () {
    $http({
      method: 'GET',
      url: '/api/properties?page=0',
      params: $ctrl.params
    }).then(function (res) {
      $ctrl.data = res.data;
      $ctrl.properties = $ctrl.data.properties;
    });
  };

  function init() {
    $ctrl.search();
  }

  init();
}
