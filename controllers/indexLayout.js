const { Cars } = require("../models");

async function indexLayout(req, res) {
  try {
    const msgDelete = req.cookies.deleted;
    await Cars.findAll().then((cars) => {
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
  } catch (err) {
    console.log(err);
  }
}

module.exports = indexLayout;
