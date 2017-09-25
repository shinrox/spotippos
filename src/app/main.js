module.exports = {
  template: require('./main.html'),
  controller: Controller
};

/** @ngInject */
function Controller(propertyService) {
  var $ctrl = this;

  $ctrl.getById = function () {
    if ($ctrl.id > 0) {
      propertyService.getById($ctrl.id).then(function (res) {
        $ctrl.properties = [res.data];
      });
    } else {
      $ctrl.search();
    }
  };

  $ctrl.search = function (page) {
    var params = angular.extend({}, $ctrl.params);

    if (!params.page) {
      params.page = page || 0;
    }

    propertyService
      .search(params)
      .then(function (res) {
        $ctrl.properties = res.data.properties;
        $ctrl.pagination = {
          current: page,
          total: Math.ceil(res.data.foundProperties / res.data.limit)
        };
      });
  };

  function init() {
    $ctrl.search();
  }

  init();
}
