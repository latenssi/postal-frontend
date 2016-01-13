(function () {
  'use strict';

  module.exports = /*@ngInject*/ function ($rootScope, Post, AUTH_EVENTS) {
    var ctrl = this;
    ctrl.posts = Post.query();

    $rootScope.$on(AUTH_EVENTS.loginSuccess, function () {
      ctrl.posts = Post.query();
    });
    $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
      ctrl.posts = Post.query();
    });
  };
}());
