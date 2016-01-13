(function () {
  'use strict';

  module.exports = /*@ngInject*/ function (Post, User) {
    var ctrl = this;

    ctrl.user = User;

    Post.query(function (response) {});
  };
}());
