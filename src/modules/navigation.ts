/**
 * Navigation module
 * @module Navigation
 */
export interface NavigationProvider {
  /**
   * navigate to screen
   * @param name
   * @param params
   */
  to(name: string, params?: any): void;

  /**
   * replace current screen with screen
   * @param name screen name
   * @param params params to be passed to screen
   */
  off(name: string, params?: any): void;

  /**
   * replace current screen stack
   * @param routes array of route names
   * @param index index of route to be shown
   */
  offStack(routes: string[], index: any): void;

  /**
   * go back to previous screen
   */
  back(): void;

  /**
   * Request Open Browser
   * @param url
   * @param isFullscreen
   */
  openBrowser(url: string, isFullscreen: boolean): Promise<boolean>;
  /**
   * Request Open Qr Scanner
   */
  openQrCodeScanner(callback: Function, validate?: Function): Promise<void>;
}

/**
 * Implementation of Navigation
 */
export class Navigation implements NavigationProvider {
  bridge: any;

  constructor(bridge: any) {
    this.bridge = bridge;
  }

  to(name: string, params?: any): void {
    return this.bridge.Navigation.navigate({
      data: {
        name,
        params,
      },
    });
  }

  off(name: string, params?: any): void {
    return this.bridge.Navigation.replace({
      data: {
        name,
        params,
      },
    });
  }

  offStack(routes: string[], index: any): void {
    return this.bridge.Navigation.navigateAndReset({
      data: {
        routes,
        index,
      },
    });
  }

  back(): void {
    return this.bridge.Navigation.goBack();
  }

  async openBrowser(url: string, isFullscreen: boolean): Promise<boolean> {
    return (
      await this.bridge.Navigation.openInAppBrowser({
        data: { url, isFullscreen },
      })
    ).data;
  }

  openQrCodeScanner(
    callback: Function,
    validate?: Function | undefined
  ): Promise<void> {
    return this.bridge.Navigation.openQrCodeScanner({
      data: {
        callback,
        validate,
      },
    });
  }
}
