module.exports = (function (App, Package) {
    var packageName = Package.name,
        lo = require('lodash'),
        Promise = require('bluebird'),
        path = require('path');

    return {
        name: 'Image',
        nameSpace: 'Manage',
        uploadImage: uploadImage
    };

    function uploadImage(req, res, next) {
        var asyncTasks = [],
            uploadService = App.Services['mcmsNodeImageUploads'].Image,
            config = lo.clone(App.Config.image[req.body.container]);

        uploadService.handleUpload(req.files[0],
            config,
            req.body.item)
            .then(function (result) {
                res.send(result);
                config = null;
                result = null;
            });



    }

});
