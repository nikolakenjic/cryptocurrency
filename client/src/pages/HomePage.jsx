import fetchUrl from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { setData, setPageData } from '../store/slices/data-slice';
import { Wrapper } from '../assets/wrappers/HomePage';
import Button from '../UI/Button';
import { CryptocurrencyList, Error, PageBtnContainer } from '../components';
import { setIsLoading, setIsError } from '../store/slices/app-loading-slice';
import Spinner from '../UI/Spinner';

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, currentPage } = useSelector((state) => state.data);
  const { isLoading, isError } = useSelector((state) => state.app);

  const fetchData = useCallback(async () => {
    dispatch(setIsLoading(true));
    dispatch(setIsError(null));

    try {
      const response = await fetchUrl.get(
        `/currency?page=${currentPage}&_=${new Date().getTime()}`
      );

      dispatch(setData(response.data.data));
      dispatch(setPageData(response.data.pagination));
    } catch (err) {
      console.error('Error fetching data:', err);
      dispatch(setIsError(err?.response?.data?.msg || 'Something Went Wrong.'));
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [currentPage, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 0);

    return () => clearTimeout(timer);
  }, [fetchData]);

  const handleRefresh = () => {
    fetchData();
  };

  if (isLoading) return <Spinner />;
  if (isError) return <Error isError={isError} onRetry={handleRefresh} />;

  return (
    <Wrapper>
      <div className="main__container-title">
        <h2>Cryptocurrency List</h2>
        <Button
          onClick={handleRefresh}
          type="button"
          btnName="Refresh Data"
          disabled={isLoading}
        />
      </div>

      <table className="crypto-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24 Hour Change</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((crypto) => (
              <CryptocurrencyList key={crypto.id} {...crypto} />
            ))}
        </tbody>
      </table>

      <PageBtnContainer />
    </Wrapper>
  );
};

export default HomePage;
