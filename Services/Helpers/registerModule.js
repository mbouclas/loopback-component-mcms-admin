module.exports = (function(App,Package,privateMethods){
    var lo = require('lodash');
    return function (Module,basePath) {
        if (!basePath){
            App.Log.error('Where is the basePath?');
            return;
        }

        App.use(App.loopback.static(basePath));

        if (lo.isString(Module)){
            try {
                Package.registeredModules.push(require(Module));
            } catch (e){
                App.Log.error(Module,' is not a valid instance of an Mcms module');
            }

            Module.basePath = basePath;

            return;
        }
        //object is passed
        if (!Module.name){
            App.Log.error('Name is missing');
            return;
        }

        Module.basePath = basePath;
        Package.registeredModules.push(Module);
    }
});
