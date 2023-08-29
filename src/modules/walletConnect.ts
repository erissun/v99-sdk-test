import type { AccountWallet, WalletConnectSession } from 'v99-common';
import type { BridgeCallBack } from '../types';

/**
 * WalletConnect module
 * @module WalletConnect
 */
type WalletConnectedSessionsType = {
  wallet: AccountWallet;
  sessions: WalletConnectSession[];
};

export interface WalletConnectProvider {
  /**
   * Create Wallet Connection
   * @param wc
   * @param onSuccess
   * @param onError
   * @param onCancel
   */
  createWCConnection(
    wc: string,
    onSuccess?: () => void,
    onError?: () => void,
    onCancel?: () => void
  ): Promise<unknown>;

  /**
   * Get sessions
   */
  getSessions(): Promise<WalletConnectSession[]>;

  /**
   * Get sessions for current wallet
   */
  getSessionsForCurrentWallet(): Promise<WalletConnectSession[]>;

  /**
   * Get sessions by Id
   * @param sessionId
   */
  getSessionById(sessionId: string): Promise<WalletConnectSession>;

  /**
   * Get wallet connected sessions
   */
  getWalletConnectedSessions(): Promise<WalletConnectedSessionsType[]>;

  /**
   * Disconnect session by Id
   * @param sessionId
   */
  disconnectWCSession(sessionId: string): Promise<void>;

  /**
   * Listen to on Sessions Changed
   * @param callback
   */
  onSessionsChanged(callback: BridgeCallBack<WalletConnectSession[]>): Function;

  /**
   * Listen to on Current Wallet's Sessions Changed
   * @param callback
   */
  onSessionsForCurrentWalletChanged(
    callback: BridgeCallBack<WalletConnectSession[]>
  ): Function;

  /**
   * Listen to on Wallet Connected Sessions Changed
   * @param callback
   */
  onWalletConnectedSessionsChanged(
    callback: BridgeCallBack<WalletConnectedSessionsType[]>
  ): Function;
}

/**
 * Implementation of WalletConnectProvider
 */
export class WalletConnect implements WalletConnectProvider {
  bridge: any;

  constructor(bridge: any) {
    this.bridge = bridge;
  }

  async createWCConnection(
    wc: string,
    onSuccess?: () => void,
    onError?: () => void,
    onCancel?: () => void
  ): Promise<unknown> {
    return (
      await this.bridge.WalletConnect.createWCConnection({
        data: {
          wc,
          onSuccess,
          onError,
          onCancel,
        },
      })
    ).data;
  }

  async getSessions(): Promise<WalletConnectSession[]> {
    return (await this.bridge.WalletConnect.getSessions()).data;
  }

  async getSessionsForCurrentWallet(): Promise<WalletConnectSession[]> {
    return (await this.bridge.WalletConnect.getSessionsForCurrentWallet()).data;
  }

  async getSessionById(sessionId: string): Promise<WalletConnectSession> {
    return (
      await this.bridge.WalletConnect.getSessionById({
        data: {
          sessionId,
        },
      })
    ).data;
  }

  async getWalletConnectedSessions(): Promise<WalletConnectedSessionsType[]> {
    return (await this.bridge.WalletConnect.getWalletConnectedSessions()).data;
  }

  disconnectWCSession(sessionId: string): Promise<void> {
    return this.bridge.WalletConnect.disconnectWCSession({
      data: { sessionId },
    });
  }

  onSessionsChanged(
    callback: BridgeCallBack<WalletConnectSession[]>
  ): Function {
    return this.bridge.WalletConnect.onSessionsChanged(callback);
  }

  onSessionsForCurrentWalletChanged(
    callback: BridgeCallBack<WalletConnectSession[]>
  ): Function {
    return this.bridge.WalletConnect.onSessionsForCurrentWalletChanged(
      callback
    );
  }

  onWalletConnectedSessionsChanged(
    callback: BridgeCallBack<WalletConnectedSessionsType[]>
  ): Function {
    return this.bridge.WalletConnect.onWalletConnectedSessionsChanged(callback);
  }
}
