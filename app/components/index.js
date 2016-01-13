(function () {
   'use strict';

   require('angular').module('postal.components', [])
     .directive('postList', require('./post-list'))
     .directive('logoutButton', require('./logout-button'))
     .directive('loginForm', require('./login-form'));

   module.exports = 'postal.components';
}());
