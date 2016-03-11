module.exports = function (App, Package) {
  App.use(App.loopback.static(Package.staticDir));
  var router = App.loopback.Router(),
      nunjucks = require('nunjucks');

  nunjucks.configure(Package.staticDir,{
    noCache : true
  });

  Package.commonViewComponentsMiddleware = function (req, res, next) {

    res.handle500 = function (err) {
      App.Log.error(err);
      return res.render('Errors/500.nunj');
    };

    next();
  };

  router.get('/manage',[Package.commonViewComponentsMiddleware], function (req, res, next) {
    res.send(nunjucks.render('index.nunj',{
      siteName : Package.options.siteName || App.Config.app.siteName || 'MCMS Admin',
      files : Package.Services.Admin.processModules() || []
    }));
  });


  App.use(router);

  return router;
};
