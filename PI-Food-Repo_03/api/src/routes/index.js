const { Router } = require('express');
// Importar todos los routers;
const recipesRouter = require("./recipesRouter");
const dietsRouter = require("./dietsRouter");

const router = Router();

router.use("/recipes", recipesRouter);
router.use("/diets", dietsRouter);

// Configurar los routers


module.exports = router;
