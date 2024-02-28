import React from "react";
const genericHamburgerLine = `h-[0.2rem] w-6 my-[0.1rem] rounded-full bg-black transition ease transform duration-300`;

const BurgerMenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="group flex flex-col items-center justify-center rounded lg:hidden"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "translate-y-[0.4rem] rotate-45 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-translate-y-[0.4rem] -rotate-45 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default BurgerMenuIcon;
