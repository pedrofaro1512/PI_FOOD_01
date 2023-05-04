const { createDiet, diet } = require("../controllers/dietsController");

const createDietsHandler = async (req, res) => {
  const { name } = req.body;
  try {
      const newDiet = await createDiet(name);
      res.status(201).json(newDiet);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const getDietsHandler = async (req, res) => {
  try {
    const diets = await diet();
    res.status(200).json(diets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {createDietsHandler, getDietsHandler};
