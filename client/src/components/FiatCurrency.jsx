import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCurrency } from '../store/slices/fiat-currency-slice';
import Wrapper from '../assets/wrappers/FiatCurrency';
import { setCloseModal } from '../store/slices/ui-slice';

const FiatCurrency = () => {
  const dispatch = useDispatch();
  const { selectedCurrency } = useSelector((state) => state.currency);

  const fiatCurrencies = [
    { id: 1, symbol: '$', name: 'USD' },
    { id: 2, symbol: '€', name: 'EUR' },
    { id: 3, symbol: '¥', name: 'CNY' },
    { id: 4, symbol: '£', name: 'GBP' },
    { id: 5, symbol: '¥', name: 'JPY' },
    { id: 6, symbol: '$', name: 'AUD' },
    { id: 7, symbol: 'FR', name: 'CHF' },
  ];

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;

    dispatch(setSelectedCurrency(newCurrency));
    dispatch(setCloseModal());
  };

  return (
    <Wrapper>
      <select
        id="fiatCurrency"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        className="fiat-currency__info"
      >
        {fiatCurrencies.map((currency) => {
          return (
            <option key={currency.id} value={currency.name}>
              {currency.name} ({currency.symbol})
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default FiatCurrency;
