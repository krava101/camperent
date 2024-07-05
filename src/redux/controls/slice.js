import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'controls',
  initialState: {
    isAdvertsModalOpen: false,
  },
  reducers: {
    setIsAdvertsModalOpen(state, action) {
      state.isAdvertsModalOpen = action.payload;
    },
  },
});

export const { setIsAdvertsModalOpen } = slice.actions;

export default slice.reducer;
