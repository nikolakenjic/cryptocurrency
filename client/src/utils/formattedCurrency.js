const exchangeRates = {
  EUR: 0.88, // 1 USD = 0.88 EUR (approximate)
  CNY: 6.35, // 1 USD = 6.35 CNY (approximate)
  GBP: 0.73, // 1 USD = 0.73 GBP (approximate)
  JPY: 113.5, // 1 USD = 113.50 JPY (approximate)
  AUD: 1.4, // 1 USD = 1.40 AUD (approximate)
  CHF: 0.92, // 1 USD = 0.92 CHF (approximatif)
};

// console.log(selectedCurrency);

export const convertToSelectedCurrency = (priceInUSD, selectedCurrency) => {
  // console.log(priceInUSD, selectedCurrency);
  const currencySigns = {
    USD: '$',
    EUR: '€',
    CNY: '¥',
    GBP: '£',
    JPY: '¥',
    AUD: '$',
    CHF: 'FR', // Swiss Franc doesn't have a symbol, so we'll use 'CHF'
    // Add more currency signs as needed
  };

  if (selectedCurrency === 'USD') {
    return `${currencySigns[selectedCurrency]}${priceInUSD.toLocaleString()}`; // No conversion needed for USD
  } else if (exchangeRates[selectedCurrency]) {
    const convertedPrice = priceInUSD * exchangeRates[selectedCurrency];
    return `${
      currencySigns[selectedCurrency]
    }${convertedPrice.toLocaleString()}`; // Convert from USD to selected currency
  } else {
    return 'N/A'; // Handle unsupported currencies
  }
};
