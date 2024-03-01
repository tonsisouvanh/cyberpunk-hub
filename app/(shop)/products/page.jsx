import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import ProductSearchForm from "@/components/ProductSearchForm";
import { fetchProducts } from "@/utils/request";
const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <section className="max-w-full">
      <ProductSearchForm />
      {/* // ====================================================== */}

      {/* // ====================================================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <ProductFilter />
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

export default ProductsPage;
