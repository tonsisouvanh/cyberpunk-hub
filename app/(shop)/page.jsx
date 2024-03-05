import Hero from "@/components/Hero";
import HomeCategories from "@/components/HomeCategories";
import HomeFeaturedProducts from "@/components/HomeFeaturedProducts";
import HomeServices from "@/components/HomeServices";
import SearchBar from "@/components/ProductSearchForm";

const HomePage = () => {
  return (
    <>
      <div className="pb-14 md:pb-44">
        <Hero />
        <div className="space-y-14 md:space-y-44">
          <SearchBar />
          <HomeCategories />
          <HomeServices />
          <HomeFeaturedProducts />
        </div>
      </div>
    </>
  );
};

export default HomePage;
