import { noimage } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import ProductRating from "../Rating";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import Link from "next/link";

const ProductTable = ({ products, setProducts }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const handleDeleteProduct = async (productId) => {
    const confirmed = window.confirm("Are you sure you want to delete");

    if (!confirmed) return;

    setDeleteLoading(true);
    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        const updatedProperties = products.filter(
          (property) => property._id !== productId
        );

        setProducts(updatedProperties);

        toast.success("Product deleted");
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete");
    } finally {
      setDeleteLoading(false);
    }
  };



  if (deleteLoading) return <Spinner loading={deleteLoading} />;
  return (
    <div className="overflow-x-auto pb-8">
      <table className="min-w-full bg-white font-[sans-serif]">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="px-6 py-5 text-left text-sm font-semibold text-black">
              Product
            </th>
            <th className="px-6 py-5 text-left text-sm font-semibold text-black">
              Original price
            </th>
            <th className="px-6 py-5 text-left text-sm font-semibold text-black">
              Sale price
            </th>
            <th className="px-6 py-5 text-left text-sm font-semibold text-black">
              In stock
            </th>
            <th className="px-6 py-5 text-left text-sm font-semibold text-black">
              Rating
            </th>
            <th className="px-6 py-5 text-left text-sm font-semibold text-black">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap divide-y divide-gray-200">
          {products?.map((product, index) => (
            <tr key={index}>
              <td className="px-6 py-3 text-sm">
                <div className="flex items-center cursor-pointer">
                  <Image
                    src={product?.images[0] || noimage}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-10 h-10 p-1.5 shrink-0 bg-gray-100"
                  />
                  <div className="ml-4">
                    <Link
                      href={`/manage-products/${product._id}`}
                      className="text-sm text-black hover:underline"
                    >
                      {product?.name}
                    </Link>
                  </div>
                </div>
              </td>
              <td className="px-6 py-3 text-sm">
                {product?.importPrice?.toLocaleString()}
              </td>
              <td className="px-6 py-3 text-sm">
                {product?.price?.toLocaleString()}
              </td>
              <td className="px-6 py-3 flex flex-wrap gap-1">
                {product?.inventory?.map((ele, index) => (
                  <span className="badge badge-ghost" key={index}>
                    {ele.size}: {ele.quantity}
                  </span>
                ))}
              </td>
              <td className="px-6 py-3">
                <ProductRating value={product?.ratings} />
              </td>
              <td className="px-6 py-3">
                <Link
                  href={`/manage-products/${product._id}`}
                  className="btn btn-ghost btn-circle btn-sm"
                >
                  <FaPencilAlt className="text-sky-900" size={12} />
                </Link>
                <button
                  onClick={() => handleDeleteProduct(product?._id)}
                  className="btn btn-ghost btn-circle btn-sm"
                >
                  <FaTrash className="text-red-600" size={12} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
