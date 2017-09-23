module.exports = {
  template: require('./main.html'),
  controller: Controller
};

/** @ngInject */
function Controller($http) {
  var $ctrl = this;

  $ctrl.params = {
    minprice: 0
  };

  $http({
    method: 'GET',
    url: '/api/properties?page=0'
  }).then(function (res) {
    $ctrl.data = res.data;
    $ctrl.properties = $ctrl.data.properties;
  });
}
