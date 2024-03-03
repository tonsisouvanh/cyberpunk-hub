import { v2 as cloudinary } from "cloudinary";
import Promise from "promise";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Upload multiple image
const uploadImage = (image, opts) => {
  // image => base64
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        resolve(result.secure_url);
      } else {
        console.log(error.message);
        reject({ message: error.message });
      }
    });
  });
};

export const uploadMultipleImages = (images, opts) => {
  return new Promise((resolve, reject) => {
    const uploads = images.map((base) => uploadImage(base, opts));
    Promise.all(uploads)
      .then((values) => resolve(values))
      .catch((err) => reject(err));
  });
};
// ====================== //

export const uploadSingleImage = async (image, opts) => {
  // image => base64
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        resolve(result.secure_url);
        return result.secure_url;
      } else {
        console.log(error.message);
        reject({ message: error.message });
      }
    });
  });
};
