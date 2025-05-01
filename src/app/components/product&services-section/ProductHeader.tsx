import { toPersianNumber } from "@/lib/utils";
import { getDataProductSection } from "@/api/nobitex-api";
import { TopGainerAndLoser } from "@/app/utils/TopGainer&Loser";
import Image from "next/image";
export interface ChangeItem {
  name: string;
  change: number;
  icon_url?: string;
}

interface ChangeListProps {
  title: string;
  items: ChangeItem[];
}

const ChangeList: React.FC<ChangeListProps> = ({ title, items }) => (
  <div className="bg-gray-50 w-[500] h-[300] mt-12 border border-gray-300 rounded-lg p-4 mb-4">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          className="flex items-center mt-10 gap-4 "
        >
          {/* نمایش آیکون */}
          {item.icon_url ? (
            <Image
              src={item.icon_url}
              alt={`${item.name} icon`}
              className="w-6 h-6 mr-2 scale-200"
              width={24}
              height={24}
            />
          ) : (
            <div className="w-6 h-6 mr-2 bg-gray-200 rounded-full" /> // Placeholder for missing icon
          )}
          {/* نمایش نام، رتبه و درصد تغییر */}
          <p
            className={`text-2xl ${
              item.change < 0 ? "text-red-600" : "text-green-400"
            }`}
          >
            {toPersianNumber(index + 1)}. {item.name}:{" "}
            {item.change < 0 ? "-" : "+"}
            {toPersianNumber(Math.abs(item.change))}%
          </p>
        </div>
      ))}
    </div>
  </div>
);

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
