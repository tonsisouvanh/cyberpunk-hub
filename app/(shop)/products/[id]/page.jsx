"use client";
import { noimage } from "@/assets/images";
import Error from "@/components/Error";
import ProductReview from "@/components/ProductReview";
import Rating from "@/components/Rating";
import Spinner from "@/components/Spinner";
import GoBackButton from "@/components/buttons/GoBackButton";
import { fetchProduct } from "@/utils/request";
import { calculateDiscountedPrice } from "@/utils/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) return;
      try {
        const product = await fetchProduct(id);
        setProduct(product);
        setCurrentImage(product?.images[0]);
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
  const handleSendingWhatsApp = () => {
    if (selectedSize && selectedSize !== "") {
      const merchantPhoneNumber = process.env.NEXT_PUBLIC_WHATSAPP;
      let whatsappMessage = `ສະບາຍດີຂໍຖາມຂໍ້ມູນສິນຄ້າ: \n\n`;
      whatsappMessage += `link: ${process.env.NEXT_PUBLIC_DOMAIN}/${product._id}\n`;
      whatsappMessage += `ຊື່: ${product.name}\n`;
      whatsappMessage += `ຮູບພາບ: ${product.images[0]}\n`;
      whatsappMessage += `ລາຄາ: ${
        product.discount.value > 0
          ? calculateDiscountedPrice(
              product.price,
              product.discount
            ).toLocaleString()
          : product.price.toLocaleString()
      }\n`;
      whatsappMessage += `Size: ${selectedSize}     ຈຳນວນ: ${1}\n`;
      whatsappMessage += `\n`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappLink = `https://wa.me/${merchantPhoneNumber}?text=${encodedMessage}`;
      window.open(whatsappLink, "_blank");
      return;
    } else {
      toast.warning("ເລຶອກ size");
    }
  };
  if (loading) {
    return <Spinner loading={loading} />;
  }
  if (!product) {
    return <Error />;
  }
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="">
          <GoBackButton style={"btn btn-neutral btn-outline"} />
        </div>
        <div className="">
          <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full lg:sticky top-0 sm:flex gap-2">
                <div className="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                  {product.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image || noimage}
                      alt={image}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className={`w-full cursor-pointer ${
                        image === currentImage && "border-4 border-sky-900"
                      }`}
                      onClick={() => setCurrentImage(image)}
                    />
                  ))}
                </div>

                <Image
                  src={
                    (!currentImage ? product.images[0] : currentImage) ||
                    noimage
                  }
                  alt=""
                  width={500}
                  height={0}
                  sizes="100vw"
                  className="w-4/5 rounded object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-800">
                  {product.name}
                </h2>
                <div className="flex flex-wrap gap-4 mt-4">
                  <p className="text-gray-800 text-xl font-bold">
                    {calculateDiscountedPrice(
                      product.price,
                      product.discount
                    ).toLocaleString()}{" "}
                    LAK
                  </p>
                  {product.discount && product.discount.value > 0 && (
                    <p className="text-gray-400 text-xl">
                      <strike>{product.price.toLocaleString()} LAK</strike>
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <Rating value={product.ratings} iconStyle="text-xl" />
                </div>
                <div className="mt-8">
                  <div className="">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Stock:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.inventory.map((ele) => (
                        <>
                          <span className="badge text-lg px-2 py-3">
                            {ele.size} : {ele.quantity}
                          </span>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {product.inventory.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(item.size)}
                        type="button"
                        className={`w-12 h-12 border-2 ${
                          selectedSize.toLowerCase() ===
                            item.size.toLowerCase() && "border-gray-800"
                        } hover:border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0`}
                      >
                        {item.size}
                      </button>
                    ))}
                  </div>
                  <button
                    disabled
                    type="button"
                    className="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded"
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    onClick={handleSendingWhatsApp}
                    className="w-full justify-center flex items-center bg-[#128c7e] mt-4 px-4 py-3 bg- hover:bg-[#128c7e]/90 text-white font-bold rounded"
                  >
                    <FaWhatsapp size={25} className="mr-2" />
                    Whats App
                  </button>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-800">
                    About the item
                  </h3>
                  <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                    <li>{product.description}</li>
                  </ul>
                </div>
                <ProductReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
