import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    importPrice: { type: Number, default: 0 },
    price: { type: Number, required: true },
    discount: {
      value: { type: Number, default: 0, min: 0 },
      discountType: { type: String, enum: ["percentage", "fixed"] },
    },
    images: [{ type: String }],
    categories: [{ type: String }],
    brand: { type: String },
    isNewArrival: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    ratings: { type: Number, default: 0 },
    inventory: [
      {
        size: { type: String },
        quantity: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", ProductSchema);
export default Product;
