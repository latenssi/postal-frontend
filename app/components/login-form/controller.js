(function () {
  'use strict';

  module.exports = /*@ngInject*/ function (Authentication) {
    var ctrl = this;

    ctrl.login = function (credentials) {
      Authentication.login(credentials);
    };
  };
}());
