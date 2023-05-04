const { Router } = require("express");

const {
    getRecipesHandler,
    getRecipesIdHandler,
    createRecipesHandler,
} = require("../handlers/recipesHandlers");

const recipesRouter = Router();

const validateRecipe = (req, res, next) => {
    const { name, summary, healthScore, steps, image, diets } = req.body;
    if (!name) return res.status(400).json({ error: "Missing name" });
    if (!summary) return res.status(400).json({ error: "Missing summary" }); 
    if (!healthScore) return res.status(400).json({ error: "Missing healthScore" }); 
    if (!steps) return res.status(400).json({ error: "Missing steps" }); 
    if (!image) return res.status(400).json({ error: "Missing image" }); 
    if (!diets) return res.status(400).json({ error: "Missing diets" }); 

    next();
};

recipesRouter.get('/', getRecipesHandler);
recipesRouter.get('/:idRecipe', getRecipesIdHandler);
recipesRouter.post('/', validateRecipe, createRecipesHandler);

module.exports = recipesRouter;