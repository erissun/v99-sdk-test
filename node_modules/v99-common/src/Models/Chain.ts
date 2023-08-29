import { Token } from './Token';

export class Chain {
  id: number;
  name: string;
  logo: string;
  symbol: string;
  testnet_id: string;
  testnet_end_point: string;
  mainnet_end_point: string;
  pair_address: string;
  router_address: string;
  router_address_testnet: string;
  token_types: string[];
  base_on_chain: string;
  tokens: Token[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.logo = data.logo;
    this.symbol = data.symbol;
    this.testnet_id = data.testnet_id;
    this.testnet_end_point = data.testnet_end_point;
    this.mainnet_end_point = data.mainnet_end_point;
    this.pair_address = data.pair_address;
    this.router_address = data.router_address;
    this.router_address_testnet = data.router_address_testnet;
    this.token_types = data.token_types;
    this.base_on_chain = data.base_on_chain;
    this.tokens = data.tokens?.map?.((token: Token) => new Token(token)) || [];
  }

  toSql() {
    return {
      id: this.id,
      name: this.name,
      logo: this.logo,
      symbol: this.symbol,
      testnet_id: this.testnet_id,
      testnet_end_point: this.testnet_end_point,
      mainnet_end_point: this.mainnet_end_point,
      pair_address: this.pair_address,
      router_address: this.router_address,
      router_address_testnet: this.router_address_testnet,
      token_types: this.token_types?.join?.(','),
      base_on_chain: this.base_on_chain,
    };
  }
}
