const cloudinary = require("../utils/cloudinary.js");
const getPublicId = require("../utils/getPublicId.js");

const cloudinaryUpload = async (req, res, next) => {
  try {
    if (req.car?.id) {
      // skipping while empty file input
      if (!req.file) {
        next();
        return;
      }
      const public_id = getPublicId(req.car.image);
      await cloudinary.uploader.destroy(public_id); //delete old pict
    }

    const fileBase64 = req.file.buffer.toString("base64"); //convert buffer to base64
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;
    const folderCloudinary = "cars"; //folder in cloudinary

    const uploadImg = await cloudinary.uploader.upload(file, {
      folder: folderCloudinary,
    });

    req.image = uploadImg.secure_url; //generated url

    next();
  } catch (error) {
    res.status(400).json({
      message: "Gagal Upload file!",
      err_msg: error.message,
    });
  }
};

module.exports = cloudinaryUpload;
