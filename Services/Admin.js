module.exports = (function(App,Package){
    privateMethods = {

    };



    return {
        name : 'Admin',
        nameSpace : 'Admin',
        registerModule : require('./Helpers/registerModule')(App,Package,privateMethods),
        processModules : require('./Helpers/processModules')(App,Package,privateMethods)
    };
});
