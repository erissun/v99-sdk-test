/**
 * Setting module
 * @module Setting
 */
export interface SettingProvider {
  /**
   * Get all currencies
   */
  getCurrencies(): Promise<string[]>;

  /**
   * Get current currency
   */
  getCurrency(): Promise<string>;

  /**
   * Get current currency symbol
   */
  getCurrencySymbol(): Promise<string>;

  /**
   * Perform action with passcode
   */
  performActionWithPasscode(): Promise<void>;
}

/**
 * Implementation of SettingProvider
 */
export class Setting implements SettingProvider {
  bridge: any;

  constructor(bridge: any) {
    this.bridge = bridge;
  }

  async getCurrencies(): Promise<string[]> {
    return (await this.bridge.Setting.getCurrencies()).data;
  }

  async getCurrency(): Promise<string> {
    return (await this.bridge.Setting.getCurrency()).data;
  }

  async getCurrencySymbol(): Promise<string> {
    return (await this.bridge.Setting.getCurrencySymbol()).data;
  }

  async performActionWithPasscode(): Promise<void> {
    return (await this.bridge.Setting.performActionWithPasscode()).data;
  }
}
