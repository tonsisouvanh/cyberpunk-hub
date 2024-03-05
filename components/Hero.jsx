"use client";

import Link from "next/link";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { slides } from "@/data/data";
import Image from "next/image";
import "./styles.css";
const Hero = () => {
  return (
    <motion.div
      // variants={fadeFromTopAnimate}
      // initial={"offscreen"}
      // animate={"onscreen"}
      className="w-full"
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper hero-swiper-button lg:h-full"
      >
        {slides.map((i, index) => {
          return (
            <SwiperSlide key={index} className="h-[25rem] w-full lg:h-[50rem]">
              {/* <div className="relative h-full w-full">
                <Image
                  src={i.image}
                  alt=""
                  className="h-full w-full object-cover"
                  width={0}
                  height={0}
                  priority={true}
                  sizes="100vw"
                />
                <div className="absolute rounded-xl inset-0 m-auto h-[20rem] w-[50rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-black/50 to-transparent"></div>
                <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-5 px-5 text-white">
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="w-fit hidden md:inline px-2 py-1 text-center font-arimo text-3xl font-bold md:text-4xl lg:text-5xl">
                      Discover the Latest Fashion
                    </h2>
                    <h2 className="w-fit hidden md:inline px-2 py-1 text-center font-arimo text-3xl font-bold md:text-4xl lg:text-5xl">
                      Trends and Promotions
                    </h2>
                  </div>
                  <p className="text-center font-arimo text-base font-bold text-white md:text-lg">
                    Shop the hottest styles and get exclusive deals
                  </p>

                  <Link href="/products" className="fancy mb-5 bg-white ">
                    <span className="top-key"></span>
                    <span className="text !text-white">Shop now!</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                  </Link>
                </div>
              </div> */}
              <div className="relative bg-gradient-to-r from-neutral-900 to-neutral-800  lg:h-[30rem] py-16 font-[sans-serif]">
                <div className="absolute inset-0">
                  <Image
                    src={i.image}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    Welcome To Cyberpunk Fashion
                  </h1>
                  <p className="text-lg md:text-xl mb-8">
                    Experience excellence like never before with our exclusive
                    products and services.
                  </p>
                  <Link
                    href="/products"
                    className="bg-sky-600 hover:bg-sky-700 text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                  >
                    Shop Now!
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default Hero;
