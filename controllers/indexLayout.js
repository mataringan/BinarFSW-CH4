const { Cars } = require("../models");

const indexLayout = (req, res) => {
  const msgDelete = req.cookies.deleted;
  Cars.findAll().then((cars) => {
    if (msgDelete) {
      res.clearCookie("deleted");
      return res.render("index", {
        msg: msgDelete,
        status: 200,
        cars,
      });
    }
    res.render("index", {
      msg: "Success",
      status: 200,
      cars,
    });
  });
};

module.exports = indexLayout;
