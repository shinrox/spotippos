module.exports = service;

/** @ngInject */
function service($http) {
  return {
    getById: getById,
    search: search
  };

  function getById(id) {
    return $http({
      method: 'GET',
      url: '/api/properties/' + id
    });
  }

  function search(params) {
    return $http({
      method: 'GET',
      url: '/api/properties',
      params: params
    });
  }
}
