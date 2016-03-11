(function() {
    angular.module('mcms.components')
        .directive('modalHeader', modalHeader);

    modalHeader.$inject = [];

    function modalHeader(){

        return {
            require : '^modal',
            scope: {},
            restrict : 'EA',
            link : function(scope, element, attrs, controllers){

            }
        };
    }


})();
