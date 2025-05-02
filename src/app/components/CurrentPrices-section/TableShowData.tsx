import { MarketInfo } from "@/types/type";
import Image from "next/image";
import React from "react";
import getData from "@/app/api/nobitex-api";
import { toPersianNumber } from "@/lib/utils";
import { marketData } from "../data/marketData";
import TableHeader from "./TableHeader";

export default async function CurrentPriceTable() {
  const response = await getData();
  console.log(response)

  return (
    <table className="container mx-auto">
      <TableHeader />
      <tbody>
        {marketData.map((row, index) => {
          const coinData: MarketInfo = response.stats[`${row.symbol}-rls`];
          return (
            <tr
              key={index}
              className="flex justify-between p-6 hover:bg-gray-50 hover:rounded-xl font-secoundary font-bold text-md"
            >
              <td className="flex items-center gap-2 flex-1 font-third text-xl ">
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
                  Number(coinData.dayChange) < 0
                    ? "text-red-600"
                    : "text-green-400"
                }`}
                style={{ direction: "ltr" }}
              >
                {Number(coinData.dayChange) < 0 ? "-" : "+"}
                {toPersianNumber(Math.abs(Number(coinData.dayChange)))}%
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
  );
}
