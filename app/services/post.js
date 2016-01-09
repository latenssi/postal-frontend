'use strict';

module.exports = /*@ngInject*/ function (ENV, $resource) {
  if (ENV.backendAuth) {
    $http.defaults.headers.common['Authorization'] = ENV.backendAuth;
  }

  return $resource(ENV.backendUrl + '/posts/:postId', {postId:'@id'});
};
