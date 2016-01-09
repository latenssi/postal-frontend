'use strict';

module.exports = /*@ngInject*/ function () {
  require('./styles.scss');
  return {
    scope: {},
    bindToController: {},
    controller: require('./controller'),
    controllerAs: 'ctrl',
    template: require('./template.html')
  };
};
