(function() {
    angular.module('mcms.components')
        .directive('scrollTo', scrollTo);

    scrollTo.$inject = ['$rootScope','$window','$anchorScroll'];

    function scrollTo($rootScope,$window,$anchorScroll){

        return {
            require : 'scrollTo',
            scope: {},
            controller : scrollToController,
            controllerAs : 'VM',
            restrict : 'EA',
            link : function(scope, element, attrs, controller){
              var controls = {
                toTop : toTop,
                toBottom : toBottom,
                toAnchor : toAnchor
              };
              
              element.on('click',function () {
                if (attrs.scrollTo){
                  controls[attrs.scrollTo]();
                }
              });

              $rootScope.$on('scroll.to.top',scrollToLocation.bind(null,'top'));
              $rootScope.$on('scroll.to.bottom',scrollToLocation.bind(null,'bottom'));
              $rootScope.$on('scroll.to.anchor',scrollToLocation.bind(null,'anchor'));
            }
        };

      function scrollToLocation(area){
        switch (area){
          case 'top' : toTop();
                break;
          case 'bottom' : toBottom();
                break;
          case 'anchor' : toAnchor();
                break;
        }
      }

      function toTop() {
        $window.scrollTo(0,0);
      }

      function toBottom() {
        $window.scrollTo($(document).height());
      }

      function toAnchor() {
        $anchorScroll();
      }

    }

  function scrollToController() {

  }


})();
