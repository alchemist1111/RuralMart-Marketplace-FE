//  User-related actions (login, register, etc.)
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    'user/registerUser',
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