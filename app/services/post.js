(function () {
  'use strict';

  module.exports = /*@ngInject*/ function (ENV, $resource) {
    return $resource(ENV.backendUrl + '/posts/:id/', {id:'@id'});
  };
}());
