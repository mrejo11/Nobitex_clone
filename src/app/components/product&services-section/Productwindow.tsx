import ProductListShow from "./ProductListShow";

const productList = [
  { id: 1, title: "خرید و فروش تعهدی" },
  { id: 2, title: " کسب درآمد با نوبیفای" },
  { id: 3, title: " ابزار های حرفه ای معامله" },
  { id: 4, title: "محصولات وب ۳" },
];

export default function Productwindow() {
  return (
    <div className="container mx-auto bg-gray-100 h-[644px] font rounded-2xl mt-10 relative">
      {productList.map((product) => {
        return <ProductListShow key={product.id} title={product.title} />;
      })}

      <div className="absolute top-0 right-[450px] mt-5 mr-6">
        <h1 className="text-2xl font-semibold">
          خرید و فروش تعهدی با ضریب{" "}
          <span className="py-0.5 px-2 bg-yellow-500 rounded-2xl">۵×</span>
        </h1>
        <p className="text-gray-600 font-semibold leading-6 mt-4">
          در نوبیتکس، تنها بازار دوطرفه‌ی ایرانی، هم با افزایش قیمت رمزارز و هم
          با کاهش آن سود کسب کنید و با کمک ضریب تا 5 برابر، سود خود را افزایش
          دهید. با مشاهده‌ی صعودی‌ترین و نزولی‌ترین بازارها در جدول زیر،
          فرصت‌های مناسب برای خرید و فروش تعهدی را از دست ندهید.
        </p>
        <div style={{direction:"ltr"}} className="mt-12 ml-8">
          <button className="bg-[#784ed1] rounded-md font-semibold hover:bg-[#664f94] text-white pb-2 py-1 px-6 cursor-pointer">خرید و فروش تعهدی</button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
