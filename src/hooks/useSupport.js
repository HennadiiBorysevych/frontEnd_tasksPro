import { useDispatch } from 'react-redux';

import { authOperations } from '../redux/auth';

const useSupport = onClose => {
  const dispatch = useDispatch();

  const handleSupportSubmit = values => {
    dispatch(authOperations.updateUserHelp(values));
    onClose();
  };
  return { handleSupportSubmit };
};

export default useSupport;
