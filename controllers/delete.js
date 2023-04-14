const { Cars } = require("../models");

const deleteCar = (req, res) => {
  Cars.destroy({ where: { id: req.body.id } })
    .then(() => {
      res.cookie("deleted", "Data has been deleted");
      res.redirect("/");
    })
    .catch((err) => {
      res.status(422).json({
        msg: "Cant delete Data",
        err: err.message,
      });
    });
};

const deleteCarById = (req, res) => {
  Cars.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.json("delete success");
  });
};
module.exports = { deleteCar, deleteCarById };
