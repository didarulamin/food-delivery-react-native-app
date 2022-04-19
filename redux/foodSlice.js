import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";
let loading = true;
export const fetchFoods = createAsyncThunk("fetchFoods", async () => {
  const res = await axios.get(
    "https://immense-headland-80041.herokuapp.com/allFoods/"
  );
  const allFoods = res.data;
  console.log(allFoods);
  return allFoods;
});

const initialState = [];
export const foodSlice = createSlice({
  name: "food",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchFoods.pending]: (state, action) => {
      console.log("loading............");
      // state.loading = true;
      // return initialState;
    },
    [fetchFoods.fulfilled]: (state, action) => {
      //   console.log(action);
      state = action.payload;
      console.log(state, "in fulfilled");
      loading = false;
      state.loaded = loading;
      console.log(state.loaded, "loaded");
      return state;
      //   return initialState;
    },
    [fetchFoods.rejected]: (state, action) => {
      console.log("rejected");
      // return initialState;
    },
  },
});

export const {} = foodSlice.actions;
// export const loaded = () => loading;

export const selectLoaded = (state) => state.food.loaded;

export default foodSlice.reducer;
