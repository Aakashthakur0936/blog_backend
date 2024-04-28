const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config({
    path: "../config/.env",
})

const database = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
        console.log("Database connect successfully")
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = database;
