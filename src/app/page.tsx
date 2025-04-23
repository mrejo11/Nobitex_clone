import Header from "./components/header/Header";
import Hero from "./components/herosection/Hero";
import MainCurrentPricePage from "@/app/components/CurrentPrices-section/MainCurrentPricePage";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MainCurrentPricePage />
    </div>
  );
}
