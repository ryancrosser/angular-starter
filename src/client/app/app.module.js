(function () {
    'use strict';

    angular.module('app', [
        // App Modules
        'app.core',
        'app.widgets',

        // Common Modules
        'common.utilities',
        'common.exception',

        // Third-party Modules
        'ui.router'
    ]);

})();
