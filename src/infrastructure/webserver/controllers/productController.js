const express = require('express');
const ProductUseCases = require('../../../application/use-cases/productUseCases');

module.exports = (appContext) => {
  const router = express.Router();
  const productUseCases = new ProductUseCases(appContext);
  
  router.get("/:productId", async function (req, res, next) {  
    try {
      const data = await productUseCases.getProduct(req.params.productId);
      res.json({ success: true, data: data });
    } catch (error) {
      next(error);
    }
  });
  
  router.post("/", async function (req, res, next) {  
    try {
      const data = await productUseCases.createProduct(req.body);
      res.json({ success: true, message: "producto creado con éxito" });
    } catch (error) {
      next(error);
    }
  });


  return router;
}