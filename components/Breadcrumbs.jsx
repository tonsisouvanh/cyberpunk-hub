import Link from "next/link";
import React from "react";

const Breadcrumbs = () => {
  return (
    // <nav className="flex">
    //   <ol role="list" className="flex items-center">
    //     <li className="text-left">
    //       <div className="-m-1">
    //         <a
    //           href="#"
    //           className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
    //         >
    //           Home
    //         </a>
    //       </div>
    //     </li>
    //     <li className="text-left">
    //       <div className="flex items-center">
    //         <span className="mx-2 text-gray-400">/</span>
    //         <div className="-m-1">
    //           <a
    //             href="#"
    //             className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
    //           >
    //             Products
    //           </a>
    //         </div>
    //       </div>
    //     </li>
    //     <li className="text-left">
    //       <div className="flex items-center">
    //         <span className="mx-2 text-gray-400">/</span>
    //         <div className="-m-1">
    //           <a
    //             href="#"
    //             className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
    //             aria-current="page"
    //           >
    //             {" "}
    //             Coffee{" "}
    //           </a>
    //         </div>
    //       </div>
    //     </li>
    //   </ol>
    // </nav>
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
