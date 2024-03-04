import { createSlice } from "@reduxjs/toolkit";

// Load user state from localStorage if available
const initialState = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState"))
  : { isAuthenticated: false };

const UserSlice = createSlice({
  name: "Users",
  initialState: initialState,
  reducers: {
    logIn(state, action) {
      // Update the state with user information
      const newState = { ...state, ...action.payload, isAuthenticated: true };
      // Save the updated state to localStorage
      localStorage.setItem("userState", JSON.stringify(newState));
      return newState;
    },
    logOut(state, action) {
      // Reset the state to an empty object
      localStorage.removeItem("userState"); // Remove the user state from localStorage
      return { isAuthenticated: false };
    },
    updateUser(state, action) {
      // Update the state with the new user information
      const newState = { ...state, ...action.payload };
      // Save the updated state to localStorage
      localStorage.setItem("userState", JSON.stringify(newState));
      return newState;
    },
  },
});

export { UserSlice };
export const { logIn, logOut, updateUser } = UserSlice.actions;
