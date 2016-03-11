module.exports = function (App, options) {
    var path = require('path');

    function ServiceProvider() {
        var _this = this;
        this.package = {
            name: 'mcmsNodeAdmin',
            options: options,
            staticDir: path.join(__dirname, 'public') + '/',
            layoutTemplate : 'index.nunj',
            registeredModules: []
        };


        App.Controllers[this.package.name] = this.package.Controllers =  App.helpersLoader.loadServices(__dirname + '/Controllers', true, this.package);
        App.Services[this.package.name] = this.package.Services =  App.helpersLoader.loadServices(__dirname + '/Services', null, this.package);
        App.Workers[this.package.name] =  this.package.Workers =  App.helpersLoader.loadDirContents(__dirname + '/Workers', null, this.package);


        require('./routes')(App, this.package);
        
        App.on('booted',function () {
            //Everything is loaded, lets process all the scripts
            
        });

        App.Log.info('Admin module loaded');
    }

    return new ServiceProvider();
};
