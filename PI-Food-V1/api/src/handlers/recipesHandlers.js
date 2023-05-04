const { createRecipe, getRecipeById, searchRecipeByName, getAllRecipes } = require("../controllers/recipesController");

const getRecipesHandler = async (req, res) => {
    const { name } = req.query;

    const results = name ? await searchRecipeByName(name) : await getAllRecipes()
    
    res.status(200).json(results);
    
};

const getRecipesIdHandler = async (req, res) => {
    const { idRecipe } = req.params;
    const source = isNaN(idRecipe) ? "bdd" : "api";
    try {
        const recipe = await getRecipeById(idRecipe, source);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createRecipesHandler = async (req, res) => {
    const { name, summary, healthScore, steps, image, diets } = req.body;
    try {
        const newRecipe = await createRecipe(name, summary, healthScore, steps, image, diets);
        res.status(201).json("Creado exitosamente");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getRecipesHandler,
    getRecipesIdHandler,
    createRecipesHandler
};