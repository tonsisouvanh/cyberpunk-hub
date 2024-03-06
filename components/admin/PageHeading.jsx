"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const PageHeading = ({ labelText = "Go Back", backLink = "#", title = "" }) => {
  const router = useRouter();
  return (
    <div className="flex max-sm:flex-col items-center justify-center bg-gray-200 relative text-white px-6 py-3.5 rounded font-[sans-serif]">
      <div className="max-w-lg mr-auto absolute left-10">
        <button
          onClick={() => {
            router.push(backLink);
          }}
          className="btn btn-neutral btn-sm"
        >
          <FaArrowLeft />
          {labelText}
        </button>
      </div>
      <h1 className="font-bold text-lg text-neutral lg:text-2xl">
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
