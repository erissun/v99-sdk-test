import type { Chain } from './Chain';
import type { Token } from './Token';

export class Activity {
  id: number;
  status: ActivityStatus;
  type: number;
  token_id: number;
  value: number;
  swap_token_id: number;
  swap_to_value: number;
  from_chain_id: number;
  to_chain_id: number;
  from_address: string;
  to_address: string;
  tx_hash: string;
  created_at: string;
  chain: Chain;
  token: Token;
  target_swap_token: Token;
  target_swap_chain: Chain;
  target_swap_value: number;
  total_gas: number;
  gasless_id: string;
  constructor(data: any) {
    this.id = data.id;
    this.status = data.status;
    this.type = data.type;
    this.token_id = data.token_id;
    this.value = data.value;
    this.swap_token_id = data.swap_token_id;
    this.swap_to_value = data.swap_to_value;
    this.from_chain_id = data.from_chain_id;
    this.to_chain_id = data.to_chain_id;
    this.from_address = data.from_address;
    this.to_address = data.to_address;
    this.tx_hash = data.tx_hash;
    this.created_at = data.created_at;
    this.chain = data.chain;
    this.token = data.token;
    this.target_swap_token = data.target_swap_token;
    this.target_swap_chain = data.target_swap_chain;
    this.target_swap_value = data.target_swap_value;
    this.total_gas = data.total_gas;
    this.gasless_id = data.gasless_id;
  }
}
export enum ActivityStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}
export enum ActivityType {
  SWAP,
  SEND,
  APPROVE,
  RECEIVE,
}
