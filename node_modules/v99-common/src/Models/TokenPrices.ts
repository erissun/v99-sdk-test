export class TokenPrices {
  [coingeckoId: string]: {
    current_price: { [key: string]: number };
    price_change_24h: { [key: string]: number };
  };
  constructor(data: any) {
    Object.keys(data).forEach((coingeckoId) => {
      const current_price: { [key: string]: number } = {};
      const price_change_24h: { [key: string]: number } = {};
      Object.keys(data[coingeckoId]).forEach((valueKey) => {
        if (valueKey.includes('_24h_change')) {
          price_change_24h[valueKey.replace('_24h_change', '')] =
            data[coingeckoId][valueKey];
        } else {
          current_price[valueKey] = data[coingeckoId][valueKey];
        }
      });
      this[coingeckoId] = {
        current_price,
        price_change_24h,
      };
    });
  }
}
