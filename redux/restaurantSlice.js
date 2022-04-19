import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";

export const fetchRestaurants = createAsyncThunk(
  "fetchRestaurants",
  async () => {
    const res = await axios.get(
      "https://immense-headland-80041.herokuapp.com/allRestaurant/"
    );
    const allRestaurants = res.data;

    return allRestaurants;
  }
);

const initialState = [];
export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchRestaurants.pending]: (state, action) => {
      console.log("loading............");
      // return initialState;
    },
    [fetchRestaurants.fulfilled]: (state, action) => {
      //   console.log(action);
      state = action.payload;
      console.log(state, "in fulfilled");
      return state;
      //   return initialState;
    },
    [fetchRestaurants.rejected]: (state, action) => {
      console.log("rejected");
      // return initialState;
    },
  },
});

export const {} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant;

export default restaurantSlice.reducer;
