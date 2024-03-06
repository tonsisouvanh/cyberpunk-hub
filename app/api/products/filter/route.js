import connectDB from "@/config/database";
import { Product } from "@/models/Product";

// GET /api/products/filter?<field>=<value> (One field only)
export const GET = async (req) => {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const isNewArrival = searchParams.get("isNewArrival");
    const category = searchParams.get("category");
    const sale = searchParams.get("sale");
    const brand = searchParams.get("brand");
    const isFeatured = searchParams.get("isFeatured");
    let query;

    if (sale && Boolean(sale) === true) {
      query = {
        $or: [
          { "discount.discountType": "percentage" },
          { "discount.discountType": "fixed" },
        ],
      };
    } else {
      query = {
        $or: [
          { categories: category },
          { isNewArrival: isNewArrival },
          { brand: brand },
          { isFeatured: isFeatured },
        ],
      };
    }
    const products = await Product.find(query);

    return new Response(JSON.stringify(products, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
