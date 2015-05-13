(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('ResultsService', ResultsService);

    ResultsService.inject = ['$q', 'DataService'];

    function ResultsService($q, DataService) {
        var _entityResults;
        var service = {

        };

        return service;
    }

}());
