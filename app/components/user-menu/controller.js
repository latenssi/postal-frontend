(function () {
  'use strict';

  module.exports = /*@ngInject*/ function (Authentication, User) {
    var ctrl = this;
    ctrl.auth = Authentication;
    ctrl.user = User;
  };
}());
