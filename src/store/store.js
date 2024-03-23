import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice'
import { useSelector, useDispatch } from 'react-redux'


export const store = configureStore({
  reducer: {
    home : homeSlice
  },
});