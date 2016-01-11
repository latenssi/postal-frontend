(function () {
   'use strict';

   require('angular').module('postal.components', [])
     .directive('postList', require('./post-list'))
     .directive('loginDialog', require('./login-dialog'));

   module.exports = 'postal.components';
}());
