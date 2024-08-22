import { StatusCodes } from 'http-status-codes';

const fetchAllCryptoData = async () => {
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

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

export const getAllData = async (req, res, next) => {
  try {
    const allData = await fetchAllCryptoData();

    const { page: currentPage } = req.query;
    const page = parseInt(currentPage) || 1;
    const limit = 10;

    const totalCount = allData.data.length;

    const totalPages = Math.ceil(totalCount / limit);

    const startIndex = (page - 1) * limit;

    const data = allData.data.slice(startIndex, startIndex + limit);

    const pagination = {
      page,
      totalPages,
      totalCount,
    };

    const responseData = {
      data,
      pagination,
    };

    res.status(StatusCodes.OK).json(responseData);
  } catch (error) {
    console.error('Error:', error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const getSingleData = async (req, res, next) => {
  const { id } = req.params;
  const API_KEY_HEADERS = process.env.CMC_PRO_API_KEY;

  try {
    const response = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        headers: {
          'X-CMC_PRO_API_KEY': API_KEY_HEADERS,
        },
      }
    );
    const data = await response.json();

    const singleData = data.data.find((item) => item.id === Number(id));

    if (!singleData) {
      return res.status(404).json({ error: 'Data not found' });
    }

    res.json(singleData);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
};
