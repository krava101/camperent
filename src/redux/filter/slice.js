import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    page: 1,
    type: '',
    equipment: [],
    location: '',
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setFilters(state, action) {
      state.type = action.payload.type;
      state.equipment = action.payload.equipment;
      state.location = action.payload.location;
    },
  },
});

export const { setPage, setFilters } = slice.actions;

export default slice.reducer;
