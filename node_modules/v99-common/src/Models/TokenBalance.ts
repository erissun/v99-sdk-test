export class TokenBalance {
  token_id: number;
  balance: number;
  symbol: string;
  coingecko_id: string;
  constructor(data: any) {
    this.token_id = data.token_id;
    this.balance = data.balance;
    this.symbol = data.symbol;
    this.coingecko_id = data.coingecko_id;
  }
}
