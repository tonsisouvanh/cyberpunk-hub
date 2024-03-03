"use client";
import ProductAddForm from "@/components/admin/ProductAddForm";
import withAuth from "@/components/auth/withAuth";
import React from "react";

const AddProductPage = () => {
  return (
    <>
      <ProductAddForm />
    </>
  );
};

export default withAuth(AddProductPage);
