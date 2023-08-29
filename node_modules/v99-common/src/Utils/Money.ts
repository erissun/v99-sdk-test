import type { Token } from '../Models';
import type { TokenBalanceAndPrices } from '../Types';

// @ts-ignore
export const formatCurrency = (
  number: any,
  { decimals = 4, delimiter = ',', intOnly = false } = {}
) => {
  'worklet'; // require for animatednumber
  const num = intOnly ? Math.floor(number) : parseFloat(number);
  if (isNaN(num) || num === 0) {
    return '0';
  }
  const sign = num < 0 ? '-' : '';
  const abs = Math.abs(num);
  const int = Math.floor(abs);
  const dec = Math.floor((abs - int) * Math.pow(10, decimals));
  const decStr = intOnly
    ? ''
    : dec.toString().padStart(decimals, '0').replace(/0+$/, '');
  const intStr = int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
  return `${sign}${intStr}${decStr.length > 0 && !intOnly ? '.' : ''}${decStr}`;
};

export const formatInputAmount = (amount: string) => {
  const formatInt = (int: string) => {
    return int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const split = amount.split('.');
  const int = split[0];
  const dec = split[1];
  if (dec) {
    if (int === undefined) return '0';
    return `${formatInt(int)}.${dec}`;
  } else {
    const hasDot = split.length > 1;
    if (int === undefined) return '0';
    return hasDot ? `${formatInt(int)}.` : formatInt(int);
  }
};

export const getBalanceFromWalletBalance = (
  tokenBalanceAndPrices: TokenBalanceAndPrices,
  token: Token,
  calculate = (value: any) => value
) => {
  return formatCurrency(calculate(tokenBalanceAndPrices[token.id]?.balance), {
    intOnly: token.symbol === 'VNDT',
  });
};

export const getPriceFromWalletBalance = (
  tokenBalanceAndPrices: TokenBalanceAndPrices,
  token: Token
) => {
  return formatCurrency(tokenBalanceAndPrices[token?.id]?.current_price);
};

export const getAmountFromWalletBalance = (
  tokenBalanceAndPrices: TokenBalanceAndPrices,
  token: Token,
  amount: number
) => {
  if (
    !tokenBalanceAndPrices ||
    !token ||
    !amount ||
    !tokenBalanceAndPrices[token.id]
  )
    return formatCurrency(0);
  return formatCurrency(
    tokenBalanceAndPrices[token.id]!.current_price * amount
  );
};

export const getValuationFromWalletBalance = (
  tokenBalanceAndPrices: TokenBalanceAndPrices,
  token: Token
) => {
  if (!tokenBalanceAndPrices || !token || !tokenBalanceAndPrices[token.id]) {
    return formatCurrency(0);
  }
  // @ts-ignore
  return formatCurrency(
    tokenBalanceAndPrices[token.id]!.balance *
      tokenBalanceAndPrices[token.id]!.current_price
  );
};

export const getPriceChange24h = (
  tokenBalanceAndPrices: TokenBalanceAndPrices,
  token: Token
): { isNegative: any; priceChange24h: string } => {
  const priceChange24h = tokenBalanceAndPrices[token?.id]?.price_change_24h;
  if (priceChange24h === 1) {
    return { priceChange24h: '', isNegative: null };
  }
  return {
    priceChange24h: formatCurrency(priceChange24h, { decimals: 1 }) + '%',
    isNegative: priceChange24h && priceChange24h < 0,
  };
};

export const validateAmount = (amount: string) => {
  const regex = /^\d+(\.\d+)?$/;
  return regex.test(amount);
};
