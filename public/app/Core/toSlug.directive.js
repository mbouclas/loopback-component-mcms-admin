(function(){
    'use strict';

    angular.module('mcms.core')
        .directive('toSlug',['slugFactory' , function (slug){
            return {
                require: "ngModel",
                scope: {
                    otherModelValue: "=toSlug",
                    model : '=ngModel'
                },
                link: function(scope, element, attributes, ngModel) {

                    scope.$watch('model' ,function(val) {
                        if (!val) {
                            return;
                        }
                        scope.otherModelValue = slug(val,{lower: true});
                    });
                }
            };
        }]);
})();
