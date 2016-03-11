(function() {
    angular.module('mcms.core')
        .directive('lo', lo);

    lo.$inject = ['lodashFactory','$timeout'];

    function lo(lo,$timeout){

        return {
          require: "ngModel",
            scope: {
              model : '=ngModel',
              options: "=lo"
              //source : "=?loSource"
            },
            restrict : 'A',
            link : function(scope, element, attrs, controllers){

              scope.$watch('options.source' ,function(val) {
                if (!val) {
                  return;
                }
                scope.model = lo[scope.options.method](val);

              });
            }
        };
    }


})();
