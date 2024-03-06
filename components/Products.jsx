"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `/api/products?page=${page}&pageSize=${pageSize}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setProducts(data.products);
        setTotalItems(data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page, pageSize]);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  if (loading) return <Spinner loading={loading} />;
  return (
    <>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <p>No products</p>
      )}
      <div className="mt-10">
        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Products;
