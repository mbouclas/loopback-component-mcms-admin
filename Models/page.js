module.exports = function(Model) {


  Model.getOne = function(permalink, cb) {
    Model.findOne({
      where : {permalink : permalink}
    },cb);
  };

  Model.remoteMethod(
    'getOne',
    {
      description : 'Find one page based via the permalink',
      accepts: {arg: 'permalink', type: 'string'},
      returns: {arg: 'page', type: 'object'},
      http : {path: '/getOne',verb : 'get'}
    }
  );

};
