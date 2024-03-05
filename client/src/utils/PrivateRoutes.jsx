import DetailPage from '../pages/DetailPage';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  // const [errorDisplayed, setErrorDisplayed] = useState(false);
  console.log('private routes');

  // useEffect(() => {
  //   const auth = JSON.parse(localStorage.getItem('user'));
  //   if (!auth && !errorDisplayed) {
  //     setErrorDisplayed(true);
  //     toast.error('You must be logged in to see this route');
  //   }

  //   // Cleanup function to reset errorDisplayed state when component unmounts
  //   return () => {
  //     setErrorDisplayed(false);
  //   };
  // }, []);

  const auth = JSON.parse(localStorage.getItem('user'));

  return auth ? <DetailPage /> : <Navigate to="/" />;
};
export default PrivateRoutes;
