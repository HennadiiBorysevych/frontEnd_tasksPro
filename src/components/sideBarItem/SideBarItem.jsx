import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import boardSelectors from 'redux/boards/boardSelectors';

import operations from 'redux/boards/boardOperations';

const SideBarItem = ({ id, iconName, title }) => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  // const boardData = useSelector(boardSelectors.selectOneBoard(boardId));

  // console.log(boardId);

  const handleRemove = () => {
    console.log(`remove`, id);
    dispatch(operations.deleteBoard(id));
  };

  return (
    <NavLink to={`/home/${id}`}>
      <span>{iconName}</span>
      <div>{title}</div>

      <button type="button"></button>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </NavLink>
  );
};

export default SideBarItem;
