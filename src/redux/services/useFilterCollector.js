import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserFilter, setUserFilter } from '../userFilterSlice';

const useFilterCollector = () => {
  const userFilter = useSelector(selectUserFilter);

  const dispatch = useDispatch();

  const updateFilter = useCallback(
    value => dispatch(setUserFilter(value)),
    [dispatch]
  );

  return {
    userFilter,
    updateFilter,
  };
};

export default useFilterCollector;
