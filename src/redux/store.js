import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './slices/counter'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  counter: counterReducer
})

const createStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  })

export const store = createStore()
