(function () {
    'use strict';

    angular.module('mcms.settingsManager', [])
        .config(config);

    config.$inject = ['$routeProvider','configuration'];

    function config($routeProvider,Config) {
/*        $routeProvider
            .when('/settings', {
                templateUrl: Config.templatesDir + 'dashboard.html',
                controller: 'DashBoardController',
                controllerAs: 'VM',
                name: 'home'
            })
            .otherwise('/');*/

    }

})();

require('./services');
require('./renderSettings.component');
