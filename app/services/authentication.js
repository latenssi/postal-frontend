(function () {
   'use strict';

   module.exports = /*@ngInject*/ function (ENV, $http, $localStorage, jwtHelper, User) {
     var _this = {};

     _this.login = function (credentials, success, error) {
       return $http.post(ENV.backendUrl + '/api-token-auth/', credentials)
         .then(function (response) {
           $localStorage.token = response.data.token;
           User.setUser(jwtHelper.decodeToken($localStorage.token));
         })
         .then(null, _this.logout);
     };

     _this.logout = function () {
       delete $localStorage.token;
       User.clearUser();
     };

     function ref(argument) {
       // body...
     }

     return _this;
   };
}());
