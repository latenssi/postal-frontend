(function () {
  'use strict';

  module.exports = /*@ngInject*/ function ($log, $mdDialog, FilePost) {
    var ctrl = this;
    ctrl.post = new FilePost();

    function postCreateSuccess(response) {
      ctrl.post = new FilePost();

      // ctrl.postCreateForm.$setPristine();
      // ctrl.postCreateForm.$setUntouched();

      var createdPost = new FilePost({id: response.data.id});

      $mdDialog.show({
        controller: function ($mdDialog) {
          var dialog = this;
          dialog.post = createdPost;
          dialog.submit = function () {
            dialog.post.$update()
              .then(function (response) {
                ctrl.onUpdate({post: new FilePost(response)});
              });
            $mdDialog.hide();
          };
          dialog.cancel = function () {
            FilePost.delete({id: createdPost.id}).$promise
              .then(
                function (response) {
                  ctrl.onDelete({post: createdPost});
                },
                function (err) {
                  console.error(err);
                }
              );
            $mdDialog.cancel();
          };
        },
        controllerAs: 'dialog',
        template: require('./dialog.html')
      });

      ctrl.onCreate({post: new FilePost(response.data)});
    }

    function postCreateError(err) {
      console.error(err);
    }

    ctrl.createPost = function (post) {
      FilePost.upload(post)
        .then(postCreateSuccess, postCreateError);
    };
  };
}());
