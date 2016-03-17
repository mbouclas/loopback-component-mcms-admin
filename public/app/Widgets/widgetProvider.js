(function() {
    angular.module('mcms.core')
        .directive('widgetProvider', widgetProvider);

    widgetProvider.$inject = ['configuration','$compile'];
    widgetProviderController.$inject = ['mcms.menuService','$location'];

    function widgetProvider(Config,$compile){

        return {
            require : 'widgetProvider',
            controller: widgetProviderController,
            controllerAs : 'VM',
            scope: {
                item : '=item'
            },
            restrict : 'E',
            link : function(scope, element, attrs, controllers){
                var newEl = angular.element(scope.item.template);
                element.append(newEl);
                $compile(newEl)(scope);
            }
        };
    }

    function widgetProviderController(Menu,$location){
        var vm = this;

    }
})();
