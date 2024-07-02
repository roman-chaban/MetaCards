import { combineReducers } from 'redux'
import { sliderSlice } from '../slices/sliderSlice'

const rootReducer = combineReducers({
  sliderSlice: sliderSlice
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
