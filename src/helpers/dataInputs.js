const createInput = (
  name,
  type,
  placeholder,
  value = '',
  multiline = false
) => ({
  name,
  type,
  placeholder,
  value,
  multiline,
});

export const supportInputs = user => {
  const inputs = [
    createInput('email', 'email', user ? user?.email : 'Email address'),
    createInput('comment', 'text', 'Your comment', '', true),
  ];

  return inputs;
};

export const forgotPasswordInputs = passwordToken => {
  const emailInput = [createInput('email', 'email', 'Enter your email')];

  const passwordInputs = [
    createInput('password', 'password', 'Enter your new password'),
    createInput('verifyPassword', 'password', 'Confirm your password'),
  ];

  return !passwordToken ? emailInput : passwordInputs;
};

export const editProfileInputs = (currentUser, showPasswordConfirm) => {
  const inputs = [
    createInput('name', 'text', currentUser?.name),
    createInput('email', 'email', currentUser?.email),
    createInput('newPassword', 'password', 'Enter new password'),
  ];

  if (showPasswordConfirm) {
    inputs.push(
      createInput(
        'password',
        'password',
        'Enter your current password for confirmation'
      )
    );
  }

  return inputs;
};

export const columnInputs = currentColumn => {
  const inputs = [
    createInput(
      'title',
      'text',
      currentColumn ? currentColumn?.title : 'Title'
    ),
  ];

  return inputs;
};

export const cardInputs = currentCard => {
  const inputs = [
    createInput('title', 'text', currentCard ? currentCard?.title : 'Title'),
    createInput(
      'description',
      'text',
      currentCard ? currentCard?.description : 'Description',
      '',
      true
    ),
  ];

  return inputs;
};

export const boardInputs = currentBoard => {
  const inputs = [
    createInput('title', 'text', currentBoard ? currentBoard?.title : 'Title'),
  ];

  return inputs;
};

export const authInputs = (formDistributor, value, tabPosition) => {
  const inputs = [
    createInput('email', 'email', 'Enter your email', value),
    createInput('password', 'password', formDistributor.passText, value),
  ];

  if (tabPosition === 0) {
    inputs.unshift(createInput('name', 'text', 'Enter your name', value));
  }

  return inputs;
};
