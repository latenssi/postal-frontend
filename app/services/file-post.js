(function () {
  'use strict';

  module.exports = /*@ngInject*/ function ($log, ENV, $resource, Upload) {
    var _this = $resource(ENV.backendUrl + '/fileposts/:id/', {id: '@id'},
    {
      'update': { method:'PUT' }
    });

    _this.upload = function (data) {
      return Upload.upload({
        url: ENV.backendUrl + '/fileposts/',
        data: data
      })
      .then(function (resp) {
        $log.debug('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        return resp;
      }, function (resp) {
        $log.debug('Error status: ' + resp.status);
        return resp;
      }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        $log.debug('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        return evt;
      });
    };

    return _this;
  };
}());
