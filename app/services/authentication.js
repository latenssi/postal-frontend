(function () {
   'use strict';

   module.exports = /*@ngInject*/ function ($log, ENV, $http, $localStorage, $timeout, jwtHelper, User) {
     var _this = {};
     var AUTH_URL = '/api-token-auth/';
     var REFRESH_URL = '/api-token-refresh/';
     var REFRESH_LEEWAY = 12 * 60 * 60 * 1000;  // 24 hours
     var refreshTimeout;

     _this.login = function (credentials) {
       var token;
       return $http.post(ENV.backendUrl + AUTH_URL, credentials)
         .then(function (response) {
           token = response.data.token;
           setToken(token);
           User.set(jwtHelper.decodeToken(token));
           return User.current();
         })
         .then(null, function (err) {
           _this.logout();
           return err;
         });
     };

     _this.logout = function () {
       if (refreshTimeout) $timeout.cancel(refreshTimeout);
       clearToken();
       User.clear();
     };

     _this.isAuthenticated = function () {
       return !!User.current();
     };

     function init() {
       var token = getToken();
       if (token) {
         if (jwtHelper.isTokenExpired(token)){
           $log.debug("Auth token has expired.");
           _this.logout();
         } else {
           setToken(token);
           User.set(jwtHelper.decodeToken(token));
         }
       }
     }

     function getToken() {
       return $localStorage.token;
     }

     function setToken(token) {
       var expiryDate;
       $log.debug("New auth token received.");
       $localStorage.token = token;
       expiryDate = jwtHelper.getTokenExpirationDate(token);
       setExpiryTimeout(expiryDate);
       $log.debug("Auth token will expire", expiryDate);
     }

     function refreshToken() {
       var token;
       $log.debug("Refreshing auth token...");
       $http.post(ENV.backendUrl + REFRESH_URL, {token: getToken()})
        .then(function (response) {
          token = response.data.token;
          setToken(token);
          User.set(jwtHelper.decodeToken(token));
        })
        .then(null, _this.logout);
     }

     function clearToken() {
       delete $localStorage.token;
     }

     function setExpiryTimeout(expiryDate) {
       if (refreshTimeout) $timeout.cancel(refreshTimeout);
       refreshTimeout = $timeout(refreshToken, expiryDate - new Date() - REFRESH_LEEWAY);
     }

     init();

     return _this;
   };
}());
