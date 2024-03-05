import ReactDOM from 'react-dom';
import Backdrop from '../UI/Backdrop';
import NavbarSmall from './NavbarSmall';

const HeaderModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <NavbarSmall />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default HeaderModal;
