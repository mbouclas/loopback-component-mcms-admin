(function() {
    angular.module('mcms.components')
        .directive('footerComponent', footerComponent);

    footerComponent.$inject = ['configuration'];
    footerController.$inject = [];

    function footerComponent(Config){

        return {
            require : 'footerComponent',
            templateUrl: Config.templatesDir +"Components/footer.component.html",
            controller: footerController,
            controllerAs : 'VM',
            scope: {},
            restrict : 'E',
            link : function(scope, element, attrs, controllers){
            }
        };
    }

    function footerController(){
        var vm = this;


    }
})();
