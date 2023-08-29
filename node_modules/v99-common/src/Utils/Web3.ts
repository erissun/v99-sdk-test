import Web3 from "web3";
import { AppAbi } from "../Models/Abi";
import { ChainSymbol } from "../Types";
import InputDataDecoder from "ethereum-input-data-decoder";
import { Chain, Config, FunctionCall, Token } from "../Models";

export const getTokenAddress = (isTestnet: boolean, token: Token) => {
  if (token.is_native) {
    return Config.Address0;
  } else {
    return isTestnet ? token.testnet_address : token.mainnet_address;
  }
};

export const getChainEndPoint = (isTestnet: boolean, chain: Chain) => {
  return isTestnet ? chain.testnet_end_point : chain.mainnet_end_point;
};
export const isVChain = (chain: Chain) => {
  return chain.symbol === ChainSymbol.VCHAIN;
};
export const isPolygonChain = (chain: Chain) => {
  return chain.symbol === ChainSymbol.POLYGON;
};
export const isEthChain = (chain: Chain) => {
  return chain.symbol === ChainSymbol.ETH;
};

export const isBSCChain = (chain: Chain) => {
  return chain.symbol === ChainSymbol.BSC;
};
export const isTronChain = (chain: Chain) => {
  return chain.symbol === ChainSymbol.TRON;
};

export const getChainId = (isTestnet: boolean, chain: Chain) => {
  return isTestnet ? chain.testnet_id : chain.id;
};

export const toHex = (int: number) => {
  return Web3.utils.numberToHex(int);
};
export const toInt = (hex: string) => {
  return Web3.utils.hexToNumberString(hex);
};
export const weiToDouble = (wei: string) => {
  return `${parseInt(wei, 10) / Math.pow(10, 18)}`;
};
export const etherToWei = (ether: string) => {
  return `${parseInt(ether, 10) * Math.pow(10, 18)}`;
};
export const weiToEther = (wei: any) => {
  return parseInt(wei, 10) / Math.pow(10, 18);
};
export const weiToGwei = (wei: string) => {
  return `${parseInt(wei, 10) / Math.pow(10, 9)}`;
};

export const gweiToWei = (gwei: number) => {
  return parseInt((gwei * Math.pow(10, 9)).toString(), 10);
};

export const gweiToEther = (gwei: any) => {
  return parseInt(gwei, 10) / Math.pow(10, 9);
};
export const encodeSendParams = (params: string[]) => {
  const web3 = new Web3();
  return web3.eth.abi.encodeParameters(["address", "uint256"], params);
};

export const toPlainString = (num: number) => {
  return ("" + +num).replace(
    /(-?)(\d*)\.?(\d*)e([+-]\d+)/,
    function (_a, b, c, d, e) {
      return e < 0
        ? b + "0." + Array(1 - e - c.length).join("0") + c + d
        : b + c + d + Array(e - d.length + 1).join("0");
    }
  );
};

export const doubleToWei = (value: number, radix?: number, decimal = 18) => {
  value = parseInt(toPlainString(value * Math.pow(10, decimal)), 10);
  return BigInt(value).toString(radix);
};

export const encodeSwapParams = (params: string[]) => {
  const web3 = new Web3();
  return web3.eth.abi.encodeParameters(
    ["address", "uint256", "address", "uint256"],
    params
  );
};

export const encodeTransactionData = (
  functionName: string,
  types: string[],
  data: string
) => {
  const web3 = new Web3();
  return (
    web3.eth.abi.encodeFunctionSignature(
      `${functionName}(${types.join(",")})`
    ) + data.replaceAll("0x", "")
  );
};

export const getDappIcon = (icons: string[] = []) => {
  return icons.find((ic) => !ic.endsWith(".ico"));
};

export const getFunctionNameInSwap = (
  abiFirstStepRouting: string,
  isCrossChain: boolean,
  toChainId: number
) => {
  if (abiFirstStepRouting === Config.abiLP || !isCrossChain) {
    return FunctionCall.swap;
  }
  return toChainId === Config.vChainId
    ? FunctionCall.cashIn
    : FunctionCall.cashOut;
};

export const decodeTransactionData = (data: string) => {
  const abiDecoder = new InputDataDecoder(JSON.stringify(AppAbi));
  return abiDecoder.decodeData(data);
};
