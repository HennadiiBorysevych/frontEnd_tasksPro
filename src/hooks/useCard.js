import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boardsOperations } from 'redux/boards';

const cardModel = {
  title: '',
  description: '',
  priority: 'Without',
  deadline: 0,
};

const useCard = (columnId, currentCard, closeModal) => {
  const initialCard = currentCard
    ? currentCard
    : { ...cardModel, deadline: new Date() };

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
    console.log('fggdf', { ...rest, cardOwner: columnId, orderTask: 0 });
    // currentCard
    //   ? dispatch(
    //       boardsOperations.updateBoard({
    //         boardId: id,
    //         updatedData: rest,
    //       })
    //     )
    //   : dispatch(boardsOperations.addBoard(rest));
    // closeModal();
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
    setCard({ title, description, priority, deadline });
  }, [deadline, description, priority, title]);

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
