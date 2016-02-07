(function () {
  'use strict';

  require('index.scss');

  var angular = require('angular');
  var config = require('config');

  var app = angular.module('postal', [
    /* 3rd party */
    require('angular-animate'),
    require('angular-aria'),
    require('angular-cookies'),
    require('angular-jwt'),
    require('angular-messages'),
    require('angular-material'),
    require('angular-resource'),
    require('angular-route'),

    /* modules */
    require('components'),
    require('services'),
    require('filters')
  ]);

  app.constant('ENV', config.env);

  app.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
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
    jwtInterceptorProvider.tokenGetter = /*@ngInject*/ function ($localStorage) {
      return $localStorage.token;
    };

    $httpProvider.interceptors.push('jwtInterceptor');
  });

  angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
      strictDi: true
    });
  });

}());
