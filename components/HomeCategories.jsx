"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const HomeCategories = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      id="category"
      className="flex justify-center items-center"
    >
      <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div className="flex flex-col jusitfy-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl hidden xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 ">
              Shop By Category
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
            <motion.div
              variants={{
                offscreen: {
                  opacity: 0,
                  y: 100,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.5,
                  },
                },
              }}
              className="relative group flex justify-center items-center h-full w-full"
            >
              <Image
                src={
                  "https://res.cloudinary.com/devton/image/upload/v1709722368/cyberpunkhub/coat_g5dhjs.jpg"
                }
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="object-center object-cover h-full w-full"
              />
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-slate-800">
                Women
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-slate-800 bg-opacity-50" />
            </motion.div>
            <motion.div
              variants={{
                offscreen: {
                  opacity: 0,
                  y: -100,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.5,
                  },
                },
              }}
              className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0"
            >
              <div className="relative group flex justify-center items-center h-full w-full">
                <Image
                  src={
                    "https://res.cloudinary.com/devton/image/upload/v1709722367/cyberpunkhub/jean_ynfdmz.jpg"
                  }
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-center object-cover h-full w-full"
                />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-slate-800">
                  Shoes
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-slate-800 bg-opacity-50" />
              </div>
              <div className="relative group flex justify-center items-center h-full w-full">
                <Image
                  src={
                    "https://res.cloudinary.com/devton/image/upload/v1709722293/cyberpunkhub/418348250_731755181950544_6164723677798668017_n_zgx1jx.jpg"
                  }
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-center object-cover h-full w-full"
                />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-slate-800">
                  Watches
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-slate-800 bg-opacity-50" />
              </div>
            </motion.div>
            <motion.div
              variants={{
                offscreen: {
                  opacity: 0,
                  y: 100,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.5,
                  },
                },
              }}
              className="relative group justify-center items-center h-full w-full hidden lg:flex"
            >
              <Image
                src={
                  "https://res.cloudinary.com/devton/image/upload/v1709717888/cyberpunkhub/417925639_1428958888037296_7474283239885030847_n_hss7zj.jpg"
                }
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="object-center object-cover h-full w-full"
              />
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-slate-800">
                Accessories
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-slate-800 bg-opacity-50" />
            </motion.div>
          </div>
          {/* <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
            <img
              className="object-center object-cover h-full w-full hidden md:block"
              src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
              alt="girl-image"
            />
            <img
              className="object-center object-cover h-full w-full sm:hidden"
              src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
              alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
            />
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute font-medium leading-none text-white py-3 w-36 bg-slate-800">
              Accessories
            </button>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-slate-800 bg-opacity-50" />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default HomeCategories;
