const { Cars } = require("../models");
const fs = require("fs");

const deleteCar = (req, res) => {
  // id & image diambil dari form input dengan type=hidden
  Cars.destroy({ where: { id: req.body.id } })
    .then(() => {
      fs.unlink("public" + req.body.image, (err) => {
        if (err) {
          console.log({ msg: err });
        }
        console.log("File has been deleted");
      });
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

module.exports = deleteCar;
