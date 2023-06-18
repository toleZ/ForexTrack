import axios from "axios";
import { setBase, setRates, setSymbols } from "./foregeinSlice";

const { VITE_FIXER_API_KEY } = import.meta.env;

const fixerApi = axios.create({
  baseURL: "http://data.fixer.io/api/",
});

export const chargeStore = () => {
  return async (dispatch) => {
    const {
      data: { rates, base },
    } = await fixerApi.get(`/latest?access_key=${VITE_FIXER_API_KEY}`);
    const {
      data: { symbols },
    } = await fixerApi.get(`/symbols?access_key=${VITE_FIXER_API_KEY}`);

    dispatch(setRates(rates));
    dispatch(setBase(base));
    dispatch(setSymbols(symbols));
  };
};

export const getBase = (base) => {
  return async (dispatch) => {
    const {
      data: { rates },
    } = await fixerApi.get(`/latest?access_key=${VITE_FIXER_API_KEY}`);

    base = base.toUpperCase();

    if (!rates[base]) return;

    const updatedRates = Object.entries(rates).map(([rate, change]) => [
      [rate],
      change / rates[base],
    ]);

    dispatch(setRates(Object.fromEntries(updatedRates)));
    dispatch(setBase(base));
  };
};
