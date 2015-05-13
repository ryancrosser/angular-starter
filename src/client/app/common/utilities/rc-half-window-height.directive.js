(function() {
    'use strict';

    angular
        .module('common.utilities')
        .directive('rcHalfWindowHeight', rcHalfWindowHeight);

    rcHalfWindowHeight.$inject = ['$window'];

    function rcHalfWindowHeight($window) {
        return function(scope, element, attrs) {
            var w = angular.element($window);

            scope.getWindowDimensions = function() {
                return {'h': w.height(), 'w': w.width()};
            };
            scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
                try {
                    var h = eval((w.height() - 30) / 2); // jshint ignore:line

                    element.css({'height': h});
                } catch(e) {

                }
            }, true);

            w.bind('resize', function() {
                scope.$apply();
            });
        };
    }

}());
