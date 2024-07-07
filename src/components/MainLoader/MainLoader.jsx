import { TailSpin } from 'react-loader-spinner';
import scss from './MainLoader.module.scss';

function MainLoader() {
  return (
    <TailSpin
      visible={true}
      height="40"
      width="40"
      color="#e44848"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass={scss.loader}
    />
  );
}

export default MainLoader;
