import { useCallback, useEffect, useState } from 'react';

import useCards from './useCards';

const cardModel = {
  title: '',
  description: '',
  priority: 'without',
  deadline: 0,
};

const useCard = (columnId, cardIndex, currentCard, closeModal) => {
  const { addNewCard, updateExistingCard } = useCards();
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
  const [titleChecker, seTitleChecker] = useState(false);
  const [descriptionChecker, setDescriptionChecker] = useState(false);

  const handleCardSubmit = e => {
    e.preventDefault();

    if (title === '' && !currentCard) {
      seTitleChecker(true);
      setTimeout(() => {
        seTitleChecker(false);
      }, 2000);
      return;
    }
    if (description === '' && !currentCard) {
      setDescriptionChecker(true);
      setTimeout(() => {
        setDescriptionChecker(false);
      }, 2000);
      return;
    }
    const { id, createdAt, order, updatedAt, ...rest } = card;

    currentCard
      ? updateExistingCard({
          taskId: id,
          updatedData: { orderTask: order, ...rest },
        })
      : addNewCard(rest);
    console.log('Add');

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
    descriptionChecker,
    titleChecker,
    handleCardSubmit,
  };
};

export default useCard;
