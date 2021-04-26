const express = require('express');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const peopleController = require('./controllers/peopleController');
const planetController = require('./controllers/planetController');

module.exports = (appContext) => {
  const app = express();

  app.use(express.json());
  app.use('/users', userController(appContext));
  app.use('/people', peopleController(appContext));
  app.use('/planets', planetController(appContext));
  app.use('/products', productController(appContext));


  app.use((req, res, next) => {
    return res.status(404).json({
      error: "Not Found",
    });
  });

  app.use((err, req, res, _next) => {
    res.status(500).json({
      success: false,
      message: err.stack
    });
  });

  return app;
}