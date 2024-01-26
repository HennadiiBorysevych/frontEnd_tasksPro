import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthRedux } from 'redux/services';

import { supportModel } from 'constants';

const useSupport = onClose => {
  const { user, sendToSupport } = useAuthRedux();
  const [email, setEmail] = useState(supportModel.email);
  const [comment, setComment] = useState(supportModel.comment);

  const handleInput = useCallback(e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'comment':
        setComment(value);
        break;
      default:
        break;
    }
  }, []);

  const handleSupportSubmit = async values => {
    try {
      const response = await sendToSupport(values);

      if (response.payload && response.payload.code === 200) {
        toast.success('Email has sent successfully');
      } else {
        toast.error('Email sending failed. Try again later');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }

    onClose();
  };

  const inputs = [
    {
      name: 'email',
      type: 'email',
      placeholder: user ? user?.email : 'Email address',
    },
    {
      name: 'comment',
      type: 'text',
      placeholder: 'Your comment',
      multiline: true,
    },
  ];

  return { email, comment, inputs, handleInput, handleSupportSubmit };
};

export default useSupport;
