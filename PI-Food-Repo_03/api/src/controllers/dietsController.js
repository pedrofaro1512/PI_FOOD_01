const { API_KEY } = process.env;
const axios = require("axios");
const { Diet } = require("../db");

// const diet = async () => {
//   const data = await Diet.findByPk(1);
//   if(!data) {
//     const dietApi = await axios.get(`https//:api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&addRecipeInformation=true`);

//     const diet = await dietApi.data.results.map((el) => el.diets);
//     let data2 = diet.flat();
//     const typeDiet = [...newSet(data2)];
//     typeDiet.forEach((el) => {
//     Diet.findOrCreate({where: {name: el},});
//     });
//     console.log('me ha ejecutado');
//     console.log(typeDiet);
//   } else {
//     console.log("Los datos de dietas ya están cargados en la base de datos");
//     console.log(data);
//   }
// };

const createDiet = async (name) => {
  const newDiet = await Diet.create({name});
  return newDiet;
};

const diet = async () => {
  const response = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=50`)).data.results;
      
  let diets = [];

  response.forEach(element => {
    if (element.vegetarian === true) diets = [...diets, Object.keys(element).shift()];
      diets = [...diets, ...element.diets];
    });
      
  diets = [...new Set(diets)];
  
  // const resultsFunction = async (diets) => {
  //   await Promise.all(diets.map(async (diet) => {
  //     await Diet.findOrCreate({ where: {name: diet}})
  //   }))
  // };
  
  const resultsFunction = async (diets) => {
    for (let diet of diets) {
      await Diet.findOrCreate({ where: {name: diet}})
    }
  };
      
  await resultsFunction(diets);
  return await Diet.findAll();
}


module.exports = {createDiet, diet};