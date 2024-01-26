import { useCallback, useEffect, useState } from 'react';
import { useCardsRedux } from 'redux/services';

import { cardModel } from 'constants';

const useCard = (columnId, cardIndex, currentCard, closeModal) => {
  const { addNewCard, updateExistingCard } = useCardsRedux();
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

  useEffect(() => {
    setCard(prev => ({ ...prev, title, description, priority, deadline }));
  }, [deadline, description, priority, title]);

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

  const handleCardSubmit = () => {
    const hasChanges =
      title !== currentCard?.title ||
      description !== currentCard?.description ||
      priority !== currentCard?.priority ||
      deadline !== currentCard?.deadline;

    if (hasChanges) {
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
    }
  };

  function getFormattedCard(card) {
    const { order, ...rest } = card;
    return { ...rest, orderTask: order };
  }

  const inputs = [
    {
      name: 'title',
      type: 'text',
      placeholder: currentCard ? currentCard?.title : 'Title',
    },
    {
      name: 'description',
      type: 'text',
      placeholder: currentCard ? currentCard?.description : 'Description',
      multiline: true,
    },
  ];

  return {
    inputs,
    priority,
    deadline,
    setDeadline,
    handleInput,
    handlePriority,
    handleCardSubmit,
  };
};

export default useCard;
