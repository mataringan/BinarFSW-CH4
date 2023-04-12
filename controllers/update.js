const { Cars } = require("../models");

const updateById = (req, res) => {
  Cars.findOne({
    where: { id: req.params.id },
  }).then((cars) => {
    // 'update' diambil dari nama file didalam directory views
    res.status(200).render("update", {
      status: 200,
      cars,
    });
  });
};

const update = (req, res) => {
  try {
    const car = req.car;
    const url = req.image || car.image;

    Cars.update(
      {
        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
        image: url,
      },
      { where: { id: car.id } }
    ).then(() => {
      res.status(201).redirect("/");
    });
  } catch (undef) {
    Cars.update(
      {
        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
      },
      { where: { id: req.body.id } }
    ).then(() => {
      res.status(201).redirect("/");
    });
  }
};

const updateLayout = (req, res) => {
  // 'create' diambil dari nama file didalam directory views
  res.render("update");
};

module.exports = { updateById, update, updateLayout };
