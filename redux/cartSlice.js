import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showMessage, hideMessage } from "react-native-flash-message";
const initialState = [];

export const saveUserOrders = createAsyncThunk(
  "saveUserOrders",
  async (initialOrder) => {
    console.log(initialOrder.cart.length);
    if (initialOrder.cart.length === 0) {
      showMessage({
        message: "Cart is empty",
        type: "danger",
      });
      return;
    } else {
      const res = await axios.post(
        "https://immense-headland-80041.herokuapp.com/orders/",
        {
          ...initialOrder,
        }
      );

      showMessage({
        message: "Order placed successfully",
        type: "success",
      });

      return res.data;
    }
  }
);

/* export const saveUserOrders = createAsyncThunk("fetchFood", async (init) => {
  const response = await axios.get(
    "https://immense-tundra-77464.herokuapp.com/allFoods/"
  );
  //   console.log(data, "in fetchFood");
  //   const data = await response.data;
  //   console.log(data, "in fetchFood22");
  return response.data;
});
 */
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload, "action.payload");
      const { payload } = action;

      const isItemInCart = state.find((item) => item.id === payload.id);

      if (isItemInCart) {
        showMessage({
          message: "Item already in cart",
          type: "warning",
        });
      } else {
        showMessage({
          message: "Added successfully",
          type: "info",
        });
        return [...state, payload];
      }
    },
    updateCartProduct: (state, action) => {
      const { payload } = action;
      const { cartProduct } = payload;
      return state.map((item) =>
        item.id === cartProduct.id ? { ...item, ...cartProduct } : item
      );
    },
    deleteFromCart: (state, action) => {
      const { payload } = action;
      showMessage({
        message: "Item removed from cart",
        type: "danger",
      });
      return state.filter((item) => item.id !== payload.id);
    },
    reset: () => initialState,
    placeOrder: (state, action) => {
      /* if (state.length === 0) {
        showMessage({
          message: "Cart is empty",
          type: "danger",
        });
        return;
      }

      showMessage({
        message: "Order placed successfully",
        type: "danger",
      }); */
      return initialState;
    },
  },
  extraReducers: {
    [saveUserOrders.pending]: (state, action) => {
      console.log("loading");
      // return initialState;
    },
    [saveUserOrders.fulfilled]: (state, action) => {
      console.log("fulfilled");
      // console.log(action.payload, "action.payload");
      /*   const acknowledge = action.payload?.acknowledge;
      if (acknowledge) {
        showMessage({
          message: "Order placed successfully",
          type: "success",
        });
      } */
      return initialState;
    },
    [saveUserOrders.rejected]: (state, action) => {
      console.log("rejected");
      // return initialState;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  reset,
  updateCartProduct,
  placeOrder,
} = cartSlice.actions;

export const selectDiscount = 20;
export const selectDeliveryCharge = 20;
export const selectCartLength = (state) => state.cart.length;
export const selectCart = (state) => state.cart;
export const selectTotalAmount = (state) =>
  state.cart.reduce((acc, item) => acc + item.quantityPrice, 0);

export const selectTotal = selectDiscount - selectDeliveryCharge;

export default cartSlice.reducer;
