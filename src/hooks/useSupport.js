import { toast } from 'react-toastify';

import useAuth from './useAuth';

const useSupport = onClose => {
  const { sendToSupport } = useAuth();

  const handleSupportSubmit = async values => {
    try {
      const response = await sendToSupport(values);

      if (response.payload && response.payload.code === 200) {
        toast.success('Email successfully sent');
      } else {
        console.error('Email sending failed. Try again later');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }

    onClose();
  };

  return { handleSupportSubmit };
};

export default useSupport;
