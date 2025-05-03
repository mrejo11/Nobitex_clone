"use client"
import { useState } from "react";
import ProductListShow from "./ProductListShow";
import Leverage from "./content-product/Leverage";
import Nobify from "./content-product/Nobify";
import Tools from "./content-product/Tools";
import Web3 from "./content-product/Web3";  
export const productList = [
  { id: 1, title: "خرید و فروش تعهدی" },
  { id: 2, title: " کسب درآمد با نوبیفای" },
  { id: 3, title: " ابزار های حرفه ای معامله" },
  { id: 4, title: "محصولات وب ۳" },
];

export const productContents: Record<number, React.ReactNode> = {
  1: <Leverage />,
  2: <Nobify />,
  3: <Tools />,
  4: <Web3 />,
};


export default function Productwindow() {
const [hoverId,setHoverId]=useState<number>(1)

  return (
    <div className="container mx-auto bg-gray-100 h-[644px] font rounded-2xl mt-10 relative">
      {productList.map((product) => {
        return <ProductListShow key={product.id} title={product.title} onHover={()=>setHoverId(product.id)} isActive={hoverId===product.id}/>;
      })}

      <div className="absolute top-0 right-[450px] mt-5 mr-6">
        {hoverId?productContents[hoverId]:null}
      </div>
    </div>
  );
}
