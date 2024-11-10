const express = require("express");
const app = express();

const route = require("./config/route");
const path = require("path");
const hbs = require("hbs");
const port = 3000;

const src_path = path.join(__dirname, "src");
const module_path = path.join(__dirname, "src/modules");
const component_path = path.join(__dirname, "src/components");

app.set("view engine", "hbs");
app.set("views", module_path);
app.use(express.static(src_path));
hbs.registerPartials(component_path);

app.use("/", route);

app.get("/health", (req, res) => res.status(202).json("API are running..."));
app.all("/*", (req, res) =>
  res.status(404).json({ status: false, message: "Page NotFound" })
);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
