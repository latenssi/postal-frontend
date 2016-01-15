(function () {
  'use strict';

  module.exports = /*@ngInject*/ function ($log, $mdDialog, FilePost) {
    var ctrl = this;
    ctrl.post = new FilePost();
    ctrl.loading = false;
    ctrl.uploadPercentage = 0;

    function postCreateSuccess(response) {
      ctrl.loading = false;
      ctrl.uploadPercentage = 0;

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
      ctrl.loading = false;
      ctrl.uploadPercentage = 0;

      console.error(err);
    }

    function postUploadEvent(evt) {
      ctrl.uploadPercentage = parseInt(100.0 * evt.loaded / evt.total);
    }

    ctrl.createPost = function (post) {
      ctrl.loading = true;
      FilePost.upload(post)
        .then(postCreateSuccess, postCreateError, postUploadEvent);
    };
  };
}());
