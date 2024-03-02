"use client";
import Spinner from "@/components/Spinner";
import PageHeader from "@/components/admin/PageHeader";
import ProductTable from "@/components/admin/ProductTable";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const ManageProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
  if (loading) {
    return (
      <>
        <Spinner loading={loading} />
      </>
    );
  }
  return (
    <>
      <PageHeader headerText={"Products"} />
      <div className="sm:flex items-center justify-between py-4 md:py-7">
        <div className="flex items-center gap-4">
          <button className="btn btn-active btn-ghost px-10 btn-circle">
            All
          </button>
          <button className="btn btn-ghost px-10 btn-circle">Done</button>
          <button className="btn btn-ghost px-10 btn-circle">Pending</button>
        </div>
        <Link href="/manage-products/add" className="btn btn-neutral">
          <FaPlus />
          Add Product
        </Link>
      </div>
      <ProductTable products={products} setProducts={setProducts}/>
    </>
  );
};

export default ManageProductsPage;
