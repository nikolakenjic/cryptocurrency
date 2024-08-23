import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import Spinner from './UI/Spinner';
import store from './store/store';

// Lazy load pages
const RootLayout = React.lazy(() => import('./pages/RootLayout'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const HomePage = React.lazy(() => import('./pages/HomePage-1'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const DetailPage = React.lazy(() => import('./pages/DetailPage'));

// Loaders
import { loader as detailLoader } from './pages/DetailPage';
// Actions
import { action as registerAction } from './pages/RegisterPage';
import { action as loginAction } from './pages/LoginPage';

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
      element: (
        <Suspense fallback={<Spinner />}>
          <RootLayout />
        </Suspense>
      ),
      errorElement: (
        <Suspense fallback={<Spinner />}>
          <ErrorPage />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: ':id',
          element: (
            <Suspense fallback={<Spinner />}>
              <DetailPage />
            </Suspense>
          ),
          loader: detailLoader,
        },
      ],
    },
    {
      path: 'login',
      element: (
        <Suspense fallback={<Spinner />}>
          <LoginPage />
        </Suspense>
      ),
      action: loginAction(store),
    },
    {
      path: 'register',
      element: (
        <Suspense fallback={<Spinner />}>
          <RegisterPage />
        </Suspense>
      ),
      action: registerAction,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
