(function () {
   'use strict';

   require('angular').module('postal.services', [])
     .factory('Post',            require('./post'))
     .factory('User',            require('./user'))
     .factory('Authentication',  require('./authentication'));

   module.exports = 'postal.services';
}());
