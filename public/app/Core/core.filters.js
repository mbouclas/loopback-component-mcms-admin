(function () {
    'use strict';
    angular.module('mcms.core')
        .filter('lo', lo)
        .filter('moment', moment)
        .filter('url', url);

    moment.$inject = ['momentFactory'];
    lo.$inject = ['lodashFactory'];
    url.$inject = ['$filter','configuration'];

    function moment(Moment) {
        return function (date, format) {
            var defaults = {
                format: "DD/MM/YYYY @ HH:mm"
            };

            return Moment(date).format(format || defaults.format);
        };
    }

    function lo(lodash) {
        return function (method, params) {
            return lodash[method](params);
        }
    }

    function url($filter,Config) {
        return function (name, params) {
            return Config.prefixUrl  + $filter('reverseUrl')(name,params);
        }
    }
})();
