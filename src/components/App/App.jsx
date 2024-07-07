import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/operations';
import { selectPage } from '../../redux/filter/selectors';

import Navigation from '../Navigation/Navigation';
import MainLoader from '../MainLoader/MainLoader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage')
);

function App() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [page, dispatch]);

  return (
    <>
      <Navigation />
      <Suspense fallback={<MainLoader />}>
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
