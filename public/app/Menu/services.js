(function () {
    'use strict';

    angular.module('mcms.menu')
        .service('mcms.menuService',Service);
    //We need to be able to $inject a new module to the main.
    //Also, we need to be able to register routes?
    function Service() {
        var _this = this;
        this.Menu = [];

        this.addMenu = addMenu;
        this.addMenuItem = addMenuItem;
        this.addNode = addNode;
        this.render = render;
        this.newItem = newItem;
        this.get = get;

        function get() {
            return _this.Menu;
        }

        function addMenu(menu) {
            _this.Menu.push(menu);
        }

        function addMenuItem(item) {

        }

        function addNode(node) {

        }

        function render() {

        }

        //Top level item
        function newItem(item) {
            var menu = new MenuTemplate();
            menu.ancestors.push('root');
            return angular.extend(menu,item);
        }

        function MenuTemplate() {
            var _that = this;
            this.template = {
                id : '',
                title : '',
                permalink : '',
                parent : 'root',
                ancestors : [],
                children : [],
                depth : 0,
                addChild : addChild,
                addChildren : addChildren
            };

            function addChild (child,parent) {
                var temp = new MenuTemplate();
                parent = parent || this;

                temp.parent = parent.id;
                temp.ancestors = angular.copy(parent.ancestors);
                temp.ancestors.push(parent.id);
                _that.template.children.push(angular.extend(temp,child));

                return this;
            }

            function addChildren(items) {
                var parent = this;
                items.forEach(function (item) {
                    addChild(item,parent);
                });

                return this;
            }

            return this.template;
        }
    }
})();
