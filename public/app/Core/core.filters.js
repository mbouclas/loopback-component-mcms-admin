(function(){
    'use strict';
    angular.module('mcms.core')
      .filter('lo',lo)
      .filter('moment', moment);

    moment.$inject = ['momentFactory'];
    lo.$inject = ['lodashFactory'];

    function moment(Moment) {
        return function (date, format) {
            var defaults = {
                format : "DD/MM/YYYY @ HH:mm"
            };

            return Moment(date).format(format || defaults.format);
        };
    }

  function lo(lodash){
    return function (method,params){
      return lodash[method](params);
    }
  }
})();
