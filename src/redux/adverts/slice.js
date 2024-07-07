import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isLastPage = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    isLoading: false,
    isLastPage: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = state.adverts.concat(action.payload);
        state.error = null;
        if (action.payload.length < 4) {
          state.isLastPage = true;
        }
      })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export default slice.reducer;
