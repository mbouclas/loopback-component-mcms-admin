(function () {
    angular.module('mcms.settingsManager')
        .directive('renderSettings', Directive);

    Directive.$inject = ['configuration'];
    DirectiveController.$inject = ['$scope', 'mcms.settingsManagerService', 'lodashFactory','$timeout'];

    function Directive(Config) {

        return {
            require : ['ngModel','renderSettings'],
            templateUrl: Config.templatesDir + "SettingsManager/renderSettings.component.html",
            controller: DirectiveController,
            controllerAs: 'VM',
            scope: {
                options: '=?options',
                items: '=items',
                model : '=ngModel'
            },
            restrict: 'E',
            link: function (scope, element, attrs, controllers) {
                var defaults = {
                    limit: 10
                };

                scope.options = (!scope.options) ? defaults : angular.extend(defaults, scope.options);
                scope.$watch('items',function (val) {
                    if (!val){
                        return;
                    }
                    controllers[1].assignItems(scope.items,scope.model);

                },true);

            }
        };
    }

    function DirectiveController($scope, Settings, lo, $timeout) {
        var vm = this;
        vm.Items = [];


        vm.assignItems = function(items,ngModel){
            if (lo.isArray(items)){
                //direct assignment
                vm.Items = items;
            } else if (lo.isObject(items)){
                //search first
                vm.Items = Settings.get(items);
            }
            //now merge items with the given ngModel

/*            for (var i in vm.Items){
                if (ngModel[vm.Items[i].varName]){
                    vm.Items[i].value = ngModel[vm.Items[i].varName];
                }

                ngModel[vm.Items[i].varName] = vm.Items[i].value;

            }*/


        };

        vm.changed = function (field) {
            $timeout(function () {
                $scope.model[field.varName] = field.value;
            });
        }
    }
})();
