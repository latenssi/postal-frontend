(function () {
   'use strict';

   require('angular').module('postal.components', [])
     .directive('userAuth', require('./user-auth'))
     .directive('postList', require('./post-list'))
     .directive('postListItem', require('./post-list-item'))
     .directive('logoutButton', require('./logout-button'))
     .directive('loginForm', require('./login-form'));

   module.exports = 'postal.components';
}());
