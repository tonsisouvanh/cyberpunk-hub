import React from "react";

const ProductReview = () => {
  return (
    <div className="mt-8 max-w-md">
      <h3 className="text-lg font-bold text-gray-800">Reviews(10)</h3>
      <div className="space-y-3 mt-4">
        <div className="flex items-center">
          <p className="text-sm text-gray-800 font-bold">5.0</p>
          <svg
            className="w-5 fill-gray-800 ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-2 ml-3">
            <div className="w-2/3 h-full rounded bg-gray-800" />
          </div>
          <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-800 font-bold">4.0</p>
          <svg
            className="w-5 fill-gray-800 ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-2 ml-3">
            <div className="w-1/3 h-full rounded bg-gray-800" />
          </div>
          <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-800 font-bold">3.0</p>
          <svg
            className="w-5 fill-gray-800 ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-2 ml-3">
            <div className="w-1/6 h-full rounded bg-gray-800" />
          </div>
          <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-800 font-bold">2.0</p>
          <svg
            className="w-5 fill-gray-800 ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-2 ml-3">
            <div className="w-1/12 h-full rounded bg-gray-800" />
          </div>
          <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-800 font-bold">1.0</p>
          <svg
            className="w-5 fill-gray-800 ml-1"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <div className="bg-gray-300 rounded w-full h-2 ml-3">
            <div className="w-[6%] h-full rounded bg-gray-800" />
          </div>
          <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
        </div>
      </div>
      <button
        type="button"
        className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded"
      >
        Read all reviews
      </button>
    </div>
  );
};

export default ProductReview;
