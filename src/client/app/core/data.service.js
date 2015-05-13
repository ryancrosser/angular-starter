(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('DataService', DataService);

    DataService.$inject = ['$http', '$log', '$q', 'logger', 'APP_SETTINGS'];
    /* @ngInject */
    function DataService($http, $log, $q, logger, APP_SETTINGS) {
        var service = {

        };

        return service;
    }
})();
