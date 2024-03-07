import { noimage } from "@/assets/images";
import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section className="pt-10 overflow-hidden bg-black md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-sans font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Hi 👋 I am
              <br className="block sm:hidden" /> Jimmy
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-300 md:mt-8">
              ຂາຍເຄື່ອງ ສົ້ງ, ເສື້ອ, ກະເປົາ...
            </p>
            <p className="mt-4 text-xl text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="relative underline underline-offset-2">
                  {" "}
                  ຕິດຕາມທີ່{" "}
                </span>
              </span>
              <br className="block sm:hidden" />{" "}
            </p>
            <div className="flex mt-4 flex-wrap gap-4">
              <SocialMedia />
            </div>
          </div>
          <div className="relative">
            <div className="h-screen py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                  {/* image - start */}
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <Image
                      src={
                        "https://res.cloudinary.com/devton/image/upload/v1709717941/cyberpunkhub/364376228_302748808825866_3608019509058990051_n_ajuusf.jpg" ||
                        noimage
                      }
                      alt=""
                      width={500}
                      height={500}
                      sizes="100vw"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      PUNK-01
                    </span>
                  </a>
                  {/* image - end */}
                  {/* image - start */}
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <Image
                      src={
                        "https://res.cloudinary.com/devton/image/upload/v1709717931/cyberpunkhub/366114272_306128681831115_5460532391527016959_n_mliatk.jpg" ||
                        noimage
                      }
                      alt=""
                      width={500}
                      height={500}
                      sizes="100vw"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      PUNK-02
                    </span>
                  </a>
                  {/* image - end */}
                  {/* image - start */}
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <Image
                      src={
                        "https://res.cloudinary.com/devton/image/upload/v1709717869/cyberpunkhub/428497745_953074769500702_8897610650958405301_n_yhlpg4.jpg" ||
                        noimage
                      }
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      PUNK-03
                    </span>
                  </a>
                  {/* image - end */}
                  {/* image - start */}
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <Image
                      src={
                        "https://res.cloudinary.com/devton/image/upload/v1709717956/cyberpunkhub/361951285_1441417529966111_1512080184456771389_n_gp5vop.jpg" ||
                        noimage
                      }
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      PUNK-04
                    </span>
                  </a>
                  {/* image - end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
