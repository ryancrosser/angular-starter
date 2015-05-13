(function() {
    'use strict';

    angular
        .module('common.utilities')
        .directive('rcEncodeURIComponentFilter', rcEncodeURIComponentFilter);

    rcEncodeURIComponentFilter.inject = [];

    function rcEncodeURIComponentFilter(){
        return function(input) {
            return window.encodeURIComponent(input);
        };
    }

}());
