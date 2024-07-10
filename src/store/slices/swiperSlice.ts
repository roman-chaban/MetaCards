import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
};

const swiperSlice = createSlice({
  name: 'swiper',
  initialState,
  reducers: {
    setSwiperIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setSwiperIndex } = swiperSlice.actions;
export default swiperSlice.reducer;
