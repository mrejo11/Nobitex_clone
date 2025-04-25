import { MarketInfo } from "@/types/type";
import Image from "next/image";
import React from "react";
import getData from "@/api/nobitex-api";
import { toPersianNumber } from "@/lib/utils";

const data = [
  {
    name: "بیت کوین BTC",
    symbol: "btc",
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI2Y3OTMxYSIvPjxwYXRoIGQ9Ik0zMS42NDQsMTguNTMxYy40OTEtMy4yNzUtMi01LjAzNi01LjQxNC02LjIxMWwxLjEwNi00LjQzNy0yLjctLjY3Mi0xLjA3OCw0LjMyYy0uNzA5LS4xNzgtMS40MzctLjM0NC0yLjE2NC0uNTA5TDIyLjQ4LDYuNjczLDE5Ljc4LDZsLTEuMTA2LDQuNDM2Yy0uNTg4LS4xMzQtMS4xNjYtLjI2Ni0xLjcyNS0uNDA2bDAtLjAxNC0zLjcyNS0uOTMtLjcxOSwyLjg4NHMyLC40NTksMS45NjMuNDg4YTEuNDM3LDEuNDM3LDAsMCwxLDEuMjU4LDEuNTcyTDE0LjQ3LDE5LjA4NGEyLjQsMi40LDAsMCwxLC4yODEuMDg5bC0uMjg2LS4wN0wxMi43LDI2LjE4NGEuOTg1Ljk4NSwwLDAsMS0xLjIzOS42NDFjLjAyOC4wMzktMS45NjItLjQ4OS0xLjk2Mi0uNDg5TDguMTU3LDI5LjQyN2wzLjUxNi44NzdjLjY1My4xNjQsMS4yOTQuMzM2LDEuOTIzLjVsLTEuMTE3LDQuNDg3LDIuNy42NzIsMS4xMDYtNC40MzdjLjczNy4yLDEuNDUzLjM4MywyLjE1My41NThsLTEuMSw0LjQxOSwyLjcuNjcyLDEuMTE3LTQuNDc4YzQuNjA2Ljg3Miw4LjA2OS41Miw5LjUyNy0zLjY0NSwxLjE3NS0zLjM1My0uMDU4LTUuMjg5LTIuNDgxLTYuNTVhNC4zMDUsNC4zMDUsMCwwLDAsMy40NDgtMy45NjZabS02LjE3Miw4LjY1M2MtLjgzMywzLjM1NS02LjQ4MSwxLjU0MS04LjMxMiwxLjA4NmwxLjQ4NC01Ljk0NUMyMC40NzYsMjIuNzgzLDI2LjM0NiwyMy42ODgsMjUuNDczLDI3LjE4NFptLjgzNi04LjdjLS43NjEsMy4wNTItNS40NjEsMS41LTYuOTg0LDEuMTJsMS4zNDQtNS4zOTFjMS41MjMuMzgsNi40MzQsMS4wODcsNS42NDEsNC4yN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNTg4IDMuMzc1KSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=",
    chart: "https://nobitex.ir/nobitex-cdn/charts/btc.svg",
  },
  {
    name: "تتر USDT",
    symbol: "usdt",
    iconUrl: "https://nobitex.ir/_nuxt/img/usdt.919a314.svg",
    chart: "https://nobitex.ir/nobitex-cdn/charts/usdt.svg",
  },
  {
    name: "اتریوم ETH",
    symbol: "eth",
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI2Q5ZDlkOSIvPjxwYXRoIGQ9Ik0xMDkyLjU5NCw2NTIsMTA4MCw2NzIuOTE5bDEyLjU5NCw3LjQ4MiwxMi41MTUtNy40ODJaTTEwODAsNjc1LjQxM2wxMi41OTQsNy40LDEyLjUxNS03LjQtMTIuNTE1LDE3Ljc4MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDY3LjQ0NiAtNjQ3LjQ4OCkiIGZpbGw9IiM4MjgzODQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0xMTQ0LjIsNjgwLjM1M1Y2NTJsMTIuNDgsMjAuODU5Wm0xMi40MzgtNC45MTNMMTE0NC4yLDY5My4xOTRWNjgyLjg0N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTE5LjA1MiAtNjQ3LjQ4OCkiIGZpbGw9IiMyZjMwMzAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0xMDkyLjU5NCw3MjkuOTMsMTA4MCw3MzUuNTYybDEyLjU5NCw3LjQ4MiwxMi41MTUtNy40ODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2Ny40NDYgLTcxMC4xMzIpIiBmaWxsPSIjMTMxMzEzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuOCIvPjwvc3ZnPgo=",
    chart: "https://nobitex.ir/nobitex-cdn/charts/eth.svg",
  },
  {
    name: "هزار شیبا SHIB",
    symbol: "shib",
    iconUrl: "https://nobitex.ir/_nuxt/img/shib.177269a.svg",
    chart: "https://nobitex.ir/nobitex-cdn/charts/shib.svg",
  },
  {
    name: "دوج کوین DOGE",
    symbol: "doge",
    iconUrl: "https://nobitex.ir/_nuxt/img/doge.7fab473.svg",
    chart: "https://nobitex.ir/nobitex-cdn/charts/doge.svg",
  },
  {
    name: "ترون TRX",
    symbol: "trx",
    iconUrl: "https://nobitex.ir/_nuxt/img/trx.90f9654.svg",
    chart: "https://nobitex.ir/nobitex-cdn/charts/trx.svg",
  },
];

export default async function MyTable() {
  const response = await getData();

  return (
    <table className="container mx-auto">
      <thead className="text-md font-secoundary text-gray-500">
        <tr className="flex justify-between p-3">
          <th className="flex-1 text-right">نام</th>
          <th className="flex-1 text-right">آخرین قیمت</th>
          <th className="flex-1 text-right">تغییر ۲۴h</th>
          <th className="flex-1 text-right">نمودار هفتگی</th>
          <th className="w-[120px]"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          const coinData: MarketInfo = response.stats[`${row.symbol}-rls`];
          return (
            <tr
              key={index}
              className="flex justify-between p-6 hover:bg-gray-50 hover:rounded-xl font-secoundary font-bold text-md"
            >
              <td className="flex items-center gap-2 flex-1 font-secoundary">
                <Image
                  src={row.iconUrl}
                  alt={row.name}
                  width={24}
                  height={24}
                />
                <span>{row.name}</span>
              </td>
              <td className="flex-1 text-right">
                IRT {toPersianNumber(Number(coinData.latest) / 10)}
              </td>
              <td
                className={`flex-1 text-right ${
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
