const { Cars } = require("../models");

const createCars = (req, res) => {
  try {
    const url = `/uploads/${req.file.filename}`;
    Cars.create({
      name: req.body.name,
      price: req.body.price,
      size: req.body.size,
      image: url,
    }).then(() => {
      res.cookie("deleted", "Data has been created");
      res.status(201).redirect("/");
    });
  } catch (err) {
    res.json({
      msg: "Bad Request",
      status: 400,
      errors: "Image cannot empty",
    });
    return;
  }
};

const createLayout = (req, res) => {
  // 'create' diambil dari nama file didalam directory views
  res.render("create");
};

module.exports = { createCars, createLayout };
