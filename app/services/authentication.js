'use strict';

module.exports = /*@ngInject*/ function (ENV, $http, $localStorage, jwtHelper, User) {
  var _this = {}

  _this.login = function (credentials, success, error) {
    return $http.post(ENV.backendUrl + '/api-token-auth/', credentials)
      .then(function (response) {
        $localStorage.token = response.data.token;
        User.setUser(User.queryUser());
      })
      .then(null, function (err) {
        $localStorage.token = '';
      })
  }

  _this.logout = function () {
    $localStorage.token = '';
    User.clearUser();
  }

  return _this;
};
