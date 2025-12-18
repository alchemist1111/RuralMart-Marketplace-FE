// Selectors to access the relevant state
export const selectUser = (state) => state.user.user;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;
export const selectUserErrorMessage = (state) => state.user.errorMessage;
export const selectUserSuccessMessage = (state) => state.user.successMessage;
export const selectUserLoading = (state) => state.user.status === 'loading';
export const selectUserSuccess = (state) => state.user.status === 'succeeded';
export const selectUserFailure = (state) => state.user.status === 'failed';
