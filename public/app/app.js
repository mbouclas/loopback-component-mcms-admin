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
        var customPrimary = {
            '50': '#eea9a3',
            '100': '#eb958d',
            '200': '#e78178',
            '300': '#e36c62',
            '400': '#df584d',
            '500': '#db4437',
            '600': '#d33426',
            '700': '#bd2e22',
            '800': '#a7291e',
            '900': '#92241a',
            'A100': '#f2bdb9',
            'A200': '#f6d1ce',
            'A400': '#fae6e4',
            'A700': '#7c1e16'
        };
        $mdThemingProvider
            .definePalette('customPrimary',
                customPrimary);

        var customAccent = {
            '50': '#f4c5c1',
            '100': '#f0b1ab',
            '200': '#ec9c96',
            '300': '#e88880',
            '400': '#e4746b',
            '500': '#e06055',
            '600': '#dc4c3f',
            '700': '#d8382a',
            '800': '#c53124',
            '900': '#af2b20',
            'A100': '#f8d9d6',
            'A200': '#fcedec',
            'A400': '#ffffff',
            'A700': '#99261c'
        };
        $mdThemingProvider
            .definePalette('customAccent',
                customAccent);

        var customWarn = {
            '50': '#ffb280',
            '100': '#ffa266',
            '200': '#ff934d',
            '300': '#ff8333',
            '400': '#ff741a',
            '500': '#ff6400',
            '600': '#e65a00',
            '700': '#cc5000',
            '800': '#b34600',
            '900': '#993c00',
            'A100': '#ffc199',
            'A200': '#ffd1b3',
            'A400': '#ffe0cc',
            'A700': '#803200'
        };
        $mdThemingProvider
            .definePalette('customWarn',
                customWarn);

        var customBackground = {
            '50': '#ffffff',
            '100': '#ffffff',
            '200': '#ffffff',
            '300': '#ffffff',
            '400': '#fbfbfb',
            '500': '#eeeeee',
            '600': '#e1e1e1',
            '700': '#d4d4d4',
            '800': '#c8c8c8',
            '900': '#bbbbbb',
            'A100': '#ffffff',
            'A200': '#ffffff',
            'A400': '#ffffff',
            'A700': '#aeaeae'
        };
        $mdThemingProvider
            .definePalette('customBackground',
                customBackground);

        $mdThemingProvider.theme('default')
            .primaryPalette('customPrimary')
            .accentPalette('customAccent')
            .warnPalette('customWarn')
            .backgroundPalette('customBackground');

        $mdThemingProvider.theme('customTheme')
            .primaryPalette('grey')
            .accentPalette('green')
            .warnPalette('red');
    }

})();
require('./Core');
require('./Components');
require('./Menu');
require('./DashBoard');
require('./Widgets');
