import { getDataProductSection } from "@/api/nobitex-api";
import { TopGainerAndLoser } from "../../../../utils/TopGainer&Loser";
import { ChangeList } from "../../../../utils/changeList";

export default async function ChangeMarket() {
  const data = await getDataProductSection();
  const { topGainer, topLoser } = TopGainerAndLoser(data.stats);
  console.log(TopGainerAndLoser(data.stats));
  return (
    <div className="container mx-auto flex flex-row items-center justify-between p-4">
      <ChangeList title="بیشترین سود" items={topGainer} />
      <ChangeList title="بیشترین ضرر" items={topLoser} />
    </div>
  );
}
