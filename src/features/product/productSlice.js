import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const initialState = {
  loading: false,
  product: data,
  total: 0,
  amount: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProduct: (state) => {
      return {
        ...state,
        product: [],
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        product: state.product.filter((item) => item.id !== action.payload),
      };
    },
    increase: (state, action) => {
      const currentProduct = state.product.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, product: currentProduct };
    },
    decrease: (state, action) => {
      const currentProduct = state.product
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, product: currentProduct };
    },
    getTotal: (state) => {
      let { total, amount } = state.product.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };
    },
  },
});

export const { clearProduct, remove, increase, decrease, getTotal } =
  productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
