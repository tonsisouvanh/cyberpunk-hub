"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import BurgerMenuIcon from "../BurgerMenuIcon";
import { usePathname } from "next/navigation";
import {
  FaArtstation,
  FaGoogle,
  FaGratipay,
  FaListAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { noimage } from "@/assets/images";

const menuItems = [
  { text: "ໜ້າຫຼັກ", toPath: "/" },
  { text: "ເຄື່ອງທັງໝົດ", toPath: "/products" },
  // { id: 2, text: "Sale", toPath: "/products" },
  // { id: 3, text: "ເຄື່ອງມາໃໝ່", toPath: "/all-products/arrival" },
  { text: "ກ່ຽວກັບພໍ່ຄ້າ", toPath: "/about" },
  { text: "ຕິດຕໍ່", toPath: "/contact" },
];

const Navbar = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const [providers, setProviders] = useState(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  const handleNavbarClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* TODO: navbar overflow */}
      {/* Desktop nav */}
      <nav className="bg-white sticky top-0 z-50">
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
                <Link
                  key={index}
                  href={item.toPath}
                  className="whitespace-nowrap"
                >
                  <li
                    className={`w-fit cursor-pointer transition rounded-md hover:bg-slate-900 hover:text-white py-2 px-4 ${
                      pathname === item.toPath && "bg-slate-900 text-white"
                    }`}
                    onClick={handleNavbarClose}
                  >
                    {item.text}
                  </li>
                </Link>
              ))}
            </ul>
            {/* User profile */}
            {session && (
              <div className="items-center hidden md:flex justify-center gap-2">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-circle m-1"
                  >
                    {profileImage ? (
                      <>
                        <div className="avatar">
                          <div className="w-8 rounded-full">
                            <Image
                              src={profileImage || noimage}
                              alt=""
                              width={500}
                              height={500}
                              sizes="100vw"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <CgProfile className="text-neutral" size={30} />
                    )}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>
                        <FaGratipay size={15} />
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaListAlt size={15} />
                        Orders
                      </a>
                    </li>
                    <li>
                      {session.role === "admin" && (
                        <Link href="/dashboard">
                          <FaArtstation size={15} />
                          Admin Dashboard
                        </Link>
                      )}
                    </li>
                    <li
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <a>
                        <FaSignOutAlt size={15} />
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
                <Link
                  href={`/cart/${1}`}
                  className="relative btn-circle btn btn-ghost text-gray-700 hover:text-gray-600"
                >
                  <BiCartAlt className="text-neutral" size={30} />

                  <span className="absolute top-2 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
                </Link>
              </div>
            )}
            {/* sign in */}
            {!session && (
              <div className="hidden md:block md:ml-6">
                <div className="flex items-center">
                  {providers &&
                    Object.values(providers).map((provider) => (
                      <button
                        key={provider.id}
                        type="button"
                        onClick={() => signIn(provider.id)}
                        className="btn text-white hover:bg-blue-700 bg-blue-500"
                      >
                        <FaGoogle />
                        Sign in
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Admin */}
          </div>
        </div>
      </nav>
      {/* Mobile nav */}
      <nav
        className={`z-[10] origin-top scale-y-0 space-y-5 overflow-y-scroll px-5 py-3 transition duration-300 ${
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
        {session && (
          <div className="flex items-center justify-center gap-2">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-circle m-1">
                {profileImage ? (
                  <>
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <Image
                          src={profileImage || noimage}
                          alt=""
                          width={500}
                          height={500}
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <CgProfile className="text-neutral" size={30} />
                )}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li
                  onClick={() => {
                    signOut();
                  }}
                >
                  <a>
                    <FaGratipay size={15} />
                    Wishlist
                  </a>
                  <a>
                    <FaListAlt size={15} />
                    Orders
                  </a>
                  <a>
                    <FaSignOutAlt size={15} />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <Link
              href={`/cart/${1}`}
              className="relative btn-circle btn btn-ghost text-gray-700 hover:text-gray-600"
            >
              <BiCartAlt className="text-neutral" size={30} />

              <span className="absolute top-2 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
            </Link>
          </div>
        )}
        {!session && (
          <div className="">
            <div className="flex items-center justify-center">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    key={provider.id}
                    type="button"
                    onClick={() => signIn(provider.id)}
                    className="btn text-white hover:bg-blue-700 bg-blue-500"
                  >
                    <FaGoogle />
                    Sign in
                  </button>
                ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
