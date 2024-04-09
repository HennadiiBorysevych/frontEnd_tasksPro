import requestTemplate from '../services/requestTemplate';

export const fetchBoards = requestTemplate(
  'boards/fetchAll',
  '/api/boards',
  'get',
  'data'
);

export const getBoard = requestTemplate(
  'boards/getBoard',
  '/api/boards/:id',
  'get',
  'board'
);

export const addBoard = requestTemplate(
  'boards/addBoard',
  '/api/boards',
  'post',
  'data'
);

export const updateBoard = requestTemplate(
  'boards/updateBoard',
  '/api/boards/:boardId',
  'patch',
  'data'
);

export const deleteBoard = requestTemplate(
  'boards/deleteBoard',
  '/api/boards/:id',
  'delete',
  'data'
);
