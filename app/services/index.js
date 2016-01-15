(function () {
   'use strict';

   require('angular').module('postal.services', [
     require('ngstorage').name,
     require('ng-file-upload'),
   ])
     .factory('FilePost',            require('./file-post'))
     .factory('Post',            require('./post'))
     .factory('User',            require('./user'))
     .factory('Authentication',  require('./authentication'));

   module.exports = 'postal.services';
}());
