import connectDB from "@/config/database";
import Product from "@/models/Product";

// GET /api/products/search
export const GET = async (req) => {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const keyword = searchParams.get("keyword");
    console.log("🚀 ~ GET ~ keyword:", keyword)

    const keywordPattern = new RegExp(keyword, "i");
    console.log("🚀 ~ GET ~ keywordPattern:", keywordPattern);

    // Match location pattern against database field
    let query = {
      $or: [{ name: keywordPattern }, { brand: keywordPattern }],
    };
    console.log("🚀 ~ GET ~ query:", query);

    const products = await Product.find(query);

    return new Response(JSON.stringify(products, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
