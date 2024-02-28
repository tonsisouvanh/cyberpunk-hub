"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import { fadeFromTopAnimate } from "@/utils/animation";
import { calculateDiscountedPrice, formatPrice } from "@/utils/utils";
import { noimage } from "@/assets/images";

const FeaturedProducts = ({
  products,
  featuredTitle = "No title",
  featuredDesc = "No description",
  showType,
}) => {
  const getRandomElements = (array, numberOfElements) => {
    // Clone the array to avoid modifying the original
    const shuffledArray = [...array].sort(() => Math.random() - 0.5);

    // Take the first `numberOfElements` elements
    const randomElements = shuffledArray.slice(0, numberOfElements);
    return randomElements;
  };

  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const randomSlice = getRandomElements(products, 4);
    setFilteredProducts(randomSlice);
  }, [products]);

  // useEffect(() => {
  //   switch (showType) {
  //     case "newarrival":
  //       setFilteredProducts(
  //         products.filter((item) => item.isNewArrival === true)
  //       );
  //       break;
  //     case "bestsell":
  //       setFilteredProducts(products.filter((item) => item.ratings >= 5));
  //       break;
  //     case "sale":
  //       setFilteredProducts(
  //         products.filter((item) => item.discount !== null && item.discount)
  //       );
  //       break;

  //     default:
  //       setFilteredProducts([]);
  //       break;
  //   }
  // }, [showType, products]);
  return (
    <>
      <section className="bg-transparent text-gray-700">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">{featuredTitle}</h2>
            <p className="mt-4 text-base text-gray-700">{featuredDesc}</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <article key={index} className="relative">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                      src={product.images[0]}
                      width={500}
                      height={500}
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                  <div className="absolute top-0 m-1 rounded-full bg-white">
                    {/* <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                      Sale
                    </p> */}
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div className="">
                      <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                        <Link
                          href={`/products/${product._id}`}
                          title=""
                          className="cursor-pointer border-sky-950 hover:border-b-2"
                        >
                          {product.name}
                          <span className="absolute" aria-hidden="true" />
                        </Link>
                      </h3>
                      {/* <div className="mt-2 flex items-center">
                        <svg
                          className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                      </div> */}
                    </div>
                    <div className="text-right">
                      <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                        {product.price.toLocaleString()}
                      </del>
                      <p className="text-xs font-normal sm:text-sm md:text-base">
                        {product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p>No Products</p>
            )}
          </div>
          <Link href="#" className="btn mt-2 text-white bg-sky-950 btn-sm">
            View All
          </Link>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
