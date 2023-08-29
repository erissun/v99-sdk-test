import type { Chain } from 'v99-common';

/**
 * Token module
 * @module Token
 */
export interface TokenProvider {
  /**
   * Get chain by id
   * @param chainId
   */
  getChainById(chainId: string): Promise<Chain>;

  /**
   * Get all chains
   */
  getChains(): Promise<Chain[]>;

  /**
   * Get all tokens
   */
  getTokens(): Promise<Token[]>;

  /**
   * Get shown chains
   */
  getShownChains(): Promise<Chain[]>;

  /**
   * Get price by token id
   * @param coingeckoId
   */
  getPrice(coingeckoId: string): Promise<string>;

  /**
   * Get Chain Native Token
   * @param chainId
   */
  getChainNativeToken(chainId: number): Promise<Token>;

  isSupportChain(chainId: number): Promise<boolean>;
}

/**
 * Implementation of TokenProvider
 */
export class Token implements TokenProvider {
  bridge: any;

  constructor(bridge: any) {
    this.bridge = bridge;
  }

  async getChainById(chainId: string): Promise<Chain> {
    return (await this.bridge.Chain.getChainById({ data: { chainId } })).data;
  }

  async getChains(): Promise<Chain[]> {
    return (await this.bridge.Chain.getChains()).data;
  }

  async getTokens(): Promise<Token[]> {
    return (await this.bridge.Chain.getTokens()).data;
  }

  async getShownChains(): Promise<Chain[]> {
    return (await this.bridge.Chain.getShownChains()).data;
  }

  async getPrice(coingeckoId: string): Promise<string> {
    return (await this.bridge.Chain.getPrice({ data: { coingeckoId } })).data;
  }

  async getChainNativeToken(chainId: number): Promise<Token> {
    return (await this.bridge.Chain.getChainNativeToken({ data: { chainId } }))
      .data;
  }

  async isSupportChain(chainId: number): Promise<boolean> {
    return (await this.bridge.Chain.isSupportChain({ data: { chainId } })).data;
  }
}
