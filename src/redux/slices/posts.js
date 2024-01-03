import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: []
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    getUsersAndPosts: (state) => {}
  }
})

export const { reducer: postsReducer, actions: postsActions } = postsSlice
