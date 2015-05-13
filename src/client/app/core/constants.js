/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('APP_SETTINGS', new (function() { // jshint ignore:line
            // this iife allows the use of `this`, so the urls can build on previously defined urls
            this.solrBaseUrl     = 'http://node28.catapult.dev.boozallenet.com/solr/';
            this.solrElementsUrl = this.solrBaseUrl + 'elements1_shard1_replica1/select';
            this.dataServiceUrl = 'http://beta.json-generator.com/api/json/get/JKqHZWg';
            this.dataServiceErrorUrl = 'http://beta.json-generator.com/api/json/get/JKqHZWg' +
                                       '?status=400';
        })());
})();
