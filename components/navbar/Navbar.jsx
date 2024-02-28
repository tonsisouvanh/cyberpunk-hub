"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import BurgerMenuIcon from "../BurgerMenuIcon";
import { usePathname } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

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
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                  className={`w-fit cursor-pointer transition rounded-md hover:bg-slate-900 hover:text-white py-2 px-4 ${
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
            {isLoggedIn ? (
              <div className="flex items-center justify-center gap-2">
                <button className="btn btn-circle btn-ghost">
                  <CgProfile className="text-neutral" size={30} />
                </button>
                <Link
                  href={`/cart/${1}`}
                  className="relative btn-circle btn btn-ghost text-gray-700 hover:text-gray-600"
                >
                  <BiCartAlt className="text-neutral" size={30} />

                  <span className="absolute top-2 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
                </Link>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsLoggedIn(true)}
                href="/login"
                className="btn text-white hover:bg-blue-700 bg-blue-500"
              >
                <FaGoogle />
                Sign in
              </button>
            )}
            {/* User profile here */}
          </div>
        </div>
      </nav>
      {/* Mobile nav */}
      <nav
        className={`z-[5] origin-top scale-y-0 space-y-5 overflow-y-scroll px-5 py-3 transition duration-300 ${
          isOpen ? "scale-y-100" : ""
        } fixed left-0 top-0 h-screen w-screen border-b-[1px] bg-white text-center lg:hidden`}
      >
        {/* Nav menu */}
        <div className="mt-5">
          <BurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <ul className="text-1rem flex flex-col">
          <li
            onMouseLeave={() => setSubmenuOpen(false)}
            className="flex flex-col items-center border-b-[1px] py-3 text-center transition"
          >
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
        <button
          type="button"
          onClick={() => {
            setIsLoggedIn(true);
            handleNavbarClose();
          }}
          href="/login"
          className="btn text-white hover:bg-blue-700 bg-blue-500"
        >
          <FaGoogle />
          Sign in
        </button>
      </nav>
    </>
  );
};

export default Navbar;
