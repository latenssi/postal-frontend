'use strict';

var app = angular.module('app', [
  /* 3rd party */
  'ngAnimate',
  'ngCookies',
  'ngMaterial',
  'ngRoute',
  'ngResource',
  'ngStorage',
  'angular-jwt',

  /* modules */
  require('components').name,
  require('services').name,
  require('filters').name
]);

app.constant('ENV', {
  backendUrl: 'http://localhost:8000',
  debugEnabled: true
});

app.config(function ($logProvider, ENV){
  $logProvider.debugEnabled(ENV.debugEnabled);
});

app.config(function ($locationProvider, $resourceProvider){
  $locationProvider.html5Mode(true).hashPrefix('!');

  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
});

app.config(function($httpProvider, jwtInterceptorProvider) {
  jwtInterceptorProvider.tokenGetter = function ($localStorage) {
    return $localStorage.token;
  };

  jwtInterceptorProvider.authPrefix = 'JWT ';

  $httpProvider.interceptors.push('jwtInterceptor');
});

app.run(function (Authentication) {});

module.exports = app;
