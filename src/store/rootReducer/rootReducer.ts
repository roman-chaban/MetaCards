import { combineReducers } from 'redux'
import { swiperSlice } from '../slices/swiperSlice'
import { store } from '../store'

const rootReducer = combineReducers({
  swiperSlice: swiperSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>
export default rootReducer
