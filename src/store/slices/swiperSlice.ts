import { createSlice } from '@reduxjs/toolkit'
import { Swiper } from 'swiper'

export interface SwiperState {
  swiperRef: Swiper | null
}

const initialState: SwiperState = {
  swiperRef: null
}

export const swiperSlice = createSlice({
  name: 'swiper',
  initialState,
  reducers: {
    setSwiperRef: (state, action) => {
      state.swiperRef = action.payload
    },
    slideNext: state => {
      if (state.swiperRef) {
        state.swiperRef.slideNext()
      }
    },
    slidePrev: state => {
      if (state.swiperRef) {
        state.swiperRef.slidePrev()
      }
    }
  }
})

export const { setSwiperRef, slideNext, slidePrev } = swiperSlice.actions
export default swiperSlice.reducer
