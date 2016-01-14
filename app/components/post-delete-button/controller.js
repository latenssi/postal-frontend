(function () {
  'use strict';

  module.exports = /*@ngInject*/ function ($log, Post) {
    var ctrl = this;

    function postDeleteSuccess(response) {
      $log.debug(response);
    }

    function postDeleteError(response) {
      $log.debug(response);
    }

    ctrl.deletePost = function () {
      Post.delete(ctrl.post).$promise
        .then(
          postDeleteSuccess,
          postDeleteError
        );
    };
  };
}());
