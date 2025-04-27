import ProductListShow from "./ProductListShow";

const productList = [
  { id: 1, title: "خرید و فروش تعهدی" },
  { id: 2, title: " کسب درآمد با نوبیفای" },
  { id: 3, title: " ابزار های حرفه ای معامله" },
  { id: 4, title: "محصولات وب ۳" },
];

export default function Productwindow() {
  return (
    <div className="container mx-auto bg-gray-100 h-[644px] font rounded-2xl mt-10">
      {productList.map((product) => {
        return <ProductListShow key={product.id} title={product.title} />;
      })}
    </div>
  );
}
