(function() {
    angular.module('mcms.components')
        .directive('headerComponent', headerComponent);

    headerComponent.$inject = ['configuration'];
    headerComponentController.$inject = ['mcms.menuService'];

    function headerComponent(Config){

        return {
            require : 'headerComponent',
            templateUrl: Config.templatesDir + "Components/header.component.html",
            controller: headerComponentController,
            controllerAs : 'VM',
            scope: {},
            restrict : 'E',
            link : function(scope, element, attrs, controllers){
            }
        };
    }

    function headerComponentController(Menu){
        var vm = this;
        vm.Menu = Menu.get();

    }
})();
