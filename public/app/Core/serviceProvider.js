(function () {
    'use strict';

    angular.module('mcms.core')
        .service('app.serviceProvider', Service);

    Service.$inject = ['$rootScope', '$q', '$timeout','$injector'];

    function Service($rootScope, $q, $timeout,$injector) {
        var _this = this;

        this.availableComponents = [];
        this.registeredComponents = [];
        this.queue = [];

        this.registerComponent = registerComponent;
        this.componentIsLoaded = componentIsLoaded;
        this.componentReady = componentReady;
        this.checkStatus = checkStatus;
        this.processQueue = processQueue;
        this.processQ = processQ;
        this.registerModules = registerModules;
        this.registerModule = registerModule;


        /**
         * When all modules that need to be loaded before a route loads are done, we return true
         * We only check for modules that have registered as "Need to load before route change"
         * @returns {boolean}
         */
        this.appIsReady = function () {
            if (_this.registeredComponents.length == _this.availableComponents.length) {
                return true;
            }

            return false;
        };

        /**
         * check every 100ms if all of the modules are done loading.
         * @returns {*}
         */
        function checkStatus() {
            var deferred = $q.defer();
            $timeout(function () {
                check(function (res) {
                    if (res) {
                        $rootScope.$broadcast('app.components.loaded', true);
                        deferred.resolve(true);
                    }
                });

            });


            return deferred.promise;
        }

        /**
         * recursive check for modules loaded
         * @param callback
         */
        function check(callback) {
            $timeout(function () {
                if (_this.appIsReady()) {
                    return callback(true);
                }

                check(callback);
                return callback(false);
            }, 100);
        }

        /**
         * Check if a specific module has loaded
         * @param name
         * @returns {boolean}
         */
        function componentIsLoaded(name) {
            return (_this.registeredComponents.indexOf(name) != -1);
        }

        /**
         * Report a module as loaded.
         * @param name
         * @returns {Service}
         */
        function componentReady(name) {
            _this.registeredComponents.push(name);
            //check if everything is ready
            _this.appIsReady();
            return _this;
        }

        /**
         * Register a module as a "Need to load before route change"
         * @param name
         * @param func
         * @returns {Service}
         */
        function registerComponent(name, func) {

            _this.availableComponents.push(name);
            _this.queue.push({
                name: name,
                func: func
            });
            return _this;
        }

        function processQ() {
            var deferred = $q.defer(),
                asyncTasks = [];

            for (var i in _this.queue) {
                asyncTasks.push(_this.queue[i].func());
            }

            return $q.all(asyncTasks);
        }

        function processQueue() {
            var asyncTasks = {},
                deferred = $q.defer();

            for (var i in _this.queue) {
                asyncTasks[_this.queue[i].name] = _this.queue[i].func;
            }

            async.parallel(asyncTasks, function (err, results) {
                if (err) {
                    return deferred.reject(err);
                }

                deferred.resolve(results);
            });

            return deferred.promise;
        }

        function registerModules(Modules) {
            console.log(Modules)

        }

        function registerModule(Module) {
            console.log(Module)
        }
    }

})();
