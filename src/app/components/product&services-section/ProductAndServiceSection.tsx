import ProductHeader from "./ProductHeader";
import Productwindow from "./Productwindow";

export default function ProductAndServiceSection() {
  return (
    <>
    <div className="bg-gray-200 w-full h-[850px] -mt-2">
      

      <h1 className="container mx-auto pt-16 text-4xl font-semibold">محصولات و خدمات</h1>
    <Productwindow />
    </div>
      <ProductHeader />
    </>
  )
}
