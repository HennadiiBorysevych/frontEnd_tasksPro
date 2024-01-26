const generateToastMessage = (keysToDisplay, isAvatarLoad) => {
  const messages = [];
  if (isAvatarLoad) {
    messages.push('avatar');
  } else if (keysToDisplay.includes('name')) {
    messages.push('name');
  } else if (keysToDisplay.includes('email')) {
    messages.push('email');
  } else if (keysToDisplay.includes('newPassword')) {
    messages.push('password');
  }
  return `User ${messages.join(' and ')} successfully updated`;
};

export default generateToastMessage;
