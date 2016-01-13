(function () {
  'use strict';

  module.exports = /*@ngInject*/ function () {
    return {
      scope: true,
      bindToController: {},
      restrict: 'A',
      controller: require('./controller'),
      controllerAs: 'userAuth',
    };
  };
}());
