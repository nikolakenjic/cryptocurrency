import { useDispatch, useSelector } from 'react-redux';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { themeDarkToggle } from '../store/slices/ui-slice';
import Wrapper from '../assets/wrappers/ThemeToggle';

const ThemeToggle = ({ hoverColor }) => {
  const dispatch = useDispatch();
  const { isThemeDark } = useSelector((state) => state.ui);

  const themeToggleHandler = () => {
    dispatch(themeDarkToggle());
  };

  return (
    <Wrapper onClick={themeToggleHandler} color={hoverColor}>
      {isThemeDark ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
