(function () {
  'use strict';

  angular.module('mcms.core')
    .service('core.services', Service);

  Service.$inject = [];

  function Service(){
      this.createFilterFor = createFilterFor;
  }

    function createFilterFor(prop,query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(item) {
            var regex = new RegExp(lowercaseQuery, 'gi' );

            return item[prop].match(regex);
        };
    }
})();
