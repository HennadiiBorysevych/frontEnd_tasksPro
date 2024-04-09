export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  if (action.payload) state.error = action.payload;
};

export const generateActions = extraActions => {
  const getActions = type => extraActions.map(action => action[type]);

  return getActions;
};
