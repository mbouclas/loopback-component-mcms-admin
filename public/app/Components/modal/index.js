(function() {
  angular.module('mcms.components')
    .directive('modal', modal);

  modal.$inject = ['configuration','$rootScope','$compile','$templateCache','$timeout'];
  modalController.$inject = ['$scope','$timeout'];

  function modal(Config,$rootScope,$compile,$templateCache,$timeout){

    return {
      templateUrl : Config.templatesDir + "Components/modal.component.html",
      require: "?ngModel",
      scope: {
        ngChange : '&?ngChange',
        model : '=?model',
        modalId : '=?modalId'
      },
      restrict : 'E',
      transclude : {
        modalBody : '?modalBody',
        modalHeader : '?modalHeader',
        modalFooter : '?modalFooter'
      },
      controller : modalController,
      controllerAs : 'VM',
      link : function(scope, element, attrs, controllers,ngModel,transclude){
        scope.id = scope.modalId || attrs.id;
        var Modal = $('#' + scope.id).find('.modal:first');
        if (attrs.class){
          scope.classes = attrs.class;
        }

        //register an event handler for click to open
        $('body').on('click','[data-modal="'+ scope.id +'"]',handleClickToOpen);
        //register a listener to handle openings via controllers or services
        $rootScope.$on('modal.open',handleOpen);
        //register a listener to handle close via controllers or services
        $rootScope.$on('modal.close',handleClose);
        //register bootstrap events
        Modal.on('show.bs.modal',show);
        Modal.on('shown.bs.modal',shown);
        Modal.on('hide.bs.modal',hide);
        Modal.on('hidden.bs.modal',hidden);
        Modal.on('loaded.bs.modal',loaded);


        function handleClickToOpen(e){
          var modal = $('#' + $(this).data('modal')).find('.modal:first');
          modal.modal('show');
        }

        function handleOpen(e,data){
          if (data.id != scope.id){
            return;
          }

          $('#' + scope.id).find('.modal:first').modal('show');
        }

        function handleClose(e,data){
          if (data.id != scope.id){
            return;
          }

          $('#' + scope.id).find('.modal:first').modal('hide');
        }

        function show(e) {
          $rootScope.$broadcast('modal.show',{id : scope.id,event : e});
        }

        function shown(e) {
          $rootScope.$broadcast('modal.shown',{id : scope.id,event : e});
        }

        function hide(e) {
          $rootScope.$broadcast('modal.hide',{id : scope.id,event : e});
        }

        function hidden(e) {
          $rootScope.$broadcast('modal.hidden',{id : scope.id,event : e});
        }

        function loaded(e) {
          $rootScope.$broadcast('modal.loaded',{id : scope.id,event : e});
        }

      }
    };
  }

  function modalController($scope,$timeout){
    var vm = this;
    vm.onChange = function(item){
      if (typeof $scope.ngChange == 'undefined'){
        return;
      }

      $timeout(function(){
        $scope.ngChange({item : item});
      });
    }
  }

})();
require('./modal.body.component');
require('./modal.footer.component');
require('./modal.header.component');
