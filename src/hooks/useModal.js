import { useEffect, useState } from 'react';

const useModal = () => {
  const [isModal, setIsModal] = useState(false);
  const [activeChildren, setActiveChildren] = useState(null);
  const [originalOverflow, setOriginalOverflow] = useState('');

  const onBackdropClick = id => {
    if (id === 'backdrop') setIsModal(false);
  };

  const onEscKeydown = e => {
    if (e.code === 'Escape') {
      setIsModal(false);
    }
  };

  const toggleModal = name => {
    if (name) {
      setActiveChildren(name);
    }
    setIsModal(prev => !prev);
  };

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
  }, [isModal, originalOverflow]);

  return {
    isModal,
    toggleModal,
    onBackdropClick,
    activeChildren,
  };
};

export default useModal;
