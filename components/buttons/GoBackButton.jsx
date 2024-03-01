import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const GoBackButton = ({ labelText = "Go Back", style }) => {
  const router = useRouter();
  return (
    <>
      {style ? (
        <button
          onClick={() => {
            router.push("/products");
          }}
          className={style}
        >
          {labelText}
          <FaArrowLeft />
        </button>
      ) : (
        <button
          onClick={() => {
            router.push("/products");
          }}
          className="btn btn-neutral"
        >
          {labelText}
          <FaArrowLeft />
        </button>
      )}
    </>
  );
};

export default GoBackButton;
