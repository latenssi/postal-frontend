(function () {
  'use strict';

  module.exports = /*@ngInject*/ function ($log, FilePost) {
    var ctrl = this;

    function postDeleteSuccess(response) {
      ctrl.onDelete({post: ctrl.post});
    }

    function postDeleteError(err) {
      console.error(err);
    }

    ctrl.deletePost = function (post) {

      FilePost.delete({id: post.id}).$promise
        .then(
          postDeleteSuccess,
          postDeleteError
        );
    };
  };
}());
