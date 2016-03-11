module.exports = (function (App, Package, privateMethods) {
    var path = require('path'),
        Promise = require('bluebird'),
        fs = Promise.promisifyAll(require('fs-extra')),
        lo = require('lodash'),
        wrench = require('wrench');

    return function () {
        //we need to add all the registered modules to the app
        //assuming that all modules are a valid script, we will copy them to the public folder and then
        //add them to the index via an array
        var allFiles = {
            css: [],
            scripts: []
        }, packages = [];

        Package.registeredModules.forEach(function (item) {

            if (!item.files) {
                return;
            }

            allFiles.scripts = iterateFiles(item.files.js, item);
            allFiles.css = iterateFiles(item.files.css, item);

        });
        return allFiles;

        function iterateFiles(files, item) {
            var found = [];
            for (var i in files) {
                var file = (item.basePath) ? path.join(item.basePath, files[i]) : files[i];

                if (fs.lstatSync(file).isDirectory()){//figure out all files
                    var items = wrench.readdirSyncRecursive(file);
                    items.forEach(function (f) {
                        found.push(files[i] + '/' + f);
                    });
                } else {
                    found.push(files[i]);
                }

            }
            return found;
        }

    };

});