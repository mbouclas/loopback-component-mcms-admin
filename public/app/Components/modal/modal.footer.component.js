(function() {
    angular.module('mcms.components')
        .directive('modalFooter', modalFooter);

    modalFooter.$inject = [];

    function modalFooter(){

        return {
            require : '^modal',
            scope: {},
            restrict : 'EA',
            link : function(scope, element, attrs, controllers){

            }
        };
    }


})();
