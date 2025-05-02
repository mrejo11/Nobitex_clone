import { useEffect, useState } from "react";
import { getDataProductSection } from "@/app/api/nobitex-api";
import { TopGainerAndLoser } from "../../../../utils/TopGainer&Loser";
import { ChangeItem, ChangeList } from "../../../../utils/changeList";

export default function ChangeMarket() {
  const [topGainer, setTopGainer] = useState<ChangeItem[]>([]);
  const [topLoser, setTopLoser] = useState<ChangeItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataProductSection();
        const { topGainer, topLoser } = TopGainerAndLoser(data.stats);
        setTopGainer(topGainer);
        setTopLoser(topLoser);
      } catch (err) {
        console.error("Error fetching market data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto flex flex-row items-center justify-between p-4 gap-4">
      <ChangeList title="بیشترین سود" items={topGainer} />
      <ChangeList title="بیشترین ضرر" items={topLoser} />
    </div>
  );
}
