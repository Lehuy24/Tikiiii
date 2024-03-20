import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slides/counterslides'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})