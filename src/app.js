const express = require("express");
const cors = require("cors");
const itemRoutes = require("./routes/itemsRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/items", itemRoutes);

module.exports = app;
