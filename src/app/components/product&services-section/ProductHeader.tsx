import { toPersianNumber } from "@/lib/utils";
import { getDataProductSection } from "@/api/nobitex-api";
import { TopGainerAndLoser } from "@/app/utils/TopGainer&Loser";
// Configuration for API and display


export interface ChangeItem {
  name: string;
  change: number;
}

interface ChangeListProps {
  title: string;
  items: ChangeItem[];
}

const ChangeList: React.FC<ChangeListProps> = ({ title, items }) => (
  <div className="bg-gray-50 rounded-lg p-4 mb-4">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <p
          key={`${item.name}-${index}`} // Ensure unique key
          className={`text-xl ${
            item.change < 0 ? "text-red-600" : "text-green-400"
          }`}
        >
          {toPersianNumber(index + 1)}. {item.name}:{" "}
          {item.change < 0 ? "-" : "+"}
          {toPersianNumber(Math.abs(item.change))}%
        </p>
      ))}
    </div>
  </div>
);

export default async function ChangeMarket(){
const data=await getDataProductSection();
const {topGainer,topLoser}=TopGainerAndLoser(data.stats)
console.log(TopGainerAndLoser(data.stats))
  return (
    <div className="container mx-auto p-4">
      <ChangeList title=" بیشترین سود " items={topGainer} />
      <ChangeList title="بیشترین ضرر " items={topLoser} />
      <div>product and service</div>
    </div>
  );
}
