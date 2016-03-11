(function(){
    'use strict';
    
    var angularModules = [
        'ngSanitize',
        'ngRoute',
        'ngResource',
        'ngFileUpload',
        'angular-reverse-url',
        'ngMessages',
        'ngMaterial',
        'ngAnimate',
        'ngAria',
        'mcms.lbService',
        'mcms.core',
        'mcms.components',
        'mcms.dashBoard',
        'mcms.menu'
    ];

    angular.module('mcms', angularModules)
        .config(config)
        .run(startUp);

    startUp.$inject = [];
    config.$inject = ['$compileProvider','$routeProvider', '$locationProvider','$mdThemingProvider'];

    function startUp(){
        //Boot stuff here
    }

    function config($compileProvider,$routeProvider, $locationProvider,$mdThemingProvider){
        $compileProvider.debugInfoEnabled(true);
        $locationProvider.html5Mode(false);
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-orange')
            .accentPalette('red');
    }

})();
require('./Core');
require('./Components');
require('./Menu');
require('./DashBoard');