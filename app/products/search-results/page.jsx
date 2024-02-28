"use client";
import ProductCard from "@/components/ProductCard";
import Spinner from "@/components/Spinner";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductSearchResultsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const keyword = searchParams.get("keyword");

  useEffect(() => {
    try {
      const fetchSearchResults = async () => {
        const res = await fetch(`/api/products/search?keyword=${keyword}`);
        if (res.status === 200) {
          const data = await res.json();
          setProducts(data);
        } else {
          setProducts([]);
        }
      };

      fetchSearchResults();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [keyword]);
  if (loading === true) return <Spinner loading={loading} />;
  return (
    <section className="max-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <button
          onClick={() => {
            router.push("/products");
          }}
          className="btn btn-link text-blue-600"
        >
          Back To All Products
        </button>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          <p>No products</p>
        )}
      </div>
    </section>
  );
};

export default ProductSearchResultsPage;
