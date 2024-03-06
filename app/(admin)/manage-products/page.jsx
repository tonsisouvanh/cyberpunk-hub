"use client";
import PageHeader from "@/components/admin/PageHeader";
import Products from "@/components/admin/Products";
import withAuth from "@/components/auth/withAuth";

const ManageProductsPage = () => {
  return (
    <>
      <PageHeader headerText={"Products"} />
      <Products />
    </>
  );
};

export default withAuth(ManageProductsPage);
