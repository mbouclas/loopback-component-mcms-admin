(function () {
    'use strict';

    angular.module('mcms.products')
        .service('mcms.productsService', Service);

    Service.$inject = ['Product','$log'];

    function Service(Product,$log) {
        var _this = this;

        this.get = get;


        function get(filters) {
            return Product.findAll()
                .$promise
                .catch(handleErr());
        }


        function handleErr(err) {
            $log.error(err);
        }

    }//End constructor


})();
