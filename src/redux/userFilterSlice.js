import { createSlice } from '@reduxjs/toolkit';
const userFilterSlice = createSlice({
  name: 'userFilter',
  initialState: '', 
  reducers: {
    setUserFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const selectUserFilter = (state) => state.userFilter;
export const { setUserFilter } = userFilterSlice.actions;
export default userFilterSlice.reducer;

