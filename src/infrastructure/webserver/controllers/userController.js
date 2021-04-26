const express = require('express');
const UserUseCases = require('../../../application/use-cases/userUseCases');

module.exports = (appContext) => {
  const router = express.Router();
  const userUseCases = new UserUseCases(appContext);
  
  router.get("/:userId", async function (req, res, next) {  
    try {
      const data = await userUseCases.getUser(req.params.userId);
      res.json({ success: true, data: data });
    } catch (error) {
      next(error);
    }
  });
  
  router.post("/", async function (req, res, next) {  
    try {
      const data = await userUseCases.createUser(req.body);
      res.json({ success: true, message: "usuario creado con éxito" });
    } catch (error) {
      next(error);
    }
  });


  return router;
}