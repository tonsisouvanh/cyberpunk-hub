import connectDB from "@/config/database";
import Product from "@/models/Product";

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
