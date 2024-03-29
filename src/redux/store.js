import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './slices/counter'
import { postsReducer } from './slices/posts'
import { combineReducers } from 'redux'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './slices/user'

export const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
  user: userReducer
})

const sagaMiddleware = createSagaMiddleware()

const createStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    devTools: true
  })

export const store = createStore()

sagaMiddleware.run(rootSaga)
