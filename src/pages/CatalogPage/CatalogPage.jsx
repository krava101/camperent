import Modals from '../../components/Modals/Modals';
import scss from './CatalogPage.module.scss';
import Filters from '../../components/Filters/Filters';
import Catalog from '../../components/Catalog/Catalog';

function CatalogPage() {
  return (
    <main className={scss.catalogPage}>
      <Filters />
      <Catalog />
      <Modals />
    </main>
  );
}

export default CatalogPage;
