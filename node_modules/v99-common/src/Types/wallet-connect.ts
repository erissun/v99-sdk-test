export interface WalletConnectSession {
  id: string;
  wc: string;
  walletId: string;
  chainId: number;
  name: string;
  description: string;
  url: string;
  logo: string;
  created_at: number;
  session?: object;
}
