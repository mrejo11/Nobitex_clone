import Image from "next/image";
import React from "react";

const data = [
  {
    name: "بیت کوین BTC",
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI2Y3OTMxYSIvPjxwYXRoIGQ9Ik0zMS42NDQsMTguNTMxYy40OTEtMy4yNzUtMi01LjAzNi01LjQxNC02LjIxMWwxLjEwNi00LjQzNy0yLjctLjY3Mi0xLjA3OCw0LjMyYy0uNzA5LS4xNzgtMS40MzctLjM0NC0yLjE2NC0uNTA5TDIyLjQ4LDYuNjczLDE5Ljc4LDZsLTEuMTA2LDQuNDM2Yy0uNTg4LS4xMzQtMS4xNjYtLjI2Ni0xLjcyNS0uNDA2bDAtLjAxNC0zLjcyNS0uOTMtLjcxOSwyLjg4NHMyLC40NTksMS45NjMuNDg4YTEuNDM3LDEuNDM3LDAsMCwxLDEuMjU4LDEuNTcyTDE0LjQ3LDE5LjA4NGEyLjQsMi40LDAsMCwxLC4yODEuMDg5bC0uMjg2LS4wN0wxMi43LDI2LjE4NGEuOTg1Ljk4NSwwLDAsMS0xLjIzOS42NDFjLjAyOC4wMzktMS45NjItLjQ4OS0xLjk2Mi0uNDg5TDguMTU3LDI5LjQyN2wzLjUxNi44NzdjLjY1My4xNjQsMS4yOTQuMzM2LDEuOTIzLjVsLTEuMTE3LDQuNDg3LDIuNy42NzIsMS4xMDYtNC40MzdjLjczNy4yLDEuNDUzLjM4MywyLjE1My41NThsLTEuMSw0LjQxOSwyLjcuNjcyLDEuMTE3LTQuNDc4YzQuNjA2Ljg3Miw4LjA2OS41Miw5LjUyNy0zLjY0NSwxLjE3NS0zLjM1My0uMDU4LTUuMjg5LTIuNDgxLTYuNTVhNC4zMDUsNC4zMDUsMCwwLDAsMy40NDgtMy45NjZabS02LjE3Miw4LjY1M2MtLjgzMywzLjM1NS02LjQ4MSwxLjU0MS04LjMxMiwxLjA4NmwxLjQ4NC01Ljk0NUMyMC40NzYsMjIuNzgzLDI2LjM0NiwyMy42ODgsMjUuNDczLDI3LjE4NFptLjgzNi04LjdjLS43NjEsMy4wNTItNS40NjEsMS41LTYuOTg0LDEuMTJsMS4zNDQtNS4zOTFjMS41MjMuMzgsNi40MzQsMS4wODcsNS42NDEsNC4yN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNTg4IDMuMzc1KSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=",
  },
  {
    name: "تتر USDT",
    iconUrl: "https://nobitex.ir/_nuxt/img/usdt.919a314.svg",
  },
  {
    name: "اتریوم ETH",
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI2Q5ZDlkOSIvPjxwYXRoIGQ9Ik0xMDkyLjU5NCw2NTIsMTA4MCw2NzIuOTE5bDEyLjU5NCw3LjQ4MiwxMi41MTUtNy40ODJaTTEwODAsNjc1LjQxM2wxMi41OTQsNy40LDEyLjUxNS03LjQtMTIuNTE1LDE3Ljc4MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDY3LjQ0NiAtNjQ3LjQ4OCkiIGZpbGw9IiM4MjgzODQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0xMTQ0LjIsNjgwLjM1M1Y2NTJsMTIuNDgsMjAuODU5Wm0xMi40MzgtNC45MTNMMTE0NC4yLDY5My4xOTRWNjgyLjg0N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTE5LjA1MiAtNjQ3LjQ4OCkiIGZpbGw9IiMyZjMwMzAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0xMDkyLjU5NCw3MjkuOTMsMTA4MCw3MzUuNTYybDEyLjU5NCw3LjQ4MiwxMi41MTUtNy40ODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2Ny40NDYgLTcxMC4xMzIpIiBmaWxsPSIjMTMxMzEzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuOCIvPjwvc3ZnPgo=",
  },
  {
    name: "هزار شیبا SHIB",
    iconUrl: "https://nobitex.ir/_nuxt/img/shib.177269a.svg",
  },
  {
    name: "دوج کوین DOGE",
    iconUrl: "https://nobitex.ir/_nuxt/img/doge.7fab473.svg",
  },
  {
    name: "ترون TRX",
    iconUrl: "https://nobitex.ir/_nuxt/img/trx.90f9654.svg",
  },
  // Add more rows as needed
];

const MyTable = () => {
  return (
    <table className="container mx-auto  ">
      <thead className="text-md font-secoundary text-gray-500">
        <tr className="flex justify-between p-3">
        <th className="flex-1 text-right">نام</th>
          <th className="flex-1 text-right">آخرین قیمت</th>
          <th className="flex-1 text-right">تغییر ۲۴h</th>
          <th className="flex-1 text-right">نمودار هفتگی</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}
          className="flex justify-between p-6 hover:bg-gray-50 hover:rounded-xl">
            <td className="flex items-center gap-2 ">
              <Image
                src={row.iconUrl}
                alt={row.name}
                width={24}
                height={24}
               
              />
              <span>{row.name}</span>
            </td>
            {/* <td>{row.price}</td>
            <td>{row.change24h}</td> */}
            <td>{/* نمودار */}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
