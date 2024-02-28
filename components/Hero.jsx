"use client";

import { fadeFromTopAnimate } from "@/utils/animation";
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
      variants={fadeFromTopAnimate}
      initial={"offscreen"}
      animate={"onscreen"}
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
              <div className="relative h-full w-full">
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
                <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-5 px-5 font-notosanslao text-white">
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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default Hero;
