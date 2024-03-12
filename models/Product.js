import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    importPrice: { type: Number, default: 0 },
    price: { type: Number, required: true },
    discount: {
      value: { type: Number, min: 0, default: 0 },
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
        id: { type: String, required: true, unique: true }, // You can use ObjectId or String based on your requirements
        size: { type: String },
        quantity: { type: Number },
        gender: { type: String, default: "male" },
      },
    ],
    link: { type: String },
  },
  {
    timestamps: true,
  }
);
const CartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, default: 1 },
});

const CartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    items: [CartItemSchema],
  },
  {
    timestamps: true,
  }
);

const Cart = models.Cart || model("Cart", CartSchema);
const Product = models.Product || model("Product", ProductSchema);

export { Product, Cart };
