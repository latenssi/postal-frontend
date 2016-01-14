(function () {
  'use strict';

  module.exports = /*@ngInject*/ function (Post) {
    var ctrl = this;

    function postCreateSuccess(response) {
      ctrl.newPost = {};
    }

    function postCreateError(response) {

    }

    ctrl.createPost = function (post) {
      Post.save(post).$promise
        .then(
          postCreateSuccess,
          postCreateError
        );
    };
  };
}());
