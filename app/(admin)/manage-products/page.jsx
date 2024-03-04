"use client";
import Empty from "@/components/Empty";
import Spinner from "@/components/Spinner";
import PageHeader from "@/components/admin/PageHeader";
import ProductTable from "@/components/admin/ProductTable";
import withAuth from "@/components/auth/withAuth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const ManageProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const res = await fetch(`/api/products`);
        if (res.status === 200) {
          const data = await res.json();
          setProducts(data);
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
  }, []);

  useEffect(() => {
    let filteredProducts = [];
    if (filter === "isNewArrival")
      filteredProducts = products.filter((pro) => pro.isNewArrival === true);
    else if (filter === "sale") {
      filteredProducts = products.filter((pro) => pro.discount.value > 0);
    } else filteredProducts = [...products];

    setFilteredProducts(filteredProducts);
  }, [filter, products]);
  return (
    <>
      <PageHeader headerText={"Products"} />
      <div className="sm:flex items-center justify-between py-4 md:py-7">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`btn btn-ghost ${
              filter.includes("all") && "btn-active"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("sale")}
            className={`btn btn-ghost ${
              filter.includes("sale") && "btn-active"
            }`}
          >
            Sales
          </button>
          <button
            onClick={() => setFilter("isNewArrival")}
            className={`btn btn-ghost ${
              filter.includes("isNewArrival") && "btn-active"
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
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          {products.length > 0 ? (
            <ProductTable
              products={filteredProducts}
              setProducts={setProducts}
            />
          ) : (
            <Empty />
          )}
        </>
      )}
    </>
  );
};

export default withAuth(ManageProductsPage);
