import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// import { Loader } from './Loader';
import Layout from 'layout/Layout';
import { HomePage } from 'pages/HomePage';
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="catalog"
          element={
            <Suspense>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="favorites"
          element={
            <Suspense>
              <FavoritesPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
