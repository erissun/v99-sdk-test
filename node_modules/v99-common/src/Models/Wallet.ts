export interface WalletModel {
  name: string;
  address: string;
}

export interface WalletData {
  data: Array<WalletModel>;
}
