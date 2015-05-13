(function() {
    'use strict';

    angular
        .module('common.utilities')
        .directive('rcHeightFromWindowDirective', rcHeightFromWindowDirective);

    rcHeightFromWindowDirective.$inject = ['$window'];

    function rcHeightFromWindowDirective($window) {
        return function(scope, element, attrs) {
            var w = angular.element($window);

            scope.getWindowDimensions = function() {
                return {'h': w.height(), 'w': w.width()};
            };
            scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
                try {
                    /* jshint ignore:start */
                    var h = eval(w.height() -
                                 (attrs.ngHeightFromWindow || 0));

                    /* jshint ignore:end */
                    if(attrs.max === 'true') {
                        element.css({'max-height': h});
                    } else {
                        element.css({'height': h});
                    }

                } catch(e) {

                }
            }, true);

            var h = eval(attrs.ngMaxHeight); // jshint ignore:line
            element.css({'max-height': h});
            w.bind('resize', function() {
                scope.$apply();
            });
        };
    }

}());
