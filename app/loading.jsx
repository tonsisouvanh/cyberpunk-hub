import React from "react";

const LoadingPage = () => {
  return (
    <dialog id="my_modal_3" className="modal modal-open">
      <div className="modal-box bg-transparent shadow-none flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
        <h1 className="text-red-500">Loading...</h1>
      </div>
    </dialog>
  );
};

export default LoadingPage;
