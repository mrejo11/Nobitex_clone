import { MarketInfo } from "@/types/type";
import Image from "next/image";
import React from "react";
import getData from "@/app/api/nobitex-api";
import { toPersianNumber } from "@/lib/utils";
import { marketData } from "../data/marketData";
import TableHeader from "./TableHeader";
import { ChevronRight } from "lucide-react";

export default async function CurrentPriceTableResponsive() {
  const response = await getData();

  return (
    <div className="container mx-auto px-4 font-secoundary">
      {/* Desktop: Original Table */}
      <div className="hidden md:block">
        <table className="w-full">
          <TableHeader />
          <tbody>
            {marketData.map((row, index) => {
              const coinData: MarketInfo = response.stats[`${row.symbol}-rls`];
              const change = Number(coinData.dayChange);
              const isPositive = change >= 0;
              return (
                <tr
                  key={index}
                  className="flex justify-between p-6 hover:bg-gray-50 hover:rounded-xl font-secoundary font-bold text-md"
                >
                  <td className="flex items-center gap-2 flex-1 font-third text-xl">
                    <Image
                      src={row.iconUrl}
                      alt={row.name}
                      width={24}
                      height={24}
                    />
                    <span>{row.name}</span>
                  </td>
                  <td className="flex-1 text-right text-xl">
                    IRT {toPersianNumber(Number(coinData.latest) / 10)}
                  </td>
                  <td
                    className={`flex-1 text-right text-xl ${
                      isPositive ? "text-green-400" : "text-red-600"
                    }`} style={{ direction: "ltr" }}
                  >
                    {isPositive ? "+" : "-"}{toPersianNumber(Math.abs(change))}%
                  </td>
                  <td className="flex-1 text-right">
                    <Image
                      src={row.chart}
                      alt={`${row.name} chart`}
                      width={100}
                      height={40}
                      className="filter invert-[0.1] sepia-[0.5] saturate-[3000] hue-rotate-[260deg] brightness-[0.7]"
                    />
                  </td>
                  <td>
                    <button className="px-6 py-1 rounded border hover:bg-purple-50 cursor-pointer border-purple-900 text-purple-400">
                      خرید و فروش
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile: Card List with arrow next to change */}
      <div className="md:hidden space-y-2">
        <div className="grid grid-cols-3 text-xs text-gray-500 pb-1" dir="rtl">
          <div>نام</div>
          <div className="text-center">آخرین قیمت (تومان)</div>
          <div className="text-left">تغییر ۲۴h</div>
        </div>
        {marketData.map((row, index) => {
          const coinData: MarketInfo = response.stats[`${row.symbol}-rls`];
          const change = Number(coinData.dayChange);
          const isPositive = change >= 0;
          return (
            <div key={index} className="flex items-center">
              <div className="flex justify-between items-center w-full py-3" dir="rtl">
                {/* Name and icon */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={row.iconUrl}
                      alt={row.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold">{row.name}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-md">
                  IRT {toPersianNumber(Number(coinData.latest) / 10)}
                </div>

                {/* Change with arrow */}
                <div className="flex items-center gap-1 text-sm" style={{ direction: "ltr" }}>
                  <ChevronRight className={`w-5 h-5 ${isPositive ? 'text-green-500 rotate-180' : 'text-red-500'}`} />
                  <span className={`${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {isPositive ? '+' : '-'}{toPersianNumber(Math.abs(change))}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
