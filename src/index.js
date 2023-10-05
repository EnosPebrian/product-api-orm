const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { productRoutes } = require("./routes");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 2000;
const db = require("./models");

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is online on PORT ${PORT}`);
  //   db.sequelize.sync();
});

app.get("/", (req, res) => {
  res.send("Welcomung tutapung to mein eispresso API");
});
