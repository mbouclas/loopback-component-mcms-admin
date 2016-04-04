(function () {
    angular.module('mcms.core')
        .directive('fixedToolBar', ['$window', function ($window) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    /* Scroll event listener */
                    angular.element($window).bind("scroll", function () {
                        var top = this.scrollY;
                        if (top > 0) {
                            el.addClass('is-scrolled');
                        } else {
                            el.removeClass('is-scrolled');
                        }
                    });
                }
            };

        }]);

})();
