module.exports = (function(App,Package){
    var packageName = Package.name,
        lo = require('lodash'),
        Promise = require('bluebird'),
        path = require('path');

    return {
        name : 'Image',
        nameSpace : 'Manage',
        uploadImage : uploadImage
    };

    function uploadImage(req,res,next){
        var asyncTasks = [],
            uploadService =  App.Services['mcmsNodeImageUploads'].Image,
            config = App.Config.image[req.body.container];

        for (var i in req.files){
           asyncTasks.push(
               uploadService.handleUpload(req.files[i],
               config,
               JSON.parse(req.body.item))
           );
        }

        Promise.all(asyncTasks).then(function (results) {
            res.send(results[0]);
        });

    }

});
