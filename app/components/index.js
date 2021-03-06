(function () {
   'use strict';

   require('angular').module('postal.components', [])
     .directive('userAuth', require('./user-auth'))
     .directive('userMenu', require('./user-menu'))
     .directive('postCreate', require('./post-create'))
     .directive('postDeleteButton', require('./post-delete-button'))
     .directive('postList', require('./post-list'))
     .directive('logoutButton', require('./logout-button'))
     .directive('loginForm', require('./login-form'));

   module.exports = 'postal.components';
}());
