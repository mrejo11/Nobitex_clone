// "use client"
import Header from "./components/header/Header";
import Hero from "./components/herosection/Hero";
import MainCurrentPricePage from "@/app/components/CurrentPrices-section/MainCurrentPricePage";
import BannerSection from "./components/banner-section/BannerSection";
import ProductAndServiceSection from "./components/product&services-section/ProductAndServiceSection";
import InnovationSection from "./components/Innovation/InnovationSection";
import Register from "./components/register-section/Register";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/footer/Footer";
// import { useEffect, useState } from "react";
import MobileHeader from "../app/components/header/mobile-header/MobileHeader"

export default function Home() {
//   const[isMobile,setIsMobile]=useState(false)

//   useEffect(()=>{
//     const checkScreenSize=()=>{
//       setIsMobile(window.innerWidth<640)
//     };

//     checkScreenSize()
//     window.addEventListener("resize",checkScreenSize)
//     return()=>{
//       window.removeEventListener("resize",checkScreenSize)
//     }
//   },[])

  return (
    <div>
      <div className="hidden sm:block">
  <Header />
</div>
<div className="block sm:hidden">
  <MobileHeader />
</div>

      <Hero />
      <MainCurrentPricePage />
      <BannerSection />
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
