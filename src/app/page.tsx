import Header from "./components/header/Header";
import Hero from "./components/herosection/Hero";
import MainCurrentPricePage from "@/app/components/CurrentPrices-section/MainCurrentPricePage";
import BannerSection from "./components/banner-section/BannerSection";
import ProductAndServiceSection from "./components/product&services-section/ProductAndServiceSection";
import InnovationSection from "./components/Innovation/InnovationSection";
import Register from "./components/register-section/Register";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MainCurrentPricePage />
      <BannerSection />
      {/* این بخش روی موبایل مخفیه */}
      <div className="hidden sm:block">
        <ProductAndServiceSection />
        {/* <ProductAndServiceMobile /> */}
      </div>
      <InnovationSection />
      <Register />
      <FAQ />
      <Footer />
    </div>
  );
}
