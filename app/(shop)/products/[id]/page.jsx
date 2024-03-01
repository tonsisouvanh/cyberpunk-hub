"use client";
import { noimage } from "@/assets/images";
import Breadcrumbs from "@/components/Breadcrumbs";
import Spinner from "@/components/Spinner";
import { fetchProduct } from "@/utils/request";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) return;
      try {
        const product = await fetchProduct(id);
        setProduct(product);
      } catch (error) {
        console.log("Error fetching product", error);
      } finally {
        setLoading(false);
      }
    };

    if (product === null) {
      fetchProductData();
    }
  }, [id, product]);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    // <div className="container mx-auto mt-8 font-notosanslao">
    //   <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    //     <div className="flex justify-center">
    //       <div className="relative w-full max-w-md overflow-hidden rounded-lg">
    //         <Image
    //           src={product?.images[0]}
    //           alt="Shoes"
    //           width={500}
    //           height={500}
    //           sizes="100vw"
    //           className="h-auto w-full"
    //         />
    //         {product?.images.length > 1 && (
    //           <div className="mt-2 flex w-full flex-wrap items-center justify-start gap-2">
    //             {product?.images.map((image, index) => (
    //               <Image
    //                 key={index}
    //                 src={image}
    //                 alt={product?.name}
    //                 width={500}
    //                 height={500}
    //                 sizes="100vw"
    //                 className={`h-auto w-24 cursor-pointer ${
    //                   index === 0 ? "border-2 border-indigo-500" : ""
    //                 }`}
    //               />
    //             ))}
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //     <div className="space-y-4">
    //       <h1 className="text-3xl font-semibold">{product?.name}</h1>
    //       <p className="text-gray-500">{product?.categories.join(", ")}</p>
    //       <div className="flex items-center">
    //         <p className="mr-2 text-4xl font-bold">
    //           {product?.price?.toLocaleString()}
    //         </p>
    //         {product?.discount?.type === "percentage" && (
    //           <p className="text-red-500">{product?.discount?.value}% off</p>
    //         )}
    //       </div>
    //       <p className="text-gray-600">{product?.description}</p>
    //       <div className="flex items-center space-x-2">
    //         {product?.isNewArrival && (
    //           <span className="rounded-full bg-green-500 px-2 py-1 text-sm text-white">
    //             New Arrival
    //           </span>
    //         )}
    //         {product?.isFeatured && (
    //           <span className="rounded-full bg-yellow-500 px-2 py-1 text-sm text-white">
    //             Featured
    //           </span>
    //         )}
    //       </div>
    //       <div>
    //         <h2 className="text-lg font-semibold">Available Sizes</h2>
    //         <div className="flex space-x-2">
    //           {product &&
    //             product?.inventory?.map((inven) => (
    //               <span
    //                 key={inven.size}
    //                 className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-600"
    //               >
    //                 {inven.size} * {inven.quantity}
    //               </span>
    //             ))}
    //         </div>
    //       </div>
    //       <div>
    //         <h2 className="text-lg font-semibold">Ratings</h2>
    //         <div className="flex items-center space-x-1">
    //           {Array.from({ length: product?.ratings }, (_, index) => (
    //             <svg
    //               key={index}
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5 text-yellow-500"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    //               />
    //             </svg>
    //           ))}
    //         </div>
    //       </div>
    //       <div>
    //         <h2 className="text-lg font-semibold">Stock</h2>
    //         <p className="text-gray-600">{product?.stock} available</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <Breadcrumbs />
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <Image
                    className="h-full w-full max-w-full object-cover"
                    src={product?.images[0] || noimage}
                    alt=""
                    width={500}
                    height={500}
                    sizes="100vw"
                  />
                </div>
              </div>
              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  {product &&
                    product?.images?.length > 0 &&
                    product?.images?.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                      >
                        <Image
                          className="h-full w-full object-cover"
                          src={image}
                          alt=""
                          width={500}
                          height={500}
                          sizes="100vw"
                        />
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
            {/* Rating */}
            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
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
                  className="block h-4 w-4 align-middle text-yellow-500"
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
                  className="block h-4 w-4 align-middle text-yellow-500"
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
                  className="block h-4 w-4 align-middle text-yellow-500"
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
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  />
                </svg>
              </div>
              <p className="ml-2 text-sm font-medium text-gray-500">
                1,209 Reviews
              </p>
            </div>
            <h2 className="mt-8 text-base text-gray-900">Quantity:</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label className="">
                <input
                  type="radio"
                  name="type"
                  // defaultValue="Powder"
                  className="peer sr-only"
                  defaultChecked=""
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  Powder
                </p>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="type"
                  // defaultValue="Whole Bean"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  Whole Bean
                </p>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="type"
                  // defaultValue="Groud"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  Groud
                </p>
              </label>
            </div>
            <h2 className="mt-8 text-base text-gray-900">Sizes:</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label className="">
                <input
                  type="radio"
                  name="subscription"
                  // defaultValue="4 Months"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  4 Months
                </p>
                <span className="mt-1 block text-center text-xs">$80/mo</span>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="subscription"
                  // defaultValue="8 Months"
                  className="peer sr-only"
                  defaultChecked=""
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  8 Months
                </p>
                <span className="mt-1 block text-center text-xs">$60/mo</span>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="subscription"
                  // defaultValue="12 Months"
                  className="peer sr-only"
                />
                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  12 Months
                </p>
                <span className="mt-1 block text-center text-xs">$40/mo</span>
              </label>
            </div>
            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">
                  {product.price?.toLocaleString()}
                </h1>
                <span className="text-base">
                  {product.discount?.discountType
                    ? product.discount?.value
                    : "No discount"}
                </span>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    className=""
                  />
                </svg>
                Free shipping worldwide
              </li>
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    className=""
                  />
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <a
                  href="#"
                  title=""
                  className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                >
                  {" "}
                  Description{" "}
                </a>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                >
                  Reviews
                  <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                    {" "}
                    1,209{" "}
                  </span>
                </a>
              </nav>
            </div>
            <div className="mt-8 flow-root sm:mt-12">
              <p className="mt-4">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
