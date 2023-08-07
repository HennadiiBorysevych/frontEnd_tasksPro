import { useEffect, useState } from 'react';

const useModal = () => {
  const [isModal, setIsModal] = useState(false);
  const [activeChildren, setActiveChildren] = useState(null);

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
    window.addEventListener('keydown', onEscKeydown);
    return () => {
      window.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  return { isModal, toggleModal, onBackdropClick, activeChildren };
};

export default useModal;
