import { useCallback } from 'react';
import { toast } from 'react-toastify';
import CheckRegLog from '../components/CheckRegLog';
import { redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchUrl from '../utils/axios';
import { setData } from '../store/slices/data-slice';
import { convertToSelectedCurrency } from '../utils/formattedCurrency';
import Wrapper from '../assets/wrappers/DetailPage';
import Button from '../UI/Button';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { setIsLoading, setIsError } from '../store/slices/app-loading-slice';

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, currentPage } = useSelector((state) => state.data);
  const { selectedCurrency } = useSelector((state) => state.currency);
  const { isLoading, isError } = useSelector((state) => state.app);

  const cryptocurrency = data.find((crypto) => crypto.id === Number(id));

  const {
    cmc_rank,
    name,
    symbol,
    quote: {
      USD: {
        price,
        volume_24h,
        market_cap,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
      },
    },
    total_supply,
    circulating_supply,
  } = cryptocurrency;

  if (!cryptocurrency) {
    return (
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2>cryptocurrency {id} Not Found!</h2>
        <p>Selected Another value...</p>
      </div>
    );
  }

  const fetchData = useCallback(async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetchUrl.get(`/currency?page=${currentPage}`);

      dispatch(setData(response.data.data));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.error('Error fetching data:', err);
      dispatch(setIsLoading(true));
      dispatch(setIsError(err?.response?.data?.msg || 'Something went wrong'));
    }
  }, [currentPage, dispatch]);

  const handleRefresh = () => {
    fetchData();
  };

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '7rem' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center', marginTop: '7rem' }}>
        <h2>{isError}</h2>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="detail__container">
        <section className="detail__container-section">
          <div className="row">
            <span className="detail__container-title">Rank:</span>
            <span>{cmc_rank}</span>
          </div>
          <div className="row">
            <span className="detail__container-title">Name:</span>
            <span>{name}</span>
          </div>
          <div className="row">
            <span className="detail__container-title">Symbol:</span>
            <span>{symbol}</span>
          </div>
          <div className="row">
            <span className="detail__container-title">Price:</span>
            <span>{convertToSelectedCurrency(price, selectedCurrency)}</span>
          </div>
        </section>

        <section className="detail__container-section">
          <div className="detail__container-info">
            <div className="row">
              <span className="detail__container-title">Market Cap:</span>
              <span className="value">
                {convertToSelectedCurrency(market_cap, selectedCurrency)}
              </span>
            </div>
            <div className="row">
              <span className="detail__container-title">24h Volume:</span>
              <span className="value">
                {convertToSelectedCurrency(volume_24h, selectedCurrency)}
              </span>
            </div>
          </div>
        </section>
      </div>

      <section className="detail__container-section">
        <div className="row">
          <span className="detail__container-title">1h Change:</span>
          <span style={{ color: percent_change_1h > 0 ? 'green' : 'red' }}>
            {percent_change_1h > 0 ? <FaArrowUp /> : <FaArrowDown />}{' '}
            {percent_change_1h}%
          </span>
        </div>

        <div className="row">
          <span className="detail__container-title">24h Change:</span>
          <span style={{ color: percent_change_24h > 0 ? 'green' : 'red' }}>
            {percent_change_24h > 0 ? <FaArrowUp /> : <FaArrowDown />}{' '}
            {percent_change_24h}%
          </span>
        </div>
        <div className="row">
          <span className="detail__container-title">7d Change:</span>
          <span style={{ color: percent_change_7d > 0 ? 'green' : 'red' }}>
            {percent_change_7d > 0 ? <FaArrowUp /> : <FaArrowDown />}{' '}
            {percent_change_7d}%
          </span>
        </div>

        <div className="row">
          <span className="detail__container-title">Available supply:</span>
          <span>{circulating_supply.toLocaleString()}</span>{' '}
          <span>{symbol}</span>
        </div>

        <div className="row">
          <span className="detail__container-title">Total supply:</span>
          <span>{total_supply.toLocaleString()}</span> <span>{symbol}</span>
        </div>
      </section>

      <div className="detail__container-links">
        <Button type="button" onClick={handleRefresh} btnName="Refresh Data" />
        <CheckRegLog checkText="Back to" route="" routeName="Home" />
      </div>
    </Wrapper>
  );
};

export default DetailPage;

export const loader = async () => {
  try {
    const { data } = await fetchUrl.get('/users/current-user');

    return data;
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return redirect('/');
  }
};
