(function () {
    'use strict';

    angular.module('mcms.core')
        .service('tabs.selector', Service);

    Service.$inject = ['$location', 'lodashFactory'];

    function Service($location, lo) {
        function Tab(alias, tabs) {
            var _this = this;
            this.alias = alias;
            this.tabs = tabs;
            this.set = set;
            this.change = change;

            function set() {
                var params = $location.search();

                if (params[_this.alias]) {
                    var selectedTab = lo.find(_this.tabs, {alias: params[_this.alias]});
                    if (!selectedTab) {
                        return _this;
                    }

                    setActive(selectedTab);
                }

                return _this;
            }

            function change(newTab) {
                var params = $location.search(),
                    tab = {},
                    selectedTab = lo.find(_this.tabs, {alias: newTab});
                if (!selectedTab) {
                    return _this;
                }
                
                tab[_this.alias] = newTab;
                if (!params[_this.alias] && selectedTab.default) {
                    return _this;
                }

                params = angular.extend(params, tab);
                $location.search(params);

                return _this;
            }

            function setActive(tab) {
                resetStatus();
                tab.active = true;

                return _this;
            }

            function resetStatus() {
                for (var i in _this.tabs) {
                    _this.tabs[i].active = false;
                }

                return _this;
            }

            return this;
        }

        return Tab;
    }


})();
