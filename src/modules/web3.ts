import type { Chain, Transaction, TransactionReceipt } from 'v99-common';
import type { SwapCross, Token } from 'v99-common';

/**
 * Web3 module
 * @module Web3
 */
export interface Web3Provider {
  /**
   * Check isValid Mnemonic
   * @param mnemonic
   *
   */
  isMnemonicValid(mnemonic: string): Promise<boolean>;

  /**
   * Get Recommend Mnemonic Words
   * @param characters mnemonic characters
   *
   */
  getRecommendMnemonicWords(characters: string): Promise<string[]>;

  /**
   * Get nonce
   * @param chain
   * @param walletAddress
   */
  getNonce(chain: Chain, walletAddress: string): Promise<number>;

  /**
   * estimate Gas Prices
   * @param chain
   */
  estimateGasPrice(chain: Chain): Promise<string | number>;

  /**
   * estimate Gas Limit
   * @param chain
   * @param data
   * @param tokenAddress
   * @param walletAddress
   * @param isSwap
   */
  estimateGasLimit(
    chain: Chain,
    data: any,
    tokenAddress: string,
    walletAddress: string,
    isSwap: boolean
  ): Promise<string | number>;

  /**
   * Get Token Balance By Wallet Id
   * @param tokenId
   * @param walletAddress
   */
  getTokenBalanceByWalletId(
    tokenId: string,
    walletAddress: string
  ): Promise<string>;

  /**
   * Send Token
   * @param chain
   * @param token
   * @param from
   * @param to
   * @param amount
   * @param gasPrice
   * @param gasLimit
   * @param nonce
   */
  sendToken(
    chain: Chain,
    token: Token,
    from: string,
    to: string,
    amount: string,
    gasPrice: string,
    gasLimit: string,
    nonce: number
  ): Promise<string>;

  /**
   * User Pay Token
   * @param chain
   * @param token
   * @param gasPrice
   * @param gasLimit
   * @param nonce
   */
  userPayToken(
    chain: Chain,
    token: Token,
    gasPrice: string,
    gasLimit: string,
    nonce?: number
  ): Promise<string>;

  /**
   * Get Gas Tracker
   * @param chain
   */
  getGasTracker(chain: Chain): Promise<any>;

  /**
   * Get Gas Price
   * @param chain
   */
  getGasPrice(chain: Chain): Promise<string>;

  /**
   * Get Token Price
   * @param data
   */
  getEstimateFeeRouting(data: any): Promise<any>;

  /**
   * Get Transaction Receipt
   * @param txHash
   * @param chain
   */
  getTransactionReceipt(
    txHash: string,
    chain: Chain
  ): Promise<TransactionReceipt>;

  /**
   * Get Swap Cross Chain Fee
   * @param data
   */
  getSwapCrossChainFee(data: any): Promise<any>;

  /**
   * Get Exchange Rate
   * @param routerAddress
   * @param chain
   */
  getExchangeRate(routerAddress: string, chain: Chain): Promise<string>;

  /**
   * Check Paused Router
   * @param routerAddress
   * @param chain
   */
  isPausedRouter(routerAddress: string, chain: Chain): Promise<boolean>;

  /**
   * Get Address Pair In LP
   * @param routerAddress
   * @param chain
   * @param isGetTokenA
   */
  getAddressPairInLP(
    routerAddress: string,
    chain: Chain,
    isGetTokenA: boolean
  ): Promise<boolean>;

  /**
   * Get Allowance Swap Token
   * @param chain
   * @param token
   * @param currentAddress
   * @param tokenAddress
   * @param routerAddress
   */
  getAllowanceSwap(
    chain: Chain,
    token: Token,
    currentAddress: string,
    tokenAddress: string,
    routerAddress: string
  ): Promise<number>;

  /**
   * Get Swap Cross
   */
  getSwapCross(): Promise<SwapCross>;

  /**
   * Get Estimate GasLimit Swap
   * @param swapAmount
   * @param routerAddress
   * @param toChainId
   * @param toTokenAddress
   * @param fromTokenAddress
   * @param isCrossChain
   * @param exchangeRate
   * @param isRouting
   * @param token
   * @param chain
   * @param currentAddress
   * @param abiFirstStepRouting
   * @param contractAddressDepositRouting
   */
  estimateGasLimitSwap(
    swapAmount: number,
    routerAddress: string,
    toChainId: number,
    toTokenAddress: string,
    fromTokenAddress: string,
    isCrossChain: boolean,
    exchangeRate: number,
    isRouting: boolean,
    token: Token,
    chain: Chain,
    currentAddress: string,
    abiFirstStepRouting: string,
    contractAddressDepositRouting: string
  ): Promise<number>;

  /**
   * Get Amount Out Swap
   * @param amountIn
   * @param addressTokenIn
   * @param routerAddress
   * @param chain
   */
  getAmountOutLP(
    amountIn: number,
    addressTokenIn: string,
    routerAddress: string,
    chain: Chain
  ): Promise<number>;

  /**
   * Set WalletId
   * @param walletId
   */
  setWalletId(walletId: string): void;

  /**
   * Approve Allowance
   * @param chain
   * @param walletId
   * @param currentAddress
   * @param token
   * @param routerAddress
   */
  approveAllowance(
    chain: Chain,
    walletId: string,
    currentAddress: string,
    token: Token,
    routerAddress: string
  ): Promise<string>;

  /**
   *
   * @param txHash
   * @param chain
   */
  getTransactionReceipt(txHash: string, chain: Chain): Promise<any>;

  /**
   * Swap Token
   * @param swapAmount
   * @param routerAddress
   * @param toChainId
   * @param toTokenAddress
   * @param fromTokenAddress
   * @param gasLimit
   * @param gasPrice
   * @param isCrossChain
   * @param exchangeRate
   * @param isRouting
   * @param token
   * @param chain
   * @param currentAddress
   * @param walletId
   * @param abiFirstStepRouting
   * @param contractAddressDepositRouting
   */
  swapOnChain(
    swapAmount: number,
    routerAddress: string,
    toChainId: number,
    toTokenAddress: string,
    fromTokenAddress: string,
    gasLimit: number,
    gasPrice: number,
    isCrossChain: boolean,
    exchangeRate: number,
    isRouting: boolean,
    token: Token,
    chain: Chain,
    currentAddress: string,
    walletId: string,
    abiFirstStepRouting: string,
    contractAddressDepositRouting: string
  ): Promise<string>;

  /**
   * Get Info Of Routing
   * @param data
   */
  getInfoOfRouting(data: any): Promise<any>;

  /**
   * Personal Sign
   * @param data
   */
  personalSign(data: string): Promise<string>;

  /**
   * Personal Ec Recover
   * @param data
   * @param signature
   */
  personalEcRecover(data: string, signature: string): Promise<string>;

  /**
   * Get Block Number
   * @param chain
   */
  getBlockNumber(chain: Chain): Promise<number>;

  /**
   * Call Raw
   * @param data
   * @param to
   */
  callRaw(data: string, to: string): Promise<string>;

  /**
   * Get Balance By Address
   * @param address
   */
  getBalanceByAddress(address: string): Promise<string>;

  /**
   * Get Symbol By Address
   * @param address
   */
  getSymbolByAddress(address: string): Promise<string>;

  /**
   * Send Raw Transaction
   * @param data
   * @param chain
   * @param from
   * @param to
   * @param amount
   * @param gasPrice
   * @param gasLimit
   * @param onDone
   * @param onError
   */
  sendRawTransaction(
    data: string,
    chain: Chain,
    from: string,
    to: string,
    amount: number,
    gasPrice: string,
    gasLimit: string,
    onDone: (transaction: any) => void,
    onError: (message: string | undefined) => void
  ): Promise<any>;

  /**
   * Get Transaction By Hash
   * @param txHash
   * @param chain
   */
  getTransactionByHash(txHash: string, chain: Chain): Promise<Transaction>;
}

/**
 * Implementation of Web3Provider
 */
export class Web3 implements Web3Provider {
  bridge: any;

  constructor(bridge: any) {
    this.bridge = bridge;
  }

  async personalSign(data: string): Promise<string> {
    return (
      await this.bridge.Web3.personalSign({
        data: { data },
      })
    ).data;
  }

  async personalEcRecover(data: string, signature: string): Promise<string> {
    return (
      await this.bridge.Web3.personalEcRecover({
        data: { data, signature },
      })
    ).data;
  }

  async getBlockNumber(chain: Chain): Promise<number> {
    return (
      await this.bridge.Web3.getBlockNumber({
        data: { chain },
      })
    ).data;
  }

  async callRaw(data: string, to: string): Promise<string> {
    return (
      await this.bridge.Web3.callRaw({
        data: { data, to },
      })
    ).data;
  }

  async getBalanceByAddress(address: string): Promise<string> {
    return (
      await this.bridge.Web3.getBalanceByAddress({
        data: { address },
      })
    ).data;
  }

  async getSymbolByAddress(address: string): Promise<string> {
    return (
      await this.bridge.Web3.getSymbolByAddress({
        data: { address },
      })
    ).data;
  }

  async sendRawTransaction(
    data: string,
    chain: Chain,
    from: string,
    to: string,
    amount: number,
    gasPrice: string,
    gasLimit: string,
    onDone: (transaction: any) => void,
    onError: (message: string | undefined) => void
  ): Promise<any> {
    return (
      await this.bridge.Web3.sendRawTransaction({
        data: { data, chain, from, to, gasPrice, gasLimit, amount },
        onDone,
        onError,
      })
    ).data;
  }

  async getTransactionByHash(
    txHash: string,
    chain: Chain
  ): Promise<Transaction> {
    return (
      await this.bridge.Web3.getTransactionByHash({
        data: { txHash, chain },
      })
    ).data;
  }

  async isMnemonicValid(mnemonic: string): Promise<boolean> {
    const payload = { data: { mnemonic } };
    return this.bridge.Web3.checkIsValidMnemonic(payload);
  }

  async getRecommendMnemonicWords(characters: string): Promise<string[]> {
    return (
      await this.bridge.Web3.getRecommendMnemonicWords({ data: { characters } })
    ).data;
  }

  async estimateGasLimit(
    chain: Chain,
    data: any,
    tokenAddress: string,
    walletAddress: string,
    isSwap: boolean
  ): Promise<string | number> {
    return (
      await this.bridge.Web3.estimateGasLimit({
        data: {
          chain,
          data,
          tokenAddress,
          walletAddress,
          isSwap,
        },
      })
    ).data;
  }

  async estimateGasPrice(chain: Chain): Promise<string | number> {
    return (await this.bridge.Web3.estimateGasPrice({ data: { chain } })).data;
  }

  async getNonce(chain: Chain, walletAddress: string): Promise<number> {
    return (
      await this.bridge.Web3.getNonce({
        data: { chain: chain, walletAddress: walletAddress },
      })
    ).data;
  }

  async getTokenBalanceByWalletId(
    tokenId: string,
    walletAddress: string
  ): Promise<string> {
    return (
      await this.bridge.Web3.getTokenBalance({
        data: { tokenId, walletAddress },
      })
    ).data;
  }

  async sendToken(
    chain: Chain,
    token: Token,
    from: string,
    to: string,
    amount: string,
    gasPrice: string,
    gasLimit: string,
    nonce: number
  ): Promise<string> {
    return (
      await this.bridge.Web3.sendToken({
        data: {
          chain,
          token,
          options: {
            from,
            to,
            amount,
            gasPrice,
            gasLimit,
            nonce,
          },
        },
      })
    ).data;
  }

  async userPayToken(
    chain: Chain,
    token: Token,
    gasPrice: string,
    gasLimit: string,
    nonce?: number
  ): Promise<string> {
    return (
      await this.bridge.Web3.userPayToken({
        data: {
          chain,
          token,
          options: {
            gasPrice,
            gasLimit,
            nonce,
          },
        },
      })
    ).data;
  }

  async estimateGasLimitSwap(
    swapAmount: number,
    routerAddress: string,
    toChainId: number,
    toTokenAddress: string,
    fromTokenAddress: string,
    isCrossChain: boolean,
    exchangeRate: number,
    isRouting: boolean,
    token: Token,
    chain: Chain,
    currentAddress: string,
    abiFirstStepRouting: string,
    contractAddressDepositRouting: string
  ): Promise<number> {
    return (
      await this.bridge.Web3.estimateGasLimitSwap({
        data: {
          swapAmount,
          routerAddress,
          toChainId,
          toTokenAddress,
          fromTokenAddress,
          isCrossChain,
          exchangeRate,
          isRouting,
          token,
          chain,
          currentAddress,
          abiFirstStepRouting,
          contractAddressDepositRouting,
        },
      })
    ).data;
  }

  async getAddressPairInLP(
    routerAddress: string,
    chain: Chain,
    isGetTokenA: boolean
  ): Promise<boolean> {
    return (
      await this.bridge.Web3.getAddressPairInLP({
        data: { routerAddress, chain, isGetTokenA },
      })
    ).data;
  }

  async getAllowanceSwap(
    chain: Chain,
    token: Token,
    currentAddress: string,
    tokenAddress: string,
    routerAddress: string
  ): Promise<number> {
    return (
      await this.bridge.Web3.getAllowanceSwap({
        data: { chain, token, currentAddress, tokenAddress, routerAddress },
      })
    ).data;
  }

  async getSwapCross(): Promise<SwapCross> {
    return (await this.bridge.Web3.getSwapCross()).data;
  }

  async getEstimateFeeRouting(data: any): Promise<any> {
    return (await this.bridge.Api.getEstimateFeeRouting({ data })).data;
  }

  async getExchangeRate(routerAddress: string, chain: Chain): Promise<string> {
    return (
      await this.bridge.Web3.getExchangeRate({ data: { routerAddress, chain } })
    ).data;
  }

  async getGasPrice(chain: Chain): Promise<string> {
    return (await this.bridge.Web3.getGasPrice({ data: { chain } })).data;
  }

  async getGasTracker(chain: Chain): Promise<any> {
    return (await this.bridge.Api.getGasTracker({ data: { chain } })).data;
  }

  async getSwapCrossChainFee(data: any): Promise<any> {
    return (await this.bridge.Api.getSwapCrossChainFee({ data })).data;
  }

  async isPausedRouter(routerAddress: string, chain: Chain): Promise<boolean> {
    return (
      await this.bridge.Web3.isPausedRouter({ data: { routerAddress, chain } })
    ).data;
  }

  async approveAllowance(
    chain: Chain,
    walletId: string,
    currentAddress: string,
    token: Token,
    routerAddress: string
  ): Promise<string> {
    return (
      await this.bridge.Web3.approveAllowance({
        data: { chain, walletId, currentAddress, token, routerAddress },
      })
    ).data;
  }

  async getAmountOutLP(
    amountIn: number,
    addressTokenIn: string,
    routerAddress: string,
    chain: Chain
  ): Promise<number> {
    return (
      await this.bridge.Web3.getAmountOutLP({
        data: { amountIn, addressTokenIn, routerAddress, chain },
      })
    ).data;
  }

  setWalletId(walletId: string): Promise<void> {
    return this.bridge.Wallet.setWalletId({ data: { walletId } });
  }

  async swapOnChain(
    swapAmount: number,
    routerAddress: string,
    toChainId: number,
    toTokenAddress: string,
    fromTokenAddress: string,
    gasLimit: number,
    gasPrice: number,
    isCrossChain: boolean,
    exchangeRate: number,
    isRouting: boolean,
    token: Token,
    chain: Chain,
    currentAddress: string,
    walletId: string,
    abiFirstStepRouting: string,
    contractAddressDepositRouting: string
  ): Promise<string> {
    return (
      await this.bridge.Web3.swapOnChain({
        data: {
          swapAmount,
          routerAddress,
          toChainId,
          toTokenAddress,
          fromTokenAddress,
          gasLimit,
          gasPrice,
          isCrossChain,
          exchangeRate,
          isRouting,
          token,
          chain,
          currentAddress,
          walletId,
          abiFirstStepRouting,
          contractAddressDepositRouting,
        },
      })
    ).data;
  }

  async getInfoOfRouting(data: any): Promise<any> {
    return (await this.bridge.Api.getInfoOfRouting({ data })).data;
  }

  async getTransactionReceipt(
    txHash: string,
    chain: Chain
  ): Promise<TransactionReceipt> {
    return (
      await this.bridge.Web3.getTransactionReceipt({
        data: {
          txHash,
          chain,
        },
      })
    ).data;
  }
}
