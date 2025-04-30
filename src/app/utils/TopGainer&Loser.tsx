import { MarketInfo } from "@/types/type";
import { ChangeItem } from "../components/product&services-section/ProductHeader";

const ITEMS_TO_SHOW = 3;
export function TopGainerAndLoser(data: MarketInfo) {
  console.log("All pairs:", Object.keys(data));

  // Extract dayChanges and convert to number, only for RLS pairs
  const rlsPairs = Object.entries(data).filter(([key]) => key.endsWith("-rls"));
//   console.log(
//     "RLS pairs:",
//     rlsPairs.map(([key]) => key)
//   );

  const dayChanges: ChangeItem[] = rlsPairs
    .map(([key, item]) => ({
      name: key.split("-")[0].toUpperCase(),
      change: Number(item.dayChange),
    }))
    .filter((item) => !isNaN(item.change)); // Filter out invalid numbers

  // Top positive changes (sorted from highest to lowest)
  const topGainer = dayChanges
    .filter((item) => item.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, ITEMS_TO_SHOW);

  // Top negative changes (sorted from most negative to least negative)
  const topLoser: ChangeItem[] = dayChanges
    .filter((item) => item.change < 0)
    .sort((a, b) => a.change - b.change)
    .slice(0, ITEMS_TO_SHOW);

  return { topGainer, topLoser };
}
