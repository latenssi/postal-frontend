(function () {
  'use strict';

  module.exports = /*@ngInject*/ function (ENV, $localStorage, jwtHelper) {
    var _this = {};

    var currentUser = null;

    _this.current = function () {
      return currentUser;
    };

    _this.set = function (newUser) {
      currentUser = newUser;
    };

    _this.clear = function () {
      currentUser = null;
    };

    return _this;
  };
}());
