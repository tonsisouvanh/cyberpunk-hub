import connectDB from "@/config/database";
import { Product } from "@/models/Product";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { uploadMultipleImages } from "@/utils/imageUpload";
// import { getSessionUser } from "@/utils/getSessionUser";

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
  folder: "/cyberpunkhub/products",
  transformation: { quality: "50" },
};

// GET api/properties/:id
export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const product = await Product.findById(params.id);
    if (!product) return new Response("Product Not Found", { status: 404 });

    return new Response(JSON.stringify(product), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something wrong", { status: 500 });
  }
};

// DELETE api/products/:id
export const DELETE = async (req, { params }) => {
  try {
    const productId = params.id;
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    await connectDB();

    const product = await Product.findById(productId);
    if (!product) return new Response("Product Not Found", { status: 404 });

    // Verify ownership
    // if (product.owner.toString() !== userId) {
    //   return new Response("Unauthorized", { status: 401 });
    // }

    await product.deleteOne();

    return new Response("Product Deleted", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something wrong", { status: 500 });
  }
};

// PUT /api/products/:id
export const PUT = async (req, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { id } = params;
    const { userId } = sessionUser;
    // Fetch the user document from MongoDB
    const user = await User.findById(userId);
    // Authorize
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
      imageList,
    } = requestBody;
    // Upload image to cloundinary
    let imagesUrl = [];
    let addedImages = [];
    if (images) {
      imagesUrl = await uploadMultipleImages(images, opts);
      addedImages = [...imageList, ...imagesUrl];
    } else addedImages = [...imageList];

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
      images: addedImages,
    };
    // Update product in database
    const updatedProduct = await Product.findByIdAndUpdate(id, productData);
    return new Response(JSON.stringify(updatedProduct, { status: 200 }));
  } catch (error) {
    return new Response("Fail to add product", { status: 500 });
  }
};
