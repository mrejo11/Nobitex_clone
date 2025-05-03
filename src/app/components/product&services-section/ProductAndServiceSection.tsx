import dynamic from "next/dynamic";

// لیزی لود کردن کامپوننت Productwindow
const Productwindow = dynamic(() => import("./Productwindow"), {
  loading: () => <div>در حال بارگذاری...</div>, // نمایش در حین بارگذاری
  
});

export default function ProductAndServiceSection() {
  
  return (
    <>
      <div className="bg-gray-200 w-full h-[850px] -mt-2">
        <h1 className="container mx-auto pt-16 text-4xl font-semibold">
          محصولات و خدمات
        </h1>
        <Productwindow />
      </div>
    </>
  );
}