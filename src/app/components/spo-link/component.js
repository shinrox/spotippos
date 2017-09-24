module.exports = {
  template: require('./component.html'),
  bindings: {
    text: '@',
    icon: '@',
    isActive: '='
  }
};
