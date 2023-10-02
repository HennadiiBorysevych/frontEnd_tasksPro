import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { supportModel } from 'constants';

import useAuthCollector from './useAuthCollector';

const useSupport = onClose => {
  const { user, sendToSupport } = useAuthCollector();
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
  console.log(email);
  console.log(comment);
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

  return { inputs, handleInput, handleSupportSubmit };
};

export default useSupport;
