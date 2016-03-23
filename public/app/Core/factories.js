(function () {
    'use strict';

    angular.module('mcms.core')
        .factory('lodashFactory', lodashFactory)
        .factory('slugFactory', slugFactory)
        .factory('asyncFactory', asyncFactory)
        .factory('momentFactory', momentFactory);

    function lodashFactory() {
        return require('lodash');
    }

    function slugFactory() {
        return require('slug');
    }

    function asyncFactory() {
        return require('async');
    }

    function momentFactory() {
        return require('moment');
    }
})();
