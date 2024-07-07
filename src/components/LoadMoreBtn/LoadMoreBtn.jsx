import { useDispatch, useSelector } from 'react-redux';
import scss from './LoadMoreBtn.module.scss';
import { selectPage } from '../../redux/filter/selectors';
import { setPage } from '../../redux/filter/slice';

function LoadMoreBtn() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <button className={scss.btn} onClick={handleLoadMore}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
