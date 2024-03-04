import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async action creator for removing an item from the cart
export const removeItemAsync = createAsyncThunk(
  "cart/removeItemAsync",
  async (itemId, { rejectWithValue }) => {
    try {
      // Make DELETE request to your backend API
      // await axios.delete(`http://localhost:5000/api/cart/delete/${itemId}`);
      await axios.delete(
        `https://simsun-backend.onrender.com/api/cart/delete/${itemId}`
      );
      return itemId; // Return itemId if deletion is successful
    } catch (error) {
      // Return error message if deletion fails
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Define cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // Your other reducers
  },
  extraReducers: {
    // Handling removeItemAsync fulfilled action
    [removeItemAsync.fulfilled]: (state, action) => {
      const itemIdToRemove = action.payload;
      // Filter out the item from the state
      return state.filter((item) => item.id !== itemIdToRemove);
    },
    // Handling removeItemAsync rejected action
    [removeItemAsync.rejected]: (state, action) => {
      // Handle error, show message to user, etc.
    },
  },
});

// Export the async action creator and reducers
// export { removeItemAsync };
export const { addItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
