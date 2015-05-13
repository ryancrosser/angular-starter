/* jshint -W074 */
(function() {
    'use strict';

    angular
        .module('common.utilities')
        .filter('rcCapitalize', rcCapitalize);

    function rcCapitalize() {
        return function(input, type) {
            if(typeof input === 'string') {
                var temp;
                var i;
                switch(type.toLowerCase()) {
                    case 'upper':
                    case 'uppercase':
                        console.log(input.toUpperCase());
                        break;
                    case 'lower':
                    case 'lowercase':
                        input = input.toLowerCase();
                        break;
                    case 'cameltohuman':
                        input = input.charAt(0).toUpperCase() +
                                input.substr(1).replace(/[A-Z]/g, ' $&');
                        break;
                    case 'pascaltohuman':
                        input = input.charAt(0).toUpperCase() +
                                input.substr(1).replace(/[A-Z]/g, ' $&');
                        break;
                    case 'snaketohuman':
                        var pattern = /([\-\_]\w)/g;
                        input       = input.replace(pattern, function(matches) {
                            return ' ' + matches[1].toUpperCase();
                        });
                        break;
                    case 'humantocamel':
                        temp = input.split(' ');
                        for(i = 1; i < temp.length; i++) {
                            temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
                        }
                        input = temp.join('');
                        break;
                    case 'humantopascal':
                        temp = input.split(' ');
                        for(i = 0; i < temp.length; i++) {
                            temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
                        }
                        input = temp.join('');
                        break;
                    case 'humantosnake':
                        input = input.split(' ').join('_').toLowerCase();
                        break;
                }

                return input;
            }
        };
    }

}());
