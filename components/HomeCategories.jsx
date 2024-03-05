"use client";
import { coat, jean } from "@/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";
const categories = [
  {
    id: "tops",
    name: "ເສື້ອ",
    image: coat,
    direction: 100,
  },
  {
    id: "bottoms",
    name: "ສົ້ງ",
    image: jean,
    direction: -100,
  },
  {
    id: "shoes",
    name: "ເກີບ",
    image: jean,
    direction: 100,
  },
];

const HomeCategories = () => {
  return (
    // <motion.section
    //   initial={"offscreen"}
    //   whileInView={"onscreen"}
    //   viewport={{ once: true, amount: 0.2 }}
    //   transition={{ staggerChildren: 0.2 }}
    //   id="category"
    //   className="w-full"
    // >
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //     <div className="grid gap-6 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
    //       {categories.map((category) => (
    //         <motion.div
    //           variants={{
    //             offscreen: {
    //               opacity: 0,
    //               y: category.direction,
    //             },
    //             onscreen: {
    //               opacity: 1,
    //               y: 0,
    //               transition: {
    //                 duration: 1.5,
    //               },
    //             },
    //           }}
    //           key={category.id}
    //           className={`group relative w-[18rem] sm:w-3/4 md:w-full flex flex-col items-center overflow-hidden`}
    //         >
    //           <Image
    //             src={category.image}
    //             alt={category.name}
    //             className="w-full md:w-full object-cover transition group-hover:scale-110"
    //             width={0}
    //             height={0}
    //             priority={true}
    //             sizes="100vw"
    //           />

    //           <Link
    //             href={`/products/${category.id}`}
    //             className="absolute bottom-0 w-full translate-y-40 bg-[rgba(27,41,78,0.57)] py-5 text-center text-xl md:text-[2rem] font-bold text-white transition duration-700 group-hover:translate-y-0  "
    //           >
    //             <span className="">{category.name}</span>
    //           </Link>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </motion.section>

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
            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 ">
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
                src={coat}
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
                  src={jean}
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
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                  alt="watch-image"
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
              <img
                className="object-center object-cover h-full w-full"
                src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                alt="girl-image"
              />
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-slate-800">
                Accessories
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-slate-800 bg-opacity-50" />
            </motion.div>
            <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
              <img
                className="object-center object-cover h-full w-full hidden md:block"
                src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                alt="girl-image"
              />
              <img
                className="object-center object-cover h-full w-full md:hidden"
                src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-slate-800">
                Accessories
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-slate-800 bg-opacity-50" />
            </div>
          </div>
          <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
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
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-slate-800">
              Accessories
            </button>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-slate-800 bg-opacity-50" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeCategories;
