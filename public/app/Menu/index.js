(function () {
    'use strict';

    angular.module('mcms.menu', [])
        .config(config);

    config.$inject = ['$routeProvider','configuration'];

    function config($routeProvider,Config) {
        $routeProvider
            .when('/', {
                templateUrl: Config.templatesDir + 'dashboard.html',
                controller: 'DashBoardController',
                controllerAs: 'VM',
                name: 'home'
            })
            .otherwise('/');

    }

})();

require('./services');
