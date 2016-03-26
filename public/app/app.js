(function(){
    'use strict';

    var angularModules = [
        'ngSanitize',
        'ngRoute',
        'ngResource',
        'ngFileUpload',
        'angular-reverse-url',
        'angular-redactor',
        'ngMessages',
        'ngMaterial',
        'ngAnimate',
        'ngAria',
        'mcms.lbService',
        'mcms.core',
        'mcms.components',
        'mcms.dashBoard',
        'mcms.widgets',
        'mcms.menu'
    ];

    if (typeof Injectables != 'undefined'){
        angularModules = angularModules.concat(Injectables);
    }

    angular.module('mcms', angularModules)
        .config(config)
        .run(startUp);

    startUp.$inject = [];
    config.$inject = ['$compileProvider','$routeProvider', '$locationProvider','$mdThemingProvider'];

    function startUp(){

    }

    function config($compileProvider,$routeProvider, $locationProvider,$mdThemingProvider){
        $compileProvider.debugInfoEnabled(true);
        $locationProvider.html5Mode(false);
        $mdThemingProvider
            .theme("default")
            .primaryPalette("red")
            .accentPalette('blue');
    }

})();
require('./Core');
require('./Components');
require('./Menu');
require('./DashBoard');
require('./Widgets');
