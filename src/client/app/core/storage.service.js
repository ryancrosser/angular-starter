(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('StorageService', StorageService);

    StorageService.inject = ['$q', 'DataService'];

    function StorageService($q, DataService) {
        var service = {

        };

        return service;
    }

}());
