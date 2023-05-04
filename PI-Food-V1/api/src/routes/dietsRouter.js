const { Router } = require("express");
//const { diet } = require("../controllers/dietsController");
const { createDietsHandler} = require("../handlers/dietsHandlers");
const { getDietsHandler } = require("../handlers/dietsHandlers");

const dietsRouter = Router();

//dietsRouter.get('/', diet);
dietsRouter.get('/', getDietsHandler);

dietsRouter.post('/', createDietsHandler);

module.exports = dietsRouter;