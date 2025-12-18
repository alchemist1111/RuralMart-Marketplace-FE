//  User-related actions (login, register, etc.)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REGISTER, FORGOT_PASSWORD, CHANGE_PASSWORD } from '../types/userTypes';
import { LOGIN } from '../types/userTypes';
import {ACCESS_TOKEN_REFRESH} from '../types/userTypes';

// User registration
export const registerUser = createAsyncThunk(
    REGISTER,
    async(userData, thunkAPI) => {
       try {
          // Register API call
          const response = await fetch('/api/register', {
              method: 'POST',
              headers: {
                 'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
          });

          if (!response.ok) {
            throw new Error('Registration failed');
          }

          const data = await response.json();
          return data; // You can return a user object here
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        } 
    }
);


// User login
export const userLogin = createAsyncThunk(
    LOGIN,
    async(userData, thunkAPI) => {
        try {
            // Login API call
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(userData),
            });

            if(!response.ok) {
                throw new Error('Login failed.');
            }

            const data = await response.json();

            const { accessToken, refreshToken } = data;

            if(accessToken) {
                localStorage.setItem('accessToken', accessToken); // Store in local storage
            }

            if(refreshToken) {
                // Store the refresh token in an HTTP-only cookie
                document.cookie = `refreshToken=${refreshToken}; path=/; secure; HttpOnly`;
            }

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


// Access token refresh
export const refreshAccessToken = createAsyncThunk(
  ACCESS_TOKEN_REFRESH,
  async (_, thunkAPI) => {
    try {
      // Get the refresh token from the HTTP-only cookie
      const refreshToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('refreshToken='))
        ?.split('=')[1];

      if (!refreshToken) {
        throw new Error('Refresh token not found');
      }

      // Send the refresh token to the backend to get a new access token
      const response = await fetch('/api/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }

      const data = await response.json();

      const { accessToken } = data;

      if (accessToken) {
        // Store the new access token
        localStorage.setItem('accessToken', accessToken);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Forgot password
export const forgotPassword = createAsyncThunk(
  FORGOT_PASSWORD,
  async (email, thunkAPI) => {
    try {
      // Forgot password API call
      const response = await fetch('/api/forgot_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({email})
      });

      // Check if the response is successful
      if(!response.ok) {
        // If the response is not OK, throw an error
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong!');
      }

      // Return the response data if the API call was successful
      const data = await response.json();
      return data;
    } catch (error) {
      // Return the error message if there was an issue with the API call
      return thunkAPI.rejectWithValue(error.message || 'Unknown error');
    }
  }
);


// Change password
export const changePassword = createAsyncThunk(
  CHANGE_PASSWORD,
  async ({password, token}, thunkAPI) => {
    try {
      // Change password API call
      const response = await fetch('/api/change_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ password, token }),

      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to change password');
      }

      const data = await response.json();
      return data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Unknown error');
    }
  }

);