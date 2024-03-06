import { noimage } from "@/assets/images";
import { calculateDiscountedPrice } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Rating from "./Rating";
import { FaWhatsapp } from "react-icons/fa";
import ProductModal from "./ProductModal";
const ProductCard = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ProductModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        product={product}
      />

      <div className="relative hover:shadow-2xl transition duration-300 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <Link
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href={`/products/${product._id}`}
        >
          <Image
            src={product?.images[0] || noimage}
            alt="Shoes"
            width={500}
            height={500}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute top-0 left-0 space-x-2 m-2">
            {product?.isNewArrival && (
              <span className="badge badge-primary">New</span>
            )}
            {product?.discount.value > 0 ? (
              <>
                {product?.discount?.discountType === "percentage" ? (
                  <span className="rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {product?.discount?.value}% OFF
                  </span>
                ) : (
                  <span className="rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    ຫຼູດ {product?.discount?.value?.toLocaleString()}
                  </span>
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </Link>
        <div className="mt-4 px-5 pb-5">
          <Link href={`/products/${product._id}`}>
            <h5 className="text-xl tracking-tight text-slate-900 hover:underline">
              {product.name}
            </h5>
          </Link>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-2xl mr-2 font-bold text-slate-900">
                {product?.discount.value > 0
                  ? calculateDiscountedPrice(
                      product?.price,
                      product?.discount
                    ).toLocaleString()
                  : product?.price?.toLocaleString()}
              </span>
              {product?.discount?.value > 0 ? (
                <span className="text-sm text-slate-900 line-through">
                  {product?.price?.toLocaleString()}
                </span>
              ) : (
                ""
              )}
            </p>
            <Rating value={product.ratings} />
          </div>
          <div className="space-y-2">
            <div className="hidden items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </div>
            <Link
              href={`/products/${product._id}`}
              // className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              className="btn btn-neutral btn-block bg-slate-900"
            >
              Detail
            </Link>
            <button
              onClick={() => setOpenModal(product)}
              className="flexd hidden items-center justify-center w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <FaWhatsapp size={20} className="mr-2" />
              Send WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
