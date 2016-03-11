(function () {
    'use strict';
    /*
     * Module used for core components like data services, lodash and common directives
     */
    angular.module('mcms.core', []);

})();

require('./services');
require('./factories');
require('./core.config');
require('./core.lo.directive');
require('./serviceProvider');
require('./core.filters');
require('./core.alertMessage.directive');


