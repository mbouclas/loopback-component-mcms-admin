(function() {
    angular.module('mcms.components')
        .directive('goTo', goTo);

    goTo.$inject = ['$window'];


    function goTo($window){

        return {

            restrict : 'A',
            link : function(scope, element, attrs, controllers){

                element.on('click',function () {
                    $window.location.href = attrs.goTo;
                });

            }
        };
    }

})();
