import Hero from "@/components/Hero";
import HomeCategories from "@/components/HomeCategories";
import HomeFeaturedProducts from "@/components/HomeFeaturedProducts";
import HomeServices from "@/components/HomeServices";

const HomePage = () => {
  return (
    <>
      <div className="space-y-14 md:space-y-44 pb-14 md:pb-44">
        <Hero />
        <HomeCategories />
        <HomeServices />
        <HomeFeaturedProducts />
      </div>
    </>
  );
};

export default HomePage;
