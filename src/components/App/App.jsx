import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/operations';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage')
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts());
  });
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
