import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [] },
  reducers: {
    getProducts: {
      reducer: (state, action) => {
        state.items = [state.items];
      },
    },
  },
});

export const productsReducer = productsSlice.reducer;
