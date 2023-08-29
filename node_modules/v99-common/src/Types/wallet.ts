import type { TokenBalance } from "../Models/TokenBalance";

export const MultiChainSymbol = "MULTICHAIN";
type TokenPrice = {
  currency: string;
  current_price: number;
  price_change_24h: number;
};
export type TokenBalanceAndPrices = {
  [tokenId: string]: TokenBalance & TokenPrice;
};
