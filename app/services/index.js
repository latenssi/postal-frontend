module.exports = angular.module('app.services', [])
  .factory('Post',            require('./post'))
  .factory('User',            require('./user'))
  .factory('Authentication',  require('./authentication'));
