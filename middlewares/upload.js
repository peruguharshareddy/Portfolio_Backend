const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const profileStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "profile",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const certificateStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "certificates",
    allowed_formats: ["jpg", "jpeg", "png", "pdf"],
  },
});

const uploadProfile = multer({
  storage: profileStorage,
});

const uploadCertificate = multer({
  storage: certificateStorage,
});

module.exports = {
  uploadProfile,
  uploadCertificate,
};