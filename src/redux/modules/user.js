import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
  is_login: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.is_login = true;
    },
    logout: (state, action) => {
      state.user = action.payload;
      state.is_login = false;
    },
    getUser: (state, action) => {
      state = state;
    },
  },
});

export const { login, logout, getUser } = userSlice.actions;

export default userSlice.reducer;
