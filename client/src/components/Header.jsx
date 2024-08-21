import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Header';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button';
import { logoutUser } from '../store/slices/user-slice';
import fetchUrl from '../utils/axios';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const logoutUserHandler = async () => {
    navigate('/');
    dispatch(logoutUser());
    await fetchUrl.get('/auth/logout');
  };

  return (
    <Wrapper>
      <div className="header__container">
        {user ? (
          <div className="header__container-user">
            <p>
              Hello, <span>{user.username}</span>
            </p>
            <Button
              type="button"
              btnName="Logout"
              onClick={logoutUserHandler}
            />
          </div>
        ) : (
          <div className="header__container-links">
            <Link to="/login">Sign In</Link>
            <Link to="/register">Create Account</Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
