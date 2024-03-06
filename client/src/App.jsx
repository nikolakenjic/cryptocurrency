import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  ErrorPage,
  HomePage,
  LoginPage,
  RegisterPage,
  RootLayout,
} from './pages';
import store from './store/store';

// Loaders
import { loader as detailLoader } from './pages/DetailPage';
// Action
import { action as registerAction } from './pages/RegisterPage';
import { action as loginAction } from './pages/LoginPage';
import DetailPage from './pages/DetailPage';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);

  return isDarkTheme;
};

checkDefaultTheme();

const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: ':id',
          element: <DetailPage />,
          loader: detailLoader,
        },
      ],
    },
    { path: 'login', element: <LoginPage />, action: loginAction(store) },
    { path: 'register', element: <RegisterPage />, action: registerAction },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
