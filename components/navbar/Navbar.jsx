"use client";
import React, { useState } from "react";
import { AiTwotoneShopping } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Logo from "../Logo";
import BurgerMenuIcon from "../BurgerMenuIcon";
import { usePathname } from "next/navigation";

const menuItems = [
  { text: "ໜ້າຫຼັກ", toPath: "/" },
  { text: "Shop now!", toPath: "/products" },
  // { id: 2, text: "Sale", toPath: "/products" },
  // { id: 3, text: "ເຄື່ອງມາໃໝ່", toPath: "/all-products/arrival" },
  { text: "ກ່ຽວກັບພໍ່ຄ້າ", toPath: "/about" },
  { text: "ຕິດຕໍ່", toPath: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log("🚀 ~ Navbar ~ pathname:", pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const handleNavbarClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop nav */}
      <nav className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <BurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />

            <Link
              href="/"
              className="items-center text-lg marker:font-bold lg:flex lg:text-xl"
            >
              <Logo />
            </Link>

            {/* Nav menu */}
            <ul className="hidden items-center gap-5 text-lg lg:flex">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`w-fit cursor-pointer transition rounded-md hover:bg-slate-900 hover:text-white py-2 px-6 ${
                    pathname === item.toPath && "bg-slate-900 text-white"
                  }`}
                  onClick={handleNavbarClose}
                >
                  <Link href={item.toPath} className="whitespace-nowrap">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            {/* User profile here */}
          </div>
        </div>
      </nav>
      {/* Mobile nav */}
      <nav
        className={`z-[5] origin-top scale-y-0 space-y-5 overflow-y-scroll px-5 py-3 transition duration-300 ${
          isOpen ? "scale-y-100" : ""
        } fixed left-0 top-20 h-screen w-screen border-b-[1px] bg-white text-center lg:hidden`}
      >
        {/* Nav menu */}
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
                    href="/products"
                  >
                    ເຄື່ອງທັງໝົດ
                  </Link>
                  {categories.map((item) => (
                    <Link
                      key={item.id}
                      className="hover:opacity-70"
                      onClick={handleNavbarClose}
                      href={`/all-products/${item.name}`}
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
              href={item.toPath}
              className="border-b-[1px] py-3 transition hover:bg-black hover:text-white"
              onClick={handleNavbarClose}
            >
              <li className="cursor-pointer">{item.text}</li>
            </Link>
          ))}
        </ul>
        <Link href="/login" className="btn-neutral btn text-white md:flex">
          SIGN IN
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
