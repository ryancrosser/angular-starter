(function() {
    'use strict';

    angular
        .module('common.utilities')
        .directive('rcEnter', ngEnter);

    ngEnter.inject = [];

    function ngEnter() {
        return function(scope, element, attrs) {
            element.bind('keydown keypress', function(event) {
                if(event.which === 13) {
                    event.preventDefault();

                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter);
                    });
                }
            });
        };
    }

}());
