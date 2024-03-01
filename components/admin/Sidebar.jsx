import Link from "next/link";
import React from "react";
import {
  FaBars,
  FaBoxes,
  FaCartArrowDown,
  FaChartBar,
  FaFileInvoice,
  FaGlobe,
  FaUser,
} from "react-icons/fa";
import Logo from "../Logo";
import { cyberpunk, noimage } from "@/assets/images";
import Image from "next/image";

const sidebarMenuItems = [
  { name: "Report", route: "/dashboard", icon: <FaChartBar size={15} /> },
  { name: "Users", route: "/profile", icon: <FaUser size={15} /> },
  { name: "Products", route: "/manage-products", icon: <FaBoxes size={15} /> },
  { name: "User Carts", route: "/cart", icon: <FaCartArrowDown size={15} /> },
  { name: "Orders", route: "/orders", icon: <FaFileInvoice size={15} /> },
  { name: "Ecommerce Site", route: "/", icon: <FaGlobe size={15} /> },
  // Add more items as needed, e.g., an Admin Panel for users with the "admin" role
];

const Sidebar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content absolute top-2 left-2">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
          {" "}
          <FaBars />
        </label>
      </div>
      <div className="drawer-side z-[999]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="my-10 mx-auto">
            <Image
              src={cyberpunk || noimage}
              alt=""
              width={70}
              height={70}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Sidebar content here */}
          {sidebarMenuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.route}>
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
