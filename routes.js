module.exports = function (App, Package) {
    var Controllers = Package.Controllers;
    App.use(App.loopback.static(Package.staticDir));
    var router = App.loopback.Router(),
        nunjucks = require('nunjucks');

    nunjucks.configure(Package.staticDir, {
        noCache: true
    });

    Package.commonViewComponentsMiddleware = function (req, res, next) {

        res.handle500 = function (err) {
            App.Log.error(err);
            return res.render('Errors/500.nunj');
        };

        next();
    };

    router.get('/manage', [Package.commonViewComponentsMiddleware], function (req, res, next) {
        var toInject = Package.Services.Admin.processModules();
        toInject.injectables = JSON.stringify(toInject.injectables);
        res.send(nunjucks.render('index.nunj', {
            siteName: Package.options.siteName || App.Config.app.siteName || 'MCMS Admin',
            files: toInject || {}
        }));
    });


    router.post('/manage/uploadImage',App.UploadMiddleware.array('file',12),Controllers['Manage/Image'].uploadImage);


    App.use(router);

    return router;
};
