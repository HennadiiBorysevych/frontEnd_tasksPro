import { createSlice } from '@reduxjs/toolkit';

const userFilterSlice = createSlice({
  name: 'filters',
  initialState: {
    value: 'showAll',
  },
  reducers: {
    setUserFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectUserFilter = state => state.filters.value;
export const { setUserFilter } = userFilterSlice.actions;
export const filterReducer = userFilterSlice.reducer;
