(function(){
    'use strict';

    angular.module('mcms.core')
        .directive('alertMessage', ['$timeout','$compile', function ($timeout,$compile){
            return {
                require: "?ngModel",
                scope: {
                    success: "=alertMessage"
                },
                //template: ,
                link: function(scope, element, attributes, ngModel) {
                    var template = '<div class="alert alert-{{ alertType }}" ng-if="show">{{ message }}</div>';
                    var time = parseInt(attributes.time) || 5000;
                    scope.alertType = attributes.alertType || 'success';
                    scope.message = element.html();
                    var compiled = $compile(template)(scope);
                    element.html(compiled);

                    scope.$watch("success", function(val) {
                        if (val){
                            scope.show = true;
                            $timeout(function(){
                               scope.show = false;
                            },time);
                        }
                    });
                }
            };
        }]);
})();