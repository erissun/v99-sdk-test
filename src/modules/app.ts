import type { AccountWallet } from 'v99-common';

/**
 * App module
 */
export interface AppProvider {
  /**
   * Listen to session expired event
   * @param callback
   */
  onSessionExpired(callback: () => void): void;

  /**
   * Listen to account changed event
   * @param callback
   */
  onAccountChanged(callback: (account: AccountWallet) => void): Function;

  /**
   * Request camera permission
   */
  requestCameraPermission(): Promise<void>;

  /**
   * Get current network
   */
  isTestNet(): Promise<boolean>;

  /**
   * Request Close Mini App
   * @param confirmation
   */
  closeMiniApp(confirmation: boolean): Promise<boolean>;

  /**
   * get Params pass to destination app
   *  */
  getParams(): Promise<unknown>;
}

/**
 * Implementation of AppProvider
 */
export class App implements AppProvider {
  bridge: any;

  constructor(bridge: any) {
    this.bridge = bridge;
  }

  onSessionExpired(callback: () => void): void {
    return this.bridge.MiniApp.onSignatureExpired(callback);
  }

  onAccountChanged(callback: (account: AccountWallet) => void): Function {
    return this.bridge.MiniApp.onSessionExpired(callback);
  }

  async requestCameraPermission(): Promise<void> {
    return (await this.bridge.MiniApp.requestCameraPermission()).data;
  }

  async isTestNet(): Promise<boolean> {
    return (await this.bridge.App.isTestNet()).data;
  }

  async closeMiniApp(confirmation: boolean = false): Promise<boolean> {
    return (await this.bridge.MiniApp.closeMiniApp({ data: { confirmation } }))
      .data;
  }

  async getParams(): Promise<unknown> {
    return (await this.bridge.MiniApp.getParams()).data;
  }
}
