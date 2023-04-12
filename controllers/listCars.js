const { Cars } = require("../models");

const listCars = (req, res) => {
  Cars.findAll().then((cars) => {
    res.json(cars);
  });
};

module.exports = listCars;
