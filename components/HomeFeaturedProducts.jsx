import FeaturedProducts from "./FeaturedProducts";
import { fetchProducts } from "@/utils/request";

const HomeFeaturedProducts = async () => {
  const products = await fetchProducts();

  return (
    <>
      <FeaturedProducts
        products={products}
        featuredTitle="ເຄື່ອງມາໃໝ່"
        featuredDesc="ຄົ້ນພົບການເພີ່ມໃຫມ່ຫຼ້າສຸດຂອງຄໍເລັກຊັນຂອງພວກເຮົາ, ສະເຫນີທາງເລືອກທີ່ສົດຊື່ນແລະທັນສະໄຫມສໍາລັບທ່ານ."
        showButton={false}
        isScrollX={false}
        featuredType={"newarrival"}
      />
      <FeaturedProducts
        products={[]}
        featuredTitle="ເຄື່ອງຂາຍດີ"
        featuredDesc="ເຄື່ອງທີ່ລູກຄ້ານິຍົມ ແລະ ສົນໃຈ"
        showButton={false}
        isScrollX={false}
        featuredType="bestseller"
      />
      <FeaturedProducts
        products={products}
        featuredTitle="SALE"
        featuredDesc="ຫຼຸດກະນ່ຳ"
        showButton={false}
        isScrollX={false}
        featuredType="sale"
      />
    </>
  );
};

export default HomeFeaturedProducts;
