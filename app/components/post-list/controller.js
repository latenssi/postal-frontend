(function () {
  'use strict';

  module.exports = /*@ngInject*/ function ($log, $rootScope, User, FilePost, AUTH_EVENTS) {
    var ctrl = this;
    ctrl.posts = FilePost.query();
    ctrl.user = User;

    $rootScope.$on(AUTH_EVENTS.loginSuccess, function () {
      ctrl.posts = FilePost.query();
    });
    $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
      ctrl.posts = FilePost.query();
    });

    ctrl.onPostCreate = function (newPost) {
      $log.debug('PostList.onPostCreate', newPost);
      ctrl.posts.push(newPost);
    };

    ctrl.onPostDelete = function (deletedPost) {
      $log.debug('PostList.onPostDelete', deletedPost);
      ctrl.posts.forEach(function(post, index) {
        if (deletedPost.id === post.id) {
          ctrl.posts.splice(index, 1);
        }
      });
    };

    ctrl.onPostUpdate = function (updatedPost) {
      $log.debug('PostList.onPostUpdate', updatedPost);
      ctrl.posts.forEach(function(post, index) {
        if (updatedPost.id === post.id) {
          ctrl.posts[index] = updatedPost;
        }
      });
    };
  };
}());
