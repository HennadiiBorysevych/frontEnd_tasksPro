import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectTheme } from 'redux/auth/authSelectors';

import { authOperations } from '../redux/auth';

const useSupport = onClose => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(selectTheme);
  const toastTheme = selectedTheme === 'Dark' ? 'dark' : 'light';
  const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: toastTheme,
  };
  const handleSupportSubmit = async values => {
    try {
      const response = await dispatch(authOperations.updateUserHelp(values));

      if (response.payload && response.payload.code === 200) {
        toast.success('Email successfully sent', toastConfig);
      } else {
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }

    onClose();
  };

  return { handleSupportSubmit };
};

export default useSupport;
