import type { ApproveTransactionData, Chain, Dapp } from 'v99-common';
import type { BridgeCallBack } from '../types';

/**
 * DApp module
 * @module DApp
 */
export interface DAppProvider {
  /**
   * Get current chain
   */
  getCurrentChain(): Promise<Chain>;

  /**
   * Get current chain id
   */
  getChainId(): Promise<number>;

  /**
   * Set current chain id
   * @param chainId
   */
  setChainId(chainId: number): Promise<void>;

  /**
   * Get all DApps
   */
  getDapps(): Promise<Dapp[]>;

  /**
   * Get current DApp
   */
  getCurrentDapp(): Promise<Partial<Dapp>>;

  /**
   * Set current DApp
   * @param dapp
   */
  setCurrentDapp(dapp: Partial<Dapp>): Promise<void>;

  /**
   * Update current DApp
   * @param dapp
   */
  updateCurrentDapp(dapp: Partial<Dapp>): Promise<void>;

  /**
   * Get histories
   */
  getHistories(): Promise<DApp[]>;

  /**
   * Add url
   * @param url
   */
  addHistory(url: string): Promise<void>;

  /**
   * Clear histories
   */
  clearHistories(): Promise<void>;

  /**
   * Listen to chain id changed event
   * @param callback
   */
  onChainIdChanged(callback: BridgeCallBack<number>): Function;

  /**
   * Listen to current chain changed event
   * @param callback
   */
  onCurrentChainChanged(callback: BridgeCallBack<Chain>): Function;

  /**
   * Listen to DApps changed event
   * @param callback
   */
  onDappsChanged(callback: BridgeCallBack<Dapp[]>): Function;

  /**
   * Listen to current DApp changed event
   * @param callback
   */
  onCurrentDappChanged(callback: BridgeCallBack<Partial<Dapp>>): Function;

  /**
   * Listen to histories changed event
   * @param callback
   */
  onHistoriesChanged(callback: BridgeCallBack<Partial<Dapp>[]>): Function;

  /**
   * Show connect sheet
   */
  showConnectSheet(data?: ApproveTransactionData): Promise<boolean>;

  /**
   * Show sign sheet
   * @param message
   */
  showSignSheet(message: string): Promise<boolean>;

  /**
   * Show approve transaction sheet
   */
  showApproveTransactionSheet(): Promise<boolean>;
}

/**
 * Implementation of DAppProvider
 */
export class DApp implements DAppProvider {
  bridge: any;

  constructor(bridge: any) {
    this.bridge = bridge;
  }

  addHistory(url: string): Promise<void> {
    return this.bridge.Dapp.addHistory({ data: { url } });
  }

  async clearHistories(): Promise<void> {
    return (await this.bridge.Dapp.clearHistories()).data;
  }

  async getChainId(): Promise<number> {
    return (await this.bridge.Dapp.getChainId()).data;
  }

  async getCurrentChain(): Promise<Chain> {
    return (await this.bridge.Dapp.getCurrentChain()).data;
  }

  async getCurrentDapp(): Promise<Partial<Dapp>> {
    return (await this.bridge.Dapp.getCurrentDapp()).data;
  }

  setCurrentDapp(dapp: Partial<Dapp>): Promise<void> {
    return this.bridge.Dapp.setCurrentDapp({ data: { dapp } });
  }

  updateCurrentDapp(dapp: Partial<Dapp>): Promise<void> {
    return this.bridge.Dapp.updateCurrentDapp({ data: { dapp } });
  }

  async getDapps(): Promise<Dapp[]> {
    return (await this.bridge.Dapp.getDapps()).data;
  }

  async getHistories(): Promise<DApp[]> {
    return (await this.bridge.Dapp.getHistories()).data;
  }

  onChainIdChanged(callback: BridgeCallBack<number>): Function {
    return this.bridge.Dapp.onChainIdChanged(callback);
  }

  onCurrentChainChanged(callback: BridgeCallBack<Chain>): Function {
    return this.bridge.Dapp.onCurrentChainChanged(callback);
  }

  onCurrentDappChanged(callback: BridgeCallBack<Partial<Dapp>>): Function {
    return this.bridge.Dapp.onCurrentDappChanged(callback);
  }

  onDappsChanged(callback: BridgeCallBack<Dapp[]>): Function {
    return this.bridge.Dapp.onDappsChanged(callback);
  }

  onHistoriesChanged(callback: BridgeCallBack<Partial<Dapp>[]>): Function {
    return this.bridge.Dapp.onHistoriesChanged(callback);
  }

  setChainId(chainId: number): Promise<void> {
    return this.bridge.Dapp.setChainId({ data: { chainId } });
  }

  async showApproveTransactionSheet(): Promise<boolean> {
    return (await this.bridge.Dapp.showApproveTransactionSheet()).data;
  }

  async showConnectSheet(data?: ApproveTransactionData): Promise<boolean> {
    return (
      await this.bridge.Dapp.showConnectSheet({
        data: data,
      })
    ).data;
  }

  async showSignSheet(message: string): Promise<boolean> {
    return (await this.bridge.Dapp.showSignSheet({ data: { message } })).data;
  }
}
