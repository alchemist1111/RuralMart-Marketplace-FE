// User state management (user info, auth state)
import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../actions/userActions';
import { LOGIN, LOGOUT, REGISTER, SET_USER } from '../types/userTypes';

const initialState = {
    user: null,
    status: 'idle',
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       [SET_USER]: (state, action) => {
          state.user = action.payload;
       },
       [LOGOUT]: (state) => {
          state.user = null;
       },
    },
    extraReducers: (builder) => {
        builder
           .addCase(registerUser.pending, (state) => {
                 state.status = 'loading';
           })
           .addCase(registerUser.fulfilled, (state, action) => {
                 state.status = 'succeeded';
                 state.user = action.payload;
           })
           .addCase(registerUser.rejected, (state, action) => {
                 state.status = 'failed';
                 state.error = action.payload;
           });
    },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;