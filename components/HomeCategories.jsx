"use client";
import { coat, jean } from "@/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      id="category"
      className="w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              variants={{
                offscreen: {
                  opacity: 0,
                  y: category.direction,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.5,
                  },
                },
              }}
              key={category.id}
              className={`group relative w-[18rem] sm:w-3/4 md:w-full flex flex-col items-center overflow-hidden`}
            >
              <Image
                src={category.image}
                alt={category.name}
                className="w-full md:w-full object-cover transition group-hover:scale-110"
                width={0}
                height={0}
                priority={true}
                sizes="100vw"
              />

              <Link
                href={`/products/${category.id}`}
                className="absolute bottom-0 w-full translate-y-40 bg-[rgba(27,41,78,0.57)] py-5 text-center text-xl md:text-[2rem] font-bold text-white transition duration-700 group-hover:translate-y-0  "
              >
                <span className="">{category.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HomeCategories;
