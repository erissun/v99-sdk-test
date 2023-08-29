import type { Chain, Token, TokenActionType } from 'v99-common';

/**
 * UI module
 * @module UI
 */
export interface UIProvider {
  /**
   * Show toast
   * @param message
   */
  showToast(message: string): Promise<void>;

  /**
   * Show Create Bottom Sheet
   */
  showCreateWalletBottomSheet(): Promise<void>;
  /**
   * Show Create Wallet Bottom Sheet
   */
  onShowCreateWalletSheetRequest(): Promise<void>;
  /**
   *
   * @param data
   */
  showDialog(data: ShowDialogData): Promise<void>;

  /**
   * Request token action
   * @param type
   * @param initToken
   * @param initChain
   */
  requestTokenAction(type: TokenActionType): Promise<boolean>;

  /**
   * Show Date Picker Bottom Sheet
   */
  showDatePickerBottomSheet(
    fromDate?: Date,
    toDate?: Date
  ): Promise<DateFilter | null>;

  /**
   * Show Select Token Bottom Sheet
   */
  showSelectTokenBottomSheet(): Promise<ChainToken | null>;

  /**
   * Show Filter Token Bottom Sheet
   * @param initToken
   * @param initChain
   */
  showFilterTokenBottomSheet(
    initToken?: Token,
    initChain?: Chain
  ): Promise<ChainToken | null>;

  /**
   * Show Toggle Token Bottom Sheet
   */
  showToggleTokenBottomSheet(): Promise<void>;
}

/**
 * Implementation of UIProvider
 */
export class UI implements UIProvider {
  bridge: any;

  constructor(bridge: any) {
    this.bridge = bridge;
  }

  showToast(message: string): Promise<void> {
    return this.bridge.UI.showToast({ data: { message } });
  }

  showCreateWalletBottomSheet(): Promise<void> {
    return this.bridge.UI.showCreateWalletBottomSheet();
  }

  onShowCreateWalletSheetRequest(): Promise<void> {
    return this.bridge.UI.onShowCreateWalletSheetRequest();
  }

  showDialog(data: ShowDialogData): Promise<void> {
    return this.bridge.UI.showDialog({
      data,
    });
  }

  async requestTokenAction(type: TokenActionType): Promise<boolean> {
    return (
      await this.bridge.UI.requestTokenAction({
        data: {
          type,
        },
      })
    ).data;
  }

  async showDatePickerBottomSheet(
    fromDate?: Date,
    toDate?: Date
  ): Promise<DateFilter | null> {
    return (
      await this.bridge.UI.showDatePickerBottomSheet({
        data: { fromDate, toDate },
      })
    ).data;
  }

  async showSelectTokenBottomSheet(): Promise<ChainToken | null> {
    return (await this.bridge.UI.showSelectTokenBottomSheet()).data;
  }

  async showFilterTokenBottomSheet(
    initToken?: Token,
    initChain?: Chain
  ): Promise<ChainToken | null> {
    return (
      await this.bridge.UI.showSelectTokenBottomSheet({
        data: { initToken, initChain, type: 'filter' },
      })
    ).data;
  }

  showToggleTokenBottomSheet(): Promise<void> {
    return this.bridge.UI.showSelectTokenBottomSheet({
      data: { type: 'toggle' },
    });
  }
}

type ShowDialogData = {
  title?: string;
  message?: string;
  buttonText?: string;
  cancelButtonText?: string;
  hideCloseButton?: boolean;
  showCancelButton?: boolean;
  showTime?: boolean;
  backdropForClosing?: boolean;
  onClose?: () => void;
  onPress?: () => void;
};

type ChainToken = {
  token: Token;
  chain: Chain;
};

type DateFilter = {
  fromDate: Date;
  toDate: Date;
};
