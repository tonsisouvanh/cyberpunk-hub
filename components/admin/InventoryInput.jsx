import { generateRandomId } from "@/utils/utils";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const InventoryInput = ({ inventoryData, setInventoryData }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [selectedGender, setSelectedGender] = useState("male");
  const handleAddInventory = () => {
    if (selectedSize === "") {
      return;
    }

    const existInventory = inventoryData.find(
      (i) => i.size === selectedSize && i.gender === selectedGender
    );

    if (existInventory) return;

    setInventoryData([
      ...inventoryData,
      {
        id: generateRandomId(),
        size: selectedSize,
        quantity,
        gender: selectedGender,
      },
    ]);
  };
  const handleDelete = (id) => {
    const existInventory = inventoryData.find((i) => i.id === id);

    if (existInventory) {
      const deletedInventory = inventoryData.filter((i) => i.id !== id);
      setInventoryData(deletedInventory);
    }
  };

  return (
    <>
      <div className="-mx-3 flex flex-wrap mb-5">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="inventorySize"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Inventory Size
            </label>
            <select
              name="discount.discountType"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="" disabled>
                Select Size
              </option>
              <option value="XS">Extra Small (XS)</option>
              <option value="S">Small (S)</option>
              <option value="M">Medium (M)</option>
              <option value="L">Large (L)</option>
              <option value="XL">Extra Large (XL)</option>
              <option value="XXL">Double Extra Large (XXL)</option>
            </select>
          </div>
        </div>
        <div className="w-full flex items-center gap-4 px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="inventoryQuantity"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Inventory Quantity
            </label>
            <input
              type="number"
              name="inventoryQuantity"
              id="inventoryQuantity"
              placeholder="Enter inventory quantity"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="inventorySize"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Gender
            </label>
            <select
              name="discount.discountType"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>
        </div>

        <div className="container mb-5 mx-auto grid px-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
          {inventoryData.map((item, index) => (
            <div
              key={index}
              className="flex relative bg-white flex-col hover:shadow border text-center w-full p-4 rounded-md"
            >
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                className="btn btn-ghost btn-xs btn-circle"
              >
                <FaTimes className="text-red-error" size={20} />
              </button>
              <p className="lg:w-2/3 font-bold mx-auto leading-relaxed text-base">
                {item.size}
              </p>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {item.gender}
              </p>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Quantity: {item.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={handleAddInventory}
            className="btn btn-ghost btn-outline btn-wide"
          >
            Add Size
          </button>
        </div>
      </div>
    </>
  );
};

export default InventoryInput;
