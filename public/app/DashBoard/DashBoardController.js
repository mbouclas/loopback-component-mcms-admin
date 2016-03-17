(function() {
    'use strict';

    angular.module('mcms.dashBoard')
        .controller('DashBoardController',Controller);

    Controller.$inject = ['mcms.widgetService'];

    function Controller(Widget) {
        var vm = this;

        var widgets = [
            Widget.newWidget(
                {
                    title: 'Clock Widget',
                    template: ' <header-component></header-component>',
                    settings: {
                        sizeX: 3,
                        sizeY: 3
                    }
                }
            ),
            Widget.newWidget(
                {
                    title: 'Clock Widget',
                    template: ' <header-component></header-component>',
                    settings: {
                        sizeX: 3,
                        sizeY: 3
                    }
                }
            )
        ];
        Widget.registerWidgets(widgets);

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
