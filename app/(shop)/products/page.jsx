import ProductFilter from "@/components/ProductFilter";
import ProductSearchForm from "@/components/ProductSearchForm";
import Products from "@/components/Products";
const ProductsPage = () => {
  // const [properties, setProperties] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [pageSize, setPageSize] = useState(6);
  // const [totalItems, setTotalItems] = useState(0);

  return (
    <section className="max-w-full">
      <ProductSearchForm />
      {/* // ====================================================== */}

      {/* // ====================================================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <ProductFilter />
        <Products />
      </div>
    </section>
  );
};

export default ProductsPage;
