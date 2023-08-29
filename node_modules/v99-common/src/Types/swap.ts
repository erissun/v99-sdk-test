export type SwapCross = {
  chainIn: string;
  tokenIn: string;
  chainOut: string;
  tokenOut: string;
  addressIn?: string;
  addressOut: string;
  swapRouter: string;
}[];
