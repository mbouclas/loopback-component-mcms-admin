(function() {
    angular.module('mcms.components')
        .directive('sideBarNav', sideBarNav);

    sideBarNav.$inject = ['configuration'];
    sideBarNavController.$inject = ['mcms.menuService','$location','$mdSidenav'];

    function sideBarNav(Config){

        return {
            require : 'sideBarNav',
            templateUrl: Config.templatesDir + "Components/sideBarNav.component.html",
            controller: sideBarNavController,
            controllerAs : 'VM',
            scope: {},
            restrict : 'E',
            link : function(scope, element, attrs, controllers){
            }
        };
    }

    function sideBarNavController(Menu,$location,$mdSidenav){
        var vm = this;
        vm.Menu = Menu.get();

        vm.toggleSideNav = function () {
            $mdSidenav('left').close().then(function () {
                console.log('done')
            });
        };

        vm.navigate = function(path){
          $location.path(path);
        };
    }
})();
