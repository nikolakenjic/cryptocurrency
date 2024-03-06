const exchangeRates = {
  EUR: 0.88,
  CNY: 6.35,
  GBP: 0.73,
  JPY: 113.5,
  AUD: 1.4,
  CHF: 0.92,
};

export const convertToSelectedCurrency = (priceInUSD, selectedCurrency) => {
  const currencySigns = {
    USD: '$',
    EUR: '€',
    CNY: '¥',
    GBP: '£',
    JPY: '¥',
    AUD: '$',
    CHF: 'FR',
  };

  if (selectedCurrency === 'USD') {
    return `${currencySigns[selectedCurrency]}${priceInUSD.toLocaleString()}`;
  } else if (exchangeRates[selectedCurrency]) {
    const convertedPrice = priceInUSD * exchangeRates[selectedCurrency];
    return `${
      currencySigns[selectedCurrency]
    }${convertedPrice.toLocaleString()}`;
  } else {
    return 'N/A';
  }
};
