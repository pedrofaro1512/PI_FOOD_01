const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const cleanRecipe = (recipe) => {
    return {
      id: recipe.id,
      name: recipe.title,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      image: recipe.image,
      diets: recipe.diets,
      created: false,
      steps: recipe.analyzedInstructions[0]?.steps.map((e) => {
        return {
          number: e.number,
          step: e.step,
          ingredients: e.ingredients,
        };
      }),
    };
};

const cleanArray = (arr) => { 
    const clean = arr.map((elem) => {
        return {
            id: elem.id,
            name: elem.title,
            summary: elem.summary,
            healthScore: elem.healthScore,
            image: elem.image,
            diets: elem.diets,
            created: false,
            steps: elem.analyzedInstructions[0]?.steps.map((e) => {
            return {
                number: e.number,
                step: e.step,
                ingredients: e.ingredients,
            };
            }),
        };
    });
    return clean;
};

const createRecipe = async (name, summary, healthScore, steps, image, diets) => {
    const newRecipe = await Recipe.create({name, summary, healthScore, steps, image, diets});
    let dietDB = await Diet.findAll({ 
      where: {name: diets}
    })
    newRecipe.addDiet(dietDB);
    return newRecipe;
};


const getRecipeById = async (idRecipe, source) => {
    if (source === "api") {
      const recipe = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`);
      return cleanRecipe(recipe.data);
    } else {
      return await Recipe.findByPk(idRecipe,{
        include: {
          model: Diet,
          attributes: ["name"],

          through: {
            attributes: [],
          },
        },
      });
    }
  };
// const getRecipeById = async (idRecipe, source) => {
//     const recipe = source === "api" 
//         ? (await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`))
//             .data
//         : await Recipe.findByPk(idRecipe,{
//             include: {
//                 model: Diet,
//                 attributes: ["name"],
//                 through: {
//                     attributes: [],
//                 },
//             },
//         });
//     return recipe;
// };

const getAllRecipes = async () => {
    const dbRecipes = await Recipe.findAll();
    const apiRecipes = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=16&addRecipeInformation=true`))
    .data.results;
    
    const apiRecipesData = cleanArray(apiRecipes);
    
    const results = [ ...dbRecipes, ...apiRecipesData];
    return results;
};

const searchRecipeByName = async (name) => {
    const dbRecipes = await Recipe.findAll({ where: { name:name } });
    const apiRecipes = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`))
    .data.results;
    
    const apiRecipesData = cleanArray(apiRecipes);
    const filteredApiRecipe = apiRecipesData.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
    return [ ...filteredApiRecipe, ...dbRecipes];
};

module.exports = { createRecipe, getRecipeById, searchRecipeByName, getAllRecipes };