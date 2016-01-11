(function () {
   'use strict';

   require('angular').module('postal.components', [])
     .directive('postList', require('./post-list'));

   module.exports = 'postal.components';
}());
