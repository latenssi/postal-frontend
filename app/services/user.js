'use strict';

module.exports = /*@ngInject*/ function (ENV, $resource, $localStorage) {
  var _this = {}

  var resource = $resource('', {},
     {
       user: {method : 'GET', url: ENV.backendUrl + '/user/'}
     }
  );

  var currentUser = {};

  function init() {
    if ($localStorage.token) {
      currentUser = resource.user();
    }
  }

  _this.current = function () {
    return currentUser;
  }

  _this.queryUser = function () {
    return resource.user();
  }

  _this.setUser = function (newUser) {
    currentUser = angular.extend(currentUser, newUser);
  }

  _this.clearUser = function () {
    currentUser = {};
  }

  init();

  return _this;
};
