export type Dapp = {
  url: string;
  logo: string;
  name: string;
  chains: string[];
  isTop: boolean;
  isSuggested: boolean;
  banner?: string;
};

export type DappChain = {
  logo: string;
  name: string;
  symbol: string;
};

export enum DappCategory {
  TOP,
  SUGGESTED,
  TRENDING,
  ALL,
}

export type ApproveTransactionData = {
  tokenSymbol: string;
  gasFee: string;
  amount?: string;
  toAddress: string;
  functionCall: string;
};
