import React from "react";
import FeaturedProducts from "./FeaturedProducts";

const HomeFeaturedProducts = () => {
  return (
    <>
      <FeaturedProducts
        products={[]}
        featuredTitle="ເຄື່ອງມາໃໝ່"
        featuredDesc="ຄົ້ນພົບການເພີ່ມໃຫມ່ຫຼ້າສຸດຂອງຄໍເລັກຊັນຂອງພວກເຮົາ, ສະເຫນີທາງເລືອກທີ່ສົດຊື່ນແລະທັນສະໄຫມສໍາລັບທ່ານ."
        showButton={false}
        isScrollX={false}
        showType={"newarrival"}
      />
      <FeaturedProducts
        products={[]}
        featuredTitle="ເຄື່ອງຂາຍດີ"
        featuredDesc="ເຄື່ອງທີ່ລູກຄ້ານິຍົມ ແລະ ສົນໃຈ"
        showButton={false}
        isScrollX={false}
        showType="bestsell"
      />
      <FeaturedProducts
        products={[]}
        featuredTitle="SALE"
        featuredDesc="ຫຼຸດກະນ່ຳ"
        showButton={false}
        isScrollX={false}
        showType="sale"
      />
    </>
  );
};

export default HomeFeaturedProducts;
