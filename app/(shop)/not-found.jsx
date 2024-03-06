import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-black p-10 text-white">
      <div className="absolute left-0 top-0 h-full w-full bg-cover z-[-1] opacity-30">
        <Image
          className="h-full w-full object-cover"
          src={
            "https://res.cloudinary.com/devton/image/upload/v1709722372/cyberpunkhub/jimabanner_rmjhav.jpg"
          }
          alt=""
        />
      </div>
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="text-2xl">Oops! Page not found.</p>
      <p className="mt-4 text-center text-lg">
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-8 text-cyan-300 hover:underline btn btn-link"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
