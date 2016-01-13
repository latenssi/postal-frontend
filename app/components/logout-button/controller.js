(function () {
  'use strict';

  module.exports = /*@ngInject*/ function (Authentication) {
    var ctrl = this;
    ctrl.logout = Authentication.logout;
  };
}());
