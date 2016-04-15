(function () {
  'use strict';

  angular.module('mcms.core')
    .service('core.services', Service);

  Service.$inject = [];

  function Service(){
      this.createFilterFor = createFilterFor;
      this.flattenTree = flattenTree;
  }

    function createFilterFor(prop,query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(item) {
            var regex = new RegExp(lowercaseQuery, 'gi' );

            return item[prop].match(regex);
        };
    }

    function flattenTree(nodes, level, parent, flat) {
        if (!flat) {
            flat = [];
        }

        if (!level) {
            level = 0;
        }

        if (typeof parent == 'undefined') {
            parent = null;
        }

        for (var i in nodes) {
            nodes[i].ancestors = [];

            if (parent) {
                nodes[i].parent = parent.id;

                for (var j in parent.ancestors) {
                    nodes[i].ancestors.push(parent.ancestors[j]);
                }
                nodes[i].ancestors.push(parent.id);
                nodes[i].orderBy = i;
            }

            flat.push(nodes[i]);

            if (nodes[i].children) {
                flattenTree(nodes[i].children, level + 1, nodes[i], flat);
            }
        }

        return flat;
    }
})();
