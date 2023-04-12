const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const handler = require("./handler");
const publicDir = path.join(__dirname, "../public");
const cookieParser = require("cookie-parser");
const checkCar = require("../middleware/checkCar");
const imgMemoryMiddleware = require("../middleware/imgMemoryMiddleware");
const cloudinaryUpload = require("../middleware/cloudinaryUpMiddleware");
const { update, updateLayout } = require("../controllers/update");

const app = express();

const PORT = 8081;

app.use(express.static(publicDir));
app.set("views", "../views"); // If you run the index js server directly from the file
app.set("view engine", "ejs");

app.use(cookieParser());
app.use(methodOverride("_method")); //middleware express

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", handler.showIndexLayout);

app.get("/cars", handler.listCar);

app.get("/cars/:id", checkCar, handler.getCarById);

app.get("/create", handler.showCreateLayout);

app.post(
  "/create",
  imgMemoryMiddleware.single("image"),
  cloudinaryUpload,
  handler.createCar
);

app.get("/update/:id", handler.updateById);

app.post(
  "/update/:id",
  checkCar,
  imgMemoryMiddleware.single("image"),
  cloudinaryUpload,
  handler.processUpdating
);

app.put(
  "/api/update/:id",
  checkCar,
  imgMemoryMiddleware.single("image"),
  cloudinaryUpload,
  handler.processUpdating
);

app.delete("/delete", handler.processDeleting);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
