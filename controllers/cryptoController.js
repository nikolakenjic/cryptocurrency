import { StatusCodes } from 'http-status-codes';
import { fetchCryptoData } from '../services/apiCrypto.js';

export const getAllData = async (req, res, next) => {
  try {
    const allData = await fetchCryptoData();

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

    res.status(StatusCodes.OK).json({ data, pagination });
  } catch (error) {
    console.error('Error:', error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const getSingleData = async (req, res, next) => {
  const { id } = req.params;

  try {
    const allData = await fetchCryptoData();

    const singleData = allData.data.find((item) => item.id === Number(id));

    if (!singleData) {
      return res.status(404).json({ error: 'Data not found' });
    }

    res.json(singleData);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
};
