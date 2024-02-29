import connectDB from "@/config/database";
import {Product} from "@/models/Product";
// import { getSessionUser } from "@/utils/getSessionUser";


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

// DELETE api/properties/:id
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
    if (product.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    await product.deleteOne();

    return new Response("Product Deleted", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something wrong", { status: 500 });
  }
};

// PUT /api/properties/:id
export const PUT = async (req, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { id } = params;
    const { userId } = sessionUser;
    const formData = await req.formData();
    // Access all value from amenities
    const amenities = formData.getAll("amenities");
    // Get product to update
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return new Response("Product Not Exists", { status: 404 });
    }

    // Verify ownership
    if (existingProduct.owner.toString() !== userId) {
      return new Response("Unauthorize", { status: 401 });
    }
    // Create product data object for db
    const productData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
        nightly: formData.get("rates.nightly"),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
    };
    // Update product in database
    const updatedProduct = await Product.findByIdAndUpdate(id, productData);
    return new Response(JSON.stringify(updatedProduct, { status: 200 }));
  } catch (error) {
    return new Response("Fail to add product", { status: 500 });
  }
};
