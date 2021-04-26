const express = require('express');
const PlanetUseCases = require('../../../application/use-cases/planetUseCases');

module.exports = (appContext) => {
  const router = express.Router();
  const planetUseCases = new PlanetUseCases(appContext);
  
  router.get("/", async function (req, res, next) {  
    try {
      const data = await planetUseCases.getPlanets();
      res.json({ success: true, data: data });
    } catch (error) {
      next(error);
    }
  });

  return router;
}