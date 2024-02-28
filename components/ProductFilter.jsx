import React from "react";

const ProductFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center mb-10 justify-between border-b border-gray-200 pb-6 pt-14">
      <h1 className="text-4xl mb-4 sm:mb-0 font-bold tracking-tight text-neutral">
        ALL PRODUCTS
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative inline-block text-left">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Sort</span>
            </div>
            <select className="select select-sm lg:select-md">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
        </div>
        <div className="relative inline-block text-left">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Categories</span>
            </div>
            <select className="select select-sm lg:select-md">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
