import { createSlice } from "@reduxjs/toolkit";
import { getStateData } from "../../../utils";

const initialState = {
  base: "",
  rates: [],
  symbols: [],
  isSorted: false,
};

export const foregeinSlice = createSlice({
  name: "foregein",
  initialState,
  reducers: {
    setBase: (state, { payload }) => {
      if (payload) state.base = payload;
    },
    setRates: (state, { payload }) => {
      if (payload) state.rates = payload;
    },
    setSymbols: (state, { payload }) => {
      if (payload) state.symbols = payload;
    },
    sortBySymbol: (state, { payload = "UP" }) => {
      const type = payload.toUpperCase();
      if (type !== "UP" && type !== "DOWN") return;

      const { rates } = getStateData(state);

      const sortedRates = Object.fromEntries(
        Object.entries(rates).sort((a, b) => {
          if (a[0] > b[0]) return payload === "UP" ? 1 : -1;
          if (a[0] < b[0]) return payload === "UP" ? -1 : 1;
          return 0;
        })
      );

      state.isSorted = `bySymbol${type}`;
      state.rates = sortedRates;
    },
    sortByChange: (state, { payload = "UP" }) => {
      const type = payload.toUpperCase();
      if (type !== "UP" && type !== "DOWN") return;

      const { rates } = getStateData(state);

      const sortedRates = Object.fromEntries(
        Object.entries(rates).sort((a, b) => {
          if (a[1] > b[1]) return payload === "UP" ? 1 : -1;
          if (a[1] < b[1]) return payload === "UP" ? -1 : 1;
          return 0;
        })
      );

      state.isSorted = `byChange${type}`;
      state.rates = sortedRates;
    },
  },
});

export const { setBase, setRates, setSymbols, sortBySymbol, sortByChange } =
  foregeinSlice.actions;
