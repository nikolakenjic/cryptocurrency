import { Link } from 'react-router-dom';
import logo from '../assets/images/coinmarketcap-1.svg';
import logo2 from '../assets/images/pngaaa.com-6807017.png';
import ThemeToggle from './ThemeToggle';
import Wrapper from '../assets/wrappers/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import FiatCurrency from './FiatCurrency';
import { BiMenu } from 'react-icons/bi';
import useWindowSize from '../hooks/useWindowSize';
import {
  setCloseModal,
  setOpenModal,
  setToggleMenu,
} from '../store/slices/ui-slice';

const Header = () => {
  const dispatch = useDispatch();
  const { toggleMenu, isThemeDark } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.user);
  const { width } = useWindowSize();

  if (width < 640) {
    dispatch(setToggleMenu(true));
  } else {
    dispatch(setCloseModal());
    dispatch(setToggleMenu(false));
  }

  const openModalHandler = () => {
    dispatch(setOpenModal());
  };

  return (
    <Wrapper>
      <div className="navbar__container">
        <Link to="/">
          <img
            src={isThemeDark ? logo2 : logo}
            alt="logo"
            className="logo-img"
          />
        </Link>

        <div className="navbar__container-info">
          {toggleMenu ? (
            <BiMenu
              className="navbar__container-icon"
              onClick={openModalHandler}
            />
          ) : (
            <>
              {user && <FiatCurrency />}
              <ThemeToggle />
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
