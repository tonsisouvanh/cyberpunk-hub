import ProductSearchForm from "@/components/ProductSearchForm";
import Products from "@/components/Products";
const ProductsPage = () => {
  return (
    <section className="max-w-full">
      <ProductSearchForm />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Products />
      </div>
    </section>
  );
};

export default ProductsPage;
