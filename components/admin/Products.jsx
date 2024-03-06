"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Spinner from "../Spinner";
import ProductTable from "./ProductTable";
import Empty from "../Empty";
import Pagination from "../Pagination";

const Products = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const res = await fetch(
          `/api/products?page=${page}&pageSize=${pageSize}`
        );
        if (res.status === 200) {
          const { products, total } = await res.json();
          setTotalItems(total);
          setProducts(products);
        } else {
          setProducts([]);
        }
      };

      fetchProducts();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize]);

  useEffect(() => {
    let filteredProducts = [];
    if (filter === "isNewArrival")
      filteredProducts = products.filter((pro) => pro.isNewArrival === true);
    else if (filter === "sale") {
      filteredProducts = products.filter((pro) => pro.discount.value > 0);
    } else filteredProducts = products;

    setFilteredProducts(filteredProducts);
  }, [filter, products]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) return <Spinner loading={loading} />;
  return (
    <>
      <div className="sm:flex items-center justify-between py-4 md:py-7">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`btn btn-ghost ${filter === "all" && "btn-active"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("sale")}
            className={`btn btn-ghost ${filter === "sale" && "btn-active"}`}
          >
            Sales
          </button>
          <button
            onClick={() => setFilter("isNewArrival")}
            className={`btn btn-ghost ${
              filter === "isnewarrival" && "btn-active"
            }`}
          >
            New Arrival
          </button>
        </div>
        <Link href="/manage-products/add" className="btn btn-neutral">
          <FaPlus />
          Add Product
        </Link>
      </div>

      {!products || products.length === 0 ? (
        <Empty />
      ) : (
        <>
          <ProductTable products={filteredProducts} setProducts={setProducts} />
          <div className="flex items-center">
            <div className="">
              <div className="label">
                <span className="label-text">Display</span>
              </div>
              <select
                onChange={(e) => setPageSize(e.target.value)}
                className="select select-sm select-bordered"
                value={pageSize}
              >
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <Pagination
              page={page}
              pageSize={pageSize}
              totalItems={totalItems}
              onPageChange={handlePageChange}
            />
            <p className="text-sm whitespace-nowrap text-gray-400 flex-1">
              Showind 1 to {filteredProducts.length} of {totalItems} entries
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
