import { createSlice } from '@reduxjs/toolkit'
import Cookies from "js-cookie";

const THEME_COOKIE_KEY = "theme";
const initialTheme = Cookies.get(THEME_COOKIE_KEY);

export const CounterSlice = createSlice({
  name: 'toggle',
  initialState: {
    value: !initialTheme || initialTheme === 'dark' ? true : false,
  },
  reducers: {
    toggleSwitch: (state) => {
      state.value = (!state.value)
    },
  },
})

export const { toggleSwitch } = CounterSlice.actions;

export default CounterSlice.reducer;