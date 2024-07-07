import { useRef } from 'react';
import { useEffect } from 'react';
import scss from './Backdrop.module.scss';

function Backdrop({ children, onClose }) {
  const backdrop = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (event.target === event.currentTarget) onClose();
    };
    const wrapper = backdrop.current;

    wrapper.addEventListener('click', handleClickOutside);
    return () => {
      wrapper.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={backdrop} className={scss.backdrop}>
      {children}
    </div>
  );
}

export default Backdrop;
