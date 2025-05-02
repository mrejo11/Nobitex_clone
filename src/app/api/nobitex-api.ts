
export default async function getData() {
    try {
        const res = fetch(
            "https://api.nobitex.ir/market/stats?srcCurrency=btc,eth,usdt,doge,shib,trx&dstCurrency=rls", {
            cache: 'force-cache', next: { revalidate: 60 }
        }
        );
        const data = (await res).json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


export async function getDataProductSection() {
    try {
      const res = await fetch("http://localhost:3000/api/market-stats", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching market stats:", error);
      return { stats: {} };
    }
  }