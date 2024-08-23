import React, { Suspense, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchUrl from '../utils/axios';
import { setData, setPageData } from '../store/slices/data-slice';
import { Wrapper } from '../assets/wrappers/HomePage';
import Button from '../UI/Button';
import { setIsLoading, setIsError } from '../store/slices/app-loading-slice';
import Spinner from '../UI/Spinner';

// Lazy load components
const CryptocurrencyList = React.lazy(() =>
  import('../components/CryptocurrencyList')
);
const Error = React.lazy(() => import('../components/Error'));
const PageBtnContainer = React.lazy(() =>
  import('../components/PageBtnContainer')
);

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, currentPage } = useSelector((state) => state.data);
  const { isLoading, isError } = useSelector((state) => state.app);

  const fetchData = useCallback(async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetchUrl.get(
        `/currency?page=${currentPage}&_=${new Date().getTime()}`
      );
      dispatch(setData(response.data.data));
      dispatch(setPageData(response.data.pagination));
      dispatch(setIsLoading(false));
      dispatch(setIsError(null));
    } catch (err) {
      console.error('Error fetching data:', err);
      dispatch(setIsLoading(false));
      dispatch(setIsError(err?.response?.data?.msg || 'Something Went Wrong.'));
    }
  }, [currentPage, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRefresh = () => {
    fetchData();
  };

  if (isLoading) return <Spinner />;

  if (isError) {
    return (
      <Suspense fallback={<Spinner />}>
        <Error isError={isError} onRetry={handleRefresh} />
      </Suspense>
    );
  }

  const cryptocurrencyList = data?.map((crypto) => (
    <Suspense key={crypto.id} fallback={<Spinner />}>
      <CryptocurrencyList {...crypto} />
    </Suspense>
  ));

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
        <tbody>{cryptocurrencyList}</tbody>
      </table>

      <Suspense fallback={<Spinner />}>
        <PageBtnContainer />
      </Suspense>
    </Wrapper>
  );
};

export default HomePage;
