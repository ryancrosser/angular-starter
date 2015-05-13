(function() {
    angular
        .module('app')
        .config(router);

    router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
                      '$urlMatcherFactoryProvider'];

    function router($stateProvider, $urlRouterProvider, $locationProvider,
                    $urlMatcherFactoryProvider) {

        $locationProvider.html5Mode(true);
        $urlMatcherFactoryProvider.strictMode(false);

        //$stateProvider
        //    .state('main', {
        //        url: '/',
        //        template: '<h1>'
        //    });

        // catch all
        $urlRouterProvider.otherwise('/');
    }

}());
