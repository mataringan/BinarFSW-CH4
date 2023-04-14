const { Cars } = require("../models");

const listCars = (req, res) => {
  Cars.findAll().then((cars) => {
    res.status(200).json(cars);
  });
};

module.exports = listCars;
