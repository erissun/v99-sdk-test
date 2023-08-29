import {
  App,
  AppProvider,
  DApp,
  DAppProvider,
  Navigation,
  NavigationProvider,
  Setting,
  SettingProvider,
  Token,
  TokenProvider,
  UI,
  UIProvider,
  Wallet,
  WalletConnect,
  WalletConnectProvider,
  WalletProvider,
  Web3,
  Web3Provider,
} from './modules';
import { ErrorCode } from 'v99-common';

/**
 * V99 SDK
 */
export class V99SDK {
  /**
   * App module
   */
  app?: AppProvider;

  /**
   * Navigation module
   */
  nav?: NavigationProvider;

  /**
   * UI module
   */
  ui?: UIProvider;

  /**
   * Wallet module
   */
  wallet?: WalletProvider;

  /**
   * Token module
   */
  token?: TokenProvider;

  /**
   * Web3 module
   */
  web3?: Web3Provider;

  /**
   * Web3 module
   */
  setting?: SettingProvider;

  /**
   * DApp module
   */
  dapp?: DAppProvider;

  /**
   * WalletConnect module
   */
  walletConnect?: WalletConnectProvider;

  /**
   * Bridge to communicate with core
   */
  bridge: any;

  /**
   * Init V99 SDK function
   * @param appId provided by admin supper app
   * need to be called before any other functions
   * returns bridge if the mini app is validated
   */
  async init(appId: string): Promise<InitStatus> {
    try {
      this.bridge = await (window as any).initBridge(appId);
      this.app = new App(this.bridge);
      this.ui = new UI(this.bridge);
      this.wallet = new Wallet(this.bridge);
      this.token = new Token(this.bridge);
      this.nav = new Navigation(this.bridge);
      this.web3 = new Web3(this.bridge);
      this.setting = new Setting(this.bridge);
      this.dapp = new DApp(this.bridge);
      this.walletConnect = new WalletConnect(this.bridge);
      return { status: true };
    } catch (error) {
      if (error instanceof Error) {
        return { status: false, code: error.message };
      }
      return { status: false, code: ErrorCode.UNKNOWN_ERROR };
    }
  }

  /**
   * Dispose V99 SDK
   */
  dispose(): void {
    return this.bridge.destroy();
  }
}

interface InitStatus {
  status: boolean;
  code?: string;
}
