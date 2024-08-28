import NodeCache from 'node-cache';

const cryptoCache = new NodeCache({ stdTTL: 300 });

export const fetchCryptoData = async () => {
  const API_KEY_HEADERS = process.env.CMC_PRO_API_KEY;

  if (!API_KEY_HEADERS) {
    throw new Error('API key is missing');
  }

  const cachedData = cryptoCache.get('cryptoData');

  if (cachedData) {
    return cachedData;
  }

  try {
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

    const data = await response.json();
    cryptoCache.set('cryptoData', data);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
