// User state management (user info, auth state)
import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin, refreshAccessToken, forgotPassword, changePassword } from '../actions/userActions';

const initialState = {
    user: null,
    status: 'idle',
    error: null,
    accessToken: null,
    refreshToken: null,
    successMessage: null,
    errorMessage: null,
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
           })

           // Forgot password
           .addCase(forgotPassword.pending, (state) => {
                 state.status = 'loading';
                 state.successMessage = null; // Clear any previous success message
                 state.errorMessage = null;   // Clear any previous error message
           })
           .addCase(forgotPassword.fulfilled, (state, action) => {
                 state.status = 'succeeded';
                 state.successMessage = action.payload.message || 'Password reset email sent successfully!';
                 state.errorMessage = null;
           })
           .addCase(forgotPassword.rejected, (state, action) => {
                 state.status = 'failed';
                 state.errorMessage = action.payload || 'Failed to send password reset email.';
                 state.successMessage = null;
           })

           // Change passowrd
           .addCase(changePassword.pending, (state) => {
                 state.status = 'loading';
                 state.successMessage = null; // Clear any previous success message
                 state.errorMessage = null; // Clear any previous error message
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                 state.status = 'succeeded';
                 state.successMessage = action.payload.message || 'Password changed successfully!';
                 state.errorMessage = null;
            })
            .addCase(changePassword.rejected, (state, action) => {
                 state.status = 'failed';
                 state.errorMessage = action.payload || 'Failed to change password.';
                 state.successMessage = null;
            });

      },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;