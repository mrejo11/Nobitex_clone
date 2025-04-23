export interface MarketInfo {
    isClosed: boolean;
    bestSell: string;
    bestBuy: string;
    volumeSrc: string;
    volumeDst: string;
    latest: string;
    mark: string;
    dayLow: string;
    dayHigh: string;
    dayOpen: string;
    dayClose: string;
    dayChange: string;
  }
  
export interface Row {
  name: string;

  iconUrl: string;
}