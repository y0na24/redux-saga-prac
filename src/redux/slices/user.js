import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    }
  }
})

export const { reducer: userReducer, actions: userActions } = userSlice
