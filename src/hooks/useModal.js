import { useCallback, useEffect, useState } from 'react';

const useModal = () => {
  const [isModal, setIsModal] = useState(false);
  const [originalOverflow, setOriginalOverflow] = useState('');

  const onBackdropClick = useCallback(id => {
    if (id === 'backdrop') setIsModal(false);
  }, []);

  const onEscKeydown = useCallback(e => {
    if (e.code === 'Escape') setIsModal(false);
  }, []);

  useEffect(() => {
    const handleBodyScroll = () => {
      if (isModal) {
        setOriginalOverflow(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = originalOverflow;
      }
    };

    window.addEventListener('keydown', onEscKeydown);
    handleBodyScroll();

    return () => {
      window.removeEventListener('keydown', onEscKeydown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModal, onEscKeydown, originalOverflow]);

  const toggleModal = () => {
    setIsModal(prev => !prev);
  };

  return {
    isModal,
    toggleModal,
    onBackdropClick,
  };
};

export default useModal;
