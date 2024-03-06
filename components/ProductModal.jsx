import React from "react";
import { FaTimes } from "react-icons/fa";

const ProductModal = ({ isOpen, setIsOpen, product }) => {
  return (
    <>
      {isOpen && (
        <dialog
          id="my_modal_1"
          className={`modal ${isOpen ? "modal-open" : null}`}
        >
          <div className="modal-box">
            <FaTimes
              onClick={() => setIsOpen(false)}
              className="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right"
            />
            <h4 className="text-md font-bold text-black mt-6">
              {product?.name}
            </h4>
            <div className="space-y-6 mt-6"></div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default ProductModal;
