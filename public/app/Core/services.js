(function () {
  'use strict';

  angular.module('mcms.core')
    .service('core.services', Service);

  Service.$inject = ['toasty','SweetAlert'];

  function Service(toasty,SweetAlert){

    this.alert = function (title, text) {
      SweetAlert.swal(title, text);
    };

    this.alertSuccess = function (title, text) {
      SweetAlert.swal(title, text, 'success');
    };

    this.alertError = function (title, text) {
      SweetAlert.swal(title, text, 'error');
    };

    this.alertWarning = function (title, text) {
      SweetAlert.swal(title, text, 'warning');
    };

    this.alertInfo = function (title, text) {
      SweetAlert.swal(title, text, 'info');
    };

    this.alertHtml = function (title, text) {
      SweetAlert.swal({
        html : true,
        title : title,
        text : text
      });
    };

    this.confirm = function (title, text, successCb, cancelCb) {
      var config = {
        title: title,
        text: text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55'
      };
      this._swal(config, successCb, cancelCb);
    };

    this._swal = function (config, successCb, cancelCb) {
      SweetAlert.swal(config,
        function (confirmed) {
          if (confirmed) {
            successCb();
          } else {
            cancelCb();
          }
        });
    };

    this.toastSuccess = function (title, text) {

      toasty.success({
        title: title,
        msg: text,
        sound: false
      });
    };

    this.toastError = function (title, text) {
      toasty.error({
        title: title,
        msg: text,
        sound: false
      });
    };

    this.toastWarning = function (title, text) {
      toasty.warning({
        title: title,
        msg: text,
        sound: false
      });
    };

    this.toastInfo = function (title, text) {
      toasty.info({
        title: title,
        msg: text,
        sound: false
      });
    };
  }

})();
