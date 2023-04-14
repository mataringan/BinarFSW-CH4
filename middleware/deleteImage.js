const cloudinary = require("../utils/cloudinary.js");
const getPublicId = require("../utils/getPublicId.js");

const cloudinaryDelete = async (req, res, next) => {
  try {
    const public_id = getPublicId(req.car.image);
    await cloudinary.uploader.destroy(public_id);

    next();
  } catch (error) {
    res.status(400).json({
      message: "Gagal Hapus file!",
      err_msg: error.message,
    });
  }
};

module.exports = cloudinaryDelete;
