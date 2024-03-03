import connectDB from "@/config/database";
import { Product } from "@/models/Product";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { uploadMultipleImages } from "@/utils/imageUpload";

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
  folder: "/cyberpunkhub/test",
  transformation: { quality: "50" },
};

//GET api/products
export const GET = async (req) => {
  try {
    await connectDB();

    const products = await Product.find({});

    return new Response(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something wrong", { status: 500 });
  }
};

// POST api/product
export const POST = async (req, res) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    // Fetch the user document from MongoDB
    const user = await User.findById(userId);

    if (user.role !== "admin") {
      return new Response(JSON.stringify({ message: "You are unauthorized" }), {
        status: 401,
      });
    }

    // Parse the request body
    const requestBody = await req.json();
    // Access data from the request body
    const {
      inventory,
      name,
      description,
      importPrice,
      price,
      discount,
      categories,
      brand,
      isNewArrival,
      isFeatured,
      ratings,
      images,
    } = requestBody;
    console.log("🚀 ~ POST ~ images:", images);

    // Upload image to cloundinary
    const imagesUrl = await uploadMultipleImages(images, opts);
    console.log("🚀 ~ POST ~ imageUrl:", imagesUrl);
    const productData = {
      inventory,
      name,
      description,
      importPrice: parseInt(importPrice),
      price: parseInt(price),
      discount: {
        value: parseFloat(discount.value),
        discountType: discount.discountType,
      },
      categories,
      brand,
      isNewArrival,
      isFeatured,
      ratings: parseFloat(ratings),
      images: imagesUrl,
    };
    const newProduct = new Product(productData);
    await newProduct.save();
    return new Response(JSON.stringify({ message: "Added Product" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Fail to add property", { status: 500 });
  }
};
