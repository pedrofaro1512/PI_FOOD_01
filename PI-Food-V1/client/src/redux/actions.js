import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_BY_NAME ="GET_BY_NAME";
//export const GET_RECIPE = "GET_RECIPE";

export const getByName = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get
        (`http://localhost:3001/recipes?name=${name}`);
        const recipeName = apiData.data;
        dispatch({ type: GET_BY_NAME, payload: recipeName });
    };
};

export const getRecipeDetail = (idRecipe) => {
    return async function (dispatch) {
      const apiData = await axios.get
      (`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=48fbaa4fb52e461bb7091c26f3e01770`);
      const recipe = apiData.data;
      dispatch({ type: GET_RECIPE_DETAIL, payload: recipe });
    };
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

export const getRecipes = () => {
    return async function (dispatch) {
        const apiData = await axios.get
        ("https://api.spoonacular.com/recipes/complexSearch?apiKey=48fbaa4fb52e461bb7091c26f3e01770&number=10&addRecipeInformation=true");
        const recipes = apiData.data.results;
        dispatch({ type: GET_RECIPES, payload: recipes });
    };
};

// export const getRecipeId = (idRecipe) => {
//     return async function (dispatch) {
//         const apiData = await axios.get
//         (`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=16fd39d1b5754d8a9a58ed489fa9f98e`);
//         const recipe = apiData.data.results;
//         dispatch({ type: "GET_RECIPE", payload: recipe });
//     };
// };

// export const filterBySource = () => {
//     dispatch({ type: "FILTER_BY_SOURCE" }); 
// };


