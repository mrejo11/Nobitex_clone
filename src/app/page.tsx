import Header from "./components/header/Header";
import Hero from "./components/herosection/Hero";
import MainCurrentPricePage from "@/app/components/CurrentPrices-section/MainCurrentPricePage";
import BannerSection from "./components/banner-section/BannerSection";
import ProductAndServiceSection from "./components/product&services-section/ProductAndServiceSection";
import InnovationSection from "./components/Innovation/InnovationSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MainCurrentPricePage />
      <BannerSection/>
      <ProductAndServiceSection />
      <InnovationSection />
    </div>
  );
}
