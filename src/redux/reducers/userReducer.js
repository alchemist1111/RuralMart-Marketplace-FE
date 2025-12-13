// User state management (user info, auth state)
import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin, refreshAccessToken } from '../actions/userActions';

const initialState = {
    user: null,
    status: 'idle',
    error: null,
    accessToken: null,
    refreshToken: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       setUser: (state, action) => {
          state.user = action.payload;
       },
       logout: (state) => {
          state.user = null;
          state.accessToken = null;
          state.refreshToken = null;
          localStorage.removeItem("accessToken");
          document.cookie =
                 "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
       },
    },
    extraReducers: (builder) => {
        builder
           // Register user
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
           })

           // User login
           .addCase(userLogin.pending, (state) => {
                 state.status = 'loading';
           })
           .addCase(userLogin.fulfilled, (state, action) => {
                 state.status = 'succeeded';
                 state.user = action.payload.user || action.payload;
                 state.accessToken = action.payload.accessToken || null;
                 state.refreshToken = action.payload.refreshToken || null;
           })
           .addCase(userLogin.rejected, (state, action) => {
                 state.status = 'failed';
                 state.error = action.payload;
           })
           .addCase(refreshAccessToken.fulfilled, (state, action) => {
                 state.accessToken = action.payload.accessToken || state.accessToken;
           });
    },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;