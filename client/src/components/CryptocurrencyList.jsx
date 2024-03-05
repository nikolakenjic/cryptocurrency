import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { convertToSelectedCurrency } from '../utils/formattedCurrency';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CryptocurrencyList = ({
  id,
  cmc_rank,
  name,
  symbol,
  quote: {
    USD: { price, percent_change_24h },
  },
}) => {
  const navigate = useNavigate();
  const { selectedCurrency } = useSelector((state) => state.currency);

  const formattedPercentChange = percent_change_24h.toFixed(3);

  const positiveStyle = { color: 'green' };
  const negativeStyle = { color: 'red' };

  const ArrowUpIcon = <FaArrowUp style={positiveStyle} />;
  const ArrowDownIcon = <FaArrowDown style={negativeStyle} />;

  const icon = percent_change_24h > 0 ? ArrowUpIcon : ArrowDownIcon;
  const style = percent_change_24h > 0 ? positiveStyle : negativeStyle;

  const formattedPrice = convertToSelectedCurrency(price, selectedCurrency);

  const handleRowClick = () => {
    navigate(`/${id}`);
  };

  return (
    <tr key={crypto.id} className="crypto-row" onClick={handleRowClick}>
      <td>{cmc_rank}</td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{formattedPrice}</td>
      <td style={style}>
        {icon} {formattedPercentChange}%
      </td>
    </tr>
  );
};

export default CryptocurrencyList;
