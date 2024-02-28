"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductSearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword === "") {
      router.push("/products");
    } else {
      const query = `?keyword=${keyword}`;
      router.push(`/products/search-results${query}`);
    }
  };

  return (
    <section className="">
      <div className="bg-sky-950 text-white -skew-y-1">
        <div className="container mx-auto skew-y-1">
          <div className="flex flex-col items-center py-10 text-center lg:py-20">
            <div className="w-full px-4 lg:w-1/2 lg:px-0">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                  Search for products
                </h2>
                {/* <p className="text-lg lg:text-xl opacity-80">
                  By name or category
                </p> */}
              </div>
              <form
                onSubmit={handleSubmit}
                className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
              >
                <input
                  id="search-bar"
                  placeholder="Search by name or brand"
                  className="px-6 py-2 text-neutral w-full rounded-md flex-1 outline-none bg-white"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-black hover:bg-slate-900 border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
                >
                  <div className="relative">
                    {/* Loading animation change opacity to display */}
                    <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                      <svg
                        className="opacity-0 animate-spin w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx={12}
                          cy={12}
                          r={10}
                          stroke="currentColor"
                          strokeWidth={4}
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex items-center transition-all opacity-1 valid:">
                      <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                        Search
                      </span>
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSearchForm;
