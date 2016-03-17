(function () {
    'use strict';
    /*
     * Module used for core components like data services, lodash and common directives
     */
    angular.module('mcms.core', [])
        .run(run);

    run.$inject = ['app.serviceProvider','mcms.menuService'];

    function run(App,Menu) {
        Menu.addMenu(Menu.newItem({
            id : 'home',
            title : 'Home',
            permalink : ''
        }));
    }
})();

require('./services');
require('./factories');
require('./core.config');
require('./core.lo.directive');
require('./serviceProvider');
require('./core.filters');
require('./core.alertMessage.directive');


