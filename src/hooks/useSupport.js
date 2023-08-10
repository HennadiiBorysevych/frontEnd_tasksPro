import { useDispatch } from 'react-redux';

import { authOperations } from '../redux/auth';

const useSupport = () => {
  const dispatch = useDispatch();

  const handleSupportSubmit = values => {
    dispatch(authOperations.updateUserHelp(values));
  };
  return { handleSupportSubmit };
};

export default useSupport;
