export const fetchCryptoData = async () => {
  const API_KEY_HEADERS = process.env.CMC_PRO_API_KEY;

  if (!API_KEY_HEADERS) {
    throw new Error('API key is missing');
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

    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
