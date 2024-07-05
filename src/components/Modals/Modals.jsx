import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from '../Backdrop/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAdvertsModalOpen } from '../../redux/controls/selectros';
import { setIsAdvertsModalOpen } from '../../redux/controls/slice';
import { resetCurrentAdvert } from '../../redux/currentAdvert/slice';
import AdvertsModal from '../AdvertsModal/AdvertsModal';
import EscHandler from '../../helpers/EscHandler';

function Modals() {
  const dispatch = useDispatch();
  const isAdvertsModalOpen = useSelector(selectIsAdvertsModalOpen);

  const closeAdvertsModal = () => {
    dispatch(setIsAdvertsModalOpen(false));
    dispatch(resetCurrentAdvert());
  };

  return (
    <AnimatePresence>
      {isAdvertsModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Backdrop onClose={closeAdvertsModal}>
            <motion.div
              animate={{ scale: [1.02, 1.03, 1, 1] }}
              exit={{ scale: [1, 1.01, 1, 0.95] }}
              transition={{ duration: 0.15 }}
            >
              <AdvertsModal />
            </motion.div>
          </Backdrop>
        </motion.div>
      )}
      {isAdvertsModalOpen && (
        <EscHandler key={'onEsc'} onEsc={closeAdvertsModal} />
      )}
    </AnimatePresence>
  );
}

export default Modals;
