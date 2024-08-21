import Wrapper from '../assets/wrappers/NavbarSmall';
import { setCloseModal } from '../store/slices/ui-slice';
import FiatCurrency from './FiatCurrency';
import ThemeToggle from './ThemeToggle';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiX } from 'react-icons/bi';

const NavbarSmall = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <BiX
        className="navbar-small__close"
        onClick={() => dispatch(setCloseModal())}
      />
      <ThemeToggle hoverColor="none" />
      <Link to="/" onClick={() => dispatch(setCloseModal())}>
        Home
      </Link>
      {user && <FiatCurrency />}
    </Wrapper>
  );
};

export default NavbarSmall;
