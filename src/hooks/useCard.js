import { useCallback, useEffect, useState } from 'react';

import useCardsCollector from './useCardsCollector';

const cardModel = {
  title: '',
  description: '',
  priority: 'Without',
  deadline: '',
};

const useCard = (columnId, cardIndex, currentCard, closeModal) => {
  const { addNewCard, updateExistingCard } = useCardsCollector();
  const initialCard = currentCard
    ? getFormattedCard(currentCard)
    : {
        ...cardModel,
        deadline: new Date(),
        cardOwner: columnId,
        orderTask: cardIndex,
      };

  const [title, setTitle] = useState(initialCard?.title);
  const [description, setDescription] = useState(initialCard?.description);
  const [priority, setPriority] = useState(initialCard?.priority);
  const [deadline, setDeadline] = useState(initialCard?.deadline);
  const [card, setCard] = useState(initialCard);

  const handleCardSubmit = () => {
    const { id, createdAt, order, updatedAt, ...rest } = card;

    if (currentCard) {
      updateExistingCard({
        taskId: id,
        updatedData: { orderTask: order, ...rest },
      });
    } else {
      addNewCard(rest);
    }

    closeModal();
  };

  const handleInput = useCallback(e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  }, []);

  const handlePriority = value => {
    setPriority(value);
  };

  useEffect(() => {
    setCard(prev => ({ ...prev, title, description, priority, deadline }));
  }, [deadline, description, priority, title]);

  function getFormattedCard(card) {
    const { order, ...rest } = card;
    return { ...rest, orderTask: order };
  }

  return {
    priority,
    deadline,
    setDeadline,
    handleInput,
    handlePriority,
    handleCardSubmit,
  };
};

export default useCard;
