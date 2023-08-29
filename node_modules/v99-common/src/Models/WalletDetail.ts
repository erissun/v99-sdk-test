export class Wallet {
  id: number;
  wallet_id: string;
  chain_id: string;
  constructor(data: any) {
    this.id = data.id;
    this.wallet_id = data.wallet_id;
    this.chain_id = data.chain_id;
  }
  toSql() {
    return {
      id: this.id,
      wallet_id: this.wallet_id,
      chain_id: this.chain_id,
    };
  }
}
