const express = require("express");
const database = require("./config/config");
const dotenv = require("dotenv");
const blogRoutte = require("./routes/blogRoutes");
const cors = require("cors");

dotenv.config({
  path: ".env",
});

const app = express();

database();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/blog/v1", blogRoutte);

app.listen(process.env.PORT, () => {
  console.log(`server is working on port ${process.env.PORT}`);
});
