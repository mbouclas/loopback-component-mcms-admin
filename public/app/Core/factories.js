(function () {
  'use strict';

  angular.module('mcms.core')
    .factory('lodashFactory', lodashFactory)
    .factory('momentFactory', momentFactory);

  function lodashFactory() {
    return require('lodash');
  }

  function momentFactory() {
    return require('moment');
  }
})();
