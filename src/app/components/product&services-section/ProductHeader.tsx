import { MarketInfo } from "@/types/type";
import { toPersianNumber } from "@/lib/utils";
import { getDataProductSection } from "@/api/nobitex-api";
// Configuration for API and display

const ITEMS_TO_SHOW = 3;

interface ChangeItem {
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

export default async function ProductHeader() {
  const testdata = await getDataProductSection();
  const show: MarketInfo = testdata.stats;

  // Extract dayChanges and convert to number
  const dayChanges = Object.entries(show)
    .map(([key, item]) => ({
      name: key.split("-")[0].toUpperCase(),
      change: Number(item.dayChange),
    }))
    .filter((item) => !isNaN(item.change)); // Filter out invalid numbers

  // Top absolute changes (sorted by absolute value)
  const topAbsoluteChanges = dayChanges
    .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
    .slice(0, ITEMS_TO_SHOW);

  // Top negative changes (sorted from most negative to least negative)
  const topNegativeChanges = dayChanges
    .filter((item) => item.change < 0)
    .sort((a, b) => a.change - b.change)
    .slice(0, ITEMS_TO_SHOW);

  return (
    <div className="container mx-auto p-4">
      <ChangeList title="۳ تغییر بزرگ روزانه" items={topAbsoluteChanges} />
      <ChangeList title="۳ افت بزرگ روزانه" items={topNegativeChanges} />
      <div>product and service</div>
    </div>
  );
}
