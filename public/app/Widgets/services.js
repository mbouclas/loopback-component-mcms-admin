(function () {
    'use strict';

    angular.module('mcms.widgets')
        .service('mcms.widgetService', Service);

    Service.$inject = [];

    function Service() {
        var _this = this;
        this.widgets = [];
        var template = {
            id : '',
            title : '',
            template : '',
            settings : {}
        };

        this.get = get;
        this.newWidget = newWidget;
        this.registerWidget = registerWidget;
        this.registerWidgets = registerWidgets;

        function get() {
            return _this.widgets;
        }

        function newWidget(widget) {
            return angular.extend(angular.copy(template),widget);
        }

        function registerWidget(widget){
            _this.widgets.push(widget);
            return _this;
        }

        function registerWidgets(widgets){

            for (var i in widgets){
                registerWidget(widgets[i]);
            }

            return _this;
        }

    }//End constructor


})();
