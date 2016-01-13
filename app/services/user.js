(function () {
  'use strict';

  module.exports = /*@ngInject*/ function (ENV, $localStorage, jwtHelper) {
    var _this = {};

    var currentUser = null;

    // function init() {
    //   if ($localStorage.token) {
    //     _this.setUser(jwtHelper.decodeToken($localStorage.token));
    //   }
    // }

    _this.current = function () {
      return currentUser;
    };

    _this.setUser = function (newUser) {
      currentUser = newUser;
    };

    _this.clearUser = function () {
      currentUser = null;
    };

    // init();

    return _this;
  };
}());
