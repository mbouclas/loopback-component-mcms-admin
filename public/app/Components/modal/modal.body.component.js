(function() {
    angular.module('mcms.components')
        .directive('modalBody', modalBody);

    modalBody.$inject = [];

    function modalBody(){

        return {
            require : '^modal',
            scope: {},
            restrict : 'EA',
            link : function(scope, element, attrs, controllers){

            }
        };
    }


})();
