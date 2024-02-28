"use client";
import { FaShippingFast, FaMoneyBill } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { scaleAnimate, scaleAnimateReverse } from "@/utils/animation";

const services = [
  {
    icon: <FaShippingFast />,
    title: "Shipping",
    description: "ລູກຄ້າໃຊ້ບໍລິການຂົນສົ່ງທີ່ສະດວກ ແລະ ເກັບຄ່າສົ່ງປາຍທາງ",
  },
  {
    icon: <BsWhatsapp />,
    title: "ຕິດຕໍ່",
    description: "ສາມາດແຊັດຫາພໍ່ຕ້າໂດຍຕົງຜ່ານ WhatsApp",
  },
  {
    icon: <FaMoneyBill />,
    title: "ການຊຳລະຄ່າເຄື່ອງ",
    description: "ລູກຄ້າຊຳລະຜ່ານ BCEL ONE",
  },
];

const HomeServices = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      variants={scaleAnimate}
      className="w-full"
    >
      <div className="w-full">
        <div className="px-4 sm:px-6 bg-gradient-to-r from-slate-900 to-slate-700 lg:px-8 py-20">
          <motion.div className="grid  gap-8 grid-cols-1 sm:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex  flex-col text-base items-center text-center"
                variants={scaleAnimateReverse}
              >
                <div className="mb-4 text-3xl text-white sm:text-4xl lg:text-5xl">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-100 sm:text-xl lg:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-300 sm:text-base lg:text-lg">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeServices;
