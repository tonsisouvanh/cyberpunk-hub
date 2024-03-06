import PageHeading from "@/components/admin/PageHeading";
import ProductEditForm from "@/components/admin/ProductEditForm";
import React from "react";

const ProductEditPage = () => {
  return (
    <>
      <PageHeading backLink="/manage-products" title="Edit Product" />
      <ProductEditForm />
    </>
  );
};

export default ProductEditPage;
