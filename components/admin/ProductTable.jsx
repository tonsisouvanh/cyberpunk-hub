import { noimage } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import ProductRating from "../Rating";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

const ProductTable = ({ products, setProducts }) => {
  const [loading, setLoading] = useState(false);
  const handleDeleteProduct = async (productId) => {
    const confirmed = window.confirm("Are you sure you want to delete");

    if (!confirmed) return;

    setLoading(true);
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
      setLoading(false);
    }
  };
  if (loading) return <Spinner loading={loading} />;
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
                    <p className="text-sm text-black">{product?.name}</p>
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
                <button className="btn btn-ghost btn-circle btn-sm">
                  <FaPencilAlt className="text-sky-900" size={12} />
                </button>
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
      <div className="md:flex mt-4 pt-4 px-6 border-t border-gray-100">
        <p className="text-sm text-gray-400 flex-1">
          Showind 1 to 5 of 100 entries
        </p>
        <div className="flex items-center max-md:mt-4">
          <p className="text-sm text-gray-400">Display</p>
          <select className="text-sm text-gray-400 border border-gray-400 rounded h-7 mx-4 outline-none">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
          <ul className="flex space-x-1 ml-2">
            <li className="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-500"
                viewBox="0 0 55.753 55.753"
              >
                <path
                  d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                  data-original="#000000"
                />
              </svg>
            </li>
            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
              1
            </li>
            <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
              2
            </li>
            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
              3
            </li>
            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
              4
            </li>
            <li className="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-500 rotate-180"
                viewBox="0 0 55.753 55.753"
              >
                <path
                  d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                  data-original="#000000"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
