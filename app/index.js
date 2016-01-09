'use strict';

module.exports = angular.module('app', [
  /* 3rd party */
  'ngMaterial',
  'ngAnimate',
  'ngRoute',

  /* modules */
  require('components').name,
  require('services').name,
  require('filters').name
]);
