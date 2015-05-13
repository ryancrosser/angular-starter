/* global _:false */
(function() {
    angular
        .module('common.utilities')
        .factory('Utility', Utility);

    Utility.$inject = [];

    function Utility() {
        var service = {
            size: _size
        };

        return service;

        function _size(input) {
            if(typeof _ === 'object'){
                return _.size(input);
            } else {
                throw Error('Underscore/Lo-dash is not loaded.');
            }
        }
    }

}());
