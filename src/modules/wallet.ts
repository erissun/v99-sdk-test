import type {
  AccountWallet,
  SwapPairTokens,
  TokenBalanceAndPrices,
  WalletMnemonic,
} from 'v99-common';
import type { Activity, TokenBalance } from 'v99-common';
import type { BridgeCallBack } from '../types';

/**
 * Wallet module
 * @module Wallet
 */
export interface WalletProvider {
  /**
   * Get all wallets
   */
  getWallets(): Promise<AccountWallet[]>;

  /**
   * Create a new random wallet
   */
  createWallet(): Promise<AccountWallet>;

  /**
   * Import a wallet by mnemonic
   * @param mnemonic
   * @param name
   */
  importWallet(mnemonic: string, name: string): Promise<AccountWallet>;

  /**
   * Generate a random mnemonic
   */
  generateMnemonic(): Promise<string>;

  /**
   * Get recommend mnemonics
   * @param lastWord
   */
  getRecommendMnemonicWords(lastWord: string): Promise<string[]>;
  /**
   * Get wallet by id
   * @param walletId
   */
  getWalletById(walletId: string): Promise<AccountWallet>;
  /**
   * check valid mnemonic
   * @param mnemonic
   */
  isValidMnemonic(mnemonic: string): Promise<boolean>;

  /**
   * check exist mnemonic
   * @param mnemonic
   */
  checkExistMnemonic(mnemonic: string): Promise<boolean>;

  /**
   * Get wallet count
   */
  getWalletCount(): Promise<number>;

  /**
   * Get all mnemonics
   */
  getWalletMnemonics(): Promise<WalletMnemonic[]>;

  /**
   * Generate a random mnemonic
   */
  getWalletMnemonic(walletId: string): Promise<string>;

  /**
   * Add transaction history
   * @param walletId
   * @param activity
   */
  addActivity(activity: Activity): Promise<void>;

  /**
   * Get transaction history
   * @param walletId
   */
  getActivities(walletId: string): Promise<Activity[]>;

  /**
   * Background fetch activities
   */
  backgroundFetchActivities(): Promise<void>;

  /**
   * Listen to transaction history changes
   * @param callback
   */
  onActivitiesChanged(callback: BridgeCallBack<Activity[]>): Function;

  /**
   * Get balance
   */
  getTokenBalanceAndPrices(): Promise<TokenBalanceAndPrices>;

  /**
   * mark Current Wallet As Backed up
   *  * @param walletId
   */
  markCurrentWalletAsBackedUp(walletId: string): Promise<void>;

  /**
   * hide Backup Notice For Current Wallet
   * @param walletId
   */
  hideBackupNoticeForCurrentWallet(walletId: string): Promise<void>;

  /**
   * show Backup Success Dialog
   * @param show
   */
  setShowBackupSuccessDialog(show: boolean): Promise<void>;

  /**
   * get Other Wallets
   */
  getOtherWallets(): Promise<AccountWallet[]>; // get all wallets except current wallet

  /**
   * get Token Balance And Prices By WalletId
   * @param walletId
   */
  getTokenBalanceAndPricesByWalletId(
    walletId: string
  ): Promise<TokenBalanceAndPrices>;

  /**
   * get Current Wallet
   */
  getCurrentWallet(): Promise<AccountWallet>;

  /**
   * set Current Wallet
   * @param walletId
   */
  setWalletId(walletId: string): Promise<void>;

  /**
   * edit Wallet Name
   * @param walletId
   * @param name
   */
  editWalletName(walletId: string, name: string): Promise<void>;

  /**
   * delete Wallet by walletId
   * @param walletId
   */
  deleteWallet(walletId: string): Promise<void>;

  /**
   * get Swap Pair Tokens
   * @param swapPairTokens
   */
  setSwapPairTokens(swapPairTokens: SwapPairTokens): Promise<void>;

  /**
   * get Swap Pair Tokens
   */
  getSwapPairTokens(): Promise<SwapPairTokens>;

  /**
   * has Swap Pair
   */
  hasSwapPairTokens(): Promise<boolean>;

  /**
   * getDefaultSwapPairTokens
   */
  getDefaultSwapPairTokens(): Promise<SwapPairTokens>;

  /**
   * Get Token Balance
   * @param tokenId
   */
  getTokenBalance(tokenId: string): Promise<TokenBalance>;

  /**
   *  Get Token Balance All Wallets
   * @param tokenId
   */
  getTokenBalanceAllWallets(
    tokenId: string
  ): Promise<{ [walletId: string]: TokenBalance }>;

  /**
   * Check show balance or *** on UI
   */
  isShowBalance(): Promise<boolean>;

  /**
   * Listen to on Show Balance Changed
   * @param callback
   */
  onShowBalanceChanged(callback: BridgeCallBack<boolean>): Function;

  /**
   * Listen to on Wallets Changed
   * @param callback
   */
  onWalletsChanged(callback: BridgeCallBack<AccountWallet[]>): Function;

  /**
   * Listen to on Current Wallet Changed
   * @param callback
   */
  onCurrentWalletChanged(callback: BridgeCallBack<AccountWallet>): Function;

  /**
   * Listen to on Total Balance Changed
   * @param callback
   */
  onTotalBalanceChanged(callback: BridgeCallBack<number>): Function;
}

/**
 * Implementation of WalletProvider
 */
export class Wallet implements WalletProvider {
  bridge: any;

  constructor(bridge: any) {
    this.bridge = bridge;
  }

  async createWallet(): Promise<AccountWallet> {
    const result = await this.bridge.Wallet.createWallet();
    return result.data as AccountWallet;
  }

  async generateMnemonic(): Promise<string> {
    const result = await this.bridge.Wallet.generateMnemonic();
    return result.data as string;
  }

  async getWallets(): Promise<AccountWallet[]> {
    const result = await this.bridge.Wallet.getWallets();
    return result.data as AccountWallet[];
  }

  async importWallet(mnemonic: string, name: string): Promise<AccountWallet> {
    const payload = { data: { mnemonic, name } };
    const result = await this.bridge.Wallet.importWallet(payload);
    return result.data as AccountWallet;
  }

  async getWalletMnemonics(): Promise<WalletMnemonic[]> {
    const result = await this.bridge.Wallet.getWalletMnemonics();
    return result.data as WalletMnemonic[];
  }

  async getWalletMnemonic(walletId: string): Promise<string> {
    const payload = { data: { walletId } };
    const result = await this.bridge.Wallet.getWalletMnemonic(payload);
    return result.data as string;
  }

  addActivity(activity: Activity): Promise<void> {
    return this.bridge.Wallet.addActivity({ data: activity });
  }

  onActivitiesChanged(callback: BridgeCallBack<Activity[]>): Function {
    return this.bridge.Wallet.onActivitiesChanged(callback);
  }

  async getActivities(walletId: string): Promise<Activity[]> {
    return (await this.bridge.Wallet.getActivities({ data: { walletId } }))
      .data;
  }

  async backgroundFetchActivities(): Promise<void> {
    return this.bridge.Wallet.backgroundFetchActivities();
  }

  async getTokenBalanceAndPrices(): Promise<TokenBalanceAndPrices> {
    return (await this.bridge.Wallet.getTokenBalanceAndPrices()).data;
  }

  hideBackupNoticeForCurrentWallet(walletId: string): Promise<void> {
    return this.bridge.Wallet.hideBackupNoticeForCurrentWallet({
      data: { walletId },
    });
  }

  markCurrentWalletAsBackedUp(walletId: string): Promise<void> {
    return this.bridge.Wallet.markCurrentWalletAsBackedUp({
      data: { walletId },
    });
  }

  setShowBackupSuccessDialog(show: boolean): Promise<void> {
    return this.bridge.Wallet.markCurrentWalletAsBackedUp({ data: { show } });
  }

  async getOtherWallets(): Promise<AccountWallet[]> {
    return (await this.bridge.Wallet.getOtherWallets()).data;
  }

  async getTokenBalanceAndPricesByWalletId(
    walletId: string
  ): Promise<TokenBalanceAndPrices> {
    return (
      await this.bridge.Wallet.getTokenBalanceAndPricesByWalletId({
        data: { walletId },
      })
    ).data;
  }

  async getCurrentWallet(): Promise<AccountWallet> {
    return (await this.bridge.Wallet.getCurrentWallet()).data;
  }

  setWalletId(walletId: string): Promise<void> {
    return this.bridge.Wallet.setWalletId({
      data: { walletId },
    });
  }

  editWalletName(walletId: string, name: string): Promise<void> {
    return this.bridge.Wallet.editWalletName({
      data: { walletId, name },
    });
  }

  deleteWallet(walletId: string): Promise<void> {
    return this.bridge.Wallet.deleteWallet({
      data: { walletId },
    });
  }

  async hasSwapPairTokens(): Promise<boolean> {
    return (await this.bridge.User.hasSwapPairTokens()).data;
  }

  setSwapPairTokens(swapPairTokens: SwapPairTokens): Promise<void> {
    return this.bridge.User.setSwapPairTokens({ data: { swapPairTokens } })
      .data;
  }

  async getSwapPairTokens(): Promise<SwapPairTokens> {
    return (await this.bridge.User.getSwapPairTokens()).data;
  }

  async getDefaultSwapPairTokens(): Promise<SwapPairTokens> {
    return (await this.bridge.User.getDefaultSwapPairTokens()).data;
  }

  async getTokenBalance(tokenId: string): Promise<TokenBalance> {
    return (await this.bridge.Wallet.getTokenBalance({ data: { tokenId } }))
      .data;
  }

  async getTokenBalanceAllWallets(
    tokenId: string
  ): Promise<{ [walletId: string]: TokenBalance }> {
    return (
      await this.bridge.Wallet.getTokenBalanceAllWallets({ data: { tokenId } })
    ).data;
  }

  async isShowBalance(): Promise<boolean> {
    return (await this.bridge.Wallet.isShowBalance()).data;
  }

  onShowBalanceChanged(callback: BridgeCallBack<boolean>): Function {
    return this.bridge.Wallet.onShowBalanceChanged(callback);
  }

  onCurrentWalletChanged(callback: BridgeCallBack<AccountWallet>): Function {
    return this.bridge.Wallet.onCurrentWalletChanged(callback);
  }

  onWalletsChanged(callback: BridgeCallBack<AccountWallet[]>): Function {
    return this.bridge.Wallet.onWalletsChanged(callback);
  }

  onTotalBalanceChanged(callback: BridgeCallBack<number>): Function {
    return this.bridge.Wallet.onTotalBalanceChanged(callback);
  }

  async checkExistMnemonic(mnemonic: string): Promise<boolean> {
    return (await this.bridge.Wallet.checkExistMnemonic({ data: { mnemonic } }))
      .data;
  }

  async getRecommendMnemonicWords(lastWord: string): Promise<string[]> {
    return (
      await this.bridge.Wallet.getRecommendMnemonicWords({ data: { lastWord } })
    ).data;
  }

  async getWalletById(walletId: string): Promise<AccountWallet> {
    return (await this.bridge.Wallet.getWalletById({ data: { walletId } }))
      .data;
  }

  async getWalletCount(): Promise<number> {
    return (await this.bridge.Wallet.getWalletCount()).data;
  }

  async isValidMnemonic(mnemonic: string): Promise<boolean> {
    return (await this.bridge.Wallet.isValidMnemonic({ data: { mnemonic } }))
      .data;
  }
}
