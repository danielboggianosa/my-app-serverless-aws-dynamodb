const express = require('express');
const PeopleUseCases = require('../../../application/use-cases/peopleUseCases');

module.exports = (appContext) => {
  const router = express.Router();
  const peopleUseCases = new PeopleUseCases(appContext);
  
  router.get("/:personId", async function (req, res, next) {  
    try {
      const data = await peopleUseCases.getPerson(req.params.personId);
      res.json({ success: true, data: data });
    } catch (error) {
      next(error);
    }
  });

  return router;
}