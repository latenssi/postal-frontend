'use strict';

module.exports = /*@ngInject*/ function (Post) {
  var ctrl = this;

  Post.query(function (response) {
    console.log(response);
  });
};
