export class Token {
  id: number;
  chain_id: string;
  name: string;
  logo: string;
  balance: number;
  symbol: string;
  is_native: boolean;
  mainnet_address: string;
  testnet_address: string;
  wrapped_address_mainnet: string;
  wrapped_address_testnet: string;
  decimals: number;
  min_swap: number;
  coingecko_id: string;
  price_change_24h: number;
  current_price: number;
  is_select: boolean = true;

  constructor(data: any) {
    this.id = data.id;
    this.chain_id = data.chain_id;
    this.name = data.name;
    this.logo = data.logo;
    this.balance = data.balance;
    this.symbol = data.symbol;
    this.is_native = data.is_native;
    this.mainnet_address = data.mainnet_address;
    this.testnet_address = data.testnet_address;
    this.wrapped_address_mainnet = data.wrapped_address_mainnet;
    this.wrapped_address_testnet = data.wrapped_address_testnet;
    this.decimals = data.decimals;
    this.min_swap = data.min_swap;
    this.coingecko_id = data.coingecko_id;
    this.price_change_24h = data.price_change_24h;
    this.current_price = data.current_price;
    this.is_select = data.is_select || true;
  }

  toSql() {
    return {
      id: this.id,
      chain_id: this.chain_id,
      name: this.name,
      logo: this.logo,
      balance: this.balance,
      symbol: this.symbol,
      is_native: this.is_native ? 1 : 0,
      mainnet_address: this.mainnet_address,
      testnet_address: this.testnet_address,
      wrapped_address_mainnet: this.wrapped_address_mainnet,
      wrapped_address_testnet: this.wrapped_address_testnet,
      decimals: this.decimals,
      min_swap: this.min_swap,
      coingecko_id: this.coingecko_id,
      price_change_24h: this.price_change_24h,
      current_price: this.current_price,
      is_select: this.is_select ? 1 : 0,
    };
  }
}
export type TokenWithTokenTypes = Token & { token_types: string[] };
