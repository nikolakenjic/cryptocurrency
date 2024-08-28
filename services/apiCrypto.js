import NodeCache from 'node-cache';
import fetch from 'node-fetch';

const cryptoCache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

const refreshCache = async () => {
  try {
    console.log('Refreshing cache in the background...');
    const data = await fetchCryptoDataFromAPI();
    cryptoCache.set('cryptoData', data);
    console.log('Cache refreshed successfully.');
  } catch (error) {
    console.error('Failed to refresh cache:', error.message);
  }
};

const fetchCryptoDataFromAPI = async () => {
  const API_KEY_HEADERS = process.env.CMC_PRO_API_KEY;

  if (!API_KEY_HEADERS) {
    throw new Error('API key is missing');
  }

  const response = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY_HEADERS,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
};

export const fetchCryptoData = async () => {
  const cachedData = cryptoCache.get('cryptoData');

  if (cachedData) {
    setTimeout(refreshCache, 0);
    return cachedData;
  }

  const data = await fetchCryptoDataFromAPI();
  cryptoCache.set('cryptoData', data);
  return data;
};
