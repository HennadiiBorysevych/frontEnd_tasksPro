import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cardOperations } from 'redux/tasks';

const cardModel = {
  title: '',
  description: '',
  priority: 'Without',
  deadline: 0,
};

const useCard = (columnId, cardIndex, currentCard, closeModal) => {
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

  const dispatch = useDispatch();

  const handleCardSubmit = () => {
    if (title === '' && !currentCard) {
      seTitleChecker(true);
      setTimeout(() => {
        seTitleChecker(false);
      }, 500);
      return;
    }

    const { id, ...rest } = card;

    currentCard
      ? dispatch(
          cardOperations.updateTask({
            taskId: id,
            updatedData: rest,
          })
        )
      : dispatch(cardOperations.addTask(rest));

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
    titleChecker,
    handleCardSubmit,
  };
};

export default useCard;
