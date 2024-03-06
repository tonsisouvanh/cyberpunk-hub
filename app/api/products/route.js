import connectDB from "@/config/database";
import { Product } from "@/models/Product";

//GET api/products
export const GET = async (req) => {
  try {
    await connectDB();

    const page = req.nextUrl.searchParams.get("page") || 1;
    const pageSize = req.nextUrl.searchParams.get("pageSize") || 6;

    const skip = (page - 1) * pageSize;

    const total = await Product.countDocuments({});
    const products = await Product.find({}).skip(skip).limit(pageSize);

    const result = {
      total,
      products,
    };
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something wrong", { status: 500 });
  }
};
