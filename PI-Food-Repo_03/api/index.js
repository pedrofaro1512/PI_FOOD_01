require("dotenv").config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { diet } = require('./src/controllers/dietsController.js');
const PORT = 3001;
//const PORT = process.env.PORT || 3001;
// Syncing all the models at once.

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async() => {
      console.log(`Listening at ${PORT}`); // eslint-disable-line no-console
      await diet();
    });
  })
  .catch((err) => console.log(err));