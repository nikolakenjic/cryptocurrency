import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';
import { useSelector } from 'react-redux';
import HeaderModal from '../components/HeaderModal';

const RootLayout = () => {
  const { openModal } = useSelector((state) => state.ui);

  return (
    <>
      <Header />
      <Navbar />
      {openModal && <HeaderModal />}
      <Outlet />
    </>
  );
};

export default RootLayout;
