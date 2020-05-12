'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  var adminauth = app.middleware.adminauth()
    require('./router/default')(app)
    require('./router/admin')(app)
};
