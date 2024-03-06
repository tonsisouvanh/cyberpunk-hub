import connectDB from "@/config/database";
import { Product } from "@/models/Product";

//GET api/products
export const GET = async (req) => {
  try {
    await connectDB();

    const page = req.nextUrl.searchParams.get("page") || 1;
    const pageSize = req.nextUrl.searchParams.get("pageSize") || 6;
    const filter = req.nextUrl.searchParams.get("filter") || "";
    const skip = (page - 1) * pageSize;

    let query = {};
    let sort = {};

    if (filter) {
      if (filter === "bestseller") {
        query = {
          isFeatured: true,
        };
      } else if (filter === "newArrivals") {
        query = {
          isNewArrival: true,
        };
      } else if (filter === "lowtohigh") {
        sort = { price: 1 };
      } else if (filter === "hightolow") {
        sort = { price: -1 };
      }
    }
    console.log("🚀 ~ GET ~ sort:", sort);
    
    const total = await Product.countDocuments({});
    const products = await Product.find(query)
      .sort(sort)
      .skip(skip)
      .limit(pageSize);

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
