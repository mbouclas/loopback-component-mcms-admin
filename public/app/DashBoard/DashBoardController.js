(function() {
    'use strict';

    angular.module('mcms.dashBoard')
        .controller('DashBoardController',Controller);

    Controller.$inject = ['mcms.widgetService'];

    function Controller(Widget) {
        var vm = this;
        
        vm.widgets = Widget.get();
        vm.topDirections = ['left', 'up'];
        vm.bottomDirections = ['down', 'right'];
        vm.availableModes = ['md-fling', 'md-scale'];
        vm.availableDirections = ['up', 'down', 'left', 'right'];
        vm.isOpen = false;
        vm.selectedDirection = 'up';
        vm.selectedMode = vm.availableModes[1];

    }

})();
