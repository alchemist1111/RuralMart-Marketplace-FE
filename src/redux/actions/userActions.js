//  User-related actions (login, register, etc.)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { REGISTER } from '../types/userTypes';
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
                throw new error('Login failed.');
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
