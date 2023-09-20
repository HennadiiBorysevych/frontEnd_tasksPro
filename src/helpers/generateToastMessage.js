const generateToastMessage = (keysToDisplay, isAvatarLoad) => {
  const messages = [];
  if (isAvatarLoad) {
    messages.push('avatar');
  }
  if (keysToDisplay.includes('name')) {
    messages.push('name');
  }
  if (keysToDisplay.includes('email')) {
    messages.push('email');
  }
  if (keysToDisplay.includes('newPassword')) {
    messages.push('password');
  }
  return `User ${messages.join(' and ')} successfully updated`;
};

export default generateToastMessage;
