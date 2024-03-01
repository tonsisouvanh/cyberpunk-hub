import React from "react";

const PageHeader = ({ headerText = "No Header" }) => {
  return (
    <div className="py-4 md:py-7">
      <div className="flex items-center justify-between">
        <p
          tabIndex={0}
          className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-neutral"
        >
          {headerText}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
