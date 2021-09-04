const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const api = require("./router/api");

require("dotenv").config();
app.listen(8000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname + "../public")));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// API Route
app.use("/api", api);
