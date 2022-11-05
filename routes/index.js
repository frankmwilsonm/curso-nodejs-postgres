const express = require('express');

const productsRouter = require('./products.router');
// const categoriesRouter = require('./categories.router');
// const usersRouter = require('./users.router');
// const orderRouter = require('./orders.router');

// 1 importamos el detest.router que creamos en esta misma carpeta.
const detestRouter = require('./detest.router');//

// ==========================================================

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  // router.use('/categories', categoriesRouter);
  // router.use('/users', usersRouter);
  // router.use('/orders', orderRouter);

  // 2 añadimos ruta y router correspondiente.
  router.use('/detest', detestRouter); //
}

module.exports = routerApi;
