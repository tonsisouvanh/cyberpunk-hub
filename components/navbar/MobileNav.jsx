'use client'
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiTwotoneShopping } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
import { menuItems } from "../../data/data";
import Link from "next/link";

const MobileNav = ({ categories, isOpen, handleNavbarClose }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  return (
    <nav
      className={`z-[5] origin-top scale-y-0 space-y-5 overflow-y-scroll px-5 py-3 font-notosanslao transition duration-300 ${
        isOpen ? "scale-y-100" : ""
      } fixed left-0 top-16 h-screen w-screen border-b-[1px] bg-white text-center lg:hidden`}
    >
      {/* <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AiOutlineClose
            onClick={toggleMenu}
            className="cursor-pointer text-2xl"
          />
          <Link
            to="/"
            className="items-center text-2xl font-bold text-black lg:flex"
          >
            <AiFillHome onClick={() => setIsOpen(false)} className="text-3xl" />
          </Link>
        </div>
      </div> */}

      <SearchBar />

      <ul className="text-1rem flex flex-col">
        <li
          onMouseLeave={() => setSubmenuOpen(false)}
          className="flex flex-col items-center border-b-[1px] py-3 text-center transition"
        >
          <div
            onClick={() => setSubmenuOpen(!submenuOpen)}
            className="flex cursor-pointer items-center justify-center font-bold"
          >
            <AiTwotoneShopping className="text-2xl text-black" />
            <span>Shop</span>
            <MdOutlineKeyboardArrowRight
              className={`transition-transform ${
                submenuOpen ? "rotate-90" : ""
              }`}
            />
          </div>

          <div className="group">
            <div
              className={`max-h-0 origin-top scale-y-0 transform overflow-hidden text-black opacity-0 transition-all duration-300 ${
                submenuOpen ? "max-h-full scale-y-100 opacity-100" : null
              }`}
            >
              <div className="text-0.875rem flex flex-col gap-3">
                <Link
                  className="mt-3 hover:opacity-70"
                  onClick={handleNavbarClose}
                  to="/all-products/all"
                >
                  ເຄື່ອງທັງໝົດ
                </Link>
                {categories.map((item) => (
                  <Link
                    key={item.id}
                    className="hover:opacity-70"
                    onClick={handleNavbarClose}
                    to={`/all-products/${item.name}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </li>

        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.toPath}
            className="border-b-[1px] py-3 transition hover:bg-black hover:text-white"
            onClick={handleNavbarClose}
          >
            <li className="cursor-pointer">{item.text}</li>
          </Link>
        ))}
      </ul>
      <Link to="login" className="btn-neutral btn text-white md:flex">
        SIGN IN
      </Link>
    </nav>
  );
};

export default MobileNav;
