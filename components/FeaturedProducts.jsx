"use client";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import { fadeFromTopAnimate } from "@/utils/animation";
import { noimage } from "@/assets/images";
import ProductRating from "./Rating";
import Empty from "./Empty";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const FeaturedProducts = ({
  featuredTitle = "No title",
  featuredDesc = "No description",
  featuredType,
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFeaturedType = () => {
    if (featuredType === "newarrival") {
      return "/products/filter-results?isNewArrival=true";
    } else if (featuredType === "sale") {
      return "/products/filter-results?sale=true";
    } else {
      return "";
    }
  };

  const filteredProducts = products
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const defaultPath = "/api/products/filter?";
        const fullpath = featuredType.includes("isNewArrival")
          ? defaultPath + "isNewArrival=true"
          : featuredType.includes("sale")
          ? defaultPath + "sale=true"
          : featuredType.includes("bestseller")
          ? defaultPath + "isFeatured=true"
          : "";
        const res = await fetch(fullpath);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const products = await res.json();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [featuredType]);
  if (loading) return <Spinner loading={loading} />;
  return (
    <>
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-transparent text-gray-700"
        variants={fadeFromTopAnimate}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold sm:text-4xl md:text-5xl">
              {featuredTitle}
            </h2>
            <p className="mt-4 text-md md:text-xl text-gray-700">
              {featuredDesc}
            </p>
          </div>
          {filteredProducts && filteredProducts.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
              {filteredProducts.map((product, index) => (
                <article key={index} className="relative">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                      src={product.images[0] || noimage}
                      width={500}
                      height={500}
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                  <div className="absolute top-0 m-1 rounded-full bg-white"></div>
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
                      <ProductRating value={product.ratings} />
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
              ))}
            </div>
          ) : (
            <div className="my-5">
              <Empty />
            </div>
          )}
          <div className="mx-auto mt-2 max-w-fit container">
            <Link
              href={getFeaturedType()}
              className="btn text-white hover:bg-sky-800 bg-sky-950"
            >
              View All
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default FeaturedProducts;
