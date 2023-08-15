import { createSlice } from '@reduxjs/toolkit';

const userFilterSlice = createSlice({
  name: 'userFilter',
  initialState: {
    value: 'without',
  },
  reducers: {
    setUserFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectUserFilter = state => state.userFilter.value;
export const { setUserFilter } = userFilterSlice.actions;
export default userFilterSlice.reducer;
